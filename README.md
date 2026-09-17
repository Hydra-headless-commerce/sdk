# Hydra Node.js SDK

[![Version](https://img.shields.io/npm/v/@gethydra/sdk.svg)](https://www.npmjs.org/package/@gethydra/sdk)

The Hydra SDK provides typed access to the [Hydra Commerce API](https://hydrajs.dev) from server-side JavaScript and TypeScript applications.

For storefront client-side integration, see the [Checkout guide](https://hydrajs.dev/docs/guides/checkout).

## Documentation

See the [API reference](https://hydrajs.dev/docs/api/products) for full endpoint documentation.

## Requirements

Node.js 18 or later. The SDK is ESM-only.

## Installation

```sh
npm install @gethydra/sdk
# or
bun add @gethydra/sdk
```

## Usage

Configure the client with your secret API key, available in the [Hydra admin panel](https://admin.myhydrastore.com).

```ts
import { Hydra } from '@gethydra/sdk';

const hydra = new Hydra({ apiKey: 'sk_live_...' });

const { data: products } = await hydra.products.list({ limit: 10 });
console.log(products[0].title);
```

### Creating resources

```ts
const { data: product } = await hydra.products.create({
  title: 'Classic T-Shirt',
  status: 'active',
  variants: [
    { title: 'Small', price: 2500, sku: 'TSHIRT-S' },
    { title: 'Medium', price: 2500, sku: 'TSHIRT-M' },
  ],
});
```

### Updating resources

```ts
const { data: updated } = await hydra.products.update('prod_abc123', {
  title: 'Premium T-Shirt',
});
```

### Error handling

```ts
import { Hydra, HydraNotFoundError, HydraValidationError } from '@gethydra/sdk';

try {
  await hydra.products.get('prod_nonexistent');
} catch (err) {
  if (err instanceof HydraNotFoundError) {
    console.log('Product not found');
  } else if (err instanceof HydraValidationError) {
    console.log('Validation:', err.message);
  }
}
```

### Pagination

Each list resource has built-in `iterate()` and `toArray()` methods for cursor-based pagination:

```ts
for await (const product of hydra.products.iterate({ limit: 50 })) {
  console.log(product.title);
}
```

Or collect all pages into an array:

```ts
const all = await hydra.products.toArray({ status: 'active' });
```

The low-level `paginate()` and `toArray()` helpers are also exported for advanced use:

```ts
import { paginate } from '@gethydra/sdk';

for await (const product of paginate((cursor) =>
  hydra.products.list({ limit: 50, cursor })
)) {
  console.log(product.title);
}
```

### Webhook signature verification

```ts
import { verifyWebhookSignature } from '@gethydra/sdk/webhooks';

const isValid = await verifyWebhookSignature(rawBody, signatureHeader, webhookSecret);
```

## Configuration

```ts
const hydra = new Hydra({
  apiKey: 'sk_live_...',
  baseUrl: 'https://api.hydrajs.dev', // default
  timeout: 80_000,                    // 80 seconds (default)
  maxNetworkRetries: 1,               // default
  appInfo: {
    name: 'MyApp',
    version: '1.0.0',
  },
});
```

| Option              | Default                      | Description                                    |
| ------------------- | ---------------------------- | ---------------------------------------------- |
| `apiKey`            | (required)                   | Your Hydra API key (`sk_live_*` or `sk_test_*`) |
| `baseUrl`           | `https://api.hydrajs.dev`    | API base URL                                   |
| `timeout`           | `80000`                      | Request timeout in milliseconds                |
| `maxNetworkRetries` | `1`                          | Max automatic retries on network/server errors |
| `appInfo`           | `undefined`                  | Integration metadata sent in User-Agent        |

Both `timeout` and `maxNetworkRetries` can be overridden per-request.

## Available resources

| Resource             | Property           | Description                          |
| -------------------- | ------------------ | ------------------------------------ |
| Products             | `hydra.products`   | Product catalog                      |
| Variants             | `hydra.variants`   | Product variants (size, color, etc.) |
| Collections          | `hydra.collections`| Grouped product collections          |
| Cart                 | `hydra.cart`       | Shopping cart management             |
| Checkout             | `hydra.checkout`   | Payment checkout flow                |
| Search               | `hydra.search`     | Full-text search and suggestions     |
| Orders               | `hydra.orders`     | Order management                     |
| Fulfillments         | `hydra.fulfillments`| Shipment tracking                   |
| Refunds              | `hydra.refunds`    | Payment refunds                      |
| Returns              | `hydra.returns`    | Return requests                      |
| Draft Orders         | `hydra.draftOrders`| Manual order drafts                  |
| Customers            | `hydra.customers`  | Customer management                  |
| Customer Groups      | `hydra.customerGroups`| Customer segmentation             |
| Addresses            | `hydra.addresses`  | Customer addresses                   |
| Store Credit         | `hydra.storeCredit`| Credit balance and transactions      |
| Inventory            | `hydra.inventory`  | Stock levels and adjustments         |
| Locations            | `hydra.locations`  | Warehouse and store locations        |
| Shipping             | `hydra.shipping`   | Zones and rates                      |
| Promotions           | `hydra.promotions` | Automatic promotions                 |
| Discounts            | `hydra.discounts`  | Discount codes                       |
| Images               | `hydra.images`     | Media library                        |
| Webhooks             | `hydra.webhooks`   | Event subscriptions                  |
| Store                | `hydra.store`      | Store settings                       |
| Tags                 | `hydra.tags`       | Resource tagging                     |
| Redirects            | `hydra.redirects`  | URL redirects                        |
| Companies            | `hydra.companies`  | B2B companies                        |
| Purchase Orders      | `hydra.purchaseOrders`| Supplier purchase orders          |
| Fulfillment Orders   | `hydra.fulfillmentOrders`| Fulfillment routing            |
| Metafields           | `hydra.metafields` | Custom structured data               |
| Tax                  | `hydra.tax`        | Tax groups and rates                 |
| Exchange Rates       | `hydra.exchangeRates`| Currency exchange rates            |
| Navigation           | `hydra.navigation` | Menu management                      |
| Notifications        | `hydra.notifications`| Notification logs                  |
| Analytics            | `hydra.analytics`  | Sales and performance data           |

## TypeScript

The SDK is written in TypeScript and exports types for all API resources:

```ts
import type { Product, Order, Customer } from '@gethydra/sdk';
```

## Support

For bug reports and feature requests, open an issue on [GitHub](https://github.com/Hydra-headless-commerce/website/issues).
