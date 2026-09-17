import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Tag = components['schemas']['Tag'];
type ListParams = NonNullable<operations['listTags']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createTag']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateTag']['requestBody']
>['content']['application/json'];

export class TagsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Tag>> {
		return this.client.request('GET', '/v1/tags', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Tag, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Tag[]> {
		return toArray(this.iterate(params, options), options);
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Tag>> {
		return this.client.request('POST', '/v1/tags', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Tag>> {
		return this.client.request('PATCH', `/v1/tags/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/tags/${id}`);
	}
}
