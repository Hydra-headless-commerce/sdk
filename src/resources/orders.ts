import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Order = components['schemas']['Order'];
type FulfillmentOrder = components['schemas']['FulfillmentOrder'];
type ListParams = NonNullable<operations['listOrders']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createOrder']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateOrder']['requestBody']
>['content']['application/json'];

export class OrdersResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Order>> {
		return this.client.request('GET', '/v1/orders', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Order, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Order[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: { expand?: string; currency?: string; fields?: string },
	): Promise<DataResponse<Order>> {
		return this.client.request('GET', `/v1/orders/${id}`, { params });
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Order>> {
		return this.client.request('POST', '/v1/orders', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Order>> {
		return this.client.request('PATCH', `/v1/orders/${id}`, { body });
	}

	async listFulfillmentOrders(orderId: string): Promise<DataResponse<FulfillmentOrder[]>> {
		return this.client.request('GET', `/v1/orders/${orderId}/fulfillment-orders`);
	}

	/**
	 * Returns the API path for downloading the invoice PDF for an order.
	 * The first request to this endpoint assigns a permanent invoice number.
	 */
	invoiceUrl(orderId: string): string {
		return `/v1/orders/${orderId}/invoice`;
	}

	// Metafield sub-resources
	async setMetafield(
		orderId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request('PUT', `/v1/orders/${orderId}/metafields/${slug}`, { body });
	}

	async clearMetafield(orderId: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/orders/${orderId}/metafields/${slug}`);
	}
}
