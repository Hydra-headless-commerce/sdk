import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Return = components['schemas']['Return'];
type ListParams = NonNullable<operations['listReturns']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createOrderReturn']['requestBody']
>['content']['application/json'];
type ApproveBody = NonNullable<
	operations['approveReturn']['requestBody']
>['content']['application/json'];
type ReceiveBody = NonNullable<
	operations['receiveReturn']['requestBody']
>['content']['application/json'];
type RejectBody = NonNullable<
	operations['rejectReturn']['requestBody']
>['content']['application/json'];

export class ReturnsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Return>> {
		return this.client.request('GET', '/v1/returns', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Return, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Return[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: { expand?: string; fields?: string },
	): Promise<DataResponse<Return>> {
		return this.client.request('GET', `/v1/returns/${id}`, { params });
	}

	async create(
		orderId: string,
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/orders/${orderId}/returns`, { body, ...options });
	}

	async listByOrder(orderId: string): Promise<DataResponse<Return[]>> {
		return this.client.request('GET', `/v1/orders/${orderId}/returns`);
	}

	async approve(id: string, body?: ApproveBody): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/returns/${id}/approve`, { body });
	}

	async receive(id: string, body?: ReceiveBody): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/returns/${id}/receive`, { body });
	}

	async close(id: string): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/returns/${id}/close`);
	}

	async reject(id: string, body?: RejectBody): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/returns/${id}/reject`, { body });
	}

	async cancel(id: string): Promise<DataResponse<Return>> {
		return this.client.request('POST', `/v1/returns/${id}/cancel`);
	}
}
