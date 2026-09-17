import type { Hydra, ResourceRequestOptions } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type Webhook = components['schemas']['Webhook'];
type ListParams = NonNullable<operations['listWebhooks']['parameters']['query']>;
type CreateBody = NonNullable<
	operations['createWebhook']['requestBody']
>['content']['application/json'];
type UpdateBody = NonNullable<
	operations['updateWebhook']['requestBody']
>['content']['application/json'];

export class WebhooksResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<Webhook>> {
		return this.client.request('GET', '/v1/webhooks', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<Webhook, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<Webhook[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<Webhook>> {
		return this.client.request('GET', `/v1/webhooks/${id}`);
	}

	async create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Webhook>> {
		return this.client.request('POST', '/v1/webhooks', { body, ...options });
	}

	async update(id: string, body: UpdateBody): Promise<DataResponse<Webhook>> {
		return this.client.request('PATCH', `/v1/webhooks/${id}`, { body });
	}

	async delete(id: string): Promise<void> {
		return this.client.request('DELETE', `/v1/webhooks/${id}`);
	}
}
