// src/errors.ts
var HydraError = class extends Error {
  code;
  status;
  field;
  details;
  retryAfter;
  /** Raw response body when the API returns non-JSON (e.g. CDN 502 HTML page) */
  rawBody;
  constructor(body, status, headers, rawBody) {
    super(body.error.message);
    this.name = "HydraError";
    this.code = body.error.code;
    this.status = status;
    this.field = body.error.field;
    this.details = body.error.details;
    this.rawBody = rawBody;
    const retry = headers.get("Retry-After");
    if (retry) this.retryAfter = parseInt(retry, 10);
  }
  get isRetryable() {
    return this.status === 429 || this.status >= 500;
  }
  get isNotFound() {
    return this.status === 404;
  }
  get isValidationError() {
    return this.code === "validation_error";
  }
};
var HydraConnectionError = class extends HydraError {
  constructor(message) {
    super({ error: { code: "connection_error", message } }, 0, new Headers());
    this.name = "HydraConnectionError";
  }
};
var HydraAuthenticationError = class extends HydraError {
  constructor(body, headers) {
    super(body, 401, headers);
    this.name = "HydraAuthenticationError";
  }
};
var HydraPermissionError = class extends HydraError {
  constructor(body, headers) {
    super(body, 403, headers);
    this.name = "HydraPermissionError";
  }
};
var HydraNotFoundError = class extends HydraError {
  constructor(body, headers) {
    super(body, 404, headers);
    this.name = "HydraNotFoundError";
  }
};
var HydraRateLimitError = class extends HydraError {
  constructor(body, headers) {
    super(body, 429, headers);
    this.name = "HydraRateLimitError";
  }
};
var HydraValidationError = class extends HydraError {
  constructor(body, headers) {
    super(body, 400, headers);
    this.name = "HydraValidationError";
  }
};
var HydraIdempotencyError = class extends HydraError {
  constructor(body, headers) {
    super(body, 409, headers);
    this.name = "HydraIdempotencyError";
  }
};

// src/pagination.ts
async function* paginate(fetchPage, options) {
  let cursor;
  let pages = 0;
  const maxPages = options?.maxPages;
  do {
    const page = await fetchPage(cursor);
    pages++;
    for (const item of page.data) {
      yield item;
    }
    cursor = page.pagination.has_more ? page.pagination.cursor ?? void 0 : void 0;
  } while (cursor && (maxPages === void 0 || pages < maxPages));
}
var DEFAULT_TO_ARRAY_LIMIT = 1e4;
async function toArray(iterator, options) {
  const limit = options?.limit ?? DEFAULT_TO_ARRAY_LIMIT;
  const results = [];
  for await (const item of iterator) {
    results.push(item);
    if (results.length >= limit) break;
  }
  return results;
}

// src/resources/products.ts
var ProductsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/products", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/products/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/products", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/products/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/products/${id}`);
  }
  async batchCreate(body, options) {
    return this.client.request("POST", "/v1/products/batch", { body, ...options });
  }
  async duplicate(id, body) {
    return this.client.request("POST", `/v1/products/${id}/duplicate`, { body });
  }
  async getStats(id) {
    return this.client.request("GET", `/v1/products/${id}/stats`);
  }
  // Variant sub-resources (nested under product)
  async listVariants(productId, params) {
    return this.client.request("GET", `/v1/products/${productId}/variants`, { params });
  }
  async createVariant(productId, body, options) {
    return this.client.request("POST", `/v1/products/${productId}/variants`, { body, ...options });
  }
  async generateVariants(productId, body) {
    return this.client.request("POST", `/v1/products/${productId}/variants/generate`, { body });
  }
  // Image sub-resources (nested under product)
  async listImages(productId) {
    return this.client.request("GET", `/v1/products/${productId}/images`);
  }
  async uploadImage(productId, formData) {
    return this.client.upload(`/v1/products/${productId}/images`, formData);
  }
  async attachImages(productId, body) {
    return this.client.request("POST", `/v1/products/${productId}/images/attach`, { body });
  }
  // Metafield sub-resources
  async setMetafield(productId, slug, body) {
    return this.client.request("PUT", `/v1/products/${productId}/metafields/${slug}`, { body });
  }
  async clearMetafield(productId, slug) {
    return this.client.request("DELETE", `/v1/products/${productId}/metafields/${slug}`);
  }
};

// src/resources/variants.ts
var VariantsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async get(id, params) {
    return this.client.request("GET", `/v1/variants/${id}`, { params });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/variants/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/variants/${id}`);
  }
  // Price keys
  async listPrices(variantId) {
    return this.client.request("GET", `/v1/variants/${variantId}/prices`);
  }
  async upsertPrice(variantId, priceKeySlug, body) {
    return this.client.request("PUT", `/v1/variants/${variantId}/prices/${priceKeySlug}`, { body });
  }
  async deletePrice(variantId, priceKeySlug) {
    return this.client.request("DELETE", `/v1/variants/${variantId}/prices/${priceKeySlug}`);
  }
  // Metafield sub-resources
  async setMetafield(variantId, slug, body) {
    return this.client.request("PUT", `/v1/variants/${variantId}/metafields/${slug}`, { body });
  }
  async clearMetafield(variantId, slug) {
    return this.client.request("DELETE", `/v1/variants/${variantId}/metafields/${slug}`);
  }
};

