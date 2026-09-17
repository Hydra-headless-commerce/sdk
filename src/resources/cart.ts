import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type Cart = components['schemas']['Cart'];
type GetParams = NonNullable<operations['getCart']['parameters']['query']>;
type AddItemBody = NonNullable<
	operations['addCartItem']['requestBody']
>['content']['application/json'];
type UpdateItemBody = NonNullable<
	operations['updateCartItem']['requestBody']
>['content']['application/json'];

export class CartResource {
	constructor(private client: Hydra) {}

	async create(): Promise<DataResponse<Cart>> {
		return this.client.request('POST', '/v1/cart');
	}

	async get(id: string, params?: GetParams): Promise<DataResponse<Cart>> {
		return this.client.request('GET', `/v1/cart/${id}`, { params });
	}

	async addItem(cartId: string, body: AddItemBody): Promise<DataResponse<Cart>> {
		return this.client.request('POST', `/v1/cart/${cartId}/items`, { body });
	}

	async updateItem(
		cartId: string,
		itemId: string,
		body: UpdateItemBody,
	): Promise<DataResponse<Cart>> {
		return this.client.request('PATCH', `/v1/cart/${cartId}/items/${itemId}`, { body });
	}

	async removeItem(cartId: string, itemId: string): Promise<DataResponse<Cart>> {
		return this.client.request('DELETE', `/v1/cart/${cartId}/items/${itemId}`);
	}

	async clear(cartId: string): Promise<DataResponse<Cart>> {
		return this.client.request('DELETE', `/v1/cart/${cartId}`);
	}
}
