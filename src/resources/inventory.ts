import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type InventoryLevel = components['schemas']['InventoryLevel'];
type InventoryAdjustment = components['schemas']['InventoryAdjustment'];
type ProductAdjustment = components['schemas']['ProductAdjustment'];
type ListParams = NonNullable<operations['listInventory']['parameters']['query']>;
type SetBody = NonNullable<
	operations['setInventory']['requestBody']
>['content']['application/json'];
type AdjustBody = NonNullable<
	operations['adjustInventory']['requestBody']
>['content']['application/json'];

type InventoryResult = InventoryLevel & { adjustment: InventoryAdjustment };

export class InventoryResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<InventoryLevel>> {
		return this.client.request('GET', '/v1/inventory', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<InventoryLevel, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<InventoryLevel[]> {
		return toArray(this.iterate(params, options), options);
	}

	async listAdjustments(params: {
		product_id: string;
		limit?: number;
		cursor?: string;
		fields?: string;
	}): Promise<ListResponse<ProductAdjustment>> {
		return this.client.request('GET', '/v1/inventory/adjustments', { params });
	}

	iterateAdjustments(
		params: Omit<
			{ product_id: string; limit?: number; cursor?: string; fields?: string },
			'cursor'
		>,
		options?: PaginateOptions,
	): AsyncGenerator<ProductAdjustment, void, undefined> {
		return paginate((cursor) => this.listAdjustments({ ...params, cursor }), options);
	}

	async adjustmentsToArray(
		params: Omit<
			{ product_id: string; limit?: number; cursor?: string; fields?: string },
			'cursor'
		>,
		options?: PaginateOptions & { limit?: number },
	): Promise<ProductAdjustment[]> {
		return toArray(this.iterateAdjustments(params, options), options);
	}

	async set(variantId: string, body: SetBody): Promise<DataResponse<InventoryResult>> {
		return this.client.request('PATCH', `/v1/inventory/${variantId}`, { body });
	}

	async adjust(variantId: string, body: AdjustBody): Promise<DataResponse<InventoryResult>> {
		return this.client.request('POST', `/v1/inventory/${variantId}/adjust`, { body });
	}

	async listVariantAdjustments(
		variantId: string,
		params?: { limit?: number; cursor?: string; fields?: string },
	): Promise<ListResponse<InventoryAdjustment>> {
		return this.client.request('GET', `/v1/inventory/${variantId}/adjustments`, { params });
	}

	iterateVariantAdjustments(
		variantId: string,
		params?: Omit<{ limit?: number; cursor?: string; fields?: string }, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<InventoryAdjustment, void, undefined> {
		return paginate(
			(cursor) => this.listVariantAdjustments(variantId, { ...params, cursor }),
			options,
		);
	}

	async variantAdjustmentsToArray(
		variantId: string,
		params?: Omit<{ limit?: number; cursor?: string; fields?: string }, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<InventoryAdjustment[]> {
		return toArray(this.iterateVariantAdjustments(variantId, params, options), options);
	}
}
