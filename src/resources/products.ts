import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Product = components['schemas']['Product'];
type ProductStats = components['schemas']['ProductStats'];
type Variant = components['schemas']['Variant'];
type Image = components['schemas']['Image'];
type GenerateVariantsResult = components['schemas']['GenerateVariantsResult'];
type ListParams = NonNullable<operations['listProducts']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createProduct']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateProduct']['requestBody']
>['content']['application/json'];
type DuplicateBody = NonNullable<
	operations['duplicateProduct']['requestBody']
>['content']['application/json'];
type CreateVariantBody = NonNullable<
	operations['createProductVariant']['requestBody']
>['content']['application/json'];
type GenerateVariantsBody = NonNullable<
	operations['generateProductVariants']['requestBody']
>['content']['application/json'];
type AttachImagesBody = NonNullable<
	operations['attachProductImages']['requestBody']
>['content']['application/json'];

export class ProductsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Product>> {
		return this.client.request('GET', '/v1/products', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Product, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Product[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(
		id: string,
		params?: Pick<ListParams, 'expand' | 'currency' | 'fields'>,
	): Promise<DataResponse<Product>> {
		return this.client.request('GET', `/v1/products/${id}`, { params });
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Product>> {
		return this.client.request('POST', '/v1/products', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Product>> {
		return this.client.request('PATCH', `/v1/products/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/products/${id}`);
	}

	async batchCreate(
		body: { products: CreateBody[] },
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Product[]>> {
		return this.client.request('POST', '/v1/products/batch', { body, ...options });
	}

	async duplicate(id: string, body: DuplicateBody): Promise<DataResponse<Product>> {
		return this.client.request('POST', `/v1/products/${id}/duplicate`, { body });
	}

	async getStats(id: string): Promise<DataResponse<ProductStats>> {
		return this.client.request('GET', `/v1/products/${id}/stats`);
	}

	// Variant sub-resources (nested under product)
	async listVariants(
		productId: string,
		params?: NonNullable<operations['listProductVariants']['parameters']['query']>,
	): Promise<DataResponse<Variant[]>> {
		return this.client.request('GET', `/v1/products/${productId}/variants`, { params });
	}

	async createVariant(
		productId: string,
		body: CreateVariantBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<Variant>> {
		return this.client.request('POST', `/v1/products/${productId}/variants`, { body, ...options });
	}

	async generateVariants(
		productId: string,
		body: GenerateVariantsBody,
	): Promise<DataResponse<GenerateVariantsResult>> {
		return this.client.request('POST', `/v1/products/${productId}/variants/generate`, { body });
	}

	// Image sub-resources (nested under product)
	async listImages(productId: string): Promise<DataResponse<Image[]>> {
		return this.client.request('GET', `/v1/products/${productId}/images`);
	}

	async uploadImage(productId: string, formData: FormData): Promise<DataResponse<Image>> {
		return this.client.upload(`/v1/products/${productId}/images`, formData);
	}

	async attachImages(productId: string, body: AttachImagesBody): Promise<DataResponse<Image[]>> {
		return this.client.request('POST', `/v1/products/${productId}/images/attach`, { body });
	}

	// Metafield sub-resources
	async setMetafield(
		productId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request('PUT', `/v1/products/${productId}/metafields/${slug}`, { body });
	}

	async clearMetafield(productId: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/products/${productId}/metafields/${slug}`);
	}
}
