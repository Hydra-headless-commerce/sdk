import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type CheckoutListItem = components['schemas']['CheckoutListItem'];
type ListParams = NonNullable<operations['listCheckouts']['parameters']['query']>;

export class CheckoutsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<CheckoutListItem>> {
		return this.client.request('GET', '/v1/checkouts', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<CheckoutListItem, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<CheckoutListItem[]> {
		return toArray(this.iterate(params, options), options);
	}
}
