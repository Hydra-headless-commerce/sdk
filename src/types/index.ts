/**
 * Re-exported types from the generated OpenAPI spec.
 * Import these for type-safe SDK usage:
 *
 *   import type { Product, Order, Customer } from '@gethydra/sdk';
 */

import type { components } from './openapi';

// Core commerce
export type Product = components['schemas']['Product'];
export type Variant = components['schemas']['Variant'];
export type VariantPrice = components['schemas']['VariantPrice'];
export type ProductStats = components['schemas']['ProductStats'];
export type GenerateVariantsResult = components['schemas']['GenerateVariantsResult'];
export type Image = components['schemas']['Image'];
export type Collection = components['schemas']['Collection'];

// Customers
export type Customer = components['schemas']['Customer'];
export type CustomerGroup = components['schemas']['CustomerGroup'];

// Companies
export type Company = components['schemas']['Company'];

// Cart & checkout
export type Cart = components['schemas']['Cart'];
export type CartItem = components['schemas']['CartItem'];
export type CheckoutCreate = components['schemas']['CheckoutCreate'];
export type CheckoutGet = components['schemas']['CheckoutGet'];
export type CheckoutListItem = components['schemas']['CheckoutListItem'];

// Orders
export type Order = components['schemas']['Order'];
export type DraftOrder = components['schemas']['DraftOrder'];
export type FulfillmentOrder = components['schemas']['FulfillmentOrder'];
export type Fulfillment = components['schemas']['Fulfillment'];
export type Refund = components['schemas']['Refund'];
export type Return = components['schemas']['Return'];

// Purchase orders
export type PurchaseOrder = components['schemas']['PurchaseOrder'];

// Inventory & shipping
export type InventoryLevel = components['schemas']['InventoryLevel'];
export type ShippingZone = components['schemas']['ShippingZone'];
export type ShippingRate = components['schemas']['ShippingRate'];

// Promotions & discounts
export type Promotion = components['schemas']['Promotion'];
export type Discount = components['schemas']['Discount'];

// Tax
export type TaxGroup = components['schemas']['TaxGroup'];
export type TaxRate = components['schemas']['TaxRate'];
export type TaxExemption = components['schemas']['TaxExemption'];

// Store
export type Store = components['schemas']['Store'];

// Webhooks
export type Webhook = components['schemas']['Webhook'];

// Tags & redirects
export type Tag = components['schemas']['Tag'];
export type Redirect = components['schemas']['Redirect'];

// Locations
export type Location = components['schemas']['Location'];

// Exchange rates
export type ExchangeRate = components['schemas']['ExchangeRate'];

// Notifications
export type NotificationLog = components['schemas']['NotificationLog'];

// Analytics
export type AnalyticsSummary = components['schemas']['AnalyticsSummary'];
export type AnalyticsTimeSeries = components['schemas']['AnalyticsTimeSeries'];
export type AnalyticsOrdersSeries = components['schemas']['AnalyticsOrdersSeries'];
export type AnalyticsTopProduct = components['schemas']['AnalyticsTopProduct'];
export type AnalyticsActionItems = components['schemas']['AnalyticsActionItems'];

// Shared response types
export interface Pagination {
	cursor: string | null;
	has_more: boolean;
	total: number;
}

export interface ListResponse<T> {
	data: T[];
	pagination: Pagination;
}

export interface DataResponse<T> {
	data: T;
}
