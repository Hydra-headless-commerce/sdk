import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
	Hydra,
	type HydraConfig,
	HydraError,
	HydraConnectionError,
	HydraAuthenticationError,
	HydraPermissionError,
	HydraNotFoundError,
	HydraRateLimitError,
	HydraValidationError,
	HydraIdempotencyError,
} from './index';

// ── Helpers ──

function jsonResponse(status: number, body: unknown, headers?: Record<string, string>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { 'Content-Type': 'application/json', ...headers },
	});
}

function errorBody(code: string, message: string, field?: string) {
	return { error: { code, message, field } };
}

const API_KEY = 'sk_test_abc123';
const BASE = 'https://test.hydrajs.dev';

function createClient(overrides?: Partial<HydraConfig>) {
	return new Hydra({ apiKey: API_KEY, baseUrl: BASE, maxNetworkRetries: 0, ...overrides });
}

// ── Tests ──

describe('Config Validation (4h)', () => {
	it('rejects unknown config keys with helpful error', () => {
		expect(() => new Hydra({ apiKey: 'sk_test_x', apikey: 'typo' } as never)).toThrow(
			'Hydra: unknown config option "apikey"',
		);
	});

	it('rejects missing apiKey', () => {
		expect(() => new Hydra({ apiKey: '' })).toThrow('Hydra: apiKey is required');
	});

	it('applies defaults', () => {
		const h = new Hydra({ apiKey: 'sk_test_x' });
		expect(h.baseUrl).toBe('https://api.hydrajs.dev');
		expect(h.timeout).toBe(80_000);
		expect(h.maxNetworkRetries).toBe(1);
		expect(h.appInfo).toBeUndefined();
	});

	it('accepts all valid config keys', () => {
		const h = new Hydra({
			apiKey: 'sk_live_xyz',
			baseUrl: 'https://custom.api',
			timeout: 5000,
			maxNetworkRetries: 3,
			appInfo: { name: 'TestApp', version: '1.0', url: 'https://test.com' },
		});
		expect(h.apiKey).toBe('sk_live_xyz');
		expect(h.baseUrl).toBe('https://custom.api');
		expect(h.timeout).toBe(5000);
		expect(h.maxNetworkRetries).toBe(3);
		expect(h.appInfo).toEqual({ name: 'TestApp', version: '1.0', url: 'https://test.com' });
	});
});

describe('User-Agent / appInfo (4h)', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('sends default User-Agent', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products');

		const call = vi.mocked(fetch).mock.calls[0]!;
		const headers = call[1]?.headers as Record<string, string>;
		expect(headers['User-Agent']).toBe('hydra-sdk/0.1.0');
	});

	it('includes appInfo in User-Agent', async () => {
		const h = createClient({
			appInfo: { name: 'MyTheme', version: '2.5.0', url: 'https://mytheme.dev' },
		});
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products');

		const call = vi.mocked(fetch).mock.calls[0]!;
		const headers = call[1]?.headers as Record<string, string>;
		expect(headers['User-Agent']).toBe('hydra-sdk/0.1.0 MyTheme/2.5.0 (https://mytheme.dev)');
	});

	it('handles appInfo without version or url', async () => {
		const h = createClient({ appInfo: { name: 'SimpleApp' } });
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products');

		const call = vi.mocked(fetch).mock.calls[0]!;
		const headers = call[1]?.headers as Record<string, string>;
		expect(headers['User-Agent']).toBe('hydra-sdk/0.1.0 SimpleApp');
	});
});

