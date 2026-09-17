import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';
import type { DataResponse } from '../types';

type AnalyticsSummary = components['schemas']['AnalyticsSummary'];
type AnalyticsTimeSeries = components['schemas']['AnalyticsTimeSeries'];
type AnalyticsOrdersSeries = components['schemas']['AnalyticsOrdersSeries'];
type AnalyticsTopProduct = components['schemas']['AnalyticsTopProduct'];
type AnalyticsActionItems = components['schemas']['AnalyticsActionItems'];

type SummaryParams = NonNullable<operations['getAnalyticsSummary']['parameters']['query']>;
type RevenueParams = NonNullable<operations['getRevenueTimeSeries']['parameters']['query']>;
type OrdersParams = NonNullable<operations['getOrdersTimeSeries']['parameters']['query']>;
type TopProductsParams = NonNullable<operations['getTopProducts']['parameters']['query']>;

export class AnalyticsResource {
	constructor(private client: Hydra) {}

	async summary(params?: SummaryParams): Promise<DataResponse<AnalyticsSummary>> {
		return this.client.request('GET', '/v1/analytics/summary', { params });
	}

	async revenue(params?: RevenueParams): Promise<DataResponse<AnalyticsTimeSeries>> {
		return this.client.request('GET', '/v1/analytics/revenue', { params });
	}

	async orders(params?: OrdersParams): Promise<DataResponse<AnalyticsOrdersSeries>> {
		return this.client.request('GET', '/v1/analytics/orders', { params });
	}

	async topProducts(params?: TopProductsParams): Promise<DataResponse<AnalyticsTopProduct[]>> {
		return this.client.request('GET', '/v1/analytics/top-products', { params });
	}

	async actionItems(): Promise<DataResponse<AnalyticsActionItems>> {
		return this.client.request('GET', '/v1/analytics/action-items');
	}
}
