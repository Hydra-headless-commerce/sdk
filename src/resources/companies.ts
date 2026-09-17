import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Company = components['schemas']['Company'];
type ListParams = NonNullable<operations['listCompanies']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createCompany']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateCompany']['requestBody']
>['content']['application/json'];
type CreateAddressBody = NonNullable<
	operations['createCompanyAddress']['requestBody']
>['content']['application/json'];
type UpdateAddressBody = NonNullable<
	operations['updateCompanyAddress']['requestBody']
>['content']['application/json'];
type CreateContactBody = NonNullable<
	operations['createCompanyContact']['requestBody']
>['content']['application/json'];
type UpdateContactBody = NonNullable<
	operations['updateCompanyContact']['requestBody']
>['content']['application/json'];
type CreateNoteBody = NonNullable<
	operations['createCompanyNote']['requestBody']
>['content']['application/json'];

export class CompaniesResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Company>> {
		return this.client.request('GET', '/v1/companies', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Company, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Company[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: Pick<ListParams, 'expand' | 'fields'>,
	): Promise<DataResponse<Company>> {
		return this.client.request('GET', `/v1/companies/${id}`, { params });
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Company>> {
		return this.client.request('POST', '/v1/companies', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Company>> {
		return this.client.request('PATCH', `/v1/companies/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/companies/${id}`);
	}

	// Addresses
	async listAddresses(companyId: string): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', `/v1/companies/${companyId}/addresses`);
	}

	async createAddress(companyId: string, body: CreateAddressBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/companies/${companyId}/addresses`, { body });
	}

	async updateAddress(
		companyId: string,
		addressId: string,
		body: UpdateAddressBody,
	): Promise<DataResponse<unknown>> {
		return this.client.request('PATCH', `/v1/companies/${companyId}/addresses/${addressId}`, {
			body,
		});
	}

	async deleteAddress(companyId: string, addressId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/companies/${companyId}/addresses/${addressId}`);
	}

	// Contacts
	async listContacts(companyId: string): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', `/v1/companies/${companyId}/contacts`);
	}

	async createContact(companyId: string, body: CreateContactBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/companies/${companyId}/contacts`, { body });
	}

	async updateContact(
		companyId: string,
		contactId: string,
		body: UpdateContactBody,
	): Promise<DataResponse<unknown>> {
		return this.client.request('PATCH', `/v1/companies/${companyId}/contacts/${contactId}`, {
			body,
		});
	}

	async deleteContact(companyId: string, contactId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/companies/${companyId}/contacts/${contactId}`);
	}

	// Notes
	async listNotes(companyId: string): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', `/v1/companies/${companyId}/notes`);
	}

	async createNote(companyId: string, body: CreateNoteBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', `/v1/companies/${companyId}/notes`, { body });
	}

	async deleteNote(companyId: string, noteId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/companies/${companyId}/notes/${noteId}`);
	}
}