describe('Error Subclasses (4g)', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('throws HydraAuthenticationError on 401', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(401, errorBody('unauthorized', 'Invalid API key')),
		);

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraAuthenticationError);
		expect(err).toBeInstanceOf(HydraError);
		expect(err.status).toBe(401);
		expect(err.code).toBe('unauthorized');
	});

	it('throws HydraPermissionError on 403', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(403, errorBody('forbidden', 'Publishable keys cannot access this')),
		);

		const err = (await h.request('GET', '/v1/orders').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraPermissionError);
		expect(err.status).toBe(403);
	});

	it('throws HydraNotFoundError on 404', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(404, errorBody('not_found', 'Product not found')),
		);

		const err = (await h.request('GET', '/v1/products/prod_nope').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraNotFoundError);
		expect(err.isNotFound).toBe(true);
	});

	it('throws HydraIdempotencyError on 409', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(409, errorBody('conflict', 'Idempotency key already used')),
		);

		const err = (await h
			.request('POST', '/v1/orders', {
				body: {},
				idempotencyKey: 'my-key',
			})
			.catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraIdempotencyError);
		expect(err.status).toBe(409);
	});

	it('throws HydraRateLimitError on 429 with retryAfter', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(429, errorBody('rate_limited', 'Too fast'), { 'Retry-After': '30' }),
		);

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraRateLimitError);
		expect(err.retryAfter).toBe(30);
		expect(err.isRetryable).toBe(true);
	});

	it('throws HydraValidationError on 400 validation_error', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(400, errorBody('validation_error', 'Title is required', 'title')),
		);

		const err = (await h
			.request('POST', '/v1/products', { body: {} })
			.catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraValidationError);
		expect(err.isValidationError).toBe(true);
		expect(err.field).toBe('title');
	});

	it('throws plain HydraError on 400 non-validation', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(400, errorBody('invalid_request', 'Bad param')),
		);

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraError);
		expect(err).not.toBeInstanceOf(HydraValidationError);
		expect(err.code).toBe('invalid_request');
	});

	it('throws HydraConnectionError on non-JSON error response', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(
			new Response('<html>502 Bad Gateway</html>', { status: 502 }),
		);

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraConnectionError);
		expect(err.message).toContain('Non-JSON error response (HTTP 502)');
	});

	it('all subclasses pass instanceof HydraError', () => {
		const body = errorBody('test', 'test');
		const headers = new Headers();

		const instances = [
			new HydraConnectionError('fail'),
			new HydraAuthenticationError(body, headers),
			new HydraPermissionError(body, headers),
			new HydraNotFoundError(body, headers),
			new HydraRateLimitError(body, headers),
			new HydraValidationError(body, headers),
			new HydraIdempotencyError(body, headers),
		];

		for (const e of instances) {
			expect(e).toBeInstanceOf(HydraError);
			expect(e).toBeInstanceOf(Error);
		}
	});
});

describe('Timeout (4e)', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('aborts after client-level timeout', async () => {
		const h = createClient({ timeout: 100 });
		vi.mocked(fetch).mockImplementation((_url, init) => {
			return new Promise((_resolve, reject) => {
				const signal = init?.signal as AbortSignal | undefined;
				signal?.addEventListener(
					'abort',
					() => {
						reject(new DOMException('The operation was aborted.', 'AbortError'));
					},
					{ once: true },
				);
			});
		});

		const promise = h.request('GET', '/v1/products').catch((e) => e);
		await vi.advanceTimersByTimeAsync(150);

		const err = (await promise) as HydraError;
		expect(err).toBeInstanceOf(HydraConnectionError);
		expect(err.message).toBe('Request timed out');
	});

	it('respects per-request timeout override', async () => {
		const h = createClient({ timeout: 60_000 });
		vi.mocked(fetch).mockImplementation((_url, init) => {
			return new Promise((_resolve, reject) => {
				const signal = init?.signal as AbortSignal | undefined;
				signal?.addEventListener(
					'abort',
					() => {
						reject(new DOMException('The operation was aborted.', 'AbortError'));
					},
					{ once: true },
				);
			});
		});

		const promise = h.request('GET', '/v1/products', { timeout: 50 }).catch((e) => e);
		await vi.advanceTimersByTimeAsync(100);

		const err = (await promise) as HydraError;
		expect(err).toBeInstanceOf(HydraConnectionError);
		expect(err.message).toBe('Request timed out');
	});

	it('clears timeout on successful response', async () => {
		const h = createClient({ timeout: 5000 });
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: { id: '1' } }));

		const result = await h.request('GET', '/v1/products/1');
		expect(result).toEqual({ data: { id: '1' } });
		// No timeout error after advancing timers
		await vi.advanceTimersByTimeAsync(10_000);
	});

	it('aborts on user-supplied signal', async () => {
		const h = createClient({ timeout: 60_000 });
		const controller = new AbortController();
		vi.mocked(fetch).mockImplementation((_url, init) => {
			// Simulate fetch rejecting when aborted
			return new Promise((_resolve, reject) => {
				(init?.signal as AbortSignal)?.addEventListener('abort', () => {
					reject(new DOMException('The operation was aborted.', 'AbortError'));
				});
			});
		});

		const promise = h.request('GET', '/v1/products', { signal: controller.signal });
		controller.abort();

		const err = (await promise.catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraConnectionError);
	});
});

