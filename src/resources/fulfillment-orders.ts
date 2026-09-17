import type { Hydra } from '../client';
import type { components } from '../types/openapi';
import type { DataResponse } from '../types';

type FulfillmentOrder = components['schemas']['FulfillmentOrder'];

export class FulfillmentOrdersResource {
	constructor(private client: Hydra) {}

	/** List fulfillment orders for an order (use orders.listFulfillmentOrders instead) */
	async listForOrder(orderId: string): Promise<DataResponse<FulfillmentOrder[]>> {
		return this.client.request('GET', `/v1/orders/${orderId}/fulfillment-orders`);
	}
}
