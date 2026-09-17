import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type ExchangeRate = components['schemas']['ExchangeRate'];
type ListParams = NonNullable<operations['listExchangeRates']['parameters']['query']>;

export class ExchangeRatesResource {
	constructor(private client: Hydra) {}

	async list(params?: ListParams): Promise<DataResponse<ExchangeRate[]>> {
		return this.client.request('GET', '/v1/exchange-rates', { params });
	}

	async refresh(): Promise<DataResponse<unknown>> {
		return this.client.request('POST', '/v1/exchange-rates/refresh');
	}
}
