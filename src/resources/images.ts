import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Image = components['schemas']['Image'];
type ListParams = NonNullable<operations['listImages']['parameters']['query']>;
type UpdateBody = NonNullable<
	operations['updateImage']['requestBody']
>['content']['application/json'];
type ReorderBody = NonNullable<
	operations['reorderImages']['requestBody']
>['content']['application/json'];

export class ImagesResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Image>> {
		return this.client.request('GET', '/v1/images', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Image, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Image[]> {
		return toArray(this.iterate(params, options), options);
	}

	/** Upload an image to the store library */
	async upload(formData: FormData): Promise<DataResponse<Image>> {
		return this.client.upload('/v1/images', formData);
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Image>> {
		return this.client.request('PATCH', `/v1/images/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/images/${id}`);
	}

	async detach(id: string): Promise<void> {
		return this.client.request('POST', `/v1/images/${id}/detach`);
	}

	async batchDelete(imageIds: string[]): Promise<void> {
		return this.client.request('POST', '/v1/images/batch-delete', {
			body: { image_ids: imageIds },
		});
	}

	async batchDetach(imageIds: string[]): Promise<void> {
		return this.client.request('POST', '/v1/images/batch-detach', {
			body: { image_ids: imageIds },
		});
	}

	async reorder(body: ReorderBody): Promise<void> {
		return this.client.request('PATCH', '/v1/images/reorder', { body });
	}
}
