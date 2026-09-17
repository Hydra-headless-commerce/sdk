import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type DraftOrder = components['schemas']['DraftOrder'];
type DraftOrderLineItem = components['schemas']['DraftOrderLineItem'];
type Order = components['schemas']['Order'];
type ListParams = NonNullable<operations['listDraftOrders']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createDraftOrder']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateDraftOrder']['requestBody']
>['content']['application/json'];
type AddItemsBody = NonNullable<
	operations['addDraftOrderItems']['requestBody']
>['content']['application/json'];
type UpdateItemBody = NonNullable<
	operations['updateDraftOrderItem']['requestBody']
>['content']['application/json'];

export class DraftOrdersResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<DraftOrder>> {
		return this.client.request('GET', '/v1/draft-orders', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<DraftOrder, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<DraftOrder[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: { expand?: string; currency?: string; fields?: string },
	): Promise<DataResponse<DraftOrder>> {
		return this.client.request('GET', `/v1/draft-orders/${id}`, { params });
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<DraftOrder>> {
		return this.client.request('POST', '/v1/draft-orders', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<DraftOrder>> {
		return this.client.request('PATCH', `/v1/draft-orders/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/draft-orders/${id}`);
	}

	async addItems(
		draftOrderId: string,
		body: AddItemsBody,
	): Promise<DataResponse<DraftOrderLineItem[]>> {
		return this.client.request('POST', `/v1/draft-orders/${draftOrderId}/items`, { body });
	}

	async updateItem(
		draftOrderId: string,
		itemId: string,
		body: UpdateItemBody,
	): Promise<DataResponse<DraftOrderLineItem>> {
		return this.client.request('PATCH', `/v1/draft-orders/${draftOrderId}/items/${itemId}`, {
			body,
		});
	}

	async removeItem(draftOrderId: string, itemId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/draft-orders/${draftOrderId}/items/${itemId}`);
	}

	async complete(id: string): Promise<DataResponse<Order>> {
		return this.client.request('POST', `/v1/draft-orders/${id}/complete`);
	}

	async send(
		id: string,
		body?: {
			subject?: string;
			message?: string;
			cc?: string[];
			bcc?: string[];
		},
	): Promise<DataResponse<DraftOrder>> {
		return this.client.request('POST', `/v1/draft-orders/${id}/send`, {
			body: body ?? undefined,
		});
	}
}
