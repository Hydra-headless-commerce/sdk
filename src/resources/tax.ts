import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type TaxGroup = components['schemas']['TaxGroup'];
type TaxRate = components['schemas']['TaxRate'];
type TaxExemption = components['schemas']['TaxExemption'];
type ListGroupsParams = NonNullable<operations['listTaxGroups']['parameters']['query']>;
type CreateGroupBody = NonNullable<
	operations['createTaxGroup']['requestBody']
>['content']['application/json'];
type UpdateGroupBody = NonNullable<
	operations['updateTaxGroup']['requestBody']
>['content']['application/json'];
type ListRatesParams = NonNullable<operations['listTaxRates']['parameters']['query']>;
type CreateRateBody = NonNullable<
	operations['createTaxRate']['requestBody']
>['content']['application/json'];
type UpdateRateBody = NonNullable<
	operations['updateTaxRate']['requestBody']
>['content']['application/json'];
type ListExemptionsParams = NonNullable<operations['listTaxExemptions']['parameters']['query']>;
type CreateExemptionBody = NonNullable<
	operations['createTaxExemption']['requestBody']
>['content']['application/json'];

export class TaxResource {
	constructor(private client: Hydra) {}

	// Groups
	async listGroups(params?: ListGroupsParams): Promise<ListResponse<TaxGroup>> {
		return this.client.request('GET', '/v1/tax/groups', { params });
	}

	iterateGroups(
		params?: Omit<ListGroupsParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<TaxGroup, void, undefined> {
		return paginate((cursor) => this.listGroups({ ...params, cursor }), options);
	}

	async groupsToArray(
		params?: Omit<ListGroupsParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<TaxGroup[]> {
		return toArray(this.iterateGroups(params, options), options);
	}

	async getGroup(id: string): Promise<DataResponse<TaxGroup>> {
		return this.client.request('GET', `/v1/tax/groups/${id}`);
	}

	async createGroup(
		body: CreateGroupBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<TaxGroup>> {
		return this.client.request('POST', '/v1/tax/groups', { body, ...options });
	}

	async updateGroup(id: string, body: UpdateGroupBody): Promise<DataResponse<TaxGroup>> {
		return this.client.request('PATCH', `/v1/tax/groups/${id}`, { body });
	}

	async deleteGroup(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/tax/groups/${id}`);
	}

	// Rates
	async listRates(params?: ListRatesParams): Promise<ListResponse<TaxRate>> {
		return this.client.request('GET', '/v1/tax/rates', { params });
	}

	iterateRates(
		params?: Omit<ListRatesParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<TaxRate, void, undefined> {
		return paginate((cursor) => this.listRates({ ...params, cursor }), options);
	}

	async ratesToArray(
		params?: Omit<ListRatesParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<TaxRate[]> {
		return toArray(this.iterateRates(params, options), options);
	}

	async createRate(
		body: CreateRateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<TaxRate>> {
		return this.client.request('POST', '/v1/tax/rates', { body, ...options });
	}

	async updateRate(id: string, body: UpdateRateBody): Promise<DataResponse<TaxRate>> {
		return this.client.request('PATCH', `/v1/tax/rates/${id}`, { body });
	}

	async deleteRate(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/tax/rates/${id}`);
	}

	// Exemptions
	async listExemptions(params?: ListExemptionsParams): Promise<ListResponse<TaxExemption>> {
		return this.client.request('GET', '/v1/tax/exemptions', { params });
	}

	iterateExemptions(
		params?: Omit<ListExemptionsParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<TaxExemption, void, undefined> {
		return paginate((cursor) => this.listExemptions({ ...params, cursor }), options);
	}

	async exemptionsToArray(
		params?: Omit<ListExemptionsParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<TaxExemption[]> {
		return toArray(this.iterateExemptions(params, options), options);
	}

	async createExemption(
		body: CreateExemptionBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<TaxExemption>> {
		return this.client.request('POST', '/v1/tax/exemptions', { body, ...options });
	}

	async deleteExemption(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/tax/exemptions/${id}`);
	}
}
