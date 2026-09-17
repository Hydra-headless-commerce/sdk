import {
	HydraError,
	HydraConnectionError,
	HydraAuthenticationError,
	HydraPermissionError,
	HydraNotFoundError,
	HydraRateLimitError,
	HydraValidationError,
	HydraIdempotencyError,
} from './errors';
import type { HydraErrorBody } from './errors';
import { ProductsResource } from './resources/products';
import { VariantsResource } from './resources/variants';
import { CollectionsResource } from './resources/collections';
import { CartResource } from './resources/cart';
import { CheckoutResource } from './resources/checkout';
import { OrdersResource } from './resources/orders';
import { FulfillmentsResource } from './resources/fulfillments';
import { RefundsResource } from './resources/refunds';
import { ReturnsResource } from './resources/returns';
import { DraftOrdersResource } from './resources/draft-orders';
import { CustomersResource } from './resources/customers';
import { CustomerGroupsResource } from './resources/customer-groups';
import { AddressesResource } from './resources/addresses';
import { InventoryResource } from './resources/inventory';
import { ShippingResource } from './resources/shipping';
import { PromotionsResource } from './resources/promotions';
import { DiscountsResource } from './resources/discounts';
import { ImagesResource } from './resources/images';
import { WebhooksResource } from './resources/webhooks';
import { StoreResource } from './resources/store';
import { TagsResource } from './resources/tags';
import { RedirectsResource } from './resources/redirects';
import { CompaniesResource } from './resources/companies';
import { PurchaseOrdersResource } from './resources/purchase-orders';
import { FulfillmentOrdersResource } from './resources/fulfillment-orders';
import { MetafieldsResource } from './resources/metafields';
import { TaxResource } from './resources/tax';
import { ExchangeRatesResource } from './resources/exchange-rates';
import { FilterAttributesResource } from './resources/filter-attributes';
import { NavigationResource } from './resources/navigation';
import { NotificationsResource } from './resources/notifications';
import { CheckoutsResource } from './resources/checkouts';
import { AnalyticsResource } from './resources/analytics';
import { StoreCreditResource } from './resources/store-credit';
import { SearchResource } from './resources/search';
import { LocationsResource } from './resources/locations';
import { IntegrationsResource } from './resources/integrations';

const SDK_VERSION = '0.1.0';

export interface AppInfo {
	/** Integration/plugin name (e.g. "MyShopTheme") */
	name: string;
	/** Integration version (e.g. "2.0.0") */
	version?: string;
	/** Integration URL (e.g. "https://mytheme.com") */
	url?: string;
}

export interface HydraConfig {
	/** API key (sk_live_*, sk_test_*, pk_live_*, pk_test_*) */
	apiKey: string;
	/** API base URL. Default: https://api.hydrajs.dev */
	baseUrl?: string;
	/** Request timeout in ms. Default: 80_000 (80 seconds) */
	timeout?: number;
	/** Max automatic retries on network/server errors. Default: 1 */
	maxNetworkRetries?: number;
	/** Integration identification sent in User-Agent */
	appInfo?: AppInfo;
}

export interface RequestOptions {
	params?: Record<string, unknown>;
	body?: unknown;
	headers?: Record<string, string>;
	signal?: AbortSignal;
	idempotencyKey?: string;
	/** Override client-level timeout for this request (ms) */
	timeout?: number;
	/** Override client-level maxNetworkRetries for this request */
	maxNetworkRetries?: number;
}

/** Options available on resource-level methods (create, update, etc.) */
export type ResourceRequestOptions = Pick<
	RequestOptions,
	'idempotencyKey' | 'timeout' | 'maxNetworkRetries'
>;

// ── Retry constants ──

const INITIAL_RETRY_DELAY = 0.5; // seconds
const MAX_RETRY_DELAY = 5; // seconds
const MAX_RETRY_AFTER = 60; // seconds — cap Retry-After header

const VALID_CONFIG_KEYS = new Set<string>([
	'apiKey',
	'baseUrl',
	'timeout',
	'maxNetworkRetries',
	'appInfo',
]);

function getRetryDelay(attempt: number, retryAfter?: number): number {
	// Exponential: 0.5s, 1s, 2s, 4s (capped at 5s)
	let delay = Math.min(INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1), MAX_RETRY_DELAY);

	// Jitter: randomize to 50-100% of calculated delay to prevent thundering herd
	delay *= 0.5 * (1 + Math.random());

	// Enforce minimum
	delay = Math.max(INITIAL_RETRY_DELAY, delay);

	// Respect Retry-After header if present and reasonable (capped at 60s)
	if (retryAfter !== undefined && retryAfter <= MAX_RETRY_AFTER) {
		delay = Math.max(delay, retryAfter);
	}

	return delay * 1000; // convert to ms
}