// src/resources/collections.ts
var CollectionsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/collections", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/collections/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/collections", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/collections/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/collections/${id}`);
  }
  async tree() {
    return this.client.request("GET", "/v1/collections/tree");
  }
  async reorder(body) {
    return this.client.request("PATCH", "/v1/collections/reorder", { body });
  }
  async addProducts(collectionId, body) {
    return this.client.request("POST", `/v1/collections/${collectionId}/products`, { body });
  }
  async reorderProducts(collectionId, body) {
    return this.client.request("PATCH", `/v1/collections/${collectionId}/products/reorder`, {
      body
    });
  }
  async removeProduct(collectionId, productId) {
    return this.client.request("DELETE", `/v1/collections/${collectionId}/products/${productId}`);
  }
  // Metafield sub-resources
  async setMetafield(collectionId, slug, body) {
    return this.client.request("PUT", `/v1/collections/${collectionId}/metafields/${slug}`, {
      body
    });
  }
  async clearMetafield(collectionId, slug) {
    return this.client.request("DELETE", `/v1/collections/${collectionId}/metafields/${slug}`);
  }
};

// src/resources/cart.ts
var CartResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async create() {
    return this.client.request("POST", "/v1/cart");
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/cart/${id}`, { params });
  }
  async addItem(cartId, body) {
    return this.client.request("POST", `/v1/cart/${cartId}/items`, { body });
  }
  async updateItem(cartId, itemId, body) {
    return this.client.request("PATCH", `/v1/cart/${cartId}/items/${itemId}`, { body });
  }
  async removeItem(cartId, itemId) {
    return this.client.request("DELETE", `/v1/cart/${cartId}/items/${itemId}`);
  }
  async clear(cartId) {
    return this.client.request("DELETE", `/v1/cart/${cartId}`);
  }
};

// src/resources/checkout.ts
var CheckoutResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async create(body, options) {
    return this.client.request("POST", "/v1/checkout", { body, ...options });
  }
  async get(id) {
    return this.client.request("GET", `/v1/checkout/${id}`);
  }
  async applyDiscount(checkoutId, body) {
    return this.client.request("POST", `/v1/checkout/${checkoutId}/discount`, { body });
  }
  async removeDiscount(checkoutId) {
    return this.client.request("DELETE", `/v1/checkout/${checkoutId}/discount`);
  }
  async applyCredit(checkoutId, body) {
    return this.client.request("POST", `/v1/checkout/${checkoutId}/credit`, { body });
  }
  async removeCredit(checkoutId) {
    return this.client.request("DELETE", `/v1/checkout/${checkoutId}/credit`);
  }
  async completeWithCredit(checkoutId) {
    return this.client.request("POST", `/v1/checkout/${checkoutId}/complete`);
  }
};

// src/resources/orders.ts
var OrdersResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/orders", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/orders/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/orders", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/orders/${id}`, { body });
  }
  async listFulfillmentOrders(orderId) {
    return this.client.request("GET", `/v1/orders/${orderId}/fulfillment-orders`);
  }
  /**
   * Returns the API path for downloading the invoice PDF for an order.
   * The first request to this endpoint assigns a permanent invoice number.
   */
  invoiceUrl(orderId) {
    return `/v1/orders/${orderId}/invoice`;
  }
  // Metafield sub-resources
  async setMetafield(orderId, slug, body) {
    return this.client.request("PUT", `/v1/orders/${orderId}/metafields/${slug}`, { body });
  }
  async clearMetafield(orderId, slug) {
    return this.client.request("DELETE", `/v1/orders/${orderId}/metafields/${slug}`);
  }
};

// src/resources/fulfillments.ts
var FulfillmentsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  /** Create a fulfillment for a fulfillment order */
  async create(fulfillmentOrderId, body, options) {
    return this.client.request(
      "POST",
      `/v1/fulfillment-orders/${fulfillmentOrderId}/fulfillments`,
      {
        body,
        ...options
      }
    );
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/fulfillments/${id}`, { body });
  }
  async cancel(id, body) {
    return this.client.request("DELETE", `/v1/fulfillments/${id}`, { body });
  }
};

// src/resources/refunds.ts
var RefundsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/refunds", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/refunds/${id}`, { params });
  }
  async create(orderId, body, options) {
    return this.client.request("POST", `/v1/orders/${orderId}/refunds`, { body, ...options });
  }
  async listByOrder(orderId) {
    return this.client.request("GET", `/v1/orders/${orderId}/refunds`);
  }
  async retry(id) {
    return this.client.request("POST", `/v1/refunds/${id}/retry`);
  }
  /**
   * Returns the API path for downloading the credit note PDF for a refund.
   * The first request to this endpoint assigns a permanent credit note number.
   */
  creditNoteUrl(id) {
    return `/v1/refunds/${id}/credit-note`;
  }
};

