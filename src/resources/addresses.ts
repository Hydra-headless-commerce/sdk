import type { Hydra } from '../client';
import type { operations } from '../types/openapi';
import type { DataResponse } from '../types';

type UpdateBody = NonNullable<
	operations['updateAddress']['requestBody']
>['content']['application/json'];

export class AddressesResource {
	constructor(private client: Hydra) {}

	async update(id: string, body: UpdateBody): Promise<DataResponse<unknown>> {
		return this.client.request('PATCH', `/v1/addresses/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/addresses/${id}`);
	}
}
