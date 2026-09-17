import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type CheckoutCreate = components['schemas']['CheckoutCreate'];
type CheckoutGet = components['schemas']['CheckoutGet'];
type CreateBody = NonNullable<
	operations['createCheckout']['requestBody']
>['content']['application/json'];
type ApplyDiscountBody = NonNullable<
	operations['applyCheckoutDiscount']['requestBody']
>['content']['application/json'];
type ApplyCreditBody = NonNullable<
	operations['applyCheckoutCredit']['requestBody']
>['content']['application/json'];

export class CheckoutResource {
	constructor(private client: Hydra) {}

	async create(
		body: CreateBody,
		options?: ResourceRequestOptions,
	): Promise<DataResponse<CheckoutCreate>> {
		return this.client.request('POST', '/v1/checkout', { body, ...options });
	}

	async get(id: string): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('GET', `/v1/checkout/${id}`);
	}

	async applyDiscount(
		checkoutId: string,
		body: ApplyDiscountBody,
	): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('POST', `/v1/checkout/${checkoutId}/discount`, { body });
	}

	async removeDiscount(checkoutId: string): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('DELETE', `/v1/checkout/${checkoutId}/discount`);
	}

	async applyCredit(
		checkoutId: string,
		body: ApplyCreditBody,
	): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('POST', `/v1/checkout/${checkoutId}/credit`, { body });
	}

	async removeCredit(checkoutId: string): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('DELETE', `/v1/checkout/${checkoutId}/credit`);
	}

	async completeWithCredit(checkoutId: string): Promise<DataResponse<CheckoutGet>> {
		return this.client.request('POST', `/v1/checkout/${checkoutId}/complete`);
	}
}
