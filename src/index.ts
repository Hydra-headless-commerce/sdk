// Client
export { Hydra } from './client';
export type { HydraConfig, RequestOptions, ResourceRequestOptions, AppInfo } from './client';

// Errors
export {
	HydraError,
	HydraConnectionError,
	HydraAuthenticationError,
	HydraPermissionError,
	HydraNotFoundError,
	HydraRateLimitError,
	HydraValidationError,
	HydraIdempotencyError,
} from './errors';
export type { HydraErrorBody } from './errors';

// Pagination
export { paginate, toArray } from './pagination';
export type { PaginateOptions } from './pagination';

// Resource classes (for advanced usage — most consumers use hydra.products etc.)
export { ProductsResource } from './resources/products';
export { VariantsResource } from './resources/variants';
export { CollectionsResource } from './resources/collections';
export { CartResource } from './resources/cart';
export { CheckoutResource } from './resources/checkout';
export { CheckoutsResource } from './resources/checkouts';
export { OrdersResource } from './resources/orders';
export { FulfillmentsResource } from './resources/fulfillments';
export { RefundsResource } from './resources/refunds';
export { ReturnsResource } from './resources/returns';
export { DraftOrdersResource } from './resources/draft-orders';
export { CustomersResource } from './resources/customers';
export { CustomerGroupsResource } from './resources/customer-groups';
export { AddressesResource } from './resources/addresses';
export { InventoryResource } from './resources/inventory';
export { ShippingResource } from './resources/shipping';
export { PromotionsResource } from './resources/promotions';
export { DiscountsResource } from './resources/discounts';
export { ImagesResource } from './resources/images';
export { WebhooksResource } from './resources/webhooks';
export { StoreResource } from './resources/store';
export { TagsResource } from './resources/tags';
export { RedirectsResource } from './resources/redirects';
export { CompaniesResource } from './resources/companies';
export { PurchaseOrdersResource } from './resources/purchase-orders';
export { FulfillmentOrdersResource } from './resources/fulfillment-orders';
export { MetafieldsResource } from './resources/metafields';
export { TaxResource } from './resources/tax';
export { ExchangeRatesResource } from './resources/exchange-rates';
export { NotificationsResource } from './resources/notifications';
export { AnalyticsResource } from './resources/analytics';
export { StoreCreditResource } from './resources/store-credit';
export { SearchResource } from './resources/search';
export { LocationsResource } from './resources/locations';
export { IntegrationsResource } from './resources/integrations';

// Schema types (re-exported from generated OpenAPI types for consumer convenience)
export type {
	Product,
	Variant,
	VariantPrice,
	ProductStats,
	GenerateVariantsResult,
	Image,
	Collection,
	Customer,
	CustomerGroup,
	Company,
	Cart,
	CartItem,
	CheckoutCreate,
	CheckoutGet,
	CheckoutListItem,
	Order,
	DraftOrder,
	FulfillmentOrder,
	Fulfillment,
	Refund,
	Return,
	PurchaseOrder,
	InventoryLevel,
	ShippingZone,
	ShippingRate,
	Promotion,
	Discount,
	TaxGroup,
	TaxRate,
	TaxExemption,
	Store,
	Webhook,
	Tag,
	Redirect,
	Location,
	ExchangeRate,
	NotificationLog,
	AnalyticsSummary,
	AnalyticsTimeSeries,
	AnalyticsOrdersSeries,
	AnalyticsTopProduct,
	AnalyticsActionItems,
	Pagination,
	ListResponse,
	DataResponse,
} from './types';
