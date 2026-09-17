# @gethydra/sdk Changelog

## 0.1.0 (2026-09-06)

Initial release of the Hydra TypeScript SDK.

### Features

- Full typed client for the Hydra REST API
- All resource classes: Products, Variants, Collections, Customers, Customer Groups, Companies, Orders, Draft Orders, Cart, Checkout, Fulfillments, Fulfillment Orders, Returns, Refunds, Store Credit, Inventory, Locations, Shipping, Tax, Promotions, Discounts, Webhooks, Images, Tags, Metafields, Navigation, Notifications, Redirects, Purchase Orders, Addresses, Exchange Rates, Search, Analytics, Store
- Cursor-based pagination with `iterate()` async generator and `toArray()` helper
- Test mode support via `test_mode: true` client option
- Automatic `snake_case` wire format (matches API, no transformation layer)
- Secret key and publishable key authentication
- Sparse fieldsets via `fields` parameter
- Expand support for nested resources
- Idempotency key support on POST requests
- TypeScript-first with generated types from OpenAPI spec
