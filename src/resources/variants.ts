import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type Variant = components['schemas']['Variant'];
type VariantPrice = components['schemas']['VariantPrice'];
type UpdateBody = NonNullable<
	operations['updateVariant']['requestBody']
>['content']['application/json'];
type UpsertPriceBody = NonNullable<
	operations['upsertVariantPrice']['requestBody']
>['content']['application/json'];

export class VariantsResource {
	constructor(private client: Hydra) {}

	async get(
		id: string,
		params?: { expand?: string; currency?: string; fields?: string },
	): Promise<DataResponse<Variant>> {
		return this.client.request('GET', `/v1/variants/${id}`, { params });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Variant>> {
		return this.client.request('PATCH', `/v1/variants/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/variants/${id}`);
	}

	// Price keys
	async listPrices(variantId: string): Promise<DataResponse<Record<string, VariantPrice>>> {
		return this.client.request('GET', `/v1/variants/${variantId}/prices`);
	}

	async upsertPrice(
		variantId: string,
		priceKeySlug: string,
		body: UpsertPriceBody,
	): Promise<DataResponse<VariantPrice>> {
		return this.client.request('PUT', `/v1/variants/${variantId}/prices/${priceKeySlug}`, { body });
	}

	async deletePrice(variantId: string, priceKeySlug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/variants/${variantId}/prices/${priceKeySlug}`);
	}

	// Metafield sub-resources
	async setMetafield(
		variantId: string,
		slug: string,
		body: { value: unknown },
	): Promise<DataResponse<unknown>> {
		return this.client.request('PUT', `/v1/variants/${variantId}/metafields/${slug}`, { body });
	}

	async clearMetafield(variantId: string, slug: string): Promise<void> {
		return this.client.request('DELETE', `/v1/variants/${variantId}/metafields/${slug}`);
	}
}