// src/resources/returns.ts
var ReturnsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/returns", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/returns/${id}`, { params });
  }
  async create(orderId, body, options) {
    return this.client.request("POST", `/v1/orders/${orderId}/returns`, { body, ...options });
  }
  async listByOrder(orderId) {
    return this.client.request("GET", `/v1/orders/${orderId}/returns`);
  }
  async approve(id, body) {
    return this.client.request("POST", `/v1/returns/${id}/approve`, { body });
  }
  async receive(id, body) {
    return this.client.request("POST", `/v1/returns/${id}/receive`, { body });
  }
  async close(id) {
    return this.client.request("POST", `/v1/returns/${id}/close`);
  }
  async reject(id, body) {
    return this.client.request("POST", `/v1/returns/${id}/reject`, { body });
  }
  async cancel(id) {
    return this.client.request("POST", `/v1/returns/${id}/cancel`);
  }
};

// src/resources/draft-orders.ts
var DraftOrdersResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/draft-orders", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/draft-orders/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/draft-orders", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/draft-orders/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/draft-orders/${id}`);
  }
  async addItems(draftOrderId, body) {
    return this.client.request("POST", `/v1/draft-orders/${draftOrderId}/items`, { body });
  }
  async updateItem(draftOrderId, itemId, body) {
    return this.client.request("PATCH", `/v1/draft-orders/${draftOrderId}/items/${itemId}`, {
      body
    });
  }
  async removeItem(draftOrderId, itemId) {
    return this.client.request("DELETE", `/v1/draft-orders/${draftOrderId}/items/${itemId}`);
  }
  async complete(id) {
    return this.client.request("POST", `/v1/draft-orders/${id}/complete`);
  }
  async send(id, body) {
    return this.client.request("POST", `/v1/draft-orders/${id}/send`, {
      body: body ?? void 0
    });
  }
};

// src/resources/customers.ts
var CustomersResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/customers", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/customers/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/customers", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/customers/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/customers/${id}`);
  }
  // Address sub-resources
  async listAddresses(customerId) {
    return this.client.request("GET", `/v1/customers/${customerId}/addresses`);
  }
  async createAddress(customerId, body) {
    return this.client.request("POST", `/v1/customers/${customerId}/addresses`, { body });
  }
  // Note sub-resources
  async listNotes(customerId) {
    return this.client.request("GET", `/v1/customers/${customerId}/notes`);
  }
  async createNote(customerId, body) {
    return this.client.request("POST", `/v1/customers/${customerId}/notes`, { body });
  }
  async deleteNote(customerId, noteId) {
    return this.client.request("DELETE", `/v1/customers/${customerId}/notes/${noteId}`);
  }
  // Metafield sub-resources
  async setMetafield(customerId, slug, body) {
    return this.client.request("PUT", `/v1/customers/${customerId}/metafields/${slug}`, { body });
  }
  async clearMetafield(customerId, slug) {
    return this.client.request("DELETE", `/v1/customers/${customerId}/metafields/${slug}`);
  }
};

// src/resources/customer-groups.ts
var CustomerGroupsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/customer-groups", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/customer-groups/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/customer-groups", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/customer-groups/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/customer-groups/${id}`);
  }
  async addMembers(groupId, body) {
    return this.client.request("POST", `/v1/customer-groups/${groupId}/members`, { body });
  }
  async removeMember(groupId, customerId) {
    return this.client.request("DELETE", `/v1/customer-groups/${groupId}/members/${customerId}`);
  }
};

// src/resources/addresses.ts
var AddressesResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async update(id, body) {
    return this.client.request("PATCH", `/v1/addresses/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/addresses/${id}`);
  }
};

// src/resources/inventory.ts
var InventoryResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/inventory", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async listAdjustments(params) {
    return this.client.request("GET", "/v1/inventory/adjustments", { params });
  }
  iterateAdjustments(params, options) {
    return paginate((cursor) => this.listAdjustments({ ...params, cursor }), options);
  }
  async adjustmentsToArray(params, options) {
    return toArray(this.iterateAdjustments(params, options), options);
  }
  async set(variantId, body) {
    return this.client.request("PATCH", `/v1/inventory/${variantId}`, { body });
  }
  async adjust(variantId, body) {
    return this.client.request("POST", `/v1/inventory/${variantId}/adjust`, { body });
  }
  async listVariantAdjustments(variantId, params) {
    return this.client.request("GET", `/v1/inventory/${variantId}/adjustments`, { params });
  }
  iterateVariantAdjustments(variantId, params, options) {
    return paginate(
      (cursor) => this.listVariantAdjustments(variantId, { ...params, cursor }),
      options
    );
  }
  async variantAdjustmentsToArray(variantId, params, options) {
    return toArray(this.iterateVariantAdjustments(variantId, params, options), options);
  }
};

// src/resources/shipping.ts
var ShippingResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  // Zones
  async listZones(params) {
    return this.client.request("GET", "/v1/shipping/zones", { params });
  }
  iterateZones(params, options) {
    return paginate((cursor) => this.listZones({ ...params, cursor }), options);
  }
  async zonesToArray(params, options) {
    return toArray(this.iterateZones(params, options), options);
  }
  async getZone(id, params) {
    return this.client.request("GET", `/v1/shipping/zones/${id}`, { params });
  }
  async createZone(body, options) {
    return this.client.request("POST", "/v1/shipping/zones", { body, ...options });
  }
  async updateZone(id, body) {
    return this.client.request("PATCH", `/v1/shipping/zones/${id}`, { body });
  }
  async deleteZone(id) {
    return this.client.request("DELETE", `/v1/shipping/zones/${id}`);
  }
  // Rates
  async createRate(zoneId, body, options) {
    return this.client.request("POST", `/v1/shipping/zones/${zoneId}/rates`, { body, ...options });
  }
  async updateRate(id, body) {
    return this.client.request("PATCH", `/v1/shipping/rates/${id}`, { body });
  }
  async deleteRate(id) {
    return this.client.request("DELETE", `/v1/shipping/rates/${id}`);
  }
  /** Get available shipping rates for a destination (public access) */
  async getAvailableRates(body) {
    return this.client.request("POST", "/v1/shipping/rates", { body });
  }
};

// src/resources/promotions.ts
var PromotionsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/promotions", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/promotions/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/promotions", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/promotions/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/promotions/${id}`);
  }
};

