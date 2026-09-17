import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type FilterAttribute = components['schemas']['FilterAttribute'];
type ListParams = NonNullable<operations['listFilterAttributes']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createFilterAttribute']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateFilterAttribute']['requestBody']
>['content']['application/json'];
type ReorderBody = NonNullable<
	operations['reorderFilterAttributes']['requestBody']
>['content']['application/json'];

export class FilterAttributesResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<FilterAttribute>> {
		return this.client.request('GET', '/v1/filter-attributes', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<FilterAttribute, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<FilterAttribute[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<FilterAttribute>> {
		return this.client.request('GET', `/v1/filter-attributes/${id}`);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<FilterAttribute>> {
		return this.client.request('POST', '/v1/filter-attributes', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<FilterAttribute>> {
		return this.client.request('PATCH', `/v1/filter-attributes/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/filter-attributes/${id}`);
	}

	async reorder(body: ReorderBody): Promise<ListResponse<FilterAttribute>> {
		return this.client.request('PUT', '/v1/filter-attributes/reorder', { body });
	}

	async discover(): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', '/v1/filter-attributes/discover');
	}
}
