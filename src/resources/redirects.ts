import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Redirect = components['schemas']['Redirect'];
type ListParams = NonNullable<operations['listRedirects']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createRedirect']['requestBody']
>['content']['application/json'];

export class RedirectsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Redirect>> {
		return this.client.request('GET', '/v1/redirects', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Redirect, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Redirect[]> {
		return toArray(this.iterate(params, options), options);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Redirect>> {
		return this.client.request('POST', '/v1/redirects', { body, ...options });
	}

	async lookup(path: string): Promise<DataResponse<Redirect>> {
		return this.client.request('GET', '/v1/redirects/lookup', { params: { path } });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/redirects/${id}`);
	}
}
