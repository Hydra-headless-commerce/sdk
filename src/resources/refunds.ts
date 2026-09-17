import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Refund = components['schemas']['Refund'];
type ListParams = NonNullable<operations['listRefunds']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createOrderRefund']['requestBody']
>['content']['application/json'];

export class RefundsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Refund>> {
		return this.client.request('GET', '/v1/refunds', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Refund, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Refund[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: { expand?: string; fields?: string },
	): Promise<DataResponse<Refund>> {
		return this.client.request('GET', `/v1/refunds/${id}`, { params });
	}

	async create(
		orderId: string,
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Refund>> {
		return this.client.request('POST', `/v1/orders/${orderId}/refunds`, { body, ...options });
	}

	async listByOrder(orderId: string): Promise<DataResponse<Refund[]>> {
		return this.client.request('GET', `/v1/orders/${orderId}/refunds`);
	}

	async retry(id: string): Promise<DataResponse<Refund>> {
		return this.client.request('POST', `/v1/refunds/${id}/retry`);
	}

	/**
	 * Returns the API path for downloading the credit note PDF for a refund.
	 * The first request to this endpoint assigns a permanent credit note number.
	 */
	creditNoteUrl(id: string): string {
		return `/v1/refunds/${id}/credit-note`;
	}
}
