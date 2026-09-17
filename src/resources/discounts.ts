import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Discount = components['schemas']['Discount'];
type ListParams = NonNullable<operations['listDiscounts']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createDiscount']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateDiscount']['requestBody']
>['content']['application/json'];

export class DiscountsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Discount>> {
		return this.client.request('GET', '/v1/discounts', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Discount, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Discount[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<Discount>> {
		return this.client.request('GET', `/v1/discounts/${id}`);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Discount>> {
		return this.client.request('POST', '/v1/discounts', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Discount>> {
		return this.client.request('PATCH', `/v1/discounts/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/discounts/${id}`);
	}
}
