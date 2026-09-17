import type { Hydra } from '../client';
import type { DataResponse, ListResponse } from '../types';
import { paginate, toArray, type PaginateOptions } from '../pagination';

export interface IntegrationStatus {
	connected: boolean;
	provider: string | null;
	status: 'connected' | 'expired' | 'error' | 'disconnected';
	company_name: string | null;
	last_sync_at: string | null;
	error_message: string | null;
}

export interface IntegrationValidateResult {
	valid: boolean;
	company_name: string | null;
	error: string | null;
}

export interface SyncResult {
	success: boolean;
	error: string | null;
}

export interface SyncLogEntry {
	id: string;
	entity_type: string;
	entity_id: string;
	external_entity_type: string | null;
	external_entity_id: string | null;
	direction: string;
	status: string;
	error_message: string | null;
	retry_count: number;
	metadata: Record<string, unknown> | null;
	created_at: string;
	updated_at: string;
}

type ListSyncLogParams = {
	limit?: number;
	cursor?: string;
	entity_type?: 'order' | 'customer' | 'payment';
	status?: 'pending' | 'synced' | 'failed' | 'skipped';
};

export class IntegrationsResource {
	constructor(private client: Hydra) {}

	async getAccountingStatus(): Promise<DataResponse<IntegrationStatus>> {
		return this.client.request('GET', '/v1/integrations/accounting/status');
	}

	async getAuthorizeUrl(): Promise<DataResponse<{ authorize_url: string }>> {
		return this.client.request('GET', '/v1/integrations/accounting/authorize');
	}

	async testConnection(): Promise<DataResponse<IntegrationValidateResult>> {
		return this.client.request('POST', '/v1/integrations/accounting/test');
	}

	async disconnect(): Promise<void> {
		await this.client.request('DELETE', '/v1/integrations/accounting');
	}

	async updateSettings(settings: {
		income_account_id?: string;
		deposit_account_id?: string;
	}): Promise<DataResponse<Record<string, unknown>>> {
		return this.client.request('PATCH', '/v1/integrations/accounting/settings', {
			body: settings,
		});
	}

	async syncOrder(orderId: string): Promise<DataResponse<SyncResult>> {
		return this.client.request('POST', `/v1/integrations/accounting/sync/${orderId}`);
	}

	async retrySyncOrder(orderId: string): Promise<DataResponse<SyncResult>> {
		return this.client.request('POST', `/v1/integrations/accounting/sync/${orderId}/retry`);
	}

	async listSyncLog(params?: ListSyncLogParams): Promise<ListResponse<SyncLogEntry>> {
		return this.client.request('GET', '/v1/integrations/accounting/sync-log', { params });
	}

	iterateSyncLog(
		params?: Omit<ListSyncLogParams, 'cursor'>,
		options?: PaginateOptions,
	): AsyncGenerator<SyncLogEntry, void, undefined> {
		return paginate((cursor) => this.listSyncLog({ ...params, cursor }), options);
	}

	async toArraySyncLog(
		params?: Omit<ListSyncLogParams, 'cursor'>,
		options?: PaginateOptions & { limit?: number },
	): Promise<SyncLogEntry[]> {
		return toArray(this.iterateSyncLog(params, options), options);
	}
}
