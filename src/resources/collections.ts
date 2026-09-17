import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Collection = components['schemas']['Collection'];
type ListParams = NonNullable<operations['listCollections']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createCollection']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateCollection']['requestBody']
>['content']['application/json'];
type AddProductsBody = NonNullable<
	operations['addCollectionProducts']['requestBody']
>['content']['application/json'];
type ReorderProductsBody = NonNullable<
	operations['reorderCollectionProducts']['requestBody']
>['content']['application/json'];
type ReorderCollectionsBody = NonNullable<
	operations['reorderCollections']['requestBody']
>['content']['application/json'];

export class CollectionsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Collection>> {
		return this.client.request('GET', '/v1/collections', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Collection, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Collection[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: Pick<ListParams, 'expand' | 'fields'>,
	): Promise<DataResponse<Collection>> {
		return this.client.request('GET', `/v1/collections/${id}`, { params });
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Collection>> {
		return this.client.request('POST', '/v1/collections', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Collection>> {
		return this.client.request('PATCH', `/v1/collections/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/collections/${id}`);
	}

	async tree(): Promise<DataResponse<unknown>> {
		return this.client.request('GET', '/v1/collections/tree');
	}

	async reorder(body: ReorderCollectionsBody): Promise<void> {
		return this.client.request('PATCH', '/v1/collections/reorder', { body });
	}

	async addProducts(collectionId: string, body: AddProductsBody): Promise<void> {
		return this.client.request('POST', `/v1/collections/${collectionId}/products`, { body });
	}

	async reorderProducts(collectionId: string, body: ReorderProductsBody): Promise<void> {
		return this.client.request('PATCH', `/v1/collections/${collectionId}/products/reorder`, {
			body,
		});
	}

	async removeProduct(collectionId: string, productId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/collections/${collectionId}/products/${productId}`);
	}

	// Metafield sub-resources
	async setMetafield(
		collectionId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request('PUT', `/v1/collections/${collectionId}/metafields/${slug}`, {
			body,
		});
	}

	async clearMetafield(collectionId: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/collections/${collectionId}/metafields/${slug}`);
	}
}
