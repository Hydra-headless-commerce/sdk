import type { Hydra, ResourceRequestOptions } from '../client';
import type { operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type CreditTransaction = NonNullable<
	operations['issueCustomerCredit']['responses']['201']['content']['application/json']['data']
>;
type CreditBalance = NonNullable<
	operations['getCustomerCredit']['responses']['200']['content']['application/json']['data']
>;
type ListParams = NonNullable<
	operations['listCustomerCreditTransactions']['parameters']['query']
>;
type IssueCreditBody = NonNullable<
	operations['issueCustomerCredit']['requestBody']
>['content']['application/json'];

export class StoreCreditResource {
	constructor(private client: Hydra) {}

	async getBalance(customerId: string): Promise<DataResponse<CreditBalance>> {
		return this.client.request('GET', `/v1/customers/${customerId}/credit`);
	}

	async issue(
		customerId: string,
		body: IssueCreditBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<CreditTransaction>> {
		return this.client.request('POST', `/v1/customers/${customerId}/credit`, {
			body,
			...options,
		});
	}

	async listTransactions(
		customerId: string,
		params?: ListParams,
	): Promise<ListResponse<CreditTransaction>> {
		return this.client.request('GET', `/v1/customers/${customerId}/credit/transactions`, {
			params,
		});
	}

	iterateTransactions(
		customerId: string,
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<CreditTransaction, void, undefined> {
		return paginate(
			(cursor) => this.listTransactions(customerId, { ...params, cursor }),
			options,
		);
	}

	async transactionsToArray(
		customerId: string,
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<CreditTransaction[]> {
		return toArray(this.iterateTransactions(customerId, params, options), options);
	}
}