describe('Retry Logic (4d)', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('retries on 500 and succeeds on second attempt', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'Server error')))
			.mockResolvedValueOnce(jsonResponse(200, { data: { id: 'prod_1' } }));

		const promise = h.request('GET', '/v1/products/1');
		// Advance through the retry delay
		await vi.advanceTimersByTimeAsync(10_000);

		const result = await promise;
		expect(result).toEqual({ data: { id: 'prod_1' } });
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('retries on 429 and succeeds', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(
				jsonResponse(429, errorBody('rate_limited', 'Slow down'), { 'Retry-After': '1' }),
			)
			.mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		const promise = h.request('GET', '/v1/products');
		await vi.advanceTimersByTimeAsync(10_000);

		const result = await promise;
		expect(result).toEqual({ data: [] });
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('retries on network error (TypeError)', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockRejectedValueOnce(new TypeError('Failed to fetch'))
			.mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		const promise = h.request('GET', '/v1/products');
		await vi.advanceTimersByTimeAsync(10_000);

		const result = await promise;
		expect(result).toEqual({ data: [] });
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('does NOT retry on 400', async () => {
		const h = createClient({ maxNetworkRetries: 2 });

		vi.mocked(fetch).mockResolvedValueOnce(
			jsonResponse(400, errorBody('invalid_request', 'Bad request')),
		);

		const err = (await h
			.request('POST', '/v1/products', { body: {} })
			.catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraError);
		expect(fetch).toHaveBeenCalledTimes(1); // no retry
	});

	it('does NOT retry on 401', async () => {
		const h = createClient({ maxNetworkRetries: 2 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(401, errorBody('unauthorized', 'Bad key')));

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraAuthenticationError);
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it('does NOT retry on 403', async () => {
		const h = createClient({ maxNetworkRetries: 2 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(403, errorBody('forbidden', 'Nope')));

		const err = (await h.request('GET', '/v1/orders').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraPermissionError);
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it('does NOT retry on 404', async () => {
		const h = createClient({ maxNetworkRetries: 2 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(404, errorBody('not_found', 'Gone')));

		const err = (await h.request('GET', '/v1/products/nope').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraNotFoundError);
		expect(fetch).toHaveBeenCalledTimes(1);
	});

	it('exhausts retries and throws last error', async () => {
		const h = createClient({ maxNetworkRetries: 2 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail 1')))
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail 2')))
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail 3')));

		const promise = h.request('GET', '/v1/products').catch((e) => e);
		await vi.advanceTimersByTimeAsync(30_000);

		const err = (await promise) as HydraError;
		expect(err).toBeInstanceOf(HydraError);
		expect(err.message).toBe('fail 3');
		expect(fetch).toHaveBeenCalledTimes(3); // 1 initial + 2 retries
	});

	it('exhausts retries on network errors and throws HydraConnectionError', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockRejectedValueOnce(new TypeError('DNS resolution failed'))
			.mockRejectedValueOnce(new TypeError('DNS resolution failed'));

		const promise = h.request('GET', '/v1/products').catch((e) => e);
		await vi.advanceTimersByTimeAsync(10_000);

		const err = (await promise) as HydraError;
		expect(err).toBeInstanceOf(HydraConnectionError);
		expect(err.message).toBe('DNS resolution failed');
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('maxNetworkRetries: 0 disables retries', async () => {
		const h = createClient({ maxNetworkRetries: 0 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')));

		const err = (await h.request('GET', '/v1/products').catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraError);
		expect(fetch).toHaveBeenCalledTimes(1);
	});
});

describe('Auto-Idempotency on POST Retry', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('auto-generates idempotency key for POST when retries > 0', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')))
			.mockResolvedValueOnce(jsonResponse(201, { data: { id: 'prod_1' } }));

		const promise = h.request('POST', '/v1/products', { body: { title: 'Test' } });
		await vi.advanceTimersByTimeAsync(10_000);
		await promise;

		// Both calls should have the same auto-generated idempotency key
		const call1Headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		const call2Headers = vi.mocked(fetch).mock.calls[1]![1]?.headers as Record<string, string>;
		expect(call1Headers['Idempotency-Key']).toMatch(/^hydra-retry-/);
		expect(call1Headers['Idempotency-Key']).toBe(call2Headers['Idempotency-Key']);
	});

	it('does NOT auto-generate idempotency key for GET', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products');

		const headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		expect(headers['Idempotency-Key']).toBeUndefined();
	});

	it('preserves user-supplied idempotency key', async () => {
		const h = createClient({ maxNetworkRetries: 1 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')))
			.mockResolvedValueOnce(jsonResponse(201, { data: { id: 'ord_1' } }));

		const promise = h.request('POST', '/v1/orders', {
			body: {},
			idempotencyKey: 'user-key-123',
		});
		await vi.advanceTimersByTimeAsync(10_000);
		await promise;

		const call1Headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		const call2Headers = vi.mocked(fetch).mock.calls[1]![1]?.headers as Record<string, string>;
		expect(call1Headers['Idempotency-Key']).toBe('user-key-123');
		expect(call2Headers['Idempotency-Key']).toBe('user-key-123');
	});

	it('does NOT auto-generate key when maxNetworkRetries is 0', async () => {
		const h = createClient({ maxNetworkRetries: 0 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(201, { data: { id: 'prod_1' } }));

		await h.request('POST', '/v1/products', { body: { title: 'Test' } });

		const headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		expect(headers['Idempotency-Key']).toBeUndefined();
	});
});

describe('Per-Request Overrides (4f)', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
		vi.useFakeTimers();
	});
	afterEach(() => {
		vi.restoreAllMocks();
		vi.useRealTimers();
	});

	it('per-request maxNetworkRetries overrides client default', async () => {
		// Client has 0 retries, but request says 1
		const h = createClient({ maxNetworkRetries: 0 });

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')))
			.mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		const promise = h.request('GET', '/v1/products', { maxNetworkRetries: 1 });
		await vi.advanceTimersByTimeAsync(10_000);

		const result = await promise;
		expect(result).toEqual({ data: [] });
		expect(fetch).toHaveBeenCalledTimes(2);
	});

	it('per-request maxNetworkRetries: 0 disables retries even when client has retries', async () => {
		const h = createClient({ maxNetworkRetries: 3 });

		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')));

		const err = (await h
			.request('GET', '/v1/products', { maxNetworkRetries: 0 })
			.catch((e) => e)) as HydraError;
		expect(err).toBeInstanceOf(HydraError);
		expect(fetch).toHaveBeenCalledTimes(1);
	});
});

describe('Request Basics', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('sends Authorization header', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products');

		const headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		expect(headers['Authorization']).toBe(`Bearer ${API_KEY}`);
	});

	it('sends Content-Type for requests with body', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(201, { data: { id: '1' } }));

		await h.request('POST', '/v1/products', { body: { title: 'Test' } });

		const headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		expect(headers['Content-Type']).toBe('application/json');
	});

	it('returns undefined for 204 responses', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(new Response(null, { status: 204 }));

		const result = await h.request('DELETE', '/v1/products/1');
		expect(result).toBeUndefined();
	});

	it('appends query params', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products', {
			params: { status: 'active', expand: ['variants', 'images'] },
		});

		const url = vi.mocked(fetch).mock.calls[0]![0] as string;
		expect(url).toContain('status=active');
		expect(url).toContain('expand=variants%2Cimages');
	});

	it('skips null and undefined params', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(200, { data: [] }));

		await h.request('GET', '/v1/products', {
			params: { status: undefined, type: null, limit: 10 },
		});

		const url = vi.mocked(fetch).mock.calls[0]![0] as string;
		expect(url).not.toContain('status');
		expect(url).not.toContain('type');
		expect(url).toContain('limit=10');
	});
});