function sleep(ms: number): Promise<void> {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

export class Hydra {
	readonly apiKey: string;
	readonly baseUrl: string;
	readonly timeout: number;
	readonly maxNetworkRetries: number;
	readonly appInfo?: AppInfo;

	// P1: Storefront essentials
	readonly products = new ProductsResource(this);
	readonly variants = new VariantsResource(this);
	readonly collections = new CollectionsResource(this);
	readonly cart = new CartResource(this);
	readonly checkout = new CheckoutResource(this);
	readonly checkouts = new CheckoutsResource(this);
	readonly search = new SearchResource(this);

	// P2: Order management
	readonly orders = new OrdersResource(this);
	readonly fulfillments = new FulfillmentsResource(this);
	readonly refunds = new RefundsResource(this);
	readonly returns = new ReturnsResource(this);
	readonly draftOrders = new DraftOrdersResource(this);

	// P3: Customers
	readonly customers = new CustomersResource(this);
	readonly customerGroups = new CustomerGroupsResource(this);
	readonly addresses = new AddressesResource(this);
	readonly storeCredit = new StoreCreditResource(this);

	// P4: Commerce operations
	readonly inventory = new InventoryResource(this);
	readonly shipping = new ShippingResource(this);
	readonly promotions = new PromotionsResource(this);
	readonly discounts = new DiscountsResource(this);

	// P5: Media & integrations
	readonly images = new ImagesResource(this);
	readonly webhooks = new WebhooksResource(this);
	readonly store = new StoreResource(this);
	readonly tags = new TagsResource(this);
	readonly redirects = new RedirectsResource(this);

	// P6: Advanced
	readonly locations = new LocationsResource(this);
	readonly companies = new CompaniesResource(this);
	readonly purchaseOrders = new PurchaseOrdersResource(this);
	readonly fulfillmentOrders = new FulfillmentOrdersResource(this);
	readonly metafields = new MetafieldsResource(this);
	readonly tax = new TaxResource(this);
	readonly exchangeRates = new ExchangeRatesResource(this);
	readonly filterAttributes = new FilterAttributesResource(this);
	readonly navigation = new NavigationResource(this);
	readonly notifications = new NotificationsResource(this);
	readonly analytics = new AnalyticsResource(this);
	readonly integrations = new IntegrationsResource(this);

	constructor(config: HydraConfig) {
		for (const key of Object.keys(config)) {
			if (!VALID_CONFIG_KEYS.has(key)) {
				throw new Error(
					`Hydra: unknown config option "${key}". Valid options: ${[...VALID_CONFIG_KEYS].join(', ')}`,
				);
			}
		}

		if (!config.apiKey) {
			throw new Error('Hydra: apiKey is required');
		}

		this.apiKey = config.apiKey;
		this.baseUrl = config.baseUrl ?? 'https://api.hydrajs.dev';
		this.timeout = config.timeout ?? 80_000;
		this.maxNetworkRetries = config.maxNetworkRetries ?? 1;
		this.appInfo = config.appInfo;
	}

	async request<T>(method: string, path: string, options?: RequestOptions): Promise<T> {
		const maxRetries = options?.maxNetworkRetries ?? this.maxNetworkRetries;

		// Auto-generate idempotency key for POST retries to prevent duplicate creates
		let idempotencyKey = options?.idempotencyKey;
		if (method === 'POST' && !idempotencyKey && maxRetries > 0) {
			idempotencyKey = `hydra-retry-${crypto.randomUUID()}`;
		}

		let lastError: Error | undefined;

		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			try {
				const res = await this.executeRequest(method, path, {
					...options,
					idempotencyKey,
				});

				if (res.ok) {
					if (res.status === 204) return undefined as T;
					return res.json() as Promise<T>;
				}

				const error = await this.buildError(res);

				if (!this.shouldRetry(error, attempt, maxRetries)) {
					throw error;
				}

				lastError = error;
				const retryAfter = error.retryAfter;
				await sleep(getRetryDelay(attempt + 1, retryAfter));
			} catch (e) {
				// HydraError subclasses — already decided not to retry above
				if (e instanceof HydraError) throw e;

				// Network errors (TypeError from fetch), timeout errors (AbortError)
				if (attempt >= maxRetries) {
					const message = e instanceof Error ? e.message : 'Connection failed';
					throw new HydraConnectionError(message.includes('abort') ? 'Request timed out' : message);
				}

				lastError = e instanceof Error ? e : new Error(String(e));
				await sleep(getRetryDelay(attempt + 1));
			}
		}

		throw lastError;
	}

	/** Multipart upload for file-based endpoints (e.g. images) */
	async upload<T>(
		path: string,
		formData: FormData,
		options?: Pick<RequestOptions, 'signal' | 'timeout' | 'maxNetworkRetries'>,
	): Promise<T> {
		const maxRetries = options?.maxNetworkRetries ?? this.maxNetworkRetries;
		let lastError: Error | undefined;

		for (let attempt = 0; attempt <= maxRetries; attempt++) {
			try {
				const res = await this.executeUpload(path, formData, options);

				if (res.ok) {
					return res.json() as Promise<T>;
				}

				const error = await this.buildError(res);

				if (!this.shouldRetry(error, attempt, maxRetries)) {
					throw error;
				}

				lastError = error;
				const retryAfter = error.retryAfter;
				await sleep(getRetryDelay(attempt + 1, retryAfter));
			} catch (e) {
				if (e instanceof HydraError) throw e;

				if (attempt >= maxRetries) {
					const message = e instanceof Error ? e.message : 'Connection failed';
					throw new HydraConnectionError(message.includes('abort') ? 'Request timed out' : message);
				}

				lastError = e instanceof Error ? e : new Error(String(e));
				await sleep(getRetryDelay(attempt + 1));
			}
		}

		throw lastError;
	}

	// ── Private helpers ──

	private executeRequest(
		method: string,
		path: string,
		options?: RequestOptions,
	): Promise<Response> {
		const url = new URL(path, this.baseUrl);

		if (options?.params) {
			for (const [key, value] of Object.entries(options.params)) {
				if (value === undefined || value === null) continue;
				if (Array.isArray(value)) {
					url.searchParams.set(key, value.join(','));
				} else {
					url.searchParams.set(key, String(value));
				}
			}
		}

		const headers: Record<string, string> = {
			Authorization: `Bearer ${this.apiKey}`,
			'User-Agent': this.getUserAgent(),
			...options?.headers,
		};

		if (options?.body) {
			headers['Content-Type'] = 'application/json';
		}

		if (options?.idempotencyKey) {
			headers['Idempotency-Key'] = options.idempotencyKey;
		}

		const { signal, cleanup } = this.buildSignal(options);

		return fetch(url.toString(), {
			method,
			headers,
			body: options?.body ? JSON.stringify(options.body) : undefined,
			signal,
		}).finally(cleanup);
	}

	private executeUpload(
		path: string,
		formData: FormData,
		options?: Pick<RequestOptions, 'signal' | 'timeout' | 'maxNetworkRetries'>,
	): Promise<Response> {
		const url = new URL(path, this.baseUrl);

		const { signal, cleanup } = this.buildSignal(options);

		return fetch(url.toString(), {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${this.apiKey}`,
				'User-Agent': this.getUserAgent(),
				// No Content-Type — let the runtime set the multipart boundary
			},
			body: formData,
			signal,
		}).finally(cleanup);
	}

	/**
	 * Build an AbortSignal that fires on timeout OR user-supplied signal,
	 * whichever comes first.
	 */
	private buildSignal(options?: Pick<RequestOptions, 'signal' | 'timeout'>): {
		signal: AbortSignal;
		cleanup: () => void;
	} {
		const timeout = options?.timeout ?? this.timeout;
		const controller = new AbortController();
		let timeoutId: ReturnType<typeof setTimeout> | undefined;

		if (timeout > 0) {
			timeoutId = setTimeout(() => controller.abort(), timeout);
		}

		if (options?.signal) {
			if (options.signal.aborted) {
				controller.abort(options.signal.reason);
			} else {
				options.signal.addEventListener('abort', () => controller.abort(options.signal!.reason), {
					once: true,
				});
			}
		}

		return {
			signal: controller.signal,
			cleanup: () => {
				if (timeoutId) clearTimeout(timeoutId);
			},
		};
	}

	/**
	 * Parse an error response into a typed HydraError subclass.
	 * Non-JSON bodies (CDN 502, proxy HTML) surface the raw text for debuggability.
	 */
	private async buildError(res: Response): Promise<HydraError> {
		let body: HydraErrorBody;
		try {
			body = (await res.json()) as HydraErrorBody;
		} catch {
			const text = await res.text().catch(() => '');
			return new HydraConnectionError(
				`Non-JSON error response (HTTP ${res.status}): ${text.slice(0, 200)}`,
			);
		}

		switch (res.status) {
			case 401:
				return new HydraAuthenticationError(body, res.headers);
			case 403:
				return new HydraPermissionError(body, res.headers);
			case 404:
				return new HydraNotFoundError(body, res.headers);
			case 409:
				return new HydraIdempotencyError(body, res.headers);
			case 429:
				return new HydraRateLimitError(body, res.headers);
			default:
				if (res.status === 400 && body.error.code === 'validation_error') {
					return new HydraValidationError(body, res.headers);
				}
				return new HydraError(body, res.status, res.headers);
		}
	}

	/**
	 * Determine whether a failed request should be retried.
	 * Client errors (400, 401, 403, 404) are never retried — they won't change.
	 */
	private shouldRetry(error: HydraError, attempt: number, maxRetries: number): boolean {
		if (attempt >= maxRetries) return false;
		return (
			error.status === 408 || error.status === 409 || error.status === 429 || error.status >= 500
		);
	}

	private getUserAgent(): string {
		let ua = `hydra-sdk/${SDK_VERSION}`;
		if (this.appInfo) {
			ua += ` ${this.appInfo.name}`;
			if (this.appInfo.version) ua += `/${this.appInfo.version}`;
			if (this.appInfo.url) ua += ` (${this.appInfo.url})`;
		}
		return ua;
	}
}
