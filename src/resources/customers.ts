import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Customer = components['schemas']['Customer'];
type ListParams = NonNullable<operations['listCustomers']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createCustomer']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateCustomer']['requestBody']
>['content']['application/json'];
type CreateAddressBody = NonNullable<
	operations['createCustomerAddress']['requestBody']
>['content']['application/json'];
type CreateNoteBody = NonNullable<
	operations['createCustomerNote']['requestBody']
>['content']['application/json'];

export class CustomersResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Customer>> {
		return this.client.request('GET', '/v1/customers', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Customer, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Customer[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: Pick<ListParams, 'expand' | 'fields'>,
	): Promise<DataResponse<Customer>> {
		return this.client.request('GET', `/v1/customers/${id}`, { params });
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Customer>> {
		return this.client.request('POST', '/v1/customers', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Customer>> {
		return this.client.request('PATCH', `/v1/customers/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/customers/${id}`);
	}

	// Address sub-resources
	async listAddresses(customerId: string): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', `/v1/customers/${customerId}/addresses`);
	}

	async createAddress(customerId: string, body: CreateAddressBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/customers/${customerId}/addresses`, { body });
	}

	// Note sub-resources
	async listNotes(customerId: string): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', `/v1/customers/${customerId}/notes`);
	}

	async createNote(customerId: string, body: CreateNoteBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/customers/${customerId}/notes`, { body });
	}

	async deleteNote(customerId: string, noteId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/customers/${customerId}/notes/${noteId}`);
	}

	// Metafield sub-resources
	async setMetafield(
		customerId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request('PUT', `/v1/customers/${customerId}/metafields/${slug}`, { body });
	}

	async clearMetafield(customerId: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/customers/${customerId}/metafields/${slug}`);
	}
}
