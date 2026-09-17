import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type NavigationMenu = components['schemas']['NavigationMenu'];
type NavigationItem = components['schemas']['NavigationItem'];
type ListParams = NonNullable<operations['listNavigationMenus']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createNavigationMenu']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateNavigationMenu']['requestBody']
>['content']['application/json'];
type CreateItemBody = NonNullable<
	operations['addNavigationItem']['requestBody']
>['content']['application/json'];
type UpdateItemBody = NonNullable<
	operations['updateNavigationItem']['requestBody']
>['content']['application/json'];
type ReorderItemsBody = NonNullable<
	operations['reorderNavigationItems']['requestBody']
>['content']['application/json'];

export class NavigationResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<NavigationMenu>> {
		return this.client.request('GET', '/v1/navigation', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<NavigationMenu, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<NavigationMenu[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<NavigationMenu>> {
		return this.client.request('GET', `/v1/navigation/${id}`);
	}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<NavigationMenu>> {
		return this.client.request('POST', '/v1/navigation', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<NavigationMenu>> {
		return this.client.request('PATCH', `/v1/navigation/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/navigation/${id}`);
	}

	async addItem(
		menuId: string,
		body: CreateItemBody,
	): Promise<DataResponse<NavigationItem>> {
		return this.client.request('POST', `/v1/navigation/${menuId}/items`, { body });
	}

	async updateItem(
		menuId: string,
		itemId: string,
		body: UpdateItemBody,
	): Promise<DataResponse<NavigationItem>> {
		return this.client.request('PATCH', `/v1/navigation/${menuId}/items/${itemId}`, { body });
	}

	async deleteItem(menuId: string, itemId: string): Promise<void> {
		return this.client.request('DELETE', `/v1/navigation/${menuId}/items/${itemId}`);
	}

	async reorderItems(menuId: string, body: ReorderItemsBody): Promise<void> {
		return this.client.request('PATCH', `/v1/navigation/${menuId}/items/reorder`, { body });
	}
}
