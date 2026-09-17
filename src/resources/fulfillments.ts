import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type Fulfillment = components['schemas']['Fulfillment'];
type CreateBody = NonNullable<
	operations['createFulfillment']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateFulfillment']['requestBody']
>['content']['application/json'];
type CancelBody = NonNullable<
	operations['cancelFulfillment']['requestBody']
>['content']['application/json'];

export class FulfillmentsResource {
	constructor(private client: Hydra) {}

	/** Create a fulfillment for a fulfillment order */
	async create(
		fulfillmentOrderId: string,
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Fulfillment>> {
		return this.client.request(
			'POST',
			`/v1/fulfillment-orders/${fulfillmentOrderId}/fulfillments`,
			{
				body,
				...options,
			},
		);
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Fulfillment>> {
		return this.client.request('PATCH', `/v1/fulfillments/${id}`, { body });
	}

	async cancel(id: string, body?: CancelBody): Promise<DataResponse<Fulfillment>> {
		return this.client.request('DELETE', `/v1/fulfillments/${id}`, { body });
	}
}
