import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type ShippingZone = components['schemas']['ShippingZone'];
type ShippingRate = components['schemas']['ShippingRate'];
type ListZonesParams = NonNullable<operations['listShippingZones']['parameters']['query']>;
type CreateZoneBody = NonNullable<
	operations['createShippingZone']['requestBody']
>['content']['application/json'];
type UpdateZoneBody = NonNullable<
	operations['updateShippingZone']['requestBody']
>['content']['application/json'];
type CreateRateBody = NonNullable<
	operations['createShippingRate']['requestBody']
>['content']['application/json'];
type UpdateRateBody = NonNullable<
	operations['updateShippingRate']['requestBody']
>['content']['application/json'];
type AvailableRatesBody = NonNullable<
	operations['getAvailableShippingRates']['requestBody']
>['content']['application/json'];

export class ShippingResource {
	constructor(private client: Hydra) {}

	// Zones
	async listZones(params?: ListZonesParams): Promise<ListResponse<ShippingZone>> {
		return this.client.request('GET', '/v1/shipping/zones', { params });
	}

	iterateZones(
		params?: Omit<ListZonesParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<ShippingZone, void, undefined> {
		return paginate((cursor) => this.listZones({ ...params, cursor }), options);
	}

	async zonesToArray(
		params?: Omit<ListZonesParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<ShippingZone[]> {
		return toArray(this.iterateZones(params, options), options);
	}

	async getZone(
		id: string,
		params?: Pick<ListZonesParams, 'expand' | 'currency' | 'fields'>,
	): Promise<DataResponse<ShippingZone>> {
		return this.client.request('GET', `/v1/shipping/zones/${id}`, { params });
	}

	async createZone(
		body: CreateZoneBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<ShippingZone>> {
		return this.client.request('POST', '/v1/shipping/zones', { body, ...options });
	}

	async updateZone(id: string, body: UpdateZoneBody): Promise<DataResponse<ShippingZone>> {
		return this.client.request('PATCH', `/v1/shipping/zones/${id}`, { body });
	}

	async deleteZone(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/shipping/zones/${id}`);
	}

	// Rates
	async createRate(
		zoneId: string,
		body: CreateRateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<ShippingRate>> {
		return this.client.request('POST', `/v1/shipping/zones/${zoneId}/rates`, { body, ...options });
	}

	async updateRate(id: string, body: UpdateRateBody): Promise<DataResponse<ShippingRate>> {
		return this.client.request('PATCH', `/v1/shipping/rates/${id}`, { body });
	}

	async deleteRate(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/shipping/rates/${id}`);
	}

	/** Get available shipping rates for a destination (public access) */
	async getAvailableRates(body: AvailableRatesBody): Promise<DataResponse<ShippingRate[]>> {
		return this.client.request('POST', '/v1/shipping/rates', { body });
	}
}