describe('Resource Options Pass-Through', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('products.create passes idempotencyKey through', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(201, { data: { id: 'prod_1' } }));

		await h.products.create({ title: 'Test' } as never, { idempotencyKey: 'my-key' });

		const headers = vi.mocked(fetch).mock.calls[0]![1]?.headers as Record<string, string>;
		expect(headers['Idempotency-Key']).toBe('my-key');
	});

	it('orders.create passes timeout through', async () => {
		const h = createClient({ timeout: 60_000 });
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(201, { data: { id: 'ord_1' } }));

		// The timeout is passed to buildSignal, which sets up the AbortController.
		// We verify it doesn't throw and the request completes.
		const result = await h.orders.create({} as never, { timeout: 5000 });
		expect(result).toEqual({ data: { id: 'ord_1' } });
	});
});

describe('Upload', () => {
	beforeEach(() => {
		vi.stubGlobal('fetch', vi.fn());
	});
	afterEach(() => {
		vi.restoreAllMocks();
	});

	it('sends FormData without Content-Type header', async () => {
		const h = createClient();
		vi.mocked(fetch).mockResolvedValueOnce(jsonResponse(201, { data: { id: 'img_1' } }));

		const fd = new FormData();
		fd.append('file', new Blob(['test']), 'test.png');

		await h.upload('/v1/images', fd);

		const options = vi.mocked(fetch).mock.calls[0]![1];
		const headers = options?.headers as Record<string, string>;
		// No Content-Type — runtime sets the multipart boundary
		expect(headers['Content-Type']).toBeUndefined();
		expect(headers['Authorization']).toBe(`Bearer ${API_KEY}`);
		expect(options?.body).toBe(fd);
	});

	it('retries uploads on 500', async () => {
		const h = createClient({ maxNetworkRetries: 1 });
		vi.useFakeTimers();

		vi.mocked(fetch)
			.mockResolvedValueOnce(jsonResponse(500, errorBody('internal_error', 'fail')))
			.mockResolvedValueOnce(jsonResponse(201, { data: { id: 'img_1' } }));

		const fd = new FormData();
		const promise = h.upload('/v1/images', fd);
		await vi.advanceTimersByTimeAsync(10_000);

		const result = await promise;
		expect(result).toEqual({ data: { id: 'img_1' } });
		expect(fetch).toHaveBeenCalledTimes(2);

		vi.useRealTimers();
	});
});
