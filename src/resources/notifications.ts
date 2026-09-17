import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

type NotificationLog = components['schemas']['NotificationLog'];
type ListParams = NonNullable<operations['listNotifications']['parameters']['query']>;

export class NotificationsResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<ListResponse<NotificationLog>> {
		return this.client.request('GET', '/v1/notifications', { params });
	}

	iterate(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<NotificationLog, void, undefined> {
		return paginate((cursor) => this.list({ ...params, cursor }), options);
	}

	async toArray(
		params?: Omit<ListParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<NotificationLog[]> {
		return toArray(this.iterate(params, options), options);
	}

	async get(id: string): Promise<DataResponse<NotificationLog>> {
		return this.client.request('GET', `/v1/notifications/${id}`);
	}
}
