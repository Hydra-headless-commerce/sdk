import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type PurchaseOrder = components['schemas']['PurchaseOrder'];
type ListParams = NonNullable<operations['listPurchaseOrders']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createPurchaseOrder']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updatePurchaseOrder']['requestBody']
>['content']['application/json'];
type AddItemBody = NonNullable<
	operations['addPurchaseOrderItems']['requestBody']
>['content']['application/json'];
type UpdateItemBody = NonNullable<
	operations['updatePurchaseOrderItem']['requestBody']
>['content']['application/json'];
type ReceiveBody = NonNullable<
	operations['receivePurchaseOrderItems']['requestBody']
>['content']['application/json'];

export class PurchaseOrdersResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<PurchaseOrder>> {
		return this.client.request('GET', '/v1/purchase-orders', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<PurchaseOrder, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<PurchaseOrder[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: Pick<ListParams, 'expand' | 'fields'>,
	): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('GET', `/v1/purchase-orders/${id}`, { params });
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('POST', '/v1/purchase-orders', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('PATCH', `/v1/purchase-orders/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/purchase-orders/${id}`);
	}

	// Item management
	async addItem(purchaseOrderId: string, body: AddItemBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/purchase-orders/${purchaseOrderId}/items`, { body });
	}

	async updateItem(
		purchaseOrderId: string,
		itemId: string,
		body: UpdateItemBody,
	): Promise<DataResponse<unknown>> {
		return this.client.request('PATCH', `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}`, {
			body,
		});
	}

	async removeItem(purchaseOrderId: string, itemId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}`);
	}

	// Actions
	async markOrdered(id: string): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('POST', `/v1/purchase-orders/${id}/order`);
	}

	async receive(id: string, body: ReceiveBody): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('POST', `/v1/purchase-orders/${id}/receive`, { body });
	}

	async cancel(id: string): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('POST', `/v1/purchase-orders/${id}/cancel`);
	}

	async close(id: string): Promise<DataResponse<PurchaseOrder>> {
		return this.client.request('POST', `/v1/purchase-orders/${id}/close`);
	}

	// Metafield sub-resources (on items)
	async setItemMetafield(
		purchaseOrderId: string,
		itemId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request(
			'PUT',
			`/v1/purchase-orders/${purchaseOrderId}/items/${itemId}/metafields/${slug}`,
			{ body },
		);
	}

	async clearItemMetafield(purchaseOrderId: string, itemId: string, slug: string): Promise<void> {
		return this.client.request(
			'DELETE',
			`/v1/purchase-orders/${purchaseOrderId}/items/${itemId}/metafields/${slug}`,
		);
	}
}
