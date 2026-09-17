import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Promotion = components['schemas']['Promotion'];
type ListParams = NonNullable<operations['listPromotions']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createPromotion']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updatePromotion']['requestBody']
>['content']['application/json'];

export class PromotionsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Promotion>> {
		return this.client.request('GET', '/v1/promotions', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Promotion, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Promotion[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<Promotion>> {
		return this.client.request('GET', `/v1/promotions/${id}`);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Promotion>> {
		return this.client.request('POST', '/v1/promotions', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Promotion>> {
		return this.client.request('PATCH', `/v1/promotions/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/promotions/${id}`);
	}
}
