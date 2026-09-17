/**
 * Typed error classes matching the Hydra API error shape.
 *
 * API errors return: `{ error: { code, message, field?, details? } }`
 * All subclasses extend HydraError, so existing `instanceof HydraError`
 * checks continue to work.
 */

export interface HydraErrorBody {
	error: {
		code: string;
		message: string;
		field?: string;
		details?: Record<string, unknown>;
	};
}

export class HydraError extends Error {
	readonly code: string;
	readonly status: number;
	readonly field?: string;
	readonly details?: Record<string, unknown>;
	readonly retryAfter?: number;
	/** Raw response body when the API returns non-JSON (e.g. CDN 502 HTML page) */
	readonly rawBody?: string;

	constructor(body: HydraErrorBody, status: number, headers: Headers, rawBody?: string) {
		super(body.error.message);
		this.name = 'HydraError';
		this.code = body.error.code;
		this.status = status;
		this.field = body.error.field;
		this.details = body.error.details;
		this.rawBody = rawBody;

		const retry = headers.get('Retry-After');
		if (retry) this.retryAfter = parseInt(retry, 10);
	}

	get isRetryable(): boolean {
		return this.status === 429 || this.status >= 500;
	}

	get isNotFound(): boolean {
		return this.status === 404;
	}

	get isValidationError(): boolean {
		return this.code === 'validation_error';
	}
}

/** Network failures, timeouts, TLS errors — no HTTP response received */
export class HydraConnectionError extends HydraError {
	constructor(message: string) {
		super({ error: { code: 'connection_error', message } }, 0, new Headers());
		this.name = 'HydraConnectionError';
	}
}

/** 401 Unauthorized — wrong or missing API key */
export class HydraAuthenticationError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 401, headers);
		this.name = 'HydraAuthenticationError';
	}
}

/** 403 Forbidden — valid key but insufficient permissions */
export class HydraPermissionError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 403, headers);
		this.name = 'HydraPermissionError';
	}
}

/** 404 Not Found — resource does not exist */
export class HydraNotFoundError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 404, headers);
		this.name = 'HydraNotFoundError';
	}
}

/** 429 Too Many Requests — rate limited, check retryAfter */
export class HydraRateLimitError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 429, headers);
		this.name = 'HydraRateLimitError';
	}
}

/** 400 + code: 'validation_error' — invalid request body or params */
export class HydraValidationError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 400, headers);
		this.name = 'HydraValidationError';
	}
}

/** 409 Conflict — idempotency key reuse with different params */
export class HydraIdempotencyError extends HydraError {
	constructor(body: HydraErrorBody, headers: Headers) {
		super(body, 409, headers);
		this.name = 'HydraIdempotencyError';
	}
}