// src/resources/discounts.ts
var DiscountsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/discounts", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/discounts/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/discounts", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/discounts/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/discounts/${id}`);
  }
};

// src/resources/images.ts
var ImagesResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/images", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  /** Upload an image to the store library */
  async upload(formData) {
    return this.client.upload("/v1/images", formData);
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/images/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/images/${id}`);
  }
  async detach(id) {
    return this.client.request("POST", `/v1/images/${id}/detach`);
  }
  async batchDelete(imageIds) {
    return this.client.request("POST", "/v1/images/batch-delete", {
      body: { image_ids: imageIds }
    });
  }
  async batchDetach(imageIds) {
    return this.client.request("POST", "/v1/images/batch-detach", {
      body: { image_ids: imageIds }
    });
  }
  async reorder(body) {
    return this.client.request("PATCH", "/v1/images/reorder", { body });
  }
};

// src/resources/webhooks.ts
var WebhooksResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/webhooks", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/webhooks/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/webhooks", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/webhooks/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/webhooks/${id}`);
  }
};

// src/resources/store.ts
var StoreResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async get(params) {
    return this.client.request("GET", "/v1/store", { params });
  }
  async update(body) {
    return this.client.request("PATCH", "/v1/store", { body });
  }
  async getDomainRecord() {
    return this.client.request("GET", "/v1/store/domain/record");
  }
  async verifyDomain() {
    return this.client.request("POST", "/v1/store/domain/verify");
  }
  async publish() {
    return this.client.request("POST", "/v1/store/publish");
  }
};

// src/resources/tags.ts
var TagsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/tags", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/tags", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/tags/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/tags/${id}`);
  }
};

// src/resources/redirects.ts
var RedirectsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/redirects", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/redirects", { body, ...options });
  }
  async lookup(path) {
    return this.client.request("GET", "/v1/redirects/lookup", { params: { path } });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/redirects/${id}`);
  }
};

// src/resources/companies.ts
var CompaniesResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/companies", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/companies/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/companies", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/companies/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/companies/${id}`);
  }
  // Addresses
  async listAddresses(companyId) {
    return this.client.request("GET", `/v1/companies/${companyId}/addresses`);
  }
  async createAddress(companyId, body) {
    return this.client.request("POST", `/v1/companies/${companyId}/addresses`, { body });
  }
  async updateAddress(companyId, addressId, body) {
    return this.client.request("PATCH", `/v1/companies/${companyId}/addresses/${addressId}`, {
      body
    });
  }
  async deleteAddress(companyId, addressId) {
    return this.client.request("DELETE", `/v1/companies/${companyId}/addresses/${addressId}`);
  }
  // Contacts
  async listContacts(companyId) {
    return this.client.request("GET", `/v1/companies/${companyId}/contacts`);
  }
  async createContact(companyId, body) {
    return this.client.request("POST", `/v1/companies/${companyId}/contacts`, { body });
  }
  async updateContact(companyId, contactId, body) {
    return this.client.request("PATCH", `/v1/companies/${companyId}/contacts/${contactId}`, {
      body
    });
  }
  async deleteContact(companyId, contactId) {
    return this.client.request("DELETE", `/v1/companies/${companyId}/contacts/${contactId}`);
  }
  // Notes
  async listNotes(companyId) {
    return this.client.request("GET", `/v1/companies/${companyId}/notes`);
  }
  async createNote(companyId, body) {
    return this.client.request("POST", `/v1/companies/${companyId}/notes`, { body });
  }
  async deleteNote(companyId, noteId) {
    return this.client.request("DELETE", `/v1/companies/${companyId}/notes/${noteId}`);
  }
};

