import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type CustomerGroup = components['schemas']['CustomerGroup'];
type ListParams = NonNullable<operations['listCustomerGroups']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createCustomerGroup']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateCustomerGroup']['requestBody']
>['content']['application/json'];
type AddMembersBody = NonNullable<
	operations['addCustomerGroupMembers']['requestBody']
>['content']['application/json'];

export class CustomerGroupsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<CustomerGroup>> {
		return this.client.request('GET', '/v1/customer-groups', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<CustomerGroup, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<CustomerGroup[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<CustomerGroup>> {
		return this.client.request('GET', `/v1/customer-groups/${id}`);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<CustomerGroup>> {
		return this.client.request('POST', '/v1/customer-groups', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<CustomerGroup>> {
		return this.client.request('PATCH', `/v1/customer-groups/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/customer-groups/${id}`);
	}

	async addMembers(groupId: string, body: AddMembersBody): Promise<void> {
		return this.client.request('POST', `/v1/customer-groups/${groupId}/members`, { body });
	}

	async removeMember(groupId: string, customerId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/customer-groups/${groupId}/members/${customerId}`);
	}
}
