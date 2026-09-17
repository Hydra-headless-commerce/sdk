import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type Store = components['schemas']['Store'];
type UpdateBody = NonNullable<
	operations['updateStore']['requestBody']
>['content']['application/json'];

export class StoreResource {
	constructor(private client: Hydra) {}

	async get(params?: { fields?: string }): Promise<DataResponse<Store>> {
		return this.client.request('GET', '/v1/store', { params });
	}

	async update(body: UpdateBody): Promise<DataResponse<Store>> {
		return this.client.request('PATCH', '/v1/store', { body });
	}

	async getDomainRecord(): Promise<DataResponse<unknown>> {
		return this.client.request('GET', '/v1/store/domain/record');
	}

	async verifyDomain(): Promise<DataResponse<unknown>> {
		return this.client.request('POST', '/v1/store/domain/verify');
	}

	async publish(): Promise<
		DataResponse<{
			store_id: string;
			published_at: string;
			previous_published_at: string | null;
			changes_count: number;
		}>
	> {
		return this.client.request('POST', '/v1/store/publish');
	}
}