// src/resources/purchase-orders.ts
var PurchaseOrdersResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/purchase-orders", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id, params) {
    return this.client.request("GET", `/v1/purchase-orders/${id}`, { params });
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/purchase-orders", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/purchase-orders/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/purchase-orders/${id}`);
  }
  // Item management
  async addItem(purchaseOrderId, body) {
    return this.client.request("POST", `/v1/purchase-orders/${purchaseOrderId}/items`, { body });
  }
  async updateItem(purchaseOrderId, itemId, body) {
    return this.client.request("PATCH", `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}`, {
      body
    });
  }
  async removeItem(purchaseOrderId, itemId) {
    return this.client.request("DELETE", `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}`);
  }
  // Actions
  async markOrdered(id) {
    return this.client.request("POST", `/v1/purchase-orders/${id}/order`);
  }
  async receive(id, body) {
    return this.client.request("POST", `/v1/purchase-orders/${id}/receive`, { body });
  }
  async cancel(id) {
    return this.client.request("POST", `/v1/purchase-orders/${id}/cancel`);
  }
  async close(id) {
    return this.client.request("POST", `/v1/purchase-orders/${id}/close`);
  }
  // Metafield sub-resources (on items)
  async setItemMetafield(purchaseOrderId, itemId, slug, body) {
    return this.client.request(
      "PUT",
      `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}/metafields/${slug}`,
      { body }
    );
  }
  async clearItemMetafield(purchaseOrderId, itemId, slug) {
    return this.client.request(
      "DELETE",
      `/v1/purchase-orders/${purchaseOrderId}/items/${itemId}/metafields/${slug}`
    );
  }
};

// src/resources/fulfillment-orders.ts
var FulfillmentOrdersResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  /** List fulfillment orders for an order (use orders.listFulfillmentOrders instead) */
  async listForOrder(orderId) {
    return this.client.request("GET", `/v1/orders/${orderId}/fulfillment-orders`);
  }
};

// src/resources/metafields.ts
var MetafieldsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  /** List metafield definitions for the store */
  async listDefinitions(params) {
    return this.client.request("GET", "/v1/store/metafields", { params });
  }
  async createDefinition(body) {
    return this.client.request("POST", "/v1/store/metafields", { body });
  }
  async updateDefinition(ownerType, slug, body) {
    return this.client.request("PATCH", `/v1/store/metafields/${ownerType}/${slug}`, { body });
  }
  async archiveDefinition(ownerType, slug) {
    return this.client.request("DELETE", `/v1/store/metafields/${ownerType}/${slug}`);
  }
  async reorderDefinitions(ownerType, body) {
    return this.client.request("PUT", `/v1/store/metafields/${ownerType}/reorder`, { body });
  }
};

// src/resources/tax.ts
var TaxResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  // Groups
  async listGroups(params) {
    return this.client.request("GET", "/v1/tax/groups", { params });
  }
  iterateGroups(params, options) {
    return paginate((cursor) => this.listGroups({ ...params, cursor }), options);
  }
  async groupsToArray(params, options) {
    return toArray(this.iterateGroups(params, options), options);
  }
  async getGroup(id) {
    return this.client.request("GET", `/v1/tax/groups/${id}`);
  }
  async createGroup(body, options) {
    return this.client.request("POST", "/v1/tax/groups", { body, ...options });
  }
  async updateGroup(id, body) {
    return this.client.request("PATCH", `/v1/tax/groups/${id}`, { body });
  }
  async deleteGroup(id) {
    return this.client.request("DELETE", `/v1/tax/groups/${id}`);
  }
  // Rates
  async listRates(params) {
    return this.client.request("GET", "/v1/tax/rates", { params });
  }
  iterateRates(params, options) {
    return paginate((cursor) => this.listRates({ ...params, cursor }), options);
  }
  async ratesToArray(params, options) {
    return toArray(this.iterateRates(params, options), options);
  }
  async createRate(body, options) {
    return this.client.request("POST", "/v1/tax/rates", { body, ...options });
  }
  async updateRate(id, body) {
    return this.client.request("PATCH", `/v1/tax/rates/${id}`, { body });
  }
  async deleteRate(id) {
    return this.client.request("DELETE", `/v1/tax/rates/${id}`);
  }
  // Exemptions
  async listExemptions(params) {
    return this.client.request("GET", "/v1/tax/exemptions", { params });
  }
  iterateExemptions(params, options) {
    return paginate((cursor) => this.listExemptions({ ...params, cursor }), options);
  }
  async exemptionsToArray(params, options) {
    return toArray(this.iterateExemptions(params, options), options);
  }
  async createExemption(body, options) {
    return this.client.request("POST", "/v1/tax/exemptions", { body, ...options });
  }
  async deleteExemption(id) {
    return this.client.request("DELETE", `/v1/tax/exemptions/${id}`);
  }
};

// src/resources/exchange-rates.ts
var ExchangeRatesResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/exchange-rates", { params });
  }
  async refresh() {
    return this.client.request("POST", "/v1/exchange-rates/refresh");
  }
};

