import type { Hydra } from '../client';
import type { operations } from '../types/openapi';
import type { DataResponse } from '../types';

type ListParams = NonNullable<operations['listMetafieldDefinitions']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createMetafieldDefinition']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateMetafieldDefinition']['requestBody']
>['content']['application/json'];
type ReorderBody = NonNullable<
	operations['reorderMetafieldDefinitions']['requestBody']
>['content']['application/json'];

export class MetafieldsResource {
	constructor(private client: Hydra) {}

	/** List metafield definitions for the store */
	async listDefinitions(params?: ListParams): Promise<DataResponse<unknown[]>> {
		return this.client.request('GET', '/v1/store/metafields', { params });
	}

	async createDefinition(body: CreateBody): Promise<DataResponse<unknown>> {
		return this.client.request('POST', '/v1/store/metafields', { body });
	}

	async updateDefinition(
		ownerType: string,
		slug: string,
		body: UpdateBody,
	): Promise<DataResponse<unknown>> {
		return this.client.request('PATCH', `/v1/store/metafields/${ownerType}/${slug}`, { body });
	}

	async archiveDefinition(ownerType: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/store/metafields/${ownerType}/${slug}`);
	}

	async reorderDefinitions(ownerType: string, body: ReorderBody): Promise<void> {
		return this.client.request('PUT', `/v1/store/metafields/${ownerType}/reorder`, { body });
	}
}
