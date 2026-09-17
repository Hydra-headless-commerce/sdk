import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Location = components['schemas']['Location'];
type TransferResult = components['schemas']['TransferResult'];
type ListParams = NonNullable<operations['listLocations']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createLocation']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateLocation']['requestBody']
>['content']['application/json'];
type TransferBody = NonNullable<
	operations['transferLocationInventory']['requestBody']
>['content']['application/json'];

export class LocationsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Location>> {
		return this.client.request('GET', '/v1/locations', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Location, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Location[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<Location>> {
		return this.client.request('GET', `/v1/locations/${id}`);
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Location>> {
		return this.client.request('POST', '/v1/locations', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Location>> {
		return this.client.request('PATCH', `/v1/locations/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/locations/${id}`);
	}

	async setDefault(id: string): Promise<DataResponse<Location>> {
		return this.client.request('POST', `/v1/locations/${id}/default`);
	}

	async transfer(id: string, body: TransferBody): Promise<DataResponse<TransferResult>> {
		return this.client.request('POST', `/v1/locations/${id}/transfer`, { body });
	}
}