// src/resources/filter-attributes.ts
var FilterAttributesResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/filter-attributes", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/filter-attributes/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/filter-attributes", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/filter-attributes/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/filter-attributes/${id}`);
  }
  async reorder(body) {
    return this.client.request("PUT", "/v1/filter-attributes/reorder", { body });
  }
  async discover() {
    return this.client.request("GET", "/v1/filter-attributes/discover");
  }
};

// src/resources/navigation.ts
var NavigationResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/navigation", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/navigation/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/navigation", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/navigation/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/navigation/${id}`);
  }
  async addItem(menuId, body) {
    return this.client.request("POST", `/v1/navigation/${menuId}/items`, { body });
  }
  async updateItem(menuId, itemId, body) {
    return this.client.request("PATCH", `/v1/navigation/${menuId}/items/${itemId}`, { body });
  }
  async deleteItem(menuId, itemId) {
    return this.client.request("DELETE", `/v1/navigation/${menuId}/items/${itemId}`);
  }
  async reorderItems(menuId, body) {
    return this.client.request("PATCH", `/v1/navigation/${menuId}/items/reorder`, { body });
  }
};

// src/resources/notifications.ts
var NotificationsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/notifications", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/notifications/${id}`);
  }
};

// src/resources/checkouts.ts
var CheckoutsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/checkouts", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
};

// src/resources/analytics.ts
var AnalyticsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async summary(params) {
    return this.client.request("GET", "/v1/analytics/summary", { params });
  }
  async revenue(params) {
    return this.client.request("GET", "/v1/analytics/revenue", { params });
  }
  async orders(params) {
    return this.client.request("GET", "/v1/analytics/orders", { params });
  }
  async topProducts(params) {
    return this.client.request("GET", "/v1/analytics/top-products", { params });
  }
  async actionItems() {
    return this.client.request("GET", "/v1/analytics/action-items");
  }
};

// src/resources/store-credit.ts
var StoreCreditResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getBalance(customerId) {
    return this.client.request("GET", `/v1/customers/${customerId}/credit`);
  }
  async issue(customerId, body, options) {
    return this.client.request("POST", `/v1/customers/${customerId}/credit`, {
      body,
      ...options
    });
  }
  async listTransactions(customerId, params) {
    return this.client.request("GET", `/v1/customers/${customerId}/credit/transactions`, {
      params
    });
  }
  iterateTransactions(customerId, params, options) {
    return paginate(
      (cursor) => this.listTransactions(customerId, { ...params, cursor }),
      options
    );
  }
  async transactionsToArray(customerId, params, options) {
    return toArray(this.iterateTransactions(customerId, params, options), options);
  }
};

// src/resources/search.ts
var SearchResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async search(params) {
    return this.client.request("GET", "/v1/search", { params });
  }
  async suggest(params) {
    return this.client.request("GET", "/v1/search/suggest", { params });
  }
};

// src/resources/locations.ts
var LocationsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(params) {
    return this.client.request("GET", "/v1/locations", { params });
  }
  iterate(params, options) {
    return paginate((cursor) => this.list({ ...params, cursor }), options);
  }
  async toArray(params, options) {
    return toArray(this.iterate(params, options), options);
  }
  async get(id) {
    return this.client.request("GET", `/v1/locations/${id}`);
  }
  async create(body, options) {
    return this.client.request("POST", "/v1/locations", { body, ...options });
  }
  async update(id, body) {
    return this.client.request("PATCH", `/v1/locations/${id}`, { body });
  }
  async delete(id) {
    return this.client.request("DELETE", `/v1/locations/${id}`);
  }
  async setDefault(id) {
    return this.client.request("POST", `/v1/locations/${id}/default`);
  }
  async transfer(id, body) {
    return this.client.request("POST", `/v1/locations/${id}/transfer`, { body });
  }
};

// src/resources/integrations.ts
var IntegrationsResource = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async getAccountingStatus() {
    return this.client.request("GET", "/v1/integrations/accounting/status");
  }
  async getAuthorizeUrl() {
    return this.client.request("GET", "/v1/integrations/accounting/authorize");
  }
  async testConnection() {
    return this.client.request("POST", "/v1/integrations/accounting/test");
  }
  async disconnect() {
    await this.client.request("DELETE", "/v1/integrations/accounting");
  }
  async updateSettings(settings) {
    return this.client.request("PATCH", "/v1/integrations/accounting/settings", {
      body: settings
    });
  }
  async syncOrder(orderId) {
    return this.client.request("POST", `/v1/integrations/accounting/sync/${orderId}`);
  }
  async retrySyncOrder(orderId) {
    return this.client.request("POST", `/v1/integrations/accounting/sync/${orderId}/retry`);
  }
  async listSyncLog(params) {
    return this.client.request("GET", "/v1/integrations/accounting/sync-log", { params });
  }
  iterateSyncLog(params, options) {
    return paginate((cursor) => this.listSyncLog({ ...params, cursor }), options);
  }
  async toArraySyncLog(params, options) {
    return toArray(this.iterateSyncLog(params, options), options);
  }
};

// src/client.ts
var SDK_VERSION = "0.1.0";
var INITIAL_RETRY_DELAY = 0.5;
var MAX_RETRY_DELAY = 5;
var MAX_RETRY_AFTER = 60;
var VALID_CONFIG_KEYS = /* @__PURE__ */ new Set([
  "apiKey",
  "baseUrl",
  "timeout",
  "maxNetworkRetries",
  "appInfo"
]);
function getRetryDelay(attempt, retryAfter) {
  let delay = Math.min(INITIAL_RETRY_DELAY * Math.pow(2, attempt - 1), MAX_RETRY_DELAY);
  delay *= 0.5 * (1 + Math.random());
  delay = Math.max(INITIAL_RETRY_DELAY, delay);
  if (retryAfter !== void 0 && retryAfter <= MAX_RETRY_AFTER) {
    delay = Math.max(delay, retryAfter);
  }
  return delay * 1e3;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
var Hydra = class {
  apiKey;
  baseUrl;
  timeout;
  maxNetworkRetries;
  appInfo;
  // P1: Storefront essentials
  products = new ProductsResource(this);
  variants = new VariantsResource(this);
  collections = new CollectionsResource(this);
  cart = new CartResource(this);
  checkout = new CheckoutResource(this);
  checkouts = new CheckoutsResource(this);
  search = new SearchResource(this);
  // P2: Order management
  orders = new OrdersResource(this);
  fulfillments = new FulfillmentsResource(this);
  refunds = new RefundsResource(this);
  returns = new ReturnsResource(this);
  draftOrders = new DraftOrdersResource(this);
  // P3: Customers
  customers = new CustomersResource(this);
  customerGroups = new CustomerGroupsResource(this);
  addresses = new AddressesResource(this);
  storeCredit = new StoreCreditResource(this);
  // P4: Commerce operations
  inventory = new InventoryResource(this);
  shipping = new ShippingResource(this);
  promotions = new PromotionsResource(this);
  discounts = new DiscountsResource(this);
  // P5: Media & integrations
  images = new ImagesResource(this);
  webhooks = new WebhooksResource(this);
  store = new StoreResource(this);
  tags = new TagsResource(this);
  redirects = new RedirectsResource(this);
  // P6: Advanced
  locations = new LocationsResource(this);
  companies = new CompaniesResource(this);
  purchaseOrders = new PurchaseOrdersResource(this);
  fulfillmentOrders = new FulfillmentOrdersResource(this);
  metafields = new MetafieldsResource(this);
  tax = new TaxResource(this);
  exchangeRates = new ExchangeRatesResource(this);
  filterAttributes = new FilterAttributesResource(this);
  navigation = new NavigationResource(this);
  notifications = new NotificationsResource(this);
  analytics = new AnalyticsResource(this);
  integrations = new IntegrationsResource(this);
  constructor(config) {
    for (const key of Object.keys(config)) {
      if (!VALID_CONFIG_KEYS.has(key)) {
        throw new Error(
          `Hydra: unknown config option "${key}". Valid options: ${[...VALID_CONFIG_KEYS].join(", ")}`
        );
      }
    }
    if (!config.apiKey) {
      throw new Error("Hydra: apiKey is required");
    }
    this.apiKey = config.apiKey;
    this.baseUrl = config.baseUrl ?? "https://api.hydrajs.dev";
    this.timeout = config.timeout ?? 8e4;
    this.maxNetworkRetries = config.maxNetworkRetries ?? 1;
    this.appInfo = config.appInfo;
  }
  async request(method, path, options) {
    const maxRetries = options?.maxNetworkRetries ?? this.maxNetworkRetries;
    let idempotencyKey = options?.idempotencyKey;
    if (method === "POST" && !idempotencyKey && maxRetries > 0) {
      idempotencyKey = `hydra-retry-${crypto.randomUUID()}`;
    }
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await this.executeRequest(method, path, {
          ...options,
          idempotencyKey
        });
        if (res.ok) {
          if (res.status === 204) return void 0;
          return res.json();
        }
        const error = await this.buildError(res);
        if (!this.shouldRetry(error, attempt, maxRetries)) {
          throw error;
        }
        lastError = error;
        const retryAfter = error.retryAfter;
        await sleep(getRetryDelay(attempt + 1, retryAfter));
      } catch (e) {
        if (e instanceof HydraError) throw e;
        if (attempt >= maxRetries) {
          const message = e instanceof Error ? e.message : "Connection failed";
          throw new HydraConnectionError(message.includes("abort") ? "Request timed out" : message);
        }
        lastError = e instanceof Error ? e : new Error(String(e));
        await sleep(getRetryDelay(attempt + 1));
      }
    }
    throw lastError;
  }
  /** Multipart upload for file-based endpoints (e.g. images) */
  async upload(path, formData, options) {
    const maxRetries = options?.maxNetworkRetries ?? this.maxNetworkRetries;
    let lastError;
    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        const res = await this.executeUpload(path, formData, options);
        if (res.ok) {
          return res.json();
        }
        const error = await this.buildError(res);
        if (!this.shouldRetry(error, attempt, maxRetries)) {
          throw error;
        }
        lastError = error;
        const retryAfter = error.retryAfter;
        await sleep(getRetryDelay(attempt + 1, retryAfter));
      } catch (e) {
        if (e instanceof HydraError) throw e;
        if (attempt >= maxRetries) {
          const message = e instanceof Error ? e.message : "Connection failed";
          throw new HydraConnectionError(message.includes("abort") ? "Request timed out" : message);
        }
        lastError = e instanceof Error ? e : new Error(String(e));
        await sleep(getRetryDelay(attempt + 1));
      }
    }
    throw lastError;
  }
  // ── Private helpers ──
  executeRequest(method, path, options) {
    const url = new URL(path, this.baseUrl);
    if (options?.params) {
      for (const [key, value] of Object.entries(options.params)) {
        if (value === void 0 || value === null) continue;
        if (Array.isArray(value)) {
          url.searchParams.set(key, value.join(","));
        } else {
          url.searchParams.set(key, String(value));
        }
      }
    }
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      "User-Agent": this.getUserAgent(),
      ...options?.headers
    };
    if (options?.body) {
      headers["Content-Type"] = "application/json";
    }
    if (options?.idempotencyKey) {
      headers["Idempotency-Key"] = options.idempotencyKey;
    }
    const { signal, cleanup } = this.buildSignal(options);
    return fetch(url.toString(), {
      method,
      headers,
      body: options?.body ? JSON.stringify(options.body) : void 0,
      signal
    }).finally(cleanup);
  }
  executeUpload(path, formData, options) {
    const url = new URL(path, this.baseUrl);
    const { signal, cleanup } = this.buildSignal(options);
    return fetch(url.toString(), {
      method: "POST",
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        "User-Agent": this.getUserAgent()
        // No Content-Type — let the runtime set the multipart boundary
      },
      body: formData,
      signal
    }).finally(cleanup);
  }
  /**
   * Build an AbortSignal that fires on timeout OR user-supplied signal,
   * whichever comes first.
   */
  buildSignal(options) {
    const timeout = options?.timeout ?? this.timeout;
    const controller = new AbortController();
    let timeoutId;
    if (timeout > 0) {
      timeoutId = setTimeout(() => controller.abort(), timeout);
    }
    if (options?.signal) {
      if (options.signal.aborted) {
        controller.abort(options.signal.reason);
      } else {
        options.signal.addEventListener("abort", () => controller.abort(options.signal.reason), {
          once: true
        });
      }
    }
    return {
      signal: controller.signal,
      cleanup: () => {
        if (timeoutId) clearTimeout(timeoutId);
      }
    };
  }
  /**
   * Parse an error response into a typed HydraError subclass.
   * Non-JSON bodies (CDN 502, proxy HTML) surface the raw text for debuggability.
   */
  async buildError(res) {
    let body;
    try {
      body = await res.json();
    } catch {
      const text = await res.text().catch(() => "");
      return new HydraConnectionError(
        `Non-JSON error response (HTTP ${res.status}): ${text.slice(0, 200)}`
      );
    }
    switch (res.status) {
      case 401:
        return new HydraAuthenticationError(body, res.headers);
      case 403:
        return new HydraPermissionError(body, res.headers);
      case 404:
        return new HydraNotFoundError(body, res.headers);
      case 409:
        return new HydraIdempotencyError(body, res.headers);
      case 429:
        return new HydraRateLimitError(body, res.headers);
      default:
        if (res.status === 400 && body.error.code === "validation_error") {
          return new HydraValidationError(body, res.headers);
        }
        return new HydraError(body, res.status, res.headers);
    }
  }
  /**
   * Determine whether a failed request should be retried.
   * Client errors (400, 401, 403, 404) are never retried — they won't change.
   */
  shouldRetry(error, attempt, maxRetries) {
    if (attempt >= maxRetries) return false;
    return error.status === 408 || error.status === 409 || error.status === 429 || error.status >= 500;
  }
  getUserAgent() {
    let ua = `hydra-sdk/${SDK_VERSION}`;
    if (this.appInfo) {
      ua += ` ${this.appInfo.name}`;
      if (this.appInfo.version) ua += `/${this.appInfo.version}`;
      if (this.appInfo.url) ua += ` (${this.appInfo.url})`;
    }
    return ua;
  }
};
export {
  AddressesResource,
  AnalyticsResource,
  CartResource,
  CheckoutResource,
  CheckoutsResource,
  CollectionsResource,
  CompaniesResource,
  CustomerGroupsResource,
  CustomersResource,
  DiscountsResource,
  DraftOrdersResource,
  ExchangeRatesResource,
  FulfillmentOrdersResource,
  FulfillmentsResource,
  Hydra,
  HydraAuthenticationError,
  HydraConnectionError,
  HydraError,
  HydraIdempotencyError,
  HydraNotFoundError,
  HydraPermissionError,
  HydraRateLimitError,
  HydraValidationError,
  ImagesResource,
  IntegrationsResource,
  InventoryResource,
  LocationsResource,
  MetafieldsResource,
  NotificationsResource,
  OrdersResource,
  ProductsResource,
  PromotionsResource,
  PurchaseOrdersResource,
  RedirectsResource,
  RefundsResource,
  ReturnsResource,
  SearchResource,
  ShippingResource,
  StoreCreditResource,
  StoreResource,
  TagsResource,
  TaxResource,
  VariantsResource,
  WebhooksResource,
  paginate,
  toArray
};
