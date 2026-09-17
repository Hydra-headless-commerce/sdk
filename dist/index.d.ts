interface components {
    schemas: {
        Store: {
            /** @example store_abc123 */
            id: string;
            /** @example Acme Commerce */
            name: string;
            /** @example acme-commerce */
            slug: string;
            /** @example shop.acme.com */
            domain: string | null;
            /** @example false */
            domain_verified: boolean;
            /** @example US */
            business_country: string | null;
            /** @example hello@acme.com */
            contact_email: string | null;
            /** @example +1 5551234567 */
            contact_phone: string | null;
            /** @example Acme Commerce Ltd. */
            legal_business_name: string | null;
            /** @example 123 Main Street */
            business_address_line1: string | null;
            /** @example Suite 400 */
            business_address_line2: string | null;
            /** @example London */
            business_city: string | null;
            /** @example England */
            business_state: string | null;
            /** @example SW1A 1AA */
            business_postal_code: string | null;
            /** @example GB123456789 */
            tax_id: string | null;
            /** @example company */
            legal_entity_type: string | null;
            /** @example 12345678 */
            company_registration_number: string | null;
            /** @example vat */
            tax_id_type: string | null;
            /**
             * @example not_connected
             * @enum {string}
             */
            payment_account_status: "not_connected" | "pending_kyc" | "active";
            /** @example false */
            payment_charges_enabled: boolean;
            /** @example false */
            payment_payouts_enabled: boolean;
            /** @example false */
            payment_details_submitted: boolean;
            /** @example USD */
            currency: string;
            /**
             * @example [
             *       "USD",
             *       "EUR",
             *       "GBP"
             *     ]
             */
            enabled_currencies: string[];
            /** @example 2.5 */
            currency_conversion_margin: number;
            /**
             * @example up
             * @enum {string}
             */
            currency_rounding: "none" | "up" | "down";
            /** @example America/New_York */
            timezone: string;
            /**
             * @example pro
             * @enum {string}
             */
            plan: "free" | "pro";
            /**
             * @example [
             *       "search_analytics",
             *       "merchandising"
             *     ]
             */
            enabled_extensions: string[];
            pricing_config: {
                /** @example 2 */
                next_key_index: number;
                price_keys: components["schemas"]["PriceKeyDetail"][];
            };
            roles_config: {
                /** @example 1 */
                next_key_index: number;
                roles: {
                    /** @example role_1 */
                    key: string;
                    /** @example content-editor */
                    slug: string;
                    /** @example Content Editor */
                    label: string;
                    /**
                     * @example [
                     *       "catalog",
                     *       "orders"
                     *     ]
                     */
                    permissions: string[];
                    /** @example false */
                    archived?: boolean;
                    /**
                     * Format: date-time
                     * @example 2026-01-10T08:00:00.000Z
                     */
                    created_at: string;
                }[];
            };
            /**
             * @example disabled
             * @enum {string}
             */
            checkout_require_account: "disabled" | "optional" | "required";
            /**
             * @example hidden
             * @enum {string}
             */
            checkout_require_phone: "hidden" | "optional" | "required";
            /**
             * @example hidden
             * @enum {string}
             */
            checkout_company_field: "hidden" | "optional" | "required";
            /**
             * @example optional
             * @enum {string}
             */
            checkout_address2_field: "hidden" | "optional";
            /** @example true */
            checkout_discount_codes: boolean;
            /** @example true */
            checkout_order_notes: boolean;
            /** @example false */
            checkout_auto_fulfill: boolean;
            /** @example null */
            checkout_auto_archive_days: number | null;
            /** @example true */
            checkout_confirmation_email: boolean;
            /**
             * @example unchecked
             * @enum {string}
             */
            checkout_marketing_opt_in: "hidden" | "unchecked" | "checked";
            /** @example false */
            checkout_sms_consent: boolean;
            /** @example null */
            checkout_terms_url: string | null;
            /** @example null */
            checkout_privacy_url: string | null;
            /**
             * @example off
             * @enum {string}
             */
            checkout_abandoned_recovery: "1" | "2" | "3" | "off";
            /** @example 10 */
            checkout_recovery_discount: number;
            /** @example false */
            checkout_tipping_enabled: boolean;
            /**
             * @example [
             *       10,
             *       15,
             *       20
             *     ]
             */
            checkout_tip_percentages: number[];
            /**
             * @example disabled
             * @enum {string}
             */
            tax_calculation: "disabled" | "automatic" | "manual";
            /** @example false */
            tax_inclusive: boolean;
            /** @example https://cdn.hydrajs.dev/img_abc123/logo.png */
            brand_logo_url: string | null;
            /** @example #2563eb */
            brand_primary_color: string | null;
            /** @example #475569 */
            brand_secondary_color: string | null;
            /** @example #f1f5f9 */
            brand_tertiary_color: string | null;
            /** @example #16a34a */
            brand_accent_color: string | null;
            /** @example en */
            locale: string;
            /** @example true */
            notifications_enabled: boolean;
            /** @example [] */
            notification_disabled_types: string[];
            /** @example Acme Commerce */
            notification_from_name: string | null;
            /** @example null */
            notification_from_email: string | null;
            /** @example null */
            notification_domain: string | null;
            /**
             * @example null
             * @enum {string|null}
             */
            notification_domain_status: "pending" | "verified" | "failed" | null;
            /** @example null */
            notification_domain_records: {
                /** @example CNAME */
                type: string;
                /** @example resend._domainkey.acmestore.com */
                name: string;
                /** @example abc123.dkim.amazonses.com */
                value: string;
                /** @example 10 */
                priority?: number;
                /** @example verified */
                status?: string;
            }[] | null;
            /**
             * Format: date-time
             * @example 2026-09-08T10:00:00.000Z
             */
            last_published_at: string | null;
            /** @example 3 */
            unpublished_changes_count?: number;
            /**
             * Format: date-time
             * @example 2025-11-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-03-15T12:00:00.000Z
             */
            updated_at: string;
        };
        PriceKeyDetail: {
            /** @example pk_1 */
            key: string;
            /** @example wholesale */
            slug: string;
            /** @example Wholesale */
            label: string;
            /** @example false */
            archived?: boolean;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at: string;
        };
        PublishResponse: {
            /** @example store_abc123 */
            store_id: string;
            /**
             * Format: date-time
             * @example 2026-09-10T15:30:00.000Z
             */
            published_at: string;
            /**
             * Format: date-time
             * @example 2026-09-08T10:00:00.000Z
             */
            previous_published_at: string | null;
            /** @example 12 */
            changes_count: number;
        };
        DomainRecordResponse: {
            /** @example acmestore.com */
            domain: string;
            record: {
                /**
                 * @example TXT
                 * @enum {string}
                 */
                type: "TXT";
                /** @example _hydra-verification.acmestore.com */
                name: string;
                /** @example hydra-verification=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6 */
                value: string;
            };
        };
        DomainVerifyResponse: {
            /** @example acmestore.com */
            domain: string;
            /** @example true */
            verified: boolean;
            record: {
                /**
                 * @example TXT
                 * @enum {string}
                 */
                type: "TXT";
                /** @example _hydra-verification.acmestore.com */
                name: string;
                /** @example hydra-verification=a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6 */
                value: string;
            };
        };
        RoleDetail: {
            /** @example role_1 */
            key: string;
            /** @example content-editor */
            slug: string;
            /** @example Content Editor */
            label: string;
            /**
             * @example [
             *       "catalog",
             *       "orders"
             *     ]
             */
            permissions: string[];
            /** @example false */
            is_built_in: boolean;
            /** @example false */
            archived?: boolean;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at?: string;
        };
        TeamMember: {
            /** @example mem_abc123 */
            id: string;
            /** @example 550e8400-e29b-41d4-a716-446655440000 */
            user_id: string;
            /** @example dev@example.com */
            email: string;
            /** @example developer */
            role: string;
            /** @example Developer */
            role_label: string;
            /** @example false */
            is_pending: boolean;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at: string;
        };
        ApiKey: {
            /** @example key_abc123 */
            id: string;
            /** @example CI Pipeline */
            name: string | null;
            /** @example sk_live_ */
            key_prefix: string;
            /** @example abc12345 */
            key_hint: string;
            /**
             * @example secret
             * @enum {string}
             */
            type: "secret" | "publishable";
            /** @example false */
            is_test: boolean;
            /** @example true */
            is_active: boolean;
            permissions: components["schemas"]["KeyPermissions"];
            /**
             * Format: date-time
             * @example null
             */
            expires_at: string | null;
            /**
             * Format: date-time
             * @example 2026-08-20T14:30:00.000Z
             */
            last_used_at: string | null;
            /**
             * Format: date-time
             * @example 2026-08-12T08:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-12T08:00:00.000Z
             */
            updated_at: string;
        };
        /** @example null */
        KeyPermissions: {
            /** @enum {string} */
            catalog: "none" | "read" | "write";
            /** @enum {string} */
            orders: "none" | "read" | "write";
            /** @enum {string} */
            customers: "none" | "read" | "write";
            /** @enum {string} */
            inventory: "none" | "read" | "write";
            /** @enum {string} */
            shipping: "none" | "read" | "write";
            /** @enum {string} */
            promotions: "none" | "read" | "write";
            /** @enum {string} */
            tax: "none" | "read" | "write";
            /** @enum {string} */
            developer: "none" | "read" | "write";
            /** @enum {string} */
            settings: "none" | "read" | "write";
            /** @enum {string} */
            cart: "none" | "read" | "write";
        } | null;
        ApiKeyWithPlaintext: {
            /** @example key_abc123 */
            id: string;
            /** @example CI Pipeline */
            name: string | null;
            /** @example sk_live_example */
            key: string;
            /** @example sk_live_ */
            key_prefix: string;
            /** @example abc12345 */
            key_hint: string;
            /**
             * @example secret
             * @enum {string}
             */
            type: "secret" | "publishable";
            /** @example false */
            is_test: boolean;
            /** @example true */
            is_active: boolean;
            permissions: components["schemas"]["KeyPermissions"];
            /**
             * Format: date-time
             * @example null
             */
            expires_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            last_used_at: string | null;
            /**
             * Format: date-time
             * @example 2026-08-12T08:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-12T08:00:00.000Z
             */
            updated_at: string;
        };
        TaxGroup: {
            /** @example tg_abc123 */
            id: string;
            /** @example Reduced Rate */
            name: string;
            /** @example Food, books, and children's clothing */
            description: string | null;
            /** @example 3 */
            rate_count: number;
            /** @example 12 */
            product_count: number;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            updated_at: string;
        };
        TaxRate: {
            /** @example txr_abc123 */
            id: string;
            /** @example State Sales Tax */
            name: string;
            /** @example US */
            country: string;
            /** @example CA */
            state: string | null;
            /** @example 7.25 */
            rate: number;
            /** @example false */
            is_shipping_taxed: boolean;
            /** @example tg_abc123 */
            tax_group_id: string | null;
            /** @example Reduced Rate */
            tax_group_name: string | null;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            updated_at: string;
        };
        TaxExemption: {
            /** @example txe_abc123 */
            id: string;
            /**
             * @example product
             * @enum {string}
             */
            resource_type: "product" | "collection" | "customer";
            /** @example prod_abc123 */
            resource_id: string;
            /** @example Blue T-Shirt */
            resource_name: string | null;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            updated_at: string;
        };
        MetaobjectType: {
            /** @example mot_abc123 */
            id: string;
            /** @example mo_1 */
            internal_key: string;
            /** @example influencer */
            slug: string;
            /** @example Influencer */
            label: string;
            /** @example false */
            archived: boolean;
            /** @example 2026-01-15T10:30:00.000Z */
            created_at: string;
            /** @example 2026-01-15T10:30:00.000Z */
            updated_at: string;
        };
        MetaobjectEntry: {
            /** @example moe_abc123 */
            id: string;
            /** @example mot_abc123 */
            type_id: string;
            /** @example Jane Smith */
            display_name: string;
            fields?: {
                [key: string]: unknown;
            };
            /** @example 2026-01-15T10:30:00.000Z */
            created_at: string;
            /** @example 2026-01-15T10:30:00.000Z */
            updated_at: string;
        };
        Product: {
            /** @example prod_abc123 */
            id: string;
            /** @example Classic Cotton T-Shirt */
            title: string;
            /** @example classic-cotton-t-shirt */
            handle: string;
            /** @example Lightweight everyday essential */
            subtitle: string | null;
            /** @example A premium organic cotton t-shirt built for comfort and durability. */
            description: string | null;
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
            /** @example T-Shirts */
            product_type: string | null;
            /** @example Hydra Apparel */
            brand: string | null;
            /** @example Apparel & Accessories > Clothing > Shirts & Tops */
            google_product_category: string | null;
            /** @example 6109.10 */
            hs_code: string | null;
            /** @example US */
            country_of_origin: string | null;
            /** @example tg_abc123 */
            tax_group_id: string | null;
            /** @example Reduced Rate */
            tax_group_name: string | null;
            /**
             * @example physical
             * @enum {string}
             */
            fulfillment_type: "physical" | "digital" | "service";
            /** @example Restocking in Q3. */
            internal_notes: string | null;
            /** @example 1 */
            qty_step: number | null;
            /** @example 2026-09-01 */
            preorder_expected_date: string | null;
            /**
             * @example [
             *       "cotton",
             *       "summer",
             *       "basics"
             *     ]
             */
            tags: string[];
            options: {
                /** @example Color */
                name: string;
                /**
                 * @example [
                 *       "Black",
                 *       "White",
                 *       "Navy"
                 *     ]
                 */
                values: string[];
                /** @example 0 */
                position: number;
            }[];
            specifications: {
                /** @example Material */
                label: string;
                /** @example 100% organic cotton */
                value: string;
            }[];
            variants?: components["schemas"]["Variant"][];
            images?: components["schemas"]["Image"][];
            seo: {
                /** @example Classic Cotton T-Shirt | My Store */
                title?: string;
                /** @example Premium organic cotton t-shirt available in multiple colors. */
                description?: string;
            } | null;
            /**
             * @example {
             *       "fabric_weight": "180gsm"
             *     }
             */
            metadata: {
                [key: string]: string | number;
            } | null;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        Variant: {
            /** @example var_abc123 */
            id: string;
            /** @example prod_abc123 */
            product_id: string;
            /** @example img_abc123 */
            image_id: string | null;
            /** @example Black / M */
            title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example 1234567890123 */
            barcode: string | null;
            /** @example 2999 */
            price: number;
            /** @example 2399 */
            sale_price: number | null;
            sale: components["schemas"]["SaleInfo"];
            /**
             * @example {
             *       "EUR": 2799,
             *       "GBP": 2399
             *     }
             */
            currency_prices: {
                [key: string]: number;
            };
            /**
             * @example {
             *       "EUR": 3699,
             *       "GBP": 3199
             *     }
             */
            currency_sale_prices: {
                [key: string]: number;
            };
            /** @example 850 */
            cost: number | null;
            /** @example comp_abc123 */
            supplier_id: string | null;
            /** @example SUP-BLK-M */
            supplier_sku: string | null;
            /** @example 14 */
            lead_time_days: number | null;
            /** @example true */
            taxable: boolean;
            /** @example txcd_99999999 */
            tax_code: string | null;
            /** @example 6109.10 */
            hs_code: string | null;
            /** @example US */
            country_of_origin: string | null;
            /** @example 150 */
            inventory_quantity: number;
            /** @example 10 */
            low_stock_threshold: number | null;
            /** @example 1 */
            qty_step: number | null;
            /** @example 200 */
            weight: number | null;
            /**
             * @example g
             * @enum {string|null}
             */
            weight_unit: "g" | "kg" | "oz" | "lb" | null;
            /**
             * @example {
             *       "Color": "Black",
             *       "Size": "M"
             *     }
             */
            options: {
                [key: string]: string;
            };
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        /** @example null */
        SaleInfo: {
            /** @example promo_abc123 */
            promotion_id: string;
            /** @example Summer Sale */
            name: string;
            /**
             * @example percentage
             * @enum {string}
             */
            type: "percentage" | "fixed_amount";
            /** @example 20 */
            value: number;
            /**
             * Format: date-time
             * @example 2026-09-01T00:00:00Z
             */
            ends_at: string | null;
        } | null;
        Image: {
            /** @example img_abc123 */
            id: string;
            /** @example prod_abc123 */
            product_id: string | null;
            /** @example https://cdn.hydrajs.dev/images/classic-cotton-t-shirt.webp */
            src: string;
            /** @example Classic Cotton T-Shirt in black, front view */
            alt: string | null;
            /** @example 0 */
            position: number;
            /** @example 1200 */
            width: number | null;
            /** @example 1600 */
            height: number | null;
            /** @example 184320 */
            file_size: number | null;
            /** @example data:image/png;base64,iVBORw0KGgo... */
            lqip: string | null;
            /** @example classic-cotton-t-shirt.webp */
            filename: string | null;
            /** @example image/webp */
            mime_type: string | null;
            /**
             * @example product
             * @enum {string|null}
             */
            category: "product" | "collection" | "blog" | "logo" | "general" | "page" | "marketing" | null;
            /** @example classic-cotton-t-shirt */
            slug: string | null;
            /** @example false */
            slug_locked: boolean;
            /** @example https://cdn.hydrajs.dev/classic-cotton-t-shirt.webp */
            slug_url: string | null;
            /** @example false */
            duplicate?: boolean;
            /**
             * Format: date-time
             * @example 2026-01-15T09:35:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:35:00.000Z
             */
            updated_at: string;
        };
        ProductStats: {
            /** @example 42 */
            sold_this_month: number;
            /** @example 125958 */
            revenue_this_month: number;
            /** @example 38 */
            sold_last_month: number;
            /** @example 113962 */
            revenue_last_month: number;
            /** @example 1204 */
            sold_all_time: number;
            /** @example 3607196 */
            revenue_all_time: number;
        };
        GenerateVariantsResult: {
            variants: components["schemas"]["Variant"][];
        };
        VariantPrice: {
            /** @example wholesale */
            slug: string;
            /** @example Wholesale */
            label: string;
            /** @example 1999 */
            price: number;
            /** @example 1599 */
            sale_price: number | null;
            sale: components["schemas"]["SaleInfo"];
            /** @example 500 */
            inventory_quantity: number;
            /** @example 50 */
            low_stock_threshold: number | null;
            /** @example 6 */
            qty_step: number | null;
            /** @example true */
            taxable: boolean;
            /**
             * @example {
             *       "EUR": 1849,
             *       "GBP": 1599
             *     }
             */
            currency_prices: {
                [key: string]: number;
            };
            /**
             * @example {
             *       "EUR": 2299,
             *       "GBP": 1999
             *     }
             */
            currency_sale_prices: {
                [key: string]: number;
            };
        };
        Collection: {
            /** @example col_abc123 */
            id: string;
            /** @example Summer Essentials */
            title: string;
            /** @example summer-essentials */
            handle: string;
            /** @example Lightweight picks for warm weather. */
            description: string | null;
            /**
             * @example manual
             * @enum {string}
             */
            type: "manual" | "automatic";
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "draft";
            /**
             * @example manual
             * @enum {string}
             */
            sort_order: "manual" | "best-selling" | "alpha-asc" | "alpha-desc" | "price-asc" | "price-desc" | "created-desc" | "created-asc";
            /**
             * @description Parent collection ID, null for root-level collections
             * @example null
             */
            parent_collection_id: string | null;
            /**
             * @description Sort position within siblings
             * @example 0
             */
            position: number;
            /** @description Collection cover image */
            image: {
                /** @example img_abc123 */
                id: string;
                /** @example https://cdn.hydrajs.dev/images/summer-essentials.webp */
                src: string;
                /** @example Summer essentials collection */
                alt: string | null;
                /** @example 1200 */
                width: number | null;
                /** @example 800 */
                height: number | null;
            } | null;
            seo: {
                /** @example Summer Essentials | My Store */
                title?: string;
                /** @example Shop our curated summer collection. */
                description?: string;
            };
            /** @example 12 */
            product_count: number;
            products?: {
                /** @example prod_abc123 */
                id: string;
                /** @example Classic Cotton T-Shirt */
                title: string;
                /** @example classic-cotton-t-shirt */
                handle: string;
                /**
                 * @example active
                 * @enum {string}
                 */
                status: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
                /** @description Primary product image */
                image: {
                    /** @example https://cdn.hydrajs.dev/images/product.webp */
                    src: string;
                    /** @example Product image */
                    alt: string | null;
                } | null;
                /**
                 * Format: date-time
                 * @example 2026-01-15T09:30:00.000Z
                 */
                created_at: string;
                /**
                 * Format: date-time
                 * @example 2026-02-20T14:15:00.000Z
                 */
                updated_at: string;
            }[];
            conditions: {
                /**
                 * @example product_type
                 * @enum {string}
                 */
                field: "product_type" | "tag" | "price" | "brand" | "inventory_quantity";
                /**
                 * @example is_same_as
                 * @enum {string}
                 */
                operator: "is_same_as" | "is_not" | "more_than" | "less_than";
                /** @example T-Shirts */
                value: string | number;
            }[];
            /**
             * @description Whether all (AND) or any (OR) conditions must match
             * @example all
             * @enum {string}
             */
            condition_match: "all" | "any";
            /**
             * Format: date-time
             * @example 2026-04-01T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-04-15T11:30:00.000Z
             */
            updated_at: string;
        };
        Company: {
            /** @example comp_abc123 */
            id: string;
            /**
             * @example supplier
             * @enum {string}
             */
            type: "supplier" | "customer" | "both";
            /** @example Acme Supplies Ltd */
            name: string;
            /** @example acme-supplies */
            handle: string;
            /** @example orders@acme.com */
            email: string | null;
            /** @example +14155550100 */
            phone: string | null;
            /** @example https://acme.com */
            website: string | null;
            /** @example GB123456789 */
            tax_number: string | null;
            /** @example vat */
            tax_number_type: string | null;
            /** @example USD */
            currency: string | null;
            /** @example net_30 */
            payment_terms: string | null;
            /** @example Primary fabric supplier */
            note: string | null;
            /** @example ERP-SUP-001 */
            external_id: string | null;
            /** @example US */
            country: string | null;
            /**
             * @example [
             *       "domestic",
             *       "preferred"
             *     ]
             */
            tags: string[];
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "inactive";
            /** @example 2 */
            address_count: number;
            /** @example 3 */
            contact_count: number;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            addresses?: components["schemas"]["CompanyAddress"][];
            contacts?: components["schemas"]["CompanyContact"][];
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        CompanyAddress: {
            /** @example caddr_abc123 */
            id: string;
            /** @example comp_abc123 */
            company_id: string;
            /** @example Warehouse */
            label: string | null;
            /** @example John */
            first_name: string | null;
            /** @example Doe */
            last_name: string | null;
            /** @example 456 Industrial Blvd */
            line1: string;
            /** @example Unit 7 */
            line2: string | null;
            /** @example Manchester */
            city: string;
            /** @example Greater Manchester */
            state: string | null;
            /** @example M1 1AA */
            postal_code: string | null;
            /** @example GB */
            country: string;
            /** @example +441234567890 */
            phone: string | null;
            /** @example false */
            is_default: boolean;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        CompanyContact: {
            /** @example cc_abc123 */
            id: string;
            /** @example comp_abc123 */
            company_id: string;
            /** @example Sarah Johnson */
            name: string;
            /** @example sarah@acme.com */
            email: string | null;
            /** @example +14155550101 */
            phone: string | null;
            /** @example Sales Manager */
            role: string | null;
            /** @example true */
            is_primary: boolean;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        CompanyNote: {
            /** @example compn_abc123 */
            id: string;
            /** @example comp_abc123 */
            company_id: string;
            /** @example Negotiated 10% discount on bulk orders. */
            content: string;
            /** @example admin */
            author_type: string;
            /** @example user_abc */
            author_id: string | null;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            updated_at: string;
        };
        Customer: {
            /** @example cus_abc123 */
            id: string;
            /** @example jane@example.com */
            email: string;
            /** @example Jane */
            first_name: string;
            /** @example Smith */
            last_name: string;
            /** @example +14155550123 */
            phone: string | null;
            /** @example en */
            locale: string | null;
            /** @example 5 */
            order_count: number;
            /** @example 34950 */
            total_spent: number;
            /**
             * @example [
             *       "vip",
             *       "wholesale"
             *     ]
             */
            tags: string[];
            /**
             * @example {
             *       "loyalty_tier": "gold"
             *     }
             */
            metadata: {
                [key: string]: string | number;
            };
            /** @example wholesale */
            active_price_key: string | null;
            /** @example Acme Corp */
            company: string | null;
            /** @example active */
            status: string;
            /** @example DE123456789 */
            tax_number: string | null;
            /** @example vat */
            tax_number_type: string | null;
            addresses?: components["schemas"]["Address"][];
            /**
             * Format: date-time
             * @example 2025-11-01T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-03-15T09:20:00.000Z
             */
            updated_at: string;
        };
        Address: {
            /** @example addr_abc123 */
            id: string;
            /** @example cus_abc123 */
            customer_id: string;
            /** @example Jane */
            first_name: string | null;
            /** @example Smith */
            last_name: string | null;
            /** @example Acme Inc. */
            company: string | null;
            /** @example 123 Main St */
            line1: string;
            /** @example Apt 4B */
            line2: string | null;
            /** @example San Francisco */
            city: string;
            /** @example CA */
            state: string | null;
            /** @example 94105 */
            postal_code: string | null;
            /** @example US */
            country: string;
            /** @example +14155550123 */
            phone: string | null;
            /** @example true */
            is_default: boolean;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            updated_at: string;
        };
        CustomerNote: {
            /** @example cnote_abc123 */
            id: string;
            /** @example cus_abc123 */
            customer_id: string;
            /** @example Customer requested invoice copy. */
            content: string;
            /** @example admin */
            author_type: string;
            /** @example user_abc */
            author_id: string | null;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            updated_at: string;
        };
        CustomerGroup: {
            /** @example cg_abc123 */
            id: string;
            /** @example Wholesale */
            name: string;
            /** @example wholesale */
            handle: string;
            /** @example B2B wholesale customers */
            description: string | null;
            /**
             * @example manual
             * @enum {string}
             */
            type: "manual" | "automatic";
            /** @description Conditions for automatic group membership */
            conditions: {
                /**
                 * @example total_spent
                 * @enum {string}
                 */
                field: "tag" | "total_spent" | "order_count" | "status" | "company" | "first_order_date" | "last_order_date" | "customer_added_date" | "city" | "country";
                /**
                 * @example more_than
                 * @enum {string}
                 */
                operator: "is_same_as" | "is_not" | "more_than" | "less_than" | "is_before" | "is_after";
                /** @example 5000 */
                value: string | number;
            }[];
            /**
             * @example all
             * @enum {string}
             */
            condition_match: "all" | "any";
            /** @example wholesale */
            active_price_key: string | null;
            /** @example 12 */
            member_count: number;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            members?: components["schemas"]["CustomerGroupMember"][];
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        CustomerGroupMember: {
            /** @example cus_abc123 */
            id: string;
            /** @example jane@example.com */
            email: string;
            /** @example Jane */
            first_name: string;
            /** @example Smith */
            last_name: string;
        };
        DraftOrder: {
            /** @example dord_abc123 */
            id: string;
            /** @example 1 */
            draft_number: number;
            /**
             * @example open
             * @enum {string}
             */
            status: "open" | "sent" | "completed";
            /** @example cus_abc123 */
            customer_id: string | null;
            /** @example jane@example.com */
            customer_email: string | null;
            /** @example 5998 */
            subtotal: number;
            /** @example 540 */
            tax: number;
            /** @example null */
            tax_data: {
                total_tax: number;
                tax_inclusive: boolean;
                source: string | null;
                tax_lines: {
                    name: string;
                    rate: number;
                    amount: number;
                    country: string;
                    state: string | null;
                    /** @enum {string} */
                    type: "line_item" | "shipping";
                }[];
            } | null;
            /** @example false */
            tax_inclusive: boolean;
            /** @example 599 */
            shipping_cost: number;
            /** @example 0 */
            discount: number;
            /** @example 7137 */
            total: number;
            /** @example USD */
            currency: string;
            shipping_address: {
                /** @example Jane */
                first_name?: string;
                /** @example Smith */
                last_name?: string;
                /** @example 123 Main St */
                line1: string;
                /** @example Apt 4B */
                line2?: string;
                /** @example San Francisco */
                city: string;
                /** @example CA */
                state: string;
                /** @example 94105 */
                postal_code: string;
                /** @example US */
                country: string;
            } | null;
            billing_address: {
                /** @example Jane */
                first_name?: string;
                /** @example Smith */
                last_name?: string;
                /** @example 123 Main St */
                line1: string;
                /** @example Apt 4B */
                line2?: string;
                /** @example San Francisco */
                city: string;
                /** @example CA */
                state: string;
                /** @example 94105 */
                postal_code: string;
                /** @example US */
                country: string;
            } | null;
            /** @example VIP customer — expedite shipping */
            notes: string | null;
            /**
             * @example due_on_receipt
             * @enum {string}
             */
            payment_terms: "due_on_receipt" | "net_15" | "net_30" | "net_45" | "net_60" | "net_90" | "fixed_date";
            /**
             * Format: date-time
             * @example null
             */
            payment_due_date: string | null;
            /** @example null */
            order_id: string | null;
            /**
             * Format: date-time
             * @example null
             */
            completed_at: string | null;
            /** @example 2 */
            item_count: number;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            items?: components["schemas"]["DraftOrderLineItem"][];
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        DraftOrderLineItem: {
            /** @example doli_abc123 */
            id: string;
            /** @example dord_abc123 */
            draft_order_id: string;
            /** @example prod_abc123 */
            product_id: string | null;
            /** @example var_abc123 */
            variant_id: string | null;
            /** @example Classic Cotton T-Shirt */
            title: string;
            /** @example Black / M */
            variant_title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example 2 */
            quantity: number;
            /** @example 2999 */
            unit_price: number;
            /** @example 5998 */
            total: number;
            /** @example false */
            is_custom: boolean;
            /** @example null */
            note: string | null;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        Order: {
            /** @example ord_abc123 */
            id: string;
            /** @example 1042 */
            order_number: number;
            /**
             * @example open
             * @enum {string}
             */
            status: "open" | "closed" | "cancelled";
            /**
             * @example paid
             * @enum {string}
             */
            financial_status: "pending" | "paid" | "refunded" | "partially_refunded";
            /**
             * @example unfulfilled
             * @enum {string}
             */
            fulfillment_status: "unfulfilled" | "partial" | "fulfilled";
            /** @example loc_abc123 */
            location_id: string | null;
            /** @example cus_abc123 */
            customer_id: string | null;
            /** @example jane@example.com */
            customer_email: string;
            /** @example 5998 */
            subtotal: number;
            /** @example 540 */
            tax: number;
            /** @example false */
            tax_inclusive: boolean;
            /** @example 599 */
            shipping_cost: number;
            /** @example 0 */
            discount: number;
            /** @example null */
            discount_code: string | null;
            /** @example null */
            discount_id: string | null;
            /** @example 7137 */
            total: number;
            /** @example USD */
            currency: string;
            /** @example USD */
            base_currency: string | null;
            /** @example 1 */
            exchange_rate: number | null;
            /** @example null */
            fx_quote_id: string | null;
            shipping_address: {
                /** @example Jane */
                first_name?: string;
                /** @example Smith */
                last_name?: string;
                /** @example 123 Main St */
                line1: string;
                /** @example Apt 4B */
                line2?: string;
                /** @example San Francisco */
                city: string;
                /** @example CA */
                state: string;
                /** @example 94105 */
                postal_code: string;
                /** @example US */
                country: string;
            } | null;
            billing_address: {
                /** @example Jane */
                first_name?: string;
                /** @example Smith */
                last_name?: string;
                /** @example 123 Main St */
                line1: string;
                /** @example Apt 4B */
                line2?: string;
                /** @example San Francisco */
                city: string;
                /** @example CA */
                state: string;
                /** @example 94105 */
                postal_code: string;
                /** @example US */
                country: string;
            } | null;
            /** @example Gift wrap requested. */
            notes: string | null;
            /**
             * @example {
             *       "source": "storefront"
             *     }
             */
            metadata: {
                [key: string]: string | number;
            } | null;
            /** @example INV-0001 */
            invoice_number: string | null;
            /** @example pi_3abc123def456 */
            stripe_payment_intent_id: string | null;
            /**
             * @description Platform fee in cents, calculated as subtotal × platform_fee_percent
             * @example 30
             */
            platform_fee: number;
            /**
             * @description Platform fee rate applied to this order
             * @example 0.5
             */
            platform_fee_percent: number;
            line_items?: components["schemas"]["LineItem"][];
            tax_lines?: components["schemas"]["OrderTaxLine"][];
            /**
             * Format: date-time
             * @example 2026-03-10T16:45:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-03-10T16:50:00.000Z
             */
            updated_at: string;
        };
        LineItem: {
            /** @example li_abc123 */
            id: string;
            /** @example ord_abc123 */
            order_id: string;
            /** @example prod_abc123 */
            product_id: string | null;
            /** @example var_abc123 */
            variant_id: string | null;
            /** @example Classic Cotton T-Shirt */
            title: string;
            /** @example Black / M */
            variant_title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example 2 */
            quantity: number;
            /** @example 2999 */
            unit_price: number;
            /** @example 5998 */
            total: number;
            /**
             * Format: date-time
             * @example 2026-03-10T16:45:00.000Z
             */
            created_at: string;
        };
        OrderTaxLine: {
            /** @example otl_abc123 */
            id: string;
            /** @example CA State Tax */
            name: string;
            /** @example 7.25 */
            rate: number;
            /** @example 435 */
            amount: number;
            /** @example US */
            country: string;
            /** @example CA */
            state: string | null;
            /** @example null */
            tax_group_id: string | null;
            /**
             * @example line_item
             * @enum {string}
             */
            type: "line_item" | "shipping";
            /**
             * @example manual
             * @enum {string}
             */
            source: "automatic" | "manual";
        };
        Cart: {
            /** @example cart_abc123 */
            id: string;
            /** @example USD */
            currency: string;
            items: components["schemas"]["CartItem"][];
            /** @example 2 */
            item_count: number;
            /** @example 5998 */
            subtotal: number;
            /**
             * Format: date-time
             * @example 2026-03-10T16:40:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-03-10T16:42:00.000Z
             */
            updated_at: string;
        };
        CartItem: {
            /** @example ci_abc123 */
            id: string;
            /** @example var_abc123 */
            variant_id: string;
            /** @example prod_abc123 */
            product_id: string;
            /** @example Classic Cotton T-Shirt */
            title: string;
            /** @example Black / M */
            variant_title: string;
            /** @example https://cdn.hydrajs.dev/images/classic-cotton-t-shirt.webp */
            image: string | null;
            /** @example 2 */
            quantity: number;
            /** @example 2999 */
            unit_price: number;
            /** @example null */
            price_key: string | null;
            /** @example 5998 */
            total: number;
            /**
             * Format: date-time
             * @example 2026-03-10T16:40:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-03-10T16:42:00.000Z
             */
            updated_at: string;
        };
        CheckoutCreate: {
            /** @example chk_abc123 */
            id: string;
            /**
             * @example pending
             * @enum {string}
             */
            status: "pending" | "completed";
            /** @example USD */
            currency: string;
            /** @example pi_abc123_secret_xyz */
            client_secret: string;
            /** @example true */
            requires_shipping: boolean;
            /** @example 5998 */
            subtotal: number;
            /** @example 599 */
            shipping: number;
            /**
             * @description Total tax in cents
             * @example 435
             */
            tax: number;
            /** @example null */
            tax_summary: {
                /**
                 * @description Total tax in cents
                 * @example 435
                 */
                total_tax: number;
                /** @example false */
                tax_inclusive: boolean;
                tax_lines: {
                    /** @example CA State Tax */
                    name: string;
                    /** @example 7.25 */
                    rate: number;
                    /**
                     * @description Tax amount in cents
                     * @example 435
                     */
                    amount: number;
                    /**
                     * @example line_item
                     * @enum {string}
                     */
                    type: "line_item" | "shipping";
                }[];
            } | null;
            /** @example 7032 */
            total: number;
            /** @example pk_live_xxx */
            publishable_key: string;
            /** @example Acme Store */
            store_name: string;
            /**
             * @example payment
             * @enum {string}
             */
            mode: "payment" | "setup";
            display: {
                /** @example Order summary */
                title: string;
                items: {
                    /** @example Classic T-Shirt — Black / M */
                    label: string;
                    /** @example https://cdn.hydrajs.dev/img.jpg */
                    image: string | null;
                    /** @example Qty: 2 */
                    detail: string;
                    /** @example 5998 */
                    amount: number;
                }[];
                lines: {
                    /** @example Total */
                    label: string;
                    /** @example 6597 */
                    amount: number;
                    /** @example true */
                    bold?: boolean;
                }[];
                /** @example Pay */
                pay_label: string;
                /** @example Your order has been confirmed. */
                confirm_message: string;
            };
            /**
             * Format: date-time
             * @example 2026-03-10T17:40:00.000Z
             */
            expires_at: string;
            /**
             * Format: date-time
             * @example 2026-03-10T16:40:00.000Z
             */
            created_at: string;
        };
        CheckoutGet: {
            /** @example chk_abc123 */
            id: string;
            /** @example cart_abc123 */
            cart_id: string;
            /** @example null */
            order_id: string | null;
            /**
             * @example pending
             * @enum {string}
             */
            status: "pending" | "completed";
            /** @example USD */
            currency: string;
            /** @example USD */
            base_currency: string | null;
            /** @example 1 */
            exchange_rate: number | null;
            /** @example true */
            requires_shipping: boolean;
            /** @example shr_abc123 */
            shipping_rate_id: string | null;
            /** @example 599 */
            shipping_cost: number | null;
            /** @example 5998 */
            subtotal: number | null;
            /** @example null */
            discount_code: string | null;
            /** @example null */
            discount_id: string | null;
            /**
             * @description Discount amount in cents
             * @example 0
             */
            discount: number;
            /**
             * @description Total tax in cents
             * @example 435
             */
            tax: number;
            /** @example null */
            tax_summary: {
                /**
                 * @description Total tax in cents
                 * @example 435
                 */
                total_tax: number;
                /** @example false */
                tax_inclusive: boolean;
                tax_lines: {
                    /** @example CA State Tax */
                    name: string;
                    /** @example 7.25 */
                    rate: number;
                    /**
                     * @description Tax amount in cents
                     * @example 435
                     */
                    amount: number;
                    /**
                     * @example line_item
                     * @enum {string}
                     */
                    type: "line_item" | "shipping";
                }[];
            } | null;
            /** @example 7032 */
            total: number | null;
            /** @example pi_abc123_secret_xyz */
            client_secret: string | null;
            /** @example cus_abc123 */
            customer_id: string | null;
            /** @example jane@example.com */
            customer_email: string;
            /** @example pk_live_xxx */
            publishable_key: string;
            /** @example Acme Store */
            store_name: string;
            /**
             * @example payment
             * @enum {string}
             */
            mode: "payment" | "setup";
            display: {
                /** @example Order summary */
                title: string;
                items: {
                    /** @example Classic T-Shirt — Black / M */
                    label: string;
                    /** @example https://cdn.hydrajs.dev/img.jpg */
                    image: string | null;
                    /** @example Qty: 2 */
                    detail: string;
                    /** @example 5998 */
                    amount: number;
                }[];
                lines: {
                    /** @example Total */
                    label: string;
                    /** @example 6597 */
                    amount: number;
                    /** @example true */
                    bold?: boolean;
                }[];
                /** @example Pay */
                pay_label: string;
                /** @example Your order has been confirmed. */
                confirm_message: string;
            };
            /**
             * Format: date-time
             * @example 2026-03-10T17:40:00.000Z
             */
            expires_at: string;
            /**
             * Format: date-time
             * @example 2026-03-10T16:40:00.000Z
             */
            created_at: string;
        };
        CheckoutListItem: {
            /** @example chk_abc123 */
            id: string;
            /** @example john@example.com */
            customer_email: string;
            /** @example cus_abc123 */
            customer_id: string | null;
            /** @example 2999 */
            subtotal: number | null;
            /** @example USD */
            currency: string | null;
            /** @example 3 */
            item_count: number;
            /** @example 1 */
            recovery_step: number;
            /** @example false */
            recovery_opted_out: boolean;
            /**
             * Format: date-time
             * @example 2026-08-01T10:00:00.000Z
             */
            created_at: string;
        };
        OrderNote: {
            /** @example onote_abc123 */
            id: string;
            /** @example ord_abc123 */
            order_id: string;
            /** @example Customer called to confirm delivery window. */
            content: string;
            /** @example admin */
            author_type: string;
            /** @example user_abc */
            author_id: string | null;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-20T10:00:00.000Z
             */
            updated_at: string;
        };
        FulfillmentOrder: {
            /** @example fo_abc123def456ghi789 */
            id: string;
            /** @example ord_abc123def456ghi789 */
            order_id: string;
            /** @example loc_abc123def456ghi789 */
            assigned_location_id: string;
            assigned_location: components["schemas"]["LocationSnapshot"];
            /**
             * @example open
             * @enum {string}
             */
            status: "open" | "in_progress" | "closed" | "cancelled";
            /**
             * @example shipping
             * @enum {string}
             */
            delivery_method: "shipping" | "pickup" | "local_delivery" | "none";
            /** @example null */
            metadata: {
                [key: string]: unknown;
            } | null;
            items: components["schemas"]["FulfillmentOrderItem"][];
            fulfillments: components["schemas"]["Fulfillment"][];
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            updated_at: string;
        };
        LocationSnapshot: {
            /** @example Main Warehouse */
            name: string;
            /** @example 123 High St */
            address_line1?: string | null;
            /** @example null */
            address_line2?: string | null;
            /** @example Birmingham */
            city?: string | null;
            /** @example West Midlands */
            state?: string | null;
            /** @example B1 1AA */
            postal_code?: string | null;
            /** @example GB */
            country?: string | null;
        } | null;
        FulfillmentOrderItem: {
            /** @example foi_abc123def456ghi789 */
            id: string;
            /** @example li_abc123def456ghi789 */
            order_line_item_id: string;
            /** @example 3 */
            quantity: number;
            /** @example 0 */
            fulfilled_quantity: number;
            /** @example 0 */
            removed_quantity: number;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            updated_at: string;
        };
        Fulfillment: {
            /** @example ful_abc123def456ghi789 */
            id: string;
            /** @example fo_abc123def456ghi789 */
            fulfillment_order_id: string;
            /**
             * @example shipped
             * @enum {string}
             */
            status: "pending" | "shipped" | "delivered" | "cancelled";
            /** @example 1Z999AA10123456784 */
            tracking_number: string | null;
            /** @example https://www.ups.com/track?tracknum=1Z999AA10123456784 */
            tracking_url: string | null;
            /** @example UPS */
            carrier: string | null;
            /**
             * Format: date-time
             * @example 2026-08-30T14:00:00.000Z
             */
            shipped_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            delivered_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            cancelled_at: string | null;
            /** @example Shipped via ground */
            notes: string | null;
            /** @example null */
            metadata: {
                [key: string]: unknown;
            } | null;
            items: components["schemas"]["FulfillmentItem"][];
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            updated_at: string;
        };
        FulfillmentItem: {
            /** @example fi_abc123def456ghi789 */
            id: string;
            /** @example foi_abc123def456ghi789 */
            fulfillment_order_item_id: string;
            /** @example 2 */
            quantity: number;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-30T12:00:00.000Z
             */
            updated_at: string;
        };
        TopQuery: {
            /** @example cotton t-shirt */
            query: string;
            /** @example 284 */
            query_count: number;
            /** @example 12.5 */
            avg_result_count: number;
            /** @example 0 */
            zero_result_count: number;
        };
        ZeroResultQuery: {
            /** @example bamboo socks */
            query: string;
            /** @example 47 */
            zero_result_count: number;
            /** @example 47 */
            total_count: number;
        };
        Synonym: {
            /** @example syn_abc123 */
            id: string;
            /**
             * @example equivalent
             * @enum {string}
             */
            synonym_type: "equivalent" | "oneway";
            /**
             * @example [
             *       "t-shirt",
             *       "tee",
             *       "tshirt"
             *     ]
             */
            terms: string[];
            /** @example true */
            is_active: boolean;
            /**
             * Format: date-time
             * @example 2026-02-10T11:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-10T11:00:00.000Z
             */
            updated_at: string;
        };
        MerchandisingRule: {
            /** @example mr_abc123 */
            id: string;
            /** @example Pin Summer Banner for "summer" */
            name: string;
            /** @example summer */
            match_query: string;
            /**
             * @example contains
             * @enum {string}
             */
            match_type: "all" | "exact" | "contains";
            /**
             * @example pin
             * @enum {string}
             */
            action: "pin" | "boost" | "bury" | "hide";
            /** @example prod_abc123 */
            product_id: string;
            /** @example 0 */
            pin_position: number | null;
            /** @example null */
            score_multiplier: number | null;
            /** @example 10 */
            priority: number;
            /** @example true */
            is_active: boolean;
            /**
             * Format: date-time
             * @example 2026-02-15T09:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-15T09:00:00.000Z
             */
            updated_at: string;
        };
        SearchResult: {
            data: {
                products?: {
                    data: components["schemas"]["SearchProductHit"][];
                    /** @example 42 */
                    total: number;
                    facets?: {
                        product_type?: {
                            /** @example T-Shirts */
                            value: string;
                            /** @example 24 */
                            count: number;
                            /** @example T-Shirts */
                            label?: string;
                        }[];
                        tags?: {
                            /** @example T-Shirts */
                            value: string;
                            /** @example 24 */
                            count: number;
                            /** @example T-Shirts */
                            label?: string;
                        }[];
                        price_ranges?: {
                            /** @example T-Shirts */
                            value: string;
                            /** @example 24 */
                            count: number;
                            /** @example T-Shirts */
                            label?: string;
                        }[];
                        in_stock?: {
                            /** @example T-Shirts */
                            value: string;
                            /** @example 24 */
                            count: number;
                            /** @example T-Shirts */
                            label?: string;
                        }[];
                        collection?: {
                            /** @example T-Shirts */
                            value: string;
                            /** @example 24 */
                            count: number;
                            /** @example T-Shirts */
                            label?: string;
                        }[];
                    };
                };
                collections?: {
                    data: components["schemas"]["SearchCollectionHit"][];
                    /** @example 3 */
                    total: number;
                };
            };
            /** @example cotton t-shirt */
            query: string;
        };
        SearchProductHit: {
            /** @example prod_abc123 */
            id: string;
            /** @example Classic Cotton T-Shirt */
            title: string;
            /** @example classic-cotton-t-shirt */
            handle: string;
            /** @example A premium organic cotton t-shirt built for comfort and durability. */
            description: string | null;
            /** @example active */
            status: string;
            /** @example T-Shirts */
            product_type: string | null;
            /**
             * @example [
             *       "cotton",
             *       "summer"
             *     ]
             */
            tags: string[];
            /** @example 2999 */
            price: number | null;
            /** @example 3999 */
            sale_price: number | null;
            /**
             * @example {
             *       "EUR": 2799
             *     }
             */
            currency_prices: {
                [key: string]: number;
            } | null;
            /**
             * @example {
             *       "EUR": 3699
             *     }
             */
            currency_sale_prices: {
                [key: string]: number;
            } | null;
            /** @example true */
            in_stock: boolean;
            image: {
                /** @example https://cdn.hydrajs.dev/images/classic-cotton-t-shirt.webp */
                src: string;
                /** @example Classic Cotton T-Shirt in black */
                alt: string | null;
            } | null;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        SearchCollectionHit: {
            /** @example col_abc123 */
            id: string;
            /** @example Summer Essentials */
            title: string;
            /** @example summer-essentials */
            handle: string;
            /** @example Lightweight picks for warm weather. */
            description: string | null;
            /** @example https://cdn.hydrajs.dev/images/summer-essentials.webp */
            image: string | null;
        };
        SearchSuggestions: {
            data: {
                /** @example cotton t-shirt */
                text: string;
                /**
                 * @example product
                 * @enum {string}
                 */
                type: "product" | "collection" | "product_type";
                /** @example prod_abc123 */
                id?: string;
            }[];
        };
        InventoryLevel: {
            /** @example var_abc123 */
            variant_id: string;
            /** @example prod_abc123 */
            product_id: string;
            /** @example Classic Cotton T-Shirt */
            product_title: string;
            /** @example Black / M */
            variant_title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example SUP-BLK-M */
            supplier_sku: string | null;
            /** @example 150 */
            inventory_quantity: number;
            /** @example 10 */
            low_stock_threshold: number | null;
            /** @example 850 */
            cost: number | null;
            /** @example Acme */
            brand: string | null;
            /** @example comp_abc123 */
            supplier_id: string | null;
            /** @example Wholesale Co. */
            supplier_name: string | null;
            /**
             * Format: date-time
             * @example 2026-03-01T12:00:00.000Z
             */
            updated_at: string;
        };
        ProductAdjustment: {
            /** @example adj_abc123 */
            id: string;
            /** @example var_abc123 */
            variant_id: string;
            /** @example loc_abc123 */
            location_id: string | null;
            /** @example Black / M */
            variant_title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example 150 */
            quantity_before: number;
            /** @example 145 */
            quantity_after: number;
            /** @example -5 */
            adjustment: number;
            /** @example Damaged in transit */
            reason: string;
            /**
             * Format: date-time
             * @example 2026-03-05T14:30:00.000Z
             */
            created_at: string;
        };
        InventoryAdjustment: {
            /** @example adj_abc123 */
            id: string;
            /** @example var_abc123 */
            variant_id: string;
            /** @example loc_abc123 */
            location_id: string | null;
            /** @example 150 */
            quantity_before: number;
            /** @example 145 */
            quantity_after: number;
            /** @example -5 */
            adjustment: number;
            /** @example Damaged in transit */
            reason: string;
            /**
             * Format: date-time
             * @example 2026-03-05T14:30:00.000Z
             */
            created_at: string;
        } | null;
        ShippingZone: {
            /** @example shz_abc123 */
            id: string;
            /** @example North America */
            name: string;
            /**
             * @example [
             *       "US",
             *       "CA",
             *       "MX"
             *     ]
             */
            countries: string[];
            /** @example false */
            is_rest_of_world: boolean;
            /** @example true */
            is_active: boolean;
            /** @example null */
            carrier_callback_url: string | null;
            /** @example 0 */
            position: number;
            /** @example 3 */
            rate_count: number;
            rates: components["schemas"]["ShippingRate"][];
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            updated_at: string;
        };
        ShippingRate: {
            /** @example shr_abc123 */
            id: string;
            /** @example shz_abc123 */
            zone_id: string;
            /** @example Standard Shipping */
            name: string;
            /** @example Delivers in 5-7 business days */
            description: string | null;
            /** @example 599 */
            price: number;
            /** @example USD */
            currency: string;
            /** @example 0 */
            min_order_subtotal: number | null;
            /** @example null */
            max_order_subtotal: number | null;
            /** @example 0 */
            min_order_weight: number | null;
            /** @example 50000 */
            max_order_weight: number | null;
            /** @example 5 */
            min_delivery_days: number | null;
            /** @example 7 */
            max_delivery_days: number | null;
            /** @example true */
            is_active: boolean;
            /** @example 0 */
            position: number;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            updated_at: string;
        };
        AvailableRate: {
            /** @example shr_abc123 */
            id: string;
            /** @example Express Shipping */
            name: string;
            /** @example Delivers in 1-2 business days */
            description: string | null;
            /** @example 1499 */
            price: number;
            /** @example USD */
            currency: string;
            /** @example 1 */
            min_delivery_days: number | null;
            /** @example 2 */
            max_delivery_days: number | null;
            /**
             * @example flat
             * @enum {string}
             */
            source: "flat" | "carrier";
        };
        Webhook: {
            /** @example wh_abc123 */
            id: string;
            /** @example https://example.com/webhooks/hydra */
            url: string;
            /**
             * @example [
             *       "order.created",
             *       "order.paid"
             *     ]
             */
            events: string[];
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "paused";
            /**
             * @description Only returned once at creation time.
             * @example whsec_abc123def456
             */
            secret?: string;
            /**
             * Format: date-time
             * @example 2026-02-01T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-01T12:00:00.000Z
             */
            updated_at: string;
        };
        ExchangeRate: {
            /** @example USD */
            base_currency: string;
            /** @example EUR */
            target_currency: string;
            /** @example 0.9234 */
            rate: number;
            /** @example builtin */
            source: string;
            /**
             * Format: date-time
             * @example 2026-03-15T03:00:00.000Z
             */
            fetched_at: string;
        };
        RefreshRates: {
            /** @example 3 */
            rates_updated: number;
            rates: {
                /** @example USD */
                base_currency: string;
                /** @example EUR */
                target_currency: string;
                /** @example 0.9234 */
                rate: number;
                /** @example 0.9198 */
                previous_rate: number | null;
            }[];
        };
        TaxonomyCategory: {
            /** @example 212 */
            id: number;
            /** @example Apparel & Accessories > Clothing > Shirts & Tops */
            path: string;
            /** @example Apparel & Accessories > Clothing */
            parent_path: string | null;
            /** @example 3 */
            level: number;
        };
        TaxonomySuggestion: {
            /** @example Apparel & Accessories > Clothing > Shirts & Tops */
            path: string;
            /** @example Product title and type match this category for cotton t-shirts */
            reason: string;
        };
        HsCode: {
            /** @example 6109.10 */
            code: string;
            /** @example T-shirts, singlets and other vests, of cotton, knitted or crocheted */
            description: string;
            /** @example 6109 */
            parent: string | null;
            /** @example 2 */
            level: number;
        };
        HsCodeSuggestion: {
            /** @example 6109.10 */
            code: string;
            /** @example T-shirts, singlets and other vests, of cotton, knitted or crocheted */
            description: string;
            /** @example Product is a cotton t-shirt matching HS chapter 61 (knitted apparel) */
            reason: string;
        };
        StoreEvent: {
            /** @example sevt_abc123 */
            id: string;
            /** @example product.updated */
            type: string;
            /** @example product */
            resource_type: string;
            /** @example prod_abc123 */
            resource_id: string;
            /** @example api_key */
            actor_type: string;
            /** @example key_abc123 */
            actor_id: string;
            /** @example Product "Classic Cotton T-Shirt" was updated */
            summary: string;
            /**
             * @example {
             *       "changed_fields": [
             *         "title",
             *         "status"
             *       ]
             *     }
             */
            metadata: {
                [key: string]: unknown;
            };
            /**
             * Format: date-time
             * @example 2026-03-10T14:22:00.000Z
             */
            created_at: string;
        };
        FilterAttribute: {
            /** @example fa_abc123 */
            id: string;
            /** @example metal */
            key: string;
            /** @example Metal */
            label: string;
            /**
             * @example spec
             * @enum {string}
             */
            source_type: "spec" | "option" | "field" | "tag" | "price" | "availability";
            /** @example Metal */
            source_key: string | null;
            /** @example 0 */
            position: number;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            updated_at: string;
        };
        Redirect: {
            /** @example rdr_abc123 */
            id: string;
            /** @example /old-product-page */
            old_path: string;
            /** @example /products/classic-cotton-t-shirt */
            new_path: string;
            /** @example product */
            resource_type: string | null;
            /** @example prod_abc123 */
            resource_id: string | null;
            /**
             * Format: date-time
             * @example 2026-02-20T16:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T16:00:00.000Z
             */
            updated_at: string;
        };
        Tag: {
            /** @example tag_abc123 */
            id: string;
            /** @example summer */
            name: string;
            /** @example 42 */
            product_count: number;
            /**
             * Format: date-time
             * @example 2026-01-05T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-05T10:00:00.000Z
             */
            updated_at: string;
        };
        ProductTypeItem: {
            /** @example Footwear */
            name: string;
            /** @example 12 */
            product_count: number;
        };
        Promotion: {
            /** @example promo_abc123 */
            id: string;
            /** @example Summer Sale */
            name: string;
            /**
             * @example percentage
             * @enum {string}
             */
            type: "percentage" | "fixed_amount";
            /** @example 20 */
            value: number;
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "disabled" | "archived";
            /**
             * @example [
             *       "base"
             *     ]
             */
            price_targets: string[];
            /**
             * Format: date-time
             * @example 2026-08-01T00:00:00Z
             */
            starts_at: string;
            /**
             * Format: date-time
             * @example 2026-09-01T00:00:00Z
             */
            ends_at: string | null;
            targets: components["schemas"]["PromotionTarget"][];
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        PromotionTarget: {
            /** @example ptgt_abc123 */
            id: string;
            /**
             * @example product
             * @enum {string}
             */
            target_type: "product" | "collection" | "variant";
            /** @example prod_abc123 */
            target_id: string;
            /** @example Summer T-Shirt */
            target_name: string | null;
        };
        Discount: {
            /** @example disc_abc123 */
            id: string;
            /** @example SUMMER20 */
            code: string;
            /** @example Summer Sale 20% */
            title: string;
            /**
             * @example percentage
             * @enum {string}
             */
            type: "percentage" | "fixed_amount";
            /** @example 20 */
            value: number;
            /**
             * @example active
             * @enum {string}
             */
            status: "active" | "disabled";
            /** @example 5000 */
            min_subtotal: number | null;
            /** @example null */
            min_quantity: number | null;
            /** @example 1000 */
            max_uses: number | null;
            /** @example 1 */
            max_uses_per_customer: number | null;
            /** @example 42 */
            used: number;
            /** @example true */
            exclusive: boolean;
            /** @example true */
            combinable_with_promotions: boolean;
            /** @example null */
            customer_group_ids: string[] | null;
            /**
             * Format: date-time
             * @example 2026-06-01T00:00:00Z
             */
            starts_at: string;
            /**
             * Format: date-time
             * @example 2026-08-31T23:59:59Z
             */
            ends_at: string | null;
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        MembershipPlan: {
            /** @example mplan_abc123 */
            id: string;
            /** @example VIP Membership */
            name: string;
            /** @example Unlock wholesale pricing */
            description: string | null;
            /** @example vip-membership */
            slug: string;
            /** @example price_1abc */
            stripe_price_id: string | null;
            /** @example 1199 */
            amount: number;
            /** @example gbp */
            currency: string;
            /** @example month */
            interval: string;
            /** @example 1 */
            interval_count: number;
            /** @example 14 */
            trial_days: number | null;
            /** @example cg_abc123 */
            customer_group_id: string | null;
            /** @example active */
            status: string;
            /** @example 42 */
            subscriber_count: number;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        CustomerMembership: {
            /** @example cmem_abc123 */
            id: string;
            /** @example mplan_abc123 */
            plan_id: string;
            plan?: components["schemas"]["MembershipPlan"] & unknown;
            /** @example cus_abc123 */
            customer_id: string;
            /** @example sub_1abc */
            stripe_subscription_id: string | null;
            /** @example active */
            status: string;
            /**
             * Format: date-time
             * @example 2026-09-01T00:00:00.000Z
             */
            current_period_start: string | null;
            /**
             * Format: date-time
             * @example 2026-10-01T00:00:00.000Z
             */
            current_period_end: string | null;
            /** @example false */
            cancel_at_period_end: boolean;
            /**
             * Format: date-time
             * @example null
             */
            cancelled_at: string | null;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            /**
             * Format: date-time
             * @example 2026-01-15T09:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-02-20T14:15:00.000Z
             */
            updated_at: string;
        };
        Refund: {
            /** @example rfd_abc123 */
            id: string;
            /** @example ord_abc123 */
            order_id: string;
            /** @example null */
            return_id: string | null;
            /**
             * @example succeeded
             * @enum {string}
             */
            status: "pending" | "succeeded" | "failed";
            /** @example 3000 */
            amount: number;
            /** @example usd */
            currency: string;
            /** @example return */
            reason: string;
            /** @example Customer received wrong size */
            reason_note: string | null;
            /**
             * @example card
             * @enum {string}
             */
            destination: "card" | "store_credit";
            /** @example true */
            refund_shipping: boolean;
            /** @example 500 */
            shipping_refund_amount: number;
            /** @example 0 */
            restocking_fee: number;
            /** @example CN-0001 */
            credit_note_number: string | null;
            /** @example Approved by Alice */
            staff_note: string | null;
            /**
             * Format: date-time
             * @example 2026-09-03T14:30:00.000Z
             */
            processed_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            failed_at: string | null;
            /** @example null */
            failure_reason: string | null;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            /** @description Included when ?expand=line_items */
            line_items?: {
                /** @example rfli_abc123 */
                id: string;
                /** @example li_abc123 */
                order_line_item_id: string;
                /** @example 1 */
                quantity: number;
                /** @example 2500 */
                amount: number;
                /**
                 * Format: date-time
                 * @example 2026-09-03T14:30:00.000Z
                 */
                created_at: string;
                /**
                 * Format: date-time
                 * @example 2026-09-03T14:30:00.000Z
                 */
                updated_at: string;
            }[];
            /**
             * Format: date-time
             * @example 2026-09-03T14:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-09-03T14:30:00.000Z
             */
            updated_at: string;
        };
        Return: {
            /** @example rtn_abc123 */
            id: string;
            /** @example ord_abc123 */
            order_id: string;
            /** @example 1001 */
            order_number: number;
            /** @example cus_abc123 */
            customer_id: string | null;
            /**
             * @example requested
             * @enum {string}
             */
            status: "requested" | "approved" | "received" | "closed" | "rejected" | "cancelled";
            /** @example wrong_item */
            reason: string;
            /** @example Ordered size M but received size L */
            reason_note: string | null;
            /**
             * @example customer
             * @enum {string}
             */
            initiated_by: "customer" | "merchant";
            /** @example loc_abc123 */
            location_id: string | null;
            /** @example null */
            staff_note: string | null;
            /**
             * @example none
             * @enum {string}
             */
            refund_policy: "none" | "immediate" | "on_receipt";
            /**
             * Format: date-time
             * @example null
             */
            approved_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            received_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            closed_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            rejected_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            cancelled_at: string | null;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            /** @description Included when ?expand=line_items or on create. */
            line_items?: {
                /** @example rli_abc123 */
                id: string;
                /** @example li_abc123 */
                order_line_item_id: string;
                /** @example 1 */
                quantity: number;
                /** @example resellable */
                condition: string | null;
                /** @example true */
                restock: boolean;
                /** @example false */
                restocked: boolean;
                /** @example 0 */
                restocked_quantity: number;
                /**
                 * Format: date-time
                 * @example 2026-09-03T14:30:00.000Z
                 */
                created_at: string;
                /**
                 * Format: date-time
                 * @example 2026-09-03T14:30:00.000Z
                 */
                updated_at: string;
            }[];
            /**
             * Format: date-time
             * @example 2026-09-03T14:30:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-09-03T14:30:00.000Z
             */
            updated_at: string;
        };
        PurchaseOrder: {
            /** @example po_abc123 */
            id: string;
            /** @example comp_abc123 */
            supplier_id: string;
            /** @example Acme Supplies Ltd */
            supplier_name: string | null;
            /** @example loc_abc123 */
            destination_location_id: string | null;
            /**
             * @example draft
             * @enum {string}
             */
            status: "draft" | "ordered" | "partial" | "received" | "closed" | "cancelled";
            /** @example PO-2026-001 */
            reference_number: string | null;
            /** @example 1 */
            number: number | null;
            /** @example PO-0001 */
            po_number: string | null;
            /** @example USD */
            currency: string;
            /** @example 8500 */
            subtotal: number;
            /** @example 0 */
            tax: number;
            /** @example 0 */
            shipping: number;
            /** @example 8500 */
            total: number;
            /** @example 1 */
            item_count: number;
            /**
             * Format: date-time
             * @example 2026-09-15T00:00:00.000Z
             */
            expected_at: string | null;
            /**
             * Format: date-time
             * @example null
             */
            received_at: string | null;
            /** @example Urgent restock order */
            note: string | null;
            /** @example {} */
            metadata: {
                [key: string]: string | number;
            };
            items?: components["schemas"]["PurchaseOrderItem"][];
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            updated_at: string;
        };
        PurchaseOrderItem: {
            /** @example poi_abc123 */
            id: string;
            /** @example po_abc123 */
            purchase_order_id: string;
            /** @example var_abc123 */
            variant_id: string;
            /** @example Classic Cotton Tee */
            product_title: string;
            /** @example Black / M */
            variant_title: string;
            /** @example CCT-BLK-M */
            sku: string | null;
            /** @example SUP-BLK-M */
            supplier_sku: string | null;
            /** @example 10 */
            quantity: number;
            /** @example 0 */
            quantity_received: number;
            /** @example 850 */
            unit_cost: number;
            /** @example 8500 */
            total: number;
            /** @example null */
            note: string | null;
            /**
             * Format: date-time
             * @example 2026-01-01T00:00:00.000Z
             */
            created_at: string;
        };
        Location: {
            /** @example loc_abc123def456ghi789 */
            id: string;
            /** @example Birmingham Store */
            name: string;
            /** @example birmingham-store */
            handle: string;
            /**
             * @example retail
             * @enum {string}
             */
            type: "retail" | "warehouse" | "popup" | "online";
            /** @example false */
            is_default: boolean;
            /** @example true */
            is_active: boolean;
            /**
             * @example {
             *       "store_hours": "Mon-Sat 9-5"
             *     }
             */
            metadata: {
                [key: string]: unknown;
            } | null;
            /** @example 123 High St */
            address_line1: string | null;
            /** @example null */
            address_line2: string | null;
            /** @example Birmingham */
            city: string | null;
            /** @example West Midlands */
            state: string | null;
            /** @example B1 1AA */
            postal_code: string | null;
            /** @example GB */
            country: string | null;
            /** @example +441234567890 */
            phone: string | null;
            /** @example store@example.com */
            email: string | null;
            /** @example {} */
            seo: {
                /** @example Birmingham Store | My Store */
                title?: string;
                /** @example Visit our Birmingham retail location. */
                description?: string;
            };
            /**
             * @description Number of variants with inventory at this location
             * @example 12
             */
            variant_count: number;
            /**
             * @description Total inventory units across all variants at this location
             * @example 350
             */
            total_units: number;
            /**
             * Format: date-time
             * @example 2026-08-28T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-28T12:00:00.000Z
             */
            updated_at: string;
        };
        TransferResult: {
            /**
             * @description Number of inventory level rows transferred
             * @example 5
             */
            transferred: number;
        };
        Post: {
            /** @example post_abc123 */
            id: string;
            /**
             * @example post
             * @enum {string}
             */
            type: "page" | "post";
            /** @example Getting Started with Hydra */
            title: string;
            /** @example getting-started-with-hydra */
            handle: string;
            /**
             * @example # Welcome
             *
             *     This is your first post.
             */
            body: string | null;
            /** @example A quick introduction to Hydra headless commerce. */
            excerpt: string | null;
            /**
             * @example published
             * @enum {string}
             */
            status: "draft" | "published" | "archived";
            /** @example Jane Smith */
            author_name: string | null;
            /** @description Featured image for the post */
            featured_image: {
                /** @example img_abc123 */
                id: string;
                /** @example https://cdn.hydrajs.dev/images/post-hero.webp */
                src: string;
                /** @example Post hero image */
                alt: string | null;
                /** @example 1200 */
                width: number | null;
                /** @example 630 */
                height: number | null;
            } | null;
            /**
             * Format: date-time
             * @example 2026-08-24T12:00:00.000Z
             */
            published_at: string | null;
            seo: {
                /** @example Getting Started with Hydra | Blog */
                title?: string;
                /** @example Learn how to set up your first Hydra storefront. */
                description?: string;
            };
            metadata: {
                [key: string]: string | number;
            };
            categories?: {
                /** @example ccat_abc123 */
                id: string;
                /** @example Engineering */
                title: string;
                /** @example engineering */
                handle: string;
            }[];
            tags?: {
                /** @example tag_abc123 */
                id: string;
                /** @example tutorials */
                name: string;
            }[];
            /**
             * Format: date-time
             * @example 2026-08-24T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-24T14:30:00.000Z
             */
            updated_at: string;
        };
        ContentCategory: {
            /** @example ccat_abc123 */
            id: string;
            /** @example Engineering */
            title: string;
            /** @example engineering */
            handle: string;
            /** @example Technical articles and product updates. */
            description: string | null;
            seo: {
                /** @example Engineering Blog | My Store */
                title?: string;
                /** @example Read our latest engineering articles. */
                description?: string;
            };
            /** @example 0 */
            position: number;
            /** @example 12 */
            post_count?: number;
            /**
             * Format: date-time
             * @example 2026-08-01T10:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-08-15T14:00:00.000Z
             */
            updated_at: string;
        };
        NavigationMenu: {
            id: string;
            title: string;
            handle: string;
            location: string | null;
            is_active: boolean;
            items?: components["schemas"]["NavigationItem"][];
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
        };
        NavigationItem: {
            id: string;
            menu_id: string;
            parent_item_id: string | null;
            label: string;
            url: string | null;
            /** @enum {string} */
            item_type: "link" | "heading" | "featured";
            position: number;
            metadata: {
                image?: string;
                image_alt?: string;
                description?: string;
                cta?: string;
            } | null;
            is_visible: boolean;
            /** Format: date-time */
            created_at: string;
            /** Format: date-time */
            updated_at: string;
            children?: {
                id: string;
                menu_id: string;
                parent_item_id: string | null;
                label: string;
                url: string | null;
                /** @enum {string} */
                item_type: "link" | "heading" | "featured";
                position: number;
                metadata: {
                    image?: string;
                    image_alt?: string;
                    description?: string;
                    cta?: string;
                } | null;
                is_visible: boolean;
                /** Format: date-time */
                created_at: string;
                /** Format: date-time */
                updated_at: string;
            }[];
        };
        NotificationLog: {
            /** @example nlog_abc123 */
            id: string;
            /** @example new_order */
            type: string;
            /** @example admin@example.com */
            recipient_email: string;
            /** @example New order #1042 */
            subject: string;
            /**
             * @example sent
             * @enum {string}
             */
            status: "sent" | "failed" | "skipped";
            /** @example msg_abc123 */
            provider_message_id: string | null;
            /** @example null */
            error_message: string | null;
            /**
             * @example {
             *       "order_number": 1042
             *     }
             */
            metadata: {
                [key: string]: unknown;
            } | null;
            /**
             * Format: date-time
             * @example 2026-09-01T12:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-09-01T12:00:00.000Z
             */
            updated_at: string;
        };
        TestNotificationResult: {
            /** @example true */
            success: boolean;
            /** @example msg_abc123 */
            message_id: string | null;
            /** @example null */
            error: string | null;
        };
        DomainStatus: {
            /** @example acmestore.com */
            domain: string;
            /**
             * @example pending
             * @enum {string}
             */
            status: "pending" | "verified" | "failed";
            records: components["schemas"]["DomainDnsRecord"][];
        };
        DomainDnsRecord: {
            /** @example CNAME */
            type: string;
            /** @example resend._domainkey.acmestore.com */
            name: string;
            /** @example abc123.dkim.amazonses.com */
            value: string;
            /** @example 10 */
            priority?: number;
            /** @example verified */
            status?: string;
        };
        TokenResponse: {
            /** @example eyJhbGciOiJIUzI1NiJ9... */
            access_token: string;
            /** @example dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4 */
            refresh_token: string;
            /** @example 3600 */
            expires_in: number;
            customer?: components["schemas"]["AuthCustomer"];
        };
        AuthCustomer: {
            /** @example cus_abc123 */
            id: string;
            /** @example jane@example.com */
            email: string;
            /** @example Jane */
            first_name: string;
            /** @example Smith */
            last_name: string;
            /** @example +14155550123 */
            phone: string | null;
            /** @example en */
            locale: string | null;
            /** @example false */
            email_verified: boolean;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            created_at: string;
            /**
             * Format: date-time
             * @example 2026-01-10T08:00:00.000Z
             */
            updated_at: string;
        };
        MessageResponse: {
            /** @example If an account exists, a reset link has been sent. */
            message: string;
        };
        SubscribeCheckout: {
            /**
             * Format: uri
             * @example https://checkout.stripe.com/c/pay/cs_test_abc
             */
            checkout_url: string;
        };
        MembershipPortal: {
            /**
             * Format: uri
             * @example https://billing.stripe.com/p/session/abc
             */
            portal_url: string;
        };
        AnalyticsSummary: {
            period: {
                /** @example 2026-08-01 */
                from: string;
                /** @example 2026-08-31 */
                to: string;
            };
            /** @description Comparison date range, or null when compare=none. */
            comparison_period: {
                /** @example 2026-07-02 */
                from: string;
                /** @example 2026-07-31 */
                to: string;
            } | null;
            /**
             * @description Store base currency.
             * @example usd
             */
            currency: string;
            metrics: {
                /** @description Total revenue from paid orders (cents). */
                gross_revenue: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Gross revenue minus succeeded refunds (cents). */
                net_revenue: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Number of orders placed. */
                orders: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Revenue per order (cents). */
                average_order_value: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Total quantity of items sold. */
                items_sold: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Total refunded amount (cents). */
                refunds: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Customers created in this period. */
                new_customers: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
                /** @description Percentage of orders from returning customers (0-100). */
                returning_customer_rate: {
                    /**
                     * @description Metric value for the current period.
                     * @example 124500
                     */
                    value: number;
                    /**
                     * @description Metric value for the comparison period, or null.
                     * @example 98200
                     */
                    previous: number | null;
                    /**
                     * @description Percentage change vs comparison period (2dp), or null.
                     * @example 26.78
                     */
                    change: number | null;
                };
            };
        };
        AnalyticsTimeSeries: {
            /**
             * @description Aggregation interval.
             * @example day
             */
            interval: string;
            /**
             * @description Store base currency.
             * @example usd
             */
            currency: string;
            series: {
                /**
                 * @description Date or period start (YYYY-MM-DD).
                 * @example 2026-08-01
                 */
                date: string;
                /**
                 * @description Gross revenue in cents.
                 * @example 45200
                 */
                gross_revenue: number;
                /**
                 * @description Net revenue in cents.
                 * @example 43100
                 */
                net_revenue: number;
                /**
                 * @description Number of orders.
                 * @example 17
                 */
                orders: number;
            }[];
        };
        AnalyticsOrdersSeries: {
            /**
             * @description Aggregation interval.
             * @example day
             */
            interval: string;
            /**
             * @description Store base currency.
             * @example usd
             */
            currency: string;
            series: {
                /**
                 * @description Date or period start (YYYY-MM-DD).
                 * @example 2026-08-01
                 */
                date: string;
                /**
                 * @description Number of orders.
                 * @example 17
                 */
                orders: number;
                /**
                 * @description Total items sold.
                 * @example 42
                 */
                items_sold: number;
                /**
                 * @description Average order value in cents.
                 * @example 2659
                 */
                average_order_value: number;
            }[];
        };
        AnalyticsTopProduct: {
            /**
             * @description Product ID.
             * @example prod_abc123
             */
            product_id: string;
            /**
             * @description Product title.
             * @example Classic T-Shirt
             */
            title: string;
            /** @description Product image URL. */
            image_src: string | null;
            /**
             * @description Total revenue in cents.
             * @example 89400
             */
            revenue: number;
            /**
             * @description Total quantity sold.
             * @example 42
             */
            quantity_sold: number;
            /**
             * @description Number of distinct orders.
             * @example 38
             */
            orders: number;
        };
        AnalyticsActionItems: {
            /**
             * @description Paid orders awaiting fulfillment.
             * @example 5
             */
            unfulfilled_orders: number;
            /**
             * @description Variants below low-stock threshold.
             * @example 2
             */
            low_stock_items: number;
            /**
             * @description Return requests in "requested" status.
             * @example 1
             */
            pending_returns: number;
        };
        Membership: {
            /** @example store_abc123 */
            store_id: string;
            /** @example Acme Commerce */
            store_name: string;
            /** @example acme-commerce */
            store_slug: string;
            /**
             * @example pro
             * @enum {string}
             */
            store_plan: "free" | "pro";
            /** @example owner */
            role: string;
            /**
             * Format: date-time
             * @example 2025-11-01T00:00:00.000Z
             */
            created_at: string;
        };
        AdminStoreCreate: {
            store: {
                /** @example store_abc123 */
                id: string;
                /** @example Acme Commerce */
                name: string;
                /** @example acme-commerce */
                slug: string;
            };
            api_keys: {
                /** @example sk_test_example */
                sk_test: string;
                /** @example sk_live_example */
                sk_live: string;
                /** @example pk_test_abc123... */
                pk_test: string;
                /** @example pk_live_abc123... */
                pk_live: string;
            };
        };
    };
    responses: never;
    parameters: never;
    requestBodies: never;
    headers: never;
    pathItems: never;
}
interface operations {
    getStore: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Store details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Store"];
                    };
                };
            };
        };
    };
    updateStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Acme Commerce */
                    name?: string;
                    /** @example shop.acme.com */
                    domain?: string | null;
                    /** @example US */
                    business_country?: string | null;
                    /**
                     * Format: email
                     * @example hello@acme.com
                     */
                    contact_email?: string | null;
                    /** @example +1 5551234567 */
                    contact_phone?: string | null;
                    /** @example Acme Commerce Ltd. */
                    legal_business_name?: string | null;
                    /** @example 123 Main Street */
                    business_address_line1?: string | null;
                    /** @example Suite 400 */
                    business_address_line2?: string | null;
                    /** @example London */
                    business_city?: string | null;
                    /** @example England */
                    business_state?: string | null;
                    /** @example SW1A 1AA */
                    business_postal_code?: string | null;
                    /** @example GB123456789 */
                    tax_id?: string | null;
                    /**
                     * @example company
                     * @enum {string|null}
                     */
                    legal_entity_type?: "individual" | "company" | "non_profit" | "government_entity" | null;
                    /** @example 12345678 */
                    company_registration_number?: string | null;
                    /**
                     * @example vat
                     * @enum {string|null}
                     */
                    tax_id_type?: "vat" | "gst" | "ein" | "sales_tax" | "itin" | "abn" | "nit" | "rfc" | "other" | null;
                    /** @example USD */
                    currency?: string;
                    /**
                     * @example [
                     *       "USD",
                     *       "EUR",
                     *       "GBP"
                     *     ]
                     */
                    enabled_currencies?: string[];
                    /** @example 2.5 */
                    currency_conversion_margin?: number;
                    /**
                     * @example up
                     * @enum {string}
                     */
                    currency_rounding?: "none" | "up" | "down";
                    /** @example America/New_York */
                    timezone?: string;
                    /**
                     * @example [
                     *       "https://shop.acme.com"
                     *     ]
                     */
                    allowed_origins?: (string | "*")[];
                    /**
                     * @example [
                     *       "search_analytics",
                     *       "merchandising"
                     *     ]
                     */
                    enabled_extensions?: string[];
                    /** @example PO */
                    po_prefix?: string;
                    /** @example INV */
                    invoice_prefix?: string;
                    /**
                     * @example optional
                     * @enum {string}
                     */
                    checkout_require_account?: "disabled" | "optional" | "required";
                    /**
                     * @example optional
                     * @enum {string}
                     */
                    checkout_require_phone?: "hidden" | "optional" | "required";
                    /**
                     * @example hidden
                     * @enum {string}
                     */
                    checkout_company_field?: "hidden" | "optional" | "required";
                    /**
                     * @example optional
                     * @enum {string}
                     */
                    checkout_address2_field?: "hidden" | "optional";
                    /** @example true */
                    checkout_discount_codes?: boolean;
                    /** @example true */
                    checkout_order_notes?: boolean;
                    /** @example false */
                    checkout_auto_fulfill?: boolean;
                    /** @example 14 */
                    checkout_auto_archive_days?: number | null;
                    /** @example true */
                    checkout_confirmation_email?: boolean;
                    /**
                     * @example unchecked
                     * @enum {string}
                     */
                    checkout_marketing_opt_in?: "hidden" | "unchecked" | "checked";
                    /** @example false */
                    checkout_sms_consent?: boolean;
                    /**
                     * Format: uri
                     * @example https://shop.acme.com/terms
                     */
                    checkout_terms_url?: string | null;
                    /**
                     * Format: uri
                     * @example https://shop.acme.com/privacy
                     */
                    checkout_privacy_url?: string | null;
                    /**
                     * @example 3
                     * @enum {string}
                     */
                    checkout_abandoned_recovery?: "1" | "2" | "3" | "off";
                    /** @example 10 */
                    checkout_recovery_discount?: number;
                    /** @example false */
                    checkout_tipping_enabled?: boolean;
                    /**
                     * @example [
                     *       10,
                     *       15,
                     *       20
                     *     ]
                     */
                    checkout_tip_percentages?: number[];
                    /**
                     * @example manual
                     * @enum {string}
                     */
                    tax_calculation?: "disabled" | "automatic" | "manual";
                    /** @example false */
                    tax_inclusive?: boolean;
                    /**
                     * Format: uri
                     * @example https://cdn.hydrajs.dev/img_abc123/logo.png
                     */
                    brand_logo_url?: string | null;
                    /** @example #2563eb */
                    brand_primary_color?: string | null;
                    /** @example #475569 */
                    brand_secondary_color?: string | null;
                    /** @example #f1f5f9 */
                    brand_tertiary_color?: string | null;
                    /** @example #16a34a */
                    brand_accent_color?: string | null;
                    /** @example en */
                    locale?: string;
                    /** @example true */
                    notifications_enabled?: boolean;
                    /**
                     * @example [
                     *       "low_stock"
                     *     ]
                     */
                    notification_disabled_types?: string[];
                    /** @example Acme Commerce */
                    notification_from_name?: string | null;
                    /**
                     * @description Local part of the from address (e.g. "orders"). Combined with verified domain at send time.
                     * @example orders
                     */
                    notification_from_email?: string | null;
                };
            };
        };
        responses: {
            /** @description Store updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Store"];
                    };
                };
            };
        };
    };
    publishStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Publish result with timestamps and changes count */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PublishResponse"];
                    };
                };
            };
        };
    };
    getDomainRecord: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Expected DNS record */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainRecordResponse"];
                    };
                };
            };
        };
    };
    verifyDomain: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Domain verification result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainVerifyResponse"];
                    };
                };
            };
        };
    };
    createPaymentAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Connected account created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description Account already connected */
            409: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createPaymentSession: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Account session created */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No payment account connected */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    disconnectPaymentAccount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Payment account disconnected */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
            /** @description No payment account connected */
            400: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getBillingStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Billing status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createSubscription: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example price_xxx */
                    price_id: string;
                };
            };
        };
        responses: {
            /** @description Subscription created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getBillingDetails: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Billing details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateBillingDetails: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    name?: string;
                    /** Format: email */
                    email?: string;
                    address?: {
                        line1?: string | null;
                        line2?: string | null;
                        city?: string | null;
                        state?: string | null;
                        postal_code?: string | null;
                        country?: string | null;
                    };
                    tax_id?: {
                        type: string;
                        value: string;
                    } | null;
                };
            };
        };
        responses: {
            /** @description Billing details updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateSpendingCap: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example 5000 */
                    max_overage_cents: number;
                };
            };
        };
        responses: {
            /** @description Spending cap updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createSetupIntent: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description SetupIntent created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setDefaultPaymentMethod: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example pm_xxx */
                    payment_method_id: string;
                };
            };
        };
        responses: {
            /** @description Default payment method updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listInvoices: {
        parameters: {
            query?: {
                limit?: number;
                starting_after?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invoice list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                invoice_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Invoice detail */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listPriceKeys: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Price key list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PriceKeyDetail"][];
                    };
                };
            };
        };
    };
    createPriceKey: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Wholesale */
                    label: string;
                    /** @example wholesale */
                    slug?: string;
                };
            };
        };
        responses: {
            /** @description Price key created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PriceKeyDetail"];
                    };
                };
            };
        };
    };
    updatePriceKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Wholesale Tier 2 */
                    label?: string;
                    /** @example wholesale-t2 */
                    slug?: string;
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Price key updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PriceKeyDetail"];
                    };
                };
            };
        };
    };
    listRoles: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Role list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleDetail"][];
                    };
                };
            };
        };
    };
    createRole: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Content Editor */
                    label: string;
                    /** @example content-editor */
                    slug?: string;
                    /**
                     * @example [
                     *       "catalog",
                     *       "orders"
                     *     ]
                     */
                    permissions: string[];
                };
            };
        };
        responses: {
            /** @description Role created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleDetail"];
                    };
                };
            };
        };
    };
    updateRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Content Manager */
                    label?: string;
                    /** @example content-manager */
                    slug?: string;
                    /**
                     * @example [
                     *       "catalog",
                     *       "orders",
                     *       "customers"
                     *     ]
                     */
                    permissions?: string[];
                    /** @example false */
                    archived?: boolean;
                };
            };
        };
        responses: {
            /** @description Role updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RoleDetail"];
                    };
                };
            };
        };
    };
    listTeamMembers: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Team member list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TeamMember"][];
                    };
                };
            };
        };
    };
    inviteTeamMember: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example dev@example.com
                     */
                    email: string;
                    /** @example developer */
                    role: string;
                };
            };
        };
        responses: {
            /** @description Member invited */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TeamMember"];
                    };
                };
            };
        };
    };
    removeTeamMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Member removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateTeamMemberRole: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example developer */
                    role: string;
                };
            };
        };
        responses: {
            /** @description Role updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listApiKeys: {
        parameters: {
            query?: {
                is_test?: "true" | "false";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description API key list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKey"][];
                    };
                };
            };
        };
    };
    createApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example secret
                     * @enum {string}
                     */
                    type: "secret" | "publishable";
                    /** @example CI Pipeline */
                    name?: string;
                    /** @description Resource permissions. Null or omitted = full access (unrestricted). */
                    permissions?: {
                        /** @enum {string} */
                        catalog: "none" | "read" | "write";
                        /** @enum {string} */
                        orders: "none" | "read" | "write";
                        /** @enum {string} */
                        customers: "none" | "read" | "write";
                        /** @enum {string} */
                        inventory: "none" | "read" | "write";
                        /** @enum {string} */
                        shipping: "none" | "read" | "write";
                        /** @enum {string} */
                        promotions: "none" | "read" | "write";
                        /** @enum {string} */
                        tax: "none" | "read" | "write";
                        /** @enum {string} */
                        developer: "none" | "read" | "write";
                        /** @enum {string} */
                        settings: "none" | "read" | "write";
                        /** @enum {string} */
                        cart: "none" | "read" | "write";
                    } | null;
                };
            };
        };
        responses: {
            /** @description API key created (plaintext shown once) */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKeyWithPlaintext"];
                    };
                };
            };
        };
    };
    rollApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Hours to keep old key active (0–168). Defaults to 0 (immediate deactivation).
                     * @example 24
                     */
                    grace_period_hours?: number;
                    /** @description Permissions for the new key. Omit to inherit from the old key. */
                    permissions?: {
                        /** @enum {string} */
                        catalog: "none" | "read" | "write";
                        /** @enum {string} */
                        orders: "none" | "read" | "write";
                        /** @enum {string} */
                        customers: "none" | "read" | "write";
                        /** @enum {string} */
                        inventory: "none" | "read" | "write";
                        /** @enum {string} */
                        shipping: "none" | "read" | "write";
                        /** @enum {string} */
                        promotions: "none" | "read" | "write";
                        /** @enum {string} */
                        tax: "none" | "read" | "write";
                        /** @enum {string} */
                        developer: "none" | "read" | "write";
                        /** @enum {string} */
                        settings: "none" | "read" | "write";
                        /** @enum {string} */
                        cart: "none" | "read" | "write";
                    } | null;
                };
            };
        };
        responses: {
            /** @description New API key (plaintext shown once) */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKeyWithPlaintext"];
                    };
                };
            };
        };
    };
    revokeApiKey: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Revoked key metadata */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKey"];
                    };
                };
            };
        };
    };
    updateApiKeyName: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Display name for the key. Null to clear.
                     * @example Storefront
                     */
                    name: string | null;
                };
            };
        };
        responses: {
            /** @description Updated key metadata */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKey"];
                    };
                };
            };
        };
    };
    updateApiKeyPermissions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    permissions: components["schemas"]["KeyPermissions"] & unknown;
                };
            };
        };
        responses: {
            /** @description Updated key metadata */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ApiKey"];
                    };
                };
            };
        };
    };
    listTaxGroups: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated tax group list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxGroup"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createTaxGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Reduced Rate */
                    name: string;
                    /** @example Food, books, and children's clothing */
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description Tax group created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxGroup"];
                    };
                };
            };
        };
    };
    getTaxGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tax group */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxGroup"];
                    };
                };
            };
        };
    };
    deleteTaxGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tax group deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateTaxGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Reduced Rate */
                    name?: string;
                    /** @example Food, books, and children's clothing */
                    description?: string | null;
                };
            };
        };
        responses: {
            /** @description Tax group updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxGroup"];
                    };
                };
            };
        };
    };
    listTaxRates: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at";
                order?: "asc" | "desc";
                country?: string;
                tax_group_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated tax rate list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxRate"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createTaxRate: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example State Sales Tax */
                    name: string;
                    /** @example US */
                    country: string;
                    /** @example CA */
                    state?: string | null;
                    /** @example 7.25 */
                    rate: number;
                    /**
                     * @default false
                     * @example false
                     */
                    is_shipping_taxed?: boolean;
                    /**
                     * @default null
                     * @example tg_abc123
                     */
                    tax_group_id?: string | null;
                };
            };
        };
        responses: {
            /** @description Tax rate created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxRate"];
                    };
                };
            };
        };
    };
    deleteTaxRate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tax rate deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateTaxRate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Updated Tax */
                    name?: string;
                    /** @example US */
                    country?: string;
                    /** @example NY */
                    state?: string | null;
                    /** @example 8.875 */
                    rate?: number;
                    /** @example true */
                    is_shipping_taxed?: boolean;
                    /** @example tg_abc123 */
                    tax_group_id?: string | null;
                };
            };
        };
        responses: {
            /** @description Tax rate updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxRate"];
                    };
                };
            };
        };
    };
    listTaxExemptions: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at";
                order?: "asc" | "desc";
                resource_type?: "product" | "collection" | "customer";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated tax exemption list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxExemption"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createTaxExemption: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example product
                     * @enum {string}
                     */
                    resource_type: "product" | "collection" | "customer";
                    /** @example prod_abc123 */
                    resource_id: string;
                };
            };
        };
        responses: {
            /** @description Tax exemption created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxExemption"];
                    };
                };
            };
        };
    };
    deleteTaxExemption: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tax exemption deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listMetafieldDefinitions: {
        parameters: {
            query?: {
                owner_type?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Definition list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            key: string;
                            slug: string;
                            label: string;
                            description: string | null;
                            owner_type: string;
                            value_type: string;
                            choices: string[] | null;
                            metaobject_type_id: string | null;
                            position: number;
                            required: boolean;
                            storefront_visible: boolean;
                            archived: boolean;
                            created_at: string;
                            updated_at: string;
                        }[];
                    };
                };
            };
        };
    };
    createMetafieldDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    label: string;
                    slug?: string;
                    description?: string;
                    /** @enum {string} */
                    owner_type: "product" | "variant" | "customer" | "collection" | "order" | "purchase_order_item";
                    value_type: string;
                    choices?: string[];
                    metaobject_type_id?: string;
                    position?: number;
                    /** @default false */
                    required?: boolean;
                    /** @default true */
                    storefront_visible?: boolean;
                };
            };
        };
        responses: {
            /** @description Definition created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            key: string;
                            slug: string;
                            label: string;
                            description: string | null;
                            owner_type: string;
                            value_type: string;
                            choices: string[] | null;
                            metaobject_type_id: string | null;
                            position: number;
                            required: boolean;
                            storefront_visible: boolean;
                            archived: boolean;
                            created_at: string;
                            updated_at: string;
                        };
                    };
                };
            };
        };
    };
    archiveMetafieldDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                owner_type: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Definition archived */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMetafieldDefinition: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                owner_type: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    label?: string;
                    slug?: string;
                    description?: string | null;
                    choices?: string[] | null;
                    position?: number;
                    required?: boolean;
                    storefront_visible?: boolean;
                    archived?: boolean;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Definition updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            key: string;
                            slug: string;
                            label: string;
                            description: string | null;
                            owner_type: string;
                            value_type: string;
                            choices: string[] | null;
                            metaobject_type_id: string | null;
                            position: number;
                            required: boolean;
                            storefront_visible: boolean;
                            archived: boolean;
                            created_at: string;
                            updated_at: string;
                        };
                    };
                };
            };
        };
    };
    reorderMetafieldDefinitions: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                owner_type: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    order: string[];
                };
            };
        };
        responses: {
            /** @description Reordered definitions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            key: string;
                            slug: string;
                            label: string;
                            description: string | null;
                            owner_type: string;
                            value_type: string;
                            choices: string[] | null;
                            metaobject_type_id: string | null;
                            position: number;
                            required: boolean;
                            storefront_visible: boolean;
                            archived: boolean;
                            created_at: string;
                            updated_at: string;
                        }[];
                    };
                };
            };
        };
    };
    listMetaobjectTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metaobject type list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectType"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createMetaobjectType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Influencer */
                    label: string;
                    /** @example influencer */
                    slug?: string;
                };
            };
        };
        responses: {
            /** @description Created metaobject type */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectType"];
                    };
                };
            };
        };
    };
    getMetaobjectType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metaobject type */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectType"];
                    };
                };
            };
        };
    };
    archiveMetaobjectType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Type archived */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMetaobjectType: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Influencer */
                    label?: string;
                    /** @example influencer */
                    slug?: string;
                };
            };
        };
        responses: {
            /** @description Updated metaobject type */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectType"];
                    };
                };
            };
        };
    };
    addMetaobjectField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Instagram Handle */
                    label: string;
                    /** @example instagram_handle */
                    slug?: string;
                    /** @example The influencer's Instagram username */
                    description?: string;
                    /** @example single_line_text */
                    value_type: string;
                    choices?: string[];
                    metaobject_type_id?: string;
                    position?: number;
                    /** @default false */
                    required?: boolean;
                    /** @default true */
                    storefront_visible?: boolean;
                };
            };
        };
        responses: {
            /** @description Field added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    removeMetaobjectField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
                field: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Field removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMetaobjectField: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
                field: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    label?: string;
                    slug?: string;
                    description?: string | null;
                    choices?: string[] | null;
                    position?: number;
                    required?: boolean;
                    storefront_visible?: boolean;
                    archived?: boolean;
                } & {
                    [key: string]: unknown;
                };
            };
        };
        responses: {
            /** @description Field updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listMetaobjectEntries: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                search?: string;
            };
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated entry list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectEntry"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createMetaobjectEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane Smith */
                    display_name: string;
                    fields?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Created entry */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectEntry"];
                    };
                };
            };
        };
    };
    getMetaobjectEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Entry with fields */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectEntry"];
                    };
                };
            };
        };
    };
    deleteMetaobjectEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Entry deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMetaobjectEntry: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                slug: string;
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane Smith */
                    display_name?: string;
                    fields?: {
                        [key: string]: unknown;
                    };
                };
            };
        };
        responses: {
            /** @description Updated entry */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MetaobjectEntry"];
                    };
                };
            };
        };
    };
    listProducts: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                status?: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
                /** @description Filter by exact handle (URL slug) */
                handle?: string;
                collection_id?: string;
                created_after?: string;
                created_before?: string;
                search?: string;
                /** @description Filter by title (case-insensitive partial match) */
                title?: string;
                /** @description Filter to products with at least one variant from this supplier */
                supplier_id?: string;
                currency?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated product list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createProduct: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Classic Cotton T-Shirt */
                    title: string;
                    /** @example classic-cotton-t-shirt */
                    handle?: string;
                    /** @example Lightweight everyday essential */
                    subtitle?: string;
                    /** @example A premium organic cotton t-shirt built for comfort and durability. */
                    description?: string;
                    /**
                     * @default draft
                     * @example draft
                     * @enum {string}
                     */
                    status?: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
                    /** @example T-Shirts */
                    product_type?: string;
                    /** @example Hydra Apparel */
                    brand?: string;
                    /** @example Apparel & Accessories > Clothing > Shirts & Tops */
                    google_product_category?: string;
                    /** @example 6109.10 */
                    hs_code?: string;
                    /** @example US */
                    country_of_origin?: string;
                    /**
                     * @default null
                     * @example tg_abc123
                     */
                    tax_group_id?: string | null;
                    /**
                     * @default physical
                     * @example physical
                     * @enum {string}
                     */
                    fulfillment_type?: "physical" | "digital" | "service";
                    /** @example Restocking in Q3. */
                    internal_notes?: string;
                    /** @example 1 */
                    qty_step?: number;
                    preorder_expected_date?: string | null;
                    /**
                     * @default []
                     * @example [
                     *       "cotton",
                     *       "summer",
                     *       "basics"
                     *     ]
                     */
                    tags?: string[];
                    options?: {
                        /** @example Color */
                        name: string;
                        /**
                         * @example [
                         *       "Black",
                         *       "White",
                         *       "Navy"
                         *     ]
                         */
                        values: string[];
                        /** @example 0 */
                        position: number;
                    }[];
                    /** @default [] */
                    variants?: {
                        /** @example Black / M */
                        title: string;
                        /** @example CCT-BLK-M */
                        sku?: string;
                        /** @example 1234567890123 */
                        barcode?: string;
                        /** @example 2999 */
                        price: number;
                        /** @example 3999 */
                        sale_price?: number;
                        /** @default {} */
                        currency_prices?: {
                            [key: string]: number;
                        };
                        /** @default {} */
                        currency_sale_prices?: {
                            [key: string]: number;
                        };
                        /**
                         * @default 0
                         * @example 100
                         */
                        inventory_quantity?: number;
                        /** @example 200 */
                        weight?: number;
                        /**
                         * @default g
                         * @example g
                         * @enum {string}
                         */
                        weight_unit?: "g" | "kg" | "oz" | "lb";
                        /** @example 6109.10 */
                        hs_code?: string;
                        /** @example US */
                        country_of_origin?: string;
                        /**
                         * @default {}
                         * @example {
                         *       "Color": "Black",
                         *       "Size": "M"
                         *     }
                         */
                        options?: {
                            [key: string]: string;
                        };
                    }[];
                    /** @default [] */
                    specifications?: {
                        /** @example Material */
                        label: string;
                        /** @example 100% organic cotton */
                        value: string;
                    }[];
                    /** @default {} */
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Product created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"];
                    };
                };
            };
        };
    };
    batchCreateProducts: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    products: {
                        /** @example Classic Cotton T-Shirt */
                        title: string;
                        /** @example classic-cotton-t-shirt */
                        handle?: string;
                        /** @example Lightweight everyday essential */
                        subtitle?: string;
                        /** @example A premium organic cotton t-shirt built for comfort and durability. */
                        description?: string;
                        /**
                         * @default draft
                         * @example draft
                         * @enum {string}
                         */
                        status?: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
                        /** @example T-Shirts */
                        product_type?: string;
                        /** @example Hydra Apparel */
                        brand?: string;
                        /** @example Apparel & Accessories > Clothing > Shirts & Tops */
                        google_product_category?: string;
                        /** @example 6109.10 */
                        hs_code?: string;
                        /** @example US */
                        country_of_origin?: string;
                        /**
                         * @default null
                         * @example tg_abc123
                         */
                        tax_group_id?: string | null;
                        /**
                         * @default physical
                         * @example physical
                         * @enum {string}
                         */
                        fulfillment_type?: "physical" | "digital" | "service";
                        /** @example Restocking in Q3. */
                        internal_notes?: string;
                        /** @example 1 */
                        qty_step?: number;
                        preorder_expected_date?: string | null;
                        /**
                         * @default []
                         * @example [
                         *       "cotton",
                         *       "summer",
                         *       "basics"
                         *     ]
                         */
                        tags?: string[];
                        options?: {
                            /** @example Color */
                            name: string;
                            /**
                             * @example [
                             *       "Black",
                             *       "White",
                             *       "Navy"
                             *     ]
                             */
                            values: string[];
                            /** @example 0 */
                            position: number;
                        }[];
                        /** @default [] */
                        variants?: {
                            /** @example Black / M */
                            title: string;
                            /** @example CCT-BLK-M */
                            sku?: string;
                            /** @example 1234567890123 */
                            barcode?: string;
                            /** @example 2999 */
                            price: number;
                            /** @example 3999 */
                            sale_price?: number;
                            /** @default {} */
                            currency_prices?: {
                                [key: string]: number;
                            };
                            /** @default {} */
                            currency_sale_prices?: {
                                [key: string]: number;
                            };
                            /**
                             * @default 0
                             * @example 100
                             */
                            inventory_quantity?: number;
                            /** @example 200 */
                            weight?: number;
                            /**
                             * @default g
                             * @example g
                             * @enum {string}
                             */
                            weight_unit?: "g" | "kg" | "oz" | "lb";
                            /** @example 6109.10 */
                            hs_code?: string;
                            /** @example US */
                            country_of_origin?: string;
                            /**
                             * @default {}
                             * @example {
                             *       "Color": "Black",
                             *       "Size": "M"
                             *     }
                             */
                            options?: {
                                [key: string]: string;
                            };
                        }[];
                        /** @default [] */
                        specifications?: {
                            /** @example Material */
                            label: string;
                            /** @example 100% organic cotton */
                            value: string;
                        }[];
                        /** @default {} */
                        seo?: {
                            title?: string;
                            description?: string;
                        };
                        /** @default {} */
                        metadata?: {
                            [key: string]: string | number;
                        };
                    }[];
                };
            };
        };
        responses: {
            /** @description Products created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"][];
                    };
                };
            };
        };
    };
    getProduct: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Product details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"];
                    };
                };
            };
        };
    };
    deleteProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Product deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Classic Cotton T-Shirt */
                    title?: string;
                    /** @example classic-cotton-t-shirt */
                    handle?: string;
                    /** @example Lightweight everyday essential */
                    subtitle?: string | null;
                    /** @example A premium organic cotton t-shirt built for comfort and durability. */
                    description?: string;
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "draft" | "archived" | "preorder" | "coming_soon" | "discontinued";
                    /** @example T-Shirts */
                    product_type?: string;
                    /** @example Hydra Apparel */
                    brand?: string | null;
                    /** @example Apparel & Accessories > Clothing > Shirts & Tops */
                    google_product_category?: string | null;
                    /** @example 6109.10 */
                    hs_code?: string | null;
                    /** @example US */
                    country_of_origin?: string | null;
                    /** @example tg_abc123 */
                    tax_group_id?: string | null;
                    /**
                     * @example physical
                     * @enum {string}
                     */
                    fulfillment_type?: "physical" | "digital" | "service";
                    /** @example Restocking in Q3. */
                    internal_notes?: string | null;
                    /** @example 1 */
                    qty_step?: number | null;
                    preorder_expected_date?: string | null;
                    /**
                     * @example [
                     *       "cotton",
                     *       "summer",
                     *       "basics"
                     *     ]
                     */
                    tags?: string[];
                    options?: {
                        /** @example Color */
                        name: string;
                        /**
                         * @example [
                         *       "Black",
                         *       "White",
                         *       "Navy"
                         *     ]
                         */
                        values: string[];
                        /** @example 0 */
                        position: number;
                    }[];
                    specifications?: {
                        /** @example Material */
                        label: string;
                        /** @example 100% organic cotton */
                        value: string;
                    }[];
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    metadata?: {
                        [key: string]: string | number;
                    };
                    /**
                     * @default false
                     * @example false
                     */
                    create_redirect?: boolean;
                };
            };
        };
        responses: {
            /** @description Product updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"];
                    };
                };
            };
        };
    };
    getProductStats: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Product stats */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ProductStats"];
                    };
                };
            };
        };
    };
    duplicateProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Classic Cotton T-Shirt (Copy) */
                    title: string;
                    /**
                     * @default true
                     * @example true
                     */
                    include_variants?: boolean;
                    /**
                     * @default true
                     * @example true
                     */
                    include_images?: boolean;
                };
            };
        };
        responses: {
            /** @description Product duplicated */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Product"];
                    };
                };
            };
        };
    };
    listProductVariants: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Variant list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Variant"][];
                    };
                };
            };
        };
    };
    createProductVariant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Black / M */
                    title: string;
                    /** @example CCT-BLK-M */
                    sku?: string;
                    /** @example 1234567890123 */
                    barcode?: string;
                    /** @example 2999 */
                    price: number;
                    /** @example 3999 */
                    sale_price?: number;
                    /** @default {} */
                    currency_prices?: {
                        [key: string]: number;
                    };
                    /** @default {} */
                    currency_sale_prices?: {
                        [key: string]: number;
                    };
                    /** @example 850 */
                    cost?: number;
                    /** @example true */
                    taxable?: boolean;
                    /** @example txcd_99999999 */
                    tax_code?: string;
                    /** @example 6109.10 */
                    hs_code?: string;
                    /** @example US */
                    country_of_origin?: string;
                    /**
                     * @default 0
                     * @example 100
                     */
                    inventory_quantity?: number;
                    /** @example 10 */
                    low_stock_threshold?: number | null;
                    /** @example 1 */
                    qty_step?: number | null;
                    /** @example 0.5 */
                    weight?: number;
                    /**
                     * @default g
                     * @example g
                     * @enum {string}
                     */
                    weight_unit?: "g" | "kg" | "oz" | "lb";
                    /** @example comp_abc123 */
                    supplier_id?: string | null;
                    /** @example SUP-BLK-M */
                    supplier_sku?: string | null;
                    /** @example 14 */
                    lead_time_days?: number | null;
                    /** @example img_abc123 */
                    image_id?: string | null;
                    /**
                     * @default {}
                     * @example {
                     *       "Color": "Black",
                     *       "Size": "M"
                     *     }
                     */
                    options?: {
                        [key: string]: string;
                    };
                };
            };
        };
        responses: {
            /** @description Variant created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Variant"];
                    };
                };
            };
        };
    };
    generateProductVariants: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example [
                     *       {
                     *         "Color": "Black",
                     *         "Size": "M"
                     *       },
                     *       {
                     *         "Color": "Black",
                     *         "Size": "L"
                     *       }
                     *     ]
                     */
                    combinations: {
                        [key: string]: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Variants generated */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["GenerateVariantsResult"];
                    };
                };
            };
        };
    };
    listProductImages: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Image list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"][];
                    };
                };
            };
        };
    };
    uploadProductImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    lqip?: string;
                };
            };
        };
        responses: {
            /** @description Image uploaded */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"];
                    };
                };
            };
        };
    };
    attachProductImages: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    image_ids: string[];
                };
            };
        };
        responses: {
            /** @description Images attached */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"][];
                    };
                };
            };
        };
    };
    listProductMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetProductMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setProductMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearProductMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getVariant: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Variant */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Variant"];
                    };
                };
            };
        };
    };
    deleteVariant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Variant deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateVariant: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Black / M */
                    title?: string;
                    /** @example CCT-BLK-M */
                    sku?: string;
                    /** @example 1234567890123 */
                    barcode?: string;
                    /** @example 2999 */
                    price?: number;
                    /** @example 3999 */
                    sale_price?: number | null;
                    currency_prices?: {
                        [key: string]: number;
                    };
                    currency_sale_prices?: {
                        [key: string]: number;
                    };
                    /** @example 850 */
                    cost?: number | null;
                    /** @example true */
                    taxable?: boolean;
                    /** @example txcd_99999999 */
                    tax_code?: string | null;
                    /** @example 6109.10 */
                    hs_code?: string | null;
                    /** @example US */
                    country_of_origin?: string | null;
                    /** @example 150 */
                    inventory_quantity?: number;
                    /** @example 10 */
                    low_stock_threshold?: number | null;
                    /** @example 1 */
                    qty_step?: number | null;
                    /** @example 0.5 */
                    weight?: number | null;
                    /**
                     * @example g
                     * @enum {string}
                     */
                    weight_unit?: "g" | "kg" | "oz" | "lb";
                    /** @example comp_abc123 */
                    supplier_id?: string | null;
                    /** @example SUP-BLK-M */
                    supplier_sku?: string | null;
                    /** @example 14 */
                    lead_time_days?: number | null;
                    /** @example img_abc123 */
                    image_id?: string | null;
                    /**
                     * @example {
                     *       "Color": "Black",
                     *       "Size": "M"
                     *     }
                     */
                    options?: {
                        [key: string]: string;
                    };
                };
            };
        };
        responses: {
            /** @description Variant updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Variant"];
                    };
                };
            };
        };
    };
    listVariantPrices: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Variant price list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            [key: string]: components["schemas"]["VariantPrice"];
                        };
                    };
                };
            };
        };
    };
    upsertVariantPrice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example 1999 */
                    price: number;
                    /** @example 2499 */
                    sale_price?: number | null;
                    /** @example 500 */
                    inventory_quantity?: number;
                    /** @example 50 */
                    low_stock_threshold?: number | null;
                    /** @example 6 */
                    qty_step?: number | null;
                    /** @example true */
                    taxable?: boolean;
                    /**
                     * @default {}
                     * @example {
                     *       "EUR": 1849,
                     *       "GBP": 1599
                     *     }
                     */
                    currency_prices?: {
                        [key: string]: number;
                    };
                    /**
                     * @default {}
                     * @example {
                     *       "EUR": 2299,
                     *       "GBP": 1999
                     *     }
                     */
                    currency_sale_prices?: {
                        [key: string]: number;
                    };
                };
            };
        };
        responses: {
            /** @description Variant price set */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["VariantPrice"];
                    };
                };
            };
        };
    };
    deleteVariantPrice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Variant price deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listVariantMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetVariantMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setVariantMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearVariantMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchDeleteImages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    image_ids: string[];
                };
            };
        };
        responses: {
            /** @description Images deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchDetachImages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    image_ids: string[];
                };
            };
        };
        responses: {
            /** @description Images detached */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reorderImages: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    images: {
                        id: string;
                        position: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Images reordered */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listImages: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                unattached?: "true" | "false";
                search?: string;
                category?: "product" | "collection" | "blog" | "logo" | "general" | "page" | "marketing";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated image list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    uploadImage: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "multipart/form-data": {
                    /** Format: binary */
                    file?: string;
                    lqip?: string;
                };
            };
        };
        responses: {
            /** @description Image uploaded */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"];
                    };
                };
            };
        };
    };
    detachImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Image detached */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Image deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateImage: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    alt?: string;
                    position?: number;
                    slug?: string;
                    /** @enum {string} */
                    category?: "product" | "collection" | "blog" | "logo" | "general" | "page" | "marketing";
                };
            };
        };
        responses: {
            /** @description Image updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Image"];
                    };
                };
            };
        };
    };
    listCollections: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                type?: "manual" | "automatic";
                status?: "active" | "draft";
                /** @description Filter by exact handle (URL slug) */
                handle?: string;
                search?: string;
                /** @description Filter by title (case-insensitive partial match) */
                title?: string;
                product_id?: string;
                /** @description Filter by parent. Use "root" for top-level collections only, or a collection ID for direct children. */
                parent_collection_id?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated collection list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Collection"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCollection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Summer Essentials */
                    title: string;
                    /** @example summer-essentials */
                    handle?: string;
                    /** @example Lightweight picks for warm weather. */
                    description?: string;
                    /**
                     * @default manual
                     * @example manual
                     * @enum {string}
                     */
                    type?: "manual" | "automatic";
                    /**
                     * @default draft
                     * @example draft
                     * @enum {string}
                     */
                    status?: "active" | "draft";
                    /**
                     * @default manual
                     * @example manual
                     * @enum {string}
                     */
                    sort_order?: "manual" | "best-selling" | "alpha-asc" | "alpha-desc" | "price-asc" | "price-desc" | "created-desc" | "created-asc";
                    /**
                     * @description Parent collection ID for nesting (max 3 levels)
                     * @example col_parent123
                     */
                    parent_collection_id?: string | null;
                    /** @example img_abc123 */
                    image_id?: string | null;
                    /** @default {} */
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    /** @default [] */
                    conditions?: {
                        /**
                         * @example product_type
                         * @enum {string}
                         */
                        field: "product_type" | "tag" | "price" | "brand" | "inventory_quantity";
                        /**
                         * @example is_same_as
                         * @enum {string}
                         */
                        operator: "is_same_as" | "is_not" | "more_than" | "less_than";
                        /** @example T-Shirts */
                        value: string | number;
                    }[];
                    /**
                     * @description Match all conditions (AND) or any condition (OR)
                     * @default all
                     * @example all
                     * @enum {string}
                     */
                    condition_match?: "all" | "any";
                };
            };
        };
        responses: {
            /** @description Collection created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Collection"];
                    };
                };
            };
        };
    };
    getCollectionTree: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Nested collection tree */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    reorderCollections: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    collections: {
                        /** @example col_abc123 */
                        id: string;
                        /** @example col_parent123 */
                        parent_collection_id: string | null;
                        /** @example 0 */
                        position: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Collections reordered */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getCollection: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Collection details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Collection"];
                    };
                };
            };
        };
    };
    deleteCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Collection deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCollection: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Summer Essentials */
                    title?: string;
                    /** @example summer-essentials */
                    handle?: string;
                    /** @example Lightweight picks for warm weather. */
                    description?: string;
                    /**
                     * @example manual
                     * @enum {string}
                     */
                    type?: "manual" | "automatic";
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "draft";
                    /**
                     * @example best-selling
                     * @enum {string}
                     */
                    sort_order?: "manual" | "best-selling" | "alpha-asc" | "alpha-desc" | "price-asc" | "price-desc" | "created-desc" | "created-asc";
                    /**
                     * @description Set or change parent collection. Null to make root-level.
                     * @example col_parent123
                     */
                    parent_collection_id?: string | null;
                    /** @example img_abc123 */
                    image_id?: string | null;
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    conditions?: {
                        /**
                         * @example product_type
                         * @enum {string}
                         */
                        field: "product_type" | "tag" | "price" | "brand" | "inventory_quantity";
                        /**
                         * @example is_same_as
                         * @enum {string}
                         */
                        operator: "is_same_as" | "is_not" | "more_than" | "less_than";
                        /** @example T-Shirts */
                        value: string | number;
                    }[];
                    /**
                     * @description Match all conditions (AND) or any condition (OR)
                     * @example all
                     * @enum {string}
                     */
                    condition_match?: "all" | "any";
                    /**
                     * @default false
                     * @example false
                     */
                    create_redirect?: boolean;
                };
            };
        };
        responses: {
            /** @description Collection updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Collection"];
                    };
                };
            };
        };
    };
    addCollectionProducts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example [
                     *       "prod_abc123",
                     *       "prod_def456"
                     *     ]
                     */
                    product_ids: string[];
                };
            };
        };
        responses: {
            /** @description Products added */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Collection"];
                    };
                };
            };
        };
    };
    reorderCollectionProducts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    products: {
                        /** @example prod_abc123 */
                        id: string;
                        /** @example 0 */
                        position: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Products reordered */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    removeCollectionProduct: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                product_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Product removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCollectionMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetCollectionMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setCollectionMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearCollectionMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCompanies: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                search?: string;
                type?: "supplier" | "customer" | "both";
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated company list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Company"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCompany: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Acme Supplies Ltd */
                    name: string;
                    /** @example acme-supplies */
                    handle?: string;
                    /**
                     * @default supplier
                     * @example supplier
                     * @enum {string}
                     */
                    type?: "supplier" | "customer" | "both";
                    /**
                     * Format: email
                     * @example orders@acme.com
                     */
                    email?: string;
                    /** @example +14155550100 */
                    phone?: string;
                    /**
                     * Format: uri
                     * @example https://acme.com
                     */
                    website?: string;
                    /** @example GB123456789 */
                    tax_number?: string;
                    /** @example vat */
                    tax_number_type?: string;
                    /** @example USD */
                    currency?: string;
                    /** @example net_30 */
                    payment_terms?: string;
                    /** @example Primary fabric supplier */
                    note?: string;
                    /** @example ERP-SUP-001 */
                    external_id?: string;
                    /** @example US */
                    country?: string;
                    /**
                     * @example [
                     *       "domestic",
                     *       "preferred"
                     *     ]
                     */
                    tags?: string[];
                    /**
                     * @default active
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "inactive";
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Company created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Company"];
                    };
                };
            };
        };
    };
    getCompany: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Company details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Company"];
                    };
                };
            };
        };
    };
    deleteCompany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Company deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCompany: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Acme Supplies Ltd */
                    name?: string;
                    /** @example acme-supplies */
                    handle?: string;
                    /**
                     * Format: email
                     * @example orders@acme.com
                     */
                    email?: string | null;
                    /** @example +14155550100 */
                    phone?: string | null;
                    /**
                     * Format: uri
                     * @example https://acme.com
                     */
                    website?: string | null;
                    /** @example GB123456789 */
                    tax_number?: string | null;
                    /** @example vat */
                    tax_number_type?: string | null;
                    /** @example USD */
                    currency?: string | null;
                    /** @example net_30 */
                    payment_terms?: string | null;
                    /** @example Primary fabric supplier */
                    note?: string | null;
                    /** @example ERP-SUP-001 */
                    external_id?: string | null;
                    /** @example US */
                    country?: string | null;
                    /**
                     * @example [
                     *       "domestic",
                     *       "preferred"
                     *     ]
                     */
                    tags?: string[];
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "inactive";
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Company updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Company"];
                    };
                };
            };
        };
    };
    listCompanyAddresses: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Company addresses */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyAddress"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCompanyAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Warehouse */
                    label?: string | null;
                    /** @example John */
                    first_name?: string | null;
                    /** @example Doe */
                    last_name?: string | null;
                    /** @example 456 Industrial Blvd */
                    line1: string;
                    /** @example Unit 7 */
                    line2?: string | null;
                    /** @example Manchester */
                    city: string;
                    /** @example Greater Manchester */
                    state?: string | null;
                    /** @example M1 1AA */
                    postal_code?: string | null;
                    /** @example GB */
                    country: string;
                    /** @example +441234567890 */
                    phone?: string | null;
                    /**
                     * @default false
                     * @example false
                     */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyAddress"];
                    };
                };
            };
        };
    };
    deleteCompanyAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                address_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCompanyAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                address_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Warehouse */
                    label?: string | null;
                    /** @example John */
                    first_name?: string | null;
                    /** @example Doe */
                    last_name?: string | null;
                    /** @example 456 Industrial Blvd */
                    line1?: string;
                    /** @example Unit 7 */
                    line2?: string | null;
                    /** @example Manchester */
                    city?: string;
                    /** @example Greater Manchester */
                    state?: string | null;
                    /** @example M1 1AA */
                    postal_code?: string | null;
                    /** @example GB */
                    country?: string;
                    /** @example +441234567890 */
                    phone?: string | null;
                    /** @example true */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyAddress"];
                    };
                };
            };
        };
    };
    listCompanyContacts: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Company contacts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyContact"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCompanyContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Sarah Johnson */
                    name: string;
                    /**
                     * Format: email
                     * @example sarah@acme.com
                     */
                    email?: string;
                    /** @example +14155550101 */
                    phone?: string;
                    /** @example Sales Manager */
                    role?: string;
                    /**
                     * @default false
                     * @example true
                     */
                    is_primary?: boolean;
                };
            };
        };
        responses: {
            /** @description Contact created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyContact"];
                    };
                };
            };
        };
    };
    deleteCompanyContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                contact_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Contact deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCompanyContact: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                contact_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Sarah Johnson */
                    name?: string;
                    /**
                     * Format: email
                     * @example sarah@acme.com
                     */
                    email?: string | null;
                    /** @example +14155550101 */
                    phone?: string | null;
                    /** @example Sales Manager */
                    role?: string | null;
                    /** @example true */
                    is_primary?: boolean;
                };
            };
        };
        responses: {
            /** @description Contact updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyContact"];
                    };
                };
            };
        };
    };
    listCompanyNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Company notes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyNote"][];
                    };
                };
            };
        };
    };
    createCompanyNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Negotiated 10% discount on bulk orders. */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Note created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CompanyNote"];
                    };
                };
            };
        };
    };
    deleteCompanyNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                note_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Note deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomers: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name" | "relevance";
                order?: "asc" | "desc";
                email?: string;
                search?: string;
                status?: "active" | "inactive";
                created_after?: string;
                min_orders?: number | null;
                max_orders?: number | null;
                min_spent?: number | null;
                group_id?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated customer list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Customer"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    email: string;
                    /** @example Jane */
                    first_name: string;
                    /** @example Smith */
                    last_name: string;
                    /** @example +14155550123 */
                    phone?: string;
                    /** @example en */
                    locale?: string | null;
                    /** @default [] */
                    tags?: string[];
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                    /** @example wholesale */
                    active_price_key?: string | null;
                    /** @example Acme Corp */
                    company?: string;
                    /**
                     * @default active
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "inactive";
                    /** @example DE123456789 */
                    tax_number?: string;
                    /** @example vat */
                    tax_number_type?: string;
                };
            };
        };
        responses: {
            /** @description Customer created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Customer"];
                    };
                };
            };
        };
    };
    getCustomer: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Customer"];
                    };
                };
            };
        };
    };
    deleteCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    email?: string;
                    /** @example Jane */
                    first_name?: string;
                    /** @example Smith */
                    last_name?: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /** @example en */
                    locale?: string | null;
                    /**
                     * @example [
                     *       "vip",
                     *       "wholesale"
                     *     ]
                     */
                    tags?: string[];
                    metadata?: {
                        [key: string]: string | number;
                    };
                    /** @example wholesale */
                    active_price_key?: string | null;
                    /** @example Acme Corp */
                    company?: string | null;
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "inactive";
                    /** @example DE123456789 */
                    tax_number?: string | null;
                    /** @example vat */
                    tax_number_type?: string | null;
                };
            };
        };
        responses: {
            /** @description Customer updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Customer"];
                    };
                };
            };
        };
    };
    listCustomerAddresses: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer addresses */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Address"][];
                    };
                };
            };
        };
    };
    createCustomerAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane */
                    first_name?: string | null;
                    /** @example Smith */
                    last_name?: string | null;
                    /** @example Acme Inc. */
                    company?: string | null;
                    /** @example 123 Main St */
                    line1: string;
                    /** @example Apt 4B */
                    line2?: string | null;
                    /** @example San Francisco */
                    city: string;
                    /** @example CA */
                    state?: string | null;
                    /** @example 94105 */
                    postal_code?: string | null;
                    /** @example US */
                    country: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /**
                     * @default false
                     * @example false
                     */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Address"];
                    };
                };
            };
        };
    };
    listCustomerNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer notes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerNote"][];
                    };
                };
            };
        };
    };
    createCustomerNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Customer requested invoice copy. */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Note created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerNote"];
                    };
                };
            };
        };
    };
    deleteCustomerNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                note_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Note deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getCustomerCredit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Credit balance */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            balance: number;
                            currency: string;
                        };
                    };
                };
            };
        };
    };
    issueCustomerCredit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    amount: number;
                    note?: string;
                    /** Format: date-time */
                    expires_at?: string;
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Credit issued */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            customer_id: string;
                            /** @enum {string} */
                            type: "credit" | "debit" | "expiry";
                            amount: number;
                            balance_after: number;
                            reason: string;
                            note: string | null;
                            related_order_id: string | null;
                            related_refund_id: string | null;
                            expires_at: string | null;
                            metadata: {
                                [key: string]: string | number;
                            };
                            created_at: string;
                            updated_at: string;
                        };
                    };
                };
            };
        };
    };
    listCustomerCreditTransactions: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated transaction list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            customer_id: string;
                            /** @enum {string} */
                            type: "credit" | "debit" | "expiry";
                            amount: number;
                            balance_after: number;
                            reason: string;
                            note: string | null;
                            related_order_id: string | null;
                            related_refund_id: string | null;
                            expires_at: string | null;
                            metadata: {
                                [key: string]: string | number;
                            };
                            created_at: string;
                            updated_at: string;
                        }[];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listCustomerMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetCustomerMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setCustomerMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearCustomerMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomerGroups: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                search?: string;
                customer_id?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated customer group list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerGroup"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createCustomerGroup: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Wholesale */
                    name: string;
                    /** @example wholesale */
                    handle?: string;
                    /** @example B2B wholesale customers */
                    description?: string;
                    /**
                     * @description Manual groups use explicit membership; automatic groups compute membership from conditions
                     * @default manual
                     * @example manual
                     * @enum {string}
                     */
                    type?: "manual" | "automatic";
                    /**
                     * @description Conditions for automatic groups
                     * @default []
                     */
                    conditions?: {
                        /**
                         * @example total_spent
                         * @enum {string}
                         */
                        field: "tag" | "total_spent" | "order_count" | "status" | "company" | "first_order_date" | "last_order_date" | "customer_added_date" | "city" | "country";
                        /**
                         * @example more_than
                         * @enum {string}
                         */
                        operator: "is_same_as" | "is_not" | "more_than" | "less_than" | "is_before" | "is_after";
                        /** @example 5000 */
                        value: string | number;
                    }[];
                    /**
                     * @description Match all conditions (AND) or any condition (OR)
                     * @default all
                     * @example all
                     * @enum {string}
                     */
                    condition_match?: "all" | "any";
                    /** @example wholesale */
                    active_price_key?: string | null;
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Customer group created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerGroup"];
                    };
                };
            };
        };
    };
    getCustomerGroup: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer group details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerGroup"];
                    };
                };
            };
        };
    };
    deleteCustomerGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer group deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCustomerGroup: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Wholesale */
                    name?: string;
                    /** @example wholesale */
                    handle?: string;
                    /** @example B2B wholesale customers */
                    description?: string | null;
                    /** @description Conditions for automatic groups */
                    conditions?: {
                        /**
                         * @example total_spent
                         * @enum {string}
                         */
                        field: "tag" | "total_spent" | "order_count" | "status" | "company" | "first_order_date" | "last_order_date" | "customer_added_date" | "city" | "country";
                        /**
                         * @example more_than
                         * @enum {string}
                         */
                        operator: "is_same_as" | "is_not" | "more_than" | "less_than" | "is_before" | "is_after";
                        /** @example 5000 */
                        value: string | number;
                    }[];
                    /**
                     * @description Match all conditions (AND) or any condition (OR)
                     * @example all
                     * @enum {string}
                     */
                    condition_match?: "all" | "any";
                    /** @example wholesale */
                    active_price_key?: string | null;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Customer group updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerGroup"];
                    };
                };
            };
        };
    };
    addCustomerGroupMembers: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example [
                     *       "cus_abc123",
                     *       "cus_def456"
                     *     ]
                     */
                    customer_ids: string[];
                };
            };
        };
        responses: {
            /** @description Members added */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerGroup"];
                    };
                };
            };
        };
    };
    removeCustomerGroupMember: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                customer_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Member removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listDraftOrders: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at";
                order?: "asc" | "desc";
                status?: "open" | "sent" | "completed";
                customer_email?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated draft order list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrder"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createDraftOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example cus_abc123 */
                    customer_id?: string;
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    customer_email?: string;
                    /** @example USD */
                    currency: string;
                    shipping_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    billing_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    /** @example VIP customer — expedite shipping */
                    notes?: string;
                    /**
                     * @default due_on_receipt
                     * @example due_on_receipt
                     * @enum {string}
                     */
                    payment_terms?: "due_on_receipt" | "net_15" | "net_30" | "net_45" | "net_60" | "net_90" | "fixed_date";
                    /**
                     * Format: date-time
                     * @example null
                     */
                    payment_due_date?: string | null;
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Created draft order */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrder"];
                    };
                };
            };
        };
    };
    getDraftOrder: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Draft order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrder"];
                    };
                };
            };
        };
    };
    deleteDraftOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateDraftOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example cus_abc123 */
                    customer_id?: string | null;
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    customer_email?: string | null;
                    /** @example EUR */
                    currency?: string;
                    shipping_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    } | null;
                    billing_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    } | null;
                    /** @example 540 */
                    tax?: number;
                    /** @example 599 */
                    shipping_cost?: number;
                    /** @example 500 */
                    discount?: number;
                    /** @example Updated shipping info */
                    notes?: string | null;
                    /**
                     * @example net_30
                     * @enum {string}
                     */
                    payment_terms?: "due_on_receipt" | "net_15" | "net_30" | "net_45" | "net_60" | "net_90" | "fixed_date";
                    /**
                     * Format: date-time
                     * @example null
                     */
                    payment_due_date?: string | null;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Updated draft order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrder"];
                    };
                };
            };
        };
    };
    addDraftOrderItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    items: ({
                        /** @example var_abc123 */
                        variant_id: string;
                        /** @example 2 */
                        quantity: number;
                    } | {
                        /** @example Custom engraving */
                        title: string;
                        /** @example 1500 */
                        unit_price: number;
                        /** @example 1 */
                        quantity: number;
                    })[];
                };
            };
        };
        responses: {
            /** @description Added items */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrderLineItem"][];
                    };
                };
            };
        };
    };
    removeDraftOrderItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateDraftOrderItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example 3 */
                    quantity?: number;
                    /** @example 2000 */
                    unit_price?: number;
                    /** @example Updated custom item */
                    title?: string;
                    /** @example Gift wrap this item */
                    note?: string | null;
                };
            };
        };
        responses: {
            /** @description Updated item */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrderLineItem"];
                    };
                };
            };
        };
    };
    completeDraftOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Order created from draft */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Order"];
                    };
                };
            };
        };
    };
    sendDraftOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Order #0004 from My Store */
                    subject?: string;
                    /** @example Here's your order. Please complete payment at your earliest convenience. */
                    message?: string;
                    /**
                     * @example [
                     *       "sales@example.com"
                     *     ]
                     */
                    cc?: string[];
                    /**
                     * @example [
                     *       "merchant@example.com"
                     *     ]
                     */
                    bcc?: string[];
                };
            };
        };
        responses: {
            /** @description Payment request sent */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DraftOrder"];
                    };
                };
            };
        };
    };
    deleteAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane */
                    first_name?: string | null;
                    /** @example Smith */
                    last_name?: string | null;
                    /** @example Acme Inc. */
                    company?: string | null;
                    /** @example 123 Main St */
                    line1?: string;
                    /** @example Apt 4B */
                    line2?: string | null;
                    /** @example San Francisco */
                    city?: string;
                    /** @example CA */
                    state?: string | null;
                    /** @example 94105 */
                    postal_code?: string | null;
                    /** @example US */
                    country?: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /** @example true */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Address"];
                    };
                };
            };
        };
    };
    listAddressFormats: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address format list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            /** @example US */
                            country_code: string;
                            /** @example United States */
                            country_name: string;
                            /**
                             * @example [
                             *       "address",
                             *       "city",
                             *       "state",
                             *       "postal_code"
                             *     ]
                             */
                            required_fields: string[];
                        }[];
                    };
                };
            };
        };
    };
    getAddressFormat: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                country_code: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address format detail */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            /** @example US */
                            country_code: string;
                            /** @example United States */
                            country_name: string;
                            /** @example %N%n%O%n%A%n%C, %S %Z */
                            format: string;
                            /**
                             * @example [
                             *       "address",
                             *       "city",
                             *       "state",
                             *       "postal_code"
                             *     ]
                             */
                            required_fields: string[];
                            /**
                             * @example [
                             *       "city",
                             *       "state"
                             *     ]
                             */
                            uppercase_fields: string[];
                            /** @example (\d{5})(?:[ \-](\d{4}))? */
                            postal_code_pattern: string | null;
                            /** @example 95014, 22162-1010 */
                            postal_code_example: string | null;
                            /** @description Label type keys for each field (e.g. "state", "province", "prefecture", "zip", "postal", "eircode") */
                            labels: {
                                /** @example city */
                                city: string;
                                /** @example state */
                                state: string;
                                /** @example zip */
                                postal_code: string;
                            };
                            subdivisions: {
                                /** @example CA */
                                code: string;
                                /** @example California */
                                name: string;
                            }[];
                        };
                    };
                };
            };
        };
    };
    createCart: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cart created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    getCart: {
        parameters: {
            query?: {
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cart details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    clearCart: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cart cleared */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    addCartItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    variant_id: string;
                    /** @default 1 */
                    quantity?: number;
                    price_key?: string;
                };
            };
        };
        responses: {
            /** @description Item added */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    removeCartItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cart item removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    updateCartItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    quantity: number;
                };
            };
        };
        responses: {
            /** @description Cart item updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Cart"];
                    };
                };
            };
        };
    };
    createCheckout: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    cart_id: string;
                    customer_id?: string;
                    /** Format: email */
                    customer_email?: string;
                    currency?: string;
                    shipping_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    billing_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    shipping_rate_id?: string;
                };
            };
        };
        responses: {
            /** @description Checkout created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutCreate"];
                    };
                };
            };
        };
    };
    getCheckout: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Checkout details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutGet"];
                    };
                };
            };
        };
    };
    applyCheckoutDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example SUMMER20 */
                    code: string;
                };
            };
        };
        responses: {
            /** @description Discount applied */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutGet"];
                    };
                };
            };
        };
    };
    removeCheckoutDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Discount removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutGet"];
                    };
                };
            };
        };
    };
    applyCheckoutCredit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    customer_id: string;
                };
            };
        };
        responses: {
            /** @description Credit applied */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutGet"];
                    };
                };
            };
        };
    };
    removeCheckoutCredit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Credit removed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutGet"];
                    };
                };
            };
        };
    };
    completeCheckoutWithCredit: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    customer_id: string;
                };
            };
        };
        responses: {
            /** @description Order created from store credit */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCheckouts: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                /** @description Filter by recovery step (0-3) */
                recovery_step?: string;
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated checkout list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CheckoutListItem"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listOrders: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "order_number";
                order?: "asc" | "desc";
                status?: "open" | "closed" | "cancelled";
                financial_status?: "pending" | "paid" | "refunded" | "partially_refunded";
                fulfillment_status?: "unfulfilled" | "partial" | "fulfilled";
                customer_id?: string;
                customer_email?: string;
                order_number?: number;
                created_after?: string;
                created_before?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated order list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Order"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example cus_abc123 */
                    customer_id?: string;
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    customer_email: string;
                    /** @default [] */
                    line_items?: {
                        /** @example var_abc123 */
                        variant_id: string;
                        /** @example 2 */
                        quantity: number;
                        /** @example 2999 */
                        unit_price?: number;
                    }[];
                    /** @default [] */
                    custom_items?: {
                        /** @example Custom engraving */
                        title: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 1500 */
                        unit_price: number;
                    }[];
                    shipping_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    billing_address?: {
                        first_name?: string;
                        last_name?: string;
                        line1: string;
                        line2?: string;
                        city: string;
                        state: string;
                        postal_code: string;
                        country: string;
                    };
                    /**
                     * @default 0
                     * @example 540
                     */
                    tax?: number;
                    /**
                     * @default 0
                     * @example 599
                     */
                    shipping_cost?: number;
                    /**
                     * @default 0
                     * @example 0
                     */
                    discount?: number;
                    /** @example Gift wrap requested. */
                    notes?: string;
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Order created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Order"];
                    };
                };
            };
        };
    };
    getOrder: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Order details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Order"];
                    };
                };
            };
        };
    };
    updateOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example closed
                     * @enum {string}
                     */
                    status?: "open" | "closed" | "cancelled";
                    /**
                     * @example paid
                     * @enum {string}
                     */
                    financial_status?: "pending" | "paid" | "refunded" | "partially_refunded";
                    /**
                     * @example fulfilled
                     * @enum {string}
                     */
                    fulfillment_status?: "unfulfilled" | "partial" | "fulfilled";
                    /** @example Shipped via FedEx. */
                    notes?: string;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Order updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Order"];
                    };
                };
            };
        };
    };
    getOrderInvoice: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description PDF invoice binary */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listOrderNotes: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Order notes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["OrderNote"][];
                    };
                };
            };
        };
    };
    createOrderNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Customer called to confirm delivery window. */
                    content: string;
                };
            };
        };
        responses: {
            /** @description Note created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["OrderNote"];
                    };
                };
            };
        };
    };
    deleteOrderNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                note_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Note deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listOrderFulfillmentOrders: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Fulfillment orders for the order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FulfillmentOrder"][];
                    };
                };
            };
        };
    };
    createOrderFulfillmentOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Created fulfillment order */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FulfillmentOrder"];
                    };
                };
            };
        };
    };
    listOrderMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetOrderMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setOrderMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearOrderMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createFulfillment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    items: {
                        fulfillment_order_item_id: string;
                        quantity: number;
                    }[];
                    tracking_number?: string;
                    /** Format: uri */
                    tracking_url?: string;
                    carrier?: string;
                    notes?: string;
                };
            };
        };
        responses: {
            /** @description Fulfillment created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Fulfillment"];
                    };
                };
            };
        };
    };
    cancelFulfillment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @default false */
                    restock?: boolean;
                };
            };
        };
        responses: {
            /** @description Fulfillment cancelled */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Fulfillment"];
                    };
                };
            };
        };
    };
    updateFulfillment: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    tracking_number?: string | null;
                    /** Format: uri */
                    tracking_url?: string | null;
                    carrier?: string | null;
                    /** @enum {string} */
                    status?: "pending" | "shipped" | "delivered";
                    notes?: string | null;
                };
            };
        };
        responses: {
            /** @description Fulfillment updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Fulfillment"];
                    };
                };
            };
        };
    };
    listTopQueries: {
        parameters: {
            query?: {
                period?: "1d" | "7d" | "14d" | "30d";
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Top queries */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TopQuery"][];
                    };
                };
            };
        };
    };
    listZeroResultQueries: {
        parameters: {
            query?: {
                period?: "1d" | "7d" | "14d" | "30d";
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Zero-result queries */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ZeroResultQuery"][];
                    };
                };
            };
        };
    };
    listSynonyms: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Synonym list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Synonym"][];
                    };
                };
            };
        };
    };
    createSynonym: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @default equivalent
                     * @example equivalent
                     * @enum {string}
                     */
                    synonym_type?: "equivalent" | "oneway";
                    /**
                     * @example [
                     *       "t-shirt",
                     *       "tee",
                     *       "tshirt"
                     *     ]
                     */
                    terms: string[];
                };
            };
        };
        responses: {
            /** @description Synonym created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Synonym"];
                    };
                };
            };
        };
    };
    deleteSynonym: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Synonym deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateSynonym: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example oneway
                     * @enum {string}
                     */
                    synonym_type?: "equivalent" | "oneway";
                    /**
                     * @example [
                     *       "sneakers",
                     *       "trainers",
                     *       "kicks"
                     *     ]
                     */
                    terms?: string[];
                    /** @example true */
                    is_active?: boolean;
                };
            };
        };
        responses: {
            /** @description Synonym updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Synonym"];
                    };
                };
            };
        };
    };
    listMerchandisingRules: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Rule list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MerchandisingRule"][];
                    };
                };
            };
        };
    };
    createMerchandisingRule: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Pin Summer Banner for "summer" */
                    name: string;
                    /** @example summer */
                    match_query: string;
                    /**
                     * @default contains
                     * @example contains
                     * @enum {string}
                     */
                    match_type?: "all" | "exact" | "contains";
                    /**
                     * @example pin
                     * @enum {string}
                     */
                    action: "pin" | "boost" | "bury" | "hide";
                    /** @example prod_abc123 */
                    product_id: string;
                    /** @example 0 */
                    pin_position?: number;
                    /** @example 2 */
                    score_multiplier?: number;
                    /**
                     * @default 0
                     * @example 10
                     */
                    priority?: number;
                };
            };
        };
        responses: {
            /** @description Rule created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MerchandisingRule"];
                    };
                };
            };
        };
    };
    getMerchandisingRule: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Rule details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MerchandisingRule"];
                    };
                };
            };
        };
    };
    deleteMerchandisingRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Rule deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMerchandisingRule: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Boost winter jackets */
                    name?: string;
                    /** @example winter */
                    match_query?: string;
                    /**
                     * @example exact
                     * @enum {string}
                     */
                    match_type?: "all" | "exact" | "contains";
                    /**
                     * @example boost
                     * @enum {string}
                     */
                    action?: "pin" | "boost" | "bury" | "hide";
                    /** @example prod_abc123 */
                    product_id?: string;
                    /** @example null */
                    pin_position?: number | null;
                    /** @example 3 */
                    score_multiplier?: number | null;
                    /** @example 20 */
                    priority?: number;
                    /** @example true */
                    is_active?: boolean;
                };
            };
        };
        responses: {
            /** @description Rule updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MerchandisingRule"];
                    };
                };
            };
        };
    };
    search: {
        parameters: {
            query: {
                q: string;
                types?: string;
                limit?: number;
                offset?: number | null;
                product_type?: string;
                collection_id?: string;
                tag?: string;
                in_stock?: "true" | "false";
                price_min?: number | null;
                price_max?: number | null;
                facets?: "true" | "false";
                currency?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Search results */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchResult"];
                };
            };
        };
    };
    searchSuggest: {
        parameters: {
            query: {
                q: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Search suggestions */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["SearchSuggestions"];
                };
            };
        };
    };
    listInventory: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "updated_at";
                order?: "asc" | "desc";
                product_id?: string;
                sku?: string;
                low_stock?: boolean | null;
                location_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated inventory levels */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["InventoryLevel"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listProductAdjustments: {
        parameters: {
            query: {
                limit?: number;
                cursor?: string;
                fields?: string;
                product_id: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated adjustment history */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ProductAdjustment"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    setInventory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                variant_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    quantity: number;
                    /** @default set */
                    reason?: string;
                    location_id?: string;
                };
            };
        };
        responses: {
            /** @description Inventory level updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["InventoryLevel"] & {
                            adjustment: components["schemas"]["InventoryAdjustment"];
                        };
                    };
                };
            };
        };
    };
    adjustInventory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                variant_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    adjustment: number;
                    reason: string;
                    location_id?: string;
                };
            };
        };
        responses: {
            /** @description Inventory adjusted */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["InventoryLevel"] & {
                            adjustment: components["schemas"]["InventoryAdjustment"];
                        };
                    };
                };
            };
        };
    };
    listVariantAdjustments: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
            };
            header?: never;
            path: {
                variant_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated adjustment history */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["InventoryAdjustment"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listShippingZones: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "position" | "created_at";
                order?: "asc" | "desc";
                expand?: string;
                currency?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated shipping zone list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingZone"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createShippingZone: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example North America */
                    name: string;
                    /**
                     * @default []
                     * @example [
                     *       "US",
                     *       "CA",
                     *       "MX"
                     *     ]
                     */
                    countries?: string[];
                    /**
                     * @default false
                     * @example false
                     */
                    is_rest_of_world?: boolean;
                    /**
                     * @default true
                     * @example true
                     */
                    is_active?: boolean;
                    /**
                     * Format: uri
                     * @example null
                     */
                    carrier_callback_url?: string | null;
                    /**
                     * @default 0
                     * @example 0
                     */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Shipping zone created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingZone"];
                    };
                };
            };
        };
    };
    getShippingZone: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Shipping zone details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingZone"];
                    };
                };
            };
        };
    };
    deleteShippingZone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Shipping zone deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateShippingZone: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example North America */
                    name?: string;
                    /**
                     * @example [
                     *       "US",
                     *       "CA"
                     *     ]
                     */
                    countries?: string[];
                    /** @example false */
                    is_rest_of_world?: boolean;
                    /** @example true */
                    is_active?: boolean;
                    /**
                     * Format: uri
                     * @example null
                     */
                    carrier_callback_url?: string | null;
                    /** @example 1 */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Shipping zone updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingZone"];
                    };
                };
            };
        };
    };
    createShippingRate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Standard Shipping */
                    name: string;
                    /** @example Delivers in 5-7 business days */
                    description?: string | null;
                    /**
                     * @default 0
                     * @example 599
                     */
                    price?: number;
                    /** @example USD */
                    currency: string;
                    /** @example 0 */
                    min_order_subtotal?: number | null;
                    /** @example null */
                    max_order_subtotal?: number | null;
                    /** @example null */
                    min_order_weight?: number | null;
                    /** @example 50000 */
                    max_order_weight?: number | null;
                    /** @example 5 */
                    min_delivery_days?: number | null;
                    /** @example 7 */
                    max_delivery_days?: number | null;
                    /**
                     * @default true
                     * @example true
                     */
                    is_active?: boolean;
                    /**
                     * @default 0
                     * @example 0
                     */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Shipping rate created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingRate"];
                    };
                };
            };
        };
    };
    deleteShippingRate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Shipping rate deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateShippingRate: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Express Shipping */
                    name?: string;
                    /** @example Delivers in 1-2 business days */
                    description?: string | null;
                    /** @example 1499 */
                    price?: number;
                    /** @example USD */
                    currency?: string;
                    /** @example null */
                    min_order_subtotal?: number | null;
                    /** @example null */
                    max_order_subtotal?: number | null;
                    /** @example null */
                    min_order_weight?: number | null;
                    /** @example null */
                    max_order_weight?: number | null;
                    /** @example 1 */
                    min_delivery_days?: number | null;
                    /** @example 2 */
                    max_delivery_days?: number | null;
                    /** @example true */
                    is_active?: boolean;
                    /** @example 0 */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Shipping rate updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ShippingRate"];
                    };
                };
            };
        };
    };
    getAvailableShippingRates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example US */
                    country: string;
                    /** @example CA */
                    state?: string;
                    /** @example 90210 */
                    postal_code?: string;
                    /** @example 5998 */
                    subtotal: number;
                    /** @example USD */
                    currency: string;
                    items?: {
                        /** @example 0.5 */
                        weight_grams: number;
                        /** @example 2 */
                        quantity: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Available shipping rates */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AvailableRate"][];
                    };
                };
            };
        };
    };
    listWebhooks: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated webhook list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Webhook"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: uri
                     * @example https://example.com/webhooks/hydra
                     */
                    url: string;
                    /**
                     * @example [
                     *       "order.created",
                     *       "order.paid"
                     *     ]
                     */
                    events: ("product.created" | "product.updated" | "product.deleted" | "order.created" | "order.paid" | "order.fulfilled" | "order.cancelled" | "order.refunded" | "company.created" | "company.updated" | "company.deleted" | "customer.created" | "customer.updated" | "discount.created" | "discount.updated" | "discount.deleted" | "draft_order.created" | "draft_order.updated" | "draft_order.completed" | "draft_order.deleted" | "filter_attribute.created" | "filter_attribute.updated" | "filter_attribute.deleted" | "fulfillment.created" | "fulfillment.updated" | "fulfillment.cancelled" | "fulfillment_order.created" | "inventory.low" | "location.created" | "location.updated" | "location.deleted" | "navigation.created" | "navigation.updated" | "navigation.deleted" | "shipping.zone.created" | "shipping.zone.updated" | "shipping.zone.deleted" | "post.created" | "post.updated" | "post.deleted" | "post.published" | "post.unpublished" | "promotion.created" | "promotion.updated" | "promotion.deleted" | "purchase_order.created" | "purchase_order.updated" | "purchase_order.received" | "purchase_order.cancelled" | "refund.created" | "refund.succeeded" | "refund.failed" | "return.requested" | "return.approved" | "return.received" | "return.rejected" | "return.cancelled" | "return.closed" | "store.published" | "store_credit.issued" | "store_credit.used" | "store_credit.expired" | "membership.created" | "membership.updated" | "membership.cancelled" | "membership.expired" | "usage.warning")[];
                    /**
                     * @default active
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "paused";
                };
            };
        };
        responses: {
            /** @description Webhook created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    getWebhook: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    deleteWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Webhook deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateWebhook: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: uri
                     * @example https://example.com/webhooks/hydra
                     */
                    url?: string;
                    /**
                     * @example [
                     *       "order.created",
                     *       "order.paid",
                     *       "product.updated"
                     *     ]
                     */
                    events?: ("product.created" | "product.updated" | "product.deleted" | "order.created" | "order.paid" | "order.fulfilled" | "order.cancelled" | "order.refunded" | "company.created" | "company.updated" | "company.deleted" | "customer.created" | "customer.updated" | "discount.created" | "discount.updated" | "discount.deleted" | "draft_order.created" | "draft_order.updated" | "draft_order.completed" | "draft_order.deleted" | "filter_attribute.created" | "filter_attribute.updated" | "filter_attribute.deleted" | "fulfillment.created" | "fulfillment.updated" | "fulfillment.cancelled" | "fulfillment_order.created" | "inventory.low" | "location.created" | "location.updated" | "location.deleted" | "navigation.created" | "navigation.updated" | "navigation.deleted" | "shipping.zone.created" | "shipping.zone.updated" | "shipping.zone.deleted" | "post.created" | "post.updated" | "post.deleted" | "post.published" | "post.unpublished" | "promotion.created" | "promotion.updated" | "promotion.deleted" | "purchase_order.created" | "purchase_order.updated" | "purchase_order.received" | "purchase_order.cancelled" | "refund.created" | "refund.succeeded" | "refund.failed" | "return.requested" | "return.approved" | "return.received" | "return.rejected" | "return.cancelled" | "return.closed" | "store.published" | "store_credit.issued" | "store_credit.used" | "store_credit.expired" | "membership.created" | "membership.updated" | "membership.cancelled" | "membership.expired" | "usage.warning")[];
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "paused";
                };
            };
        };
        responses: {
            /** @description Webhook updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Webhook"];
                    };
                };
            };
        };
    };
    listExchangeRates: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Exchange rate list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ExchangeRate"][];
                    };
                };
            };
        };
    };
    refreshExchangeRates: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Rates refreshed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["RefreshRates"];
                    };
                };
            };
        };
    };
    searchTaxonomyCategories: {
        parameters: {
            query?: {
                q?: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Category list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxonomyCategory"][];
                    };
                };
            };
        };
    };
    suggestTaxonomyCategories: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    title: string;
                    description?: string;
                    product_type?: string;
                    brand?: string;
                    tags?: string[];
                    specifications?: {
                        label: string;
                        value: string;
                    }[];
                    variant_title?: string;
                };
            };
        };
        responses: {
            /** @description Suggested categories */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TaxonomySuggestion"][];
                    };
                };
            };
        };
    };
    searchHsCodes: {
        parameters: {
            query?: {
                q?: string;
                limit?: number;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description HS code list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["HsCode"][];
                    };
                };
            };
        };
    };
    suggestHsCodes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    title: string;
                    description?: string;
                    product_type?: string;
                    brand?: string;
                    google_product_category?: string;
                    tags?: string[];
                    specifications?: {
                        label: string;
                        value: string;
                    }[];
                    variant_title?: string;
                };
            };
        };
        responses: {
            /** @description Suggested HS codes */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["HsCodeSuggestion"][];
                    };
                };
            };
        };
    };
    listEvents: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                order?: "asc" | "desc";
                type?: string;
                resource_type?: string;
                resource_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated event list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StoreEvent"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    getEvent: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Store event */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["StoreEvent"];
                    };
                };
            };
        };
    };
    listFilterAttributes: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "position" | "created_at";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated filter attribute list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FilterAttribute"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createFilterAttribute: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example metal */
                    key: string;
                    /** @example Metal */
                    label: string;
                    /**
                     * @example spec
                     * @enum {string}
                     */
                    source_type: "spec" | "option" | "field" | "tag" | "price" | "availability";
                    /** @example Metal */
                    source_key?: string | null;
                    /** @example 0 */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Filter attribute created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FilterAttribute"];
                    };
                };
            };
        };
    };
    discoverFilterSources: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Available filter sources */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getFilterAttribute: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Filter attribute details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FilterAttribute"];
                    };
                };
            };
        };
    };
    deleteFilterAttribute: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Filter attribute deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateFilterAttribute: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example metal */
                    key?: string;
                    /** @example Metal */
                    label?: string;
                    /**
                     * @example spec
                     * @enum {string}
                     */
                    source_type?: "spec" | "option" | "field" | "tag" | "price" | "availability";
                    /** @example Metal */
                    source_key?: string | null;
                    /** @example 1 */
                    position?: number;
                };
            };
        };
        responses: {
            /** @description Filter attribute updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FilterAttribute"];
                    };
                };
            };
        };
    };
    reorderFilterAttributes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example [
                     *       {
                     *         "id": "fa_abc123",
                     *         "position": 0
                     *       }
                     *     ]
                     */
                    items: {
                        /** @example fa_abc123 */
                        id: string;
                        /** @example 0 */
                        position: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Reordered filter attribute list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["FilterAttribute"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listRedirects: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated redirect list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Redirect"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createRedirect: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example /old-product-page */
                    old_path: string;
                    /** @example /products/classic-cotton-t-shirt */
                    new_path: string;
                };
            };
        };
        responses: {
            /** @description Redirect created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Redirect"];
                    };
                };
            };
        };
    };
    lookupRedirect: {
        parameters: {
            query: {
                path: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Redirect found */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Redirect"];
                    };
                };
            };
        };
    };
    deleteRedirect: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Redirect deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listTags: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated tag list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Tag"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createTag: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example summer */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Tag created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Tag"];
                    };
                };
            };
        };
    };
    deleteTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Tag deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateTag: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example summer-2026 */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Tag updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Tag"];
                    };
                };
            };
        };
    };
    listProductTypes: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Product type list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ProductTypeItem"][];
                    };
                };
            };
        };
    };
    createProductType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Footwear */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Product type created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ProductTypeItem"];
                    };
                };
            };
        };
    };
    renameProductType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Shoes */
                    from: string;
                    /** @example Footwear */
                    to: string;
                };
            };
        };
        responses: {
            /** @description Product type renamed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    removeProductType: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Footwear */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Product type removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listPromotions: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                status?: "active" | "disabled" | "archived";
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated promotion list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Promotion"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createPromotion: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Summer Sale */
                    name: string;
                    /**
                     * @example percentage
                     * @enum {string}
                     */
                    type: "percentage" | "fixed_amount";
                    /** @example 20 */
                    value: number;
                    /**
                     * @default active
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "disabled";
                    /**
                     * @default [
                     *       "base"
                     *     ]
                     * @example [
                     *       "base"
                     *     ]
                     */
                    price_targets?: string[];
                    /**
                     * Format: date-time
                     * @example 2026-08-01T00:00:00Z
                     */
                    starts_at: string;
                    /**
                     * Format: date-time
                     * @example 2026-09-01T00:00:00Z
                     */
                    ends_at?: string | null;
                    /**
                     * @default []
                     * @example [
                     *       {
                     *         "target_type": "product",
                     *         "target_id": "prod_abc123"
                     *       }
                     *     ]
                     */
                    targets?: {
                        /** @enum {string} */
                        target_type: "product" | "collection" | "variant";
                        target_id: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Promotion created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Promotion"];
                    };
                };
            };
        };
    };
    getPromotion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Promotion details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Promotion"];
                    };
                };
            };
        };
    };
    deletePromotion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Promotion deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updatePromotion: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Summer Sale Updated */
                    name?: string;
                    /**
                     * @example percentage
                     * @enum {string}
                     */
                    type?: "percentage" | "fixed_amount";
                    /** @example 25 */
                    value?: number;
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "disabled";
                    /**
                     * @example [
                     *       "base"
                     *     ]
                     */
                    price_targets?: string[];
                    /**
                     * Format: date-time
                     * @example 2026-08-01T00:00:00Z
                     */
                    starts_at?: string;
                    /**
                     * Format: date-time
                     * @example 2026-09-01T00:00:00Z
                     */
                    ends_at?: string | null;
                    /** @example [] */
                    targets?: {
                        /** @enum {string} */
                        target_type: "product" | "collection" | "variant";
                        target_id: string;
                    }[];
                };
            };
        };
        responses: {
            /** @description Promotion updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Promotion"];
                    };
                };
            };
        };
    };
    listDiscounts: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "code";
                order?: "asc" | "desc";
                status?: "active" | "disabled";
                search?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated discount list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Discount"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example SUMMER20 */
                    code: string;
                    /** @example Summer Sale 20% */
                    title: string;
                    /**
                     * @example percentage
                     * @enum {string}
                     */
                    type: "percentage" | "fixed_amount";
                    /** @example 20 */
                    value: number;
                    /**
                     * @default active
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "disabled";
                    /** @example 5000 */
                    min_subtotal?: number | null;
                    /** @example 2 */
                    min_quantity?: number | null;
                    /** @example 1000 */
                    max_uses?: number | null;
                    /** @example 1 */
                    max_uses_per_customer?: number | null;
                    /**
                     * @default true
                     * @example true
                     */
                    exclusive?: boolean;
                    /**
                     * @default true
                     * @example true
                     */
                    combinable_with_promotions?: boolean;
                    /** @example null */
                    customer_group_ids?: string[] | null;
                    /**
                     * Format: date-time
                     * @example 2026-06-01T00:00:00Z
                     */
                    starts_at: string;
                    /**
                     * Format: date-time
                     * @example 2026-08-31T23:59:59Z
                     */
                    ends_at?: string | null;
                };
            };
        };
        responses: {
            /** @description Discount created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Discount"];
                    };
                };
            };
        };
    };
    getDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Discount details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Discount"];
                    };
                };
            };
        };
    };
    deleteDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Discount deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateDiscount: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Summer Sale Updated */
                    title?: string;
                    /**
                     * @example percentage
                     * @enum {string}
                     */
                    type?: "percentage" | "fixed_amount";
                    /** @example 25 */
                    value?: number;
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "disabled";
                    /** @example 5000 */
                    min_subtotal?: number | null;
                    /** @example 2 */
                    min_quantity?: number | null;
                    /** @example 1000 */
                    max_uses?: number | null;
                    /** @example 1 */
                    max_uses_per_customer?: number | null;
                    /** @example true */
                    exclusive?: boolean;
                    /** @example true */
                    combinable_with_promotions?: boolean;
                    /** @example null */
                    customer_group_ids?: string[] | null;
                    /**
                     * Format: date-time
                     * @example 2026-06-01T00:00:00Z
                     */
                    starts_at?: string;
                    /**
                     * Format: date-time
                     * @example 2026-08-31T23:59:59Z
                     */
                    ends_at?: string | null;
                };
            };
        };
        responses: {
            /** @description Discount updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Discount"];
                    };
                };
            };
        };
    };
    listMembershipPlans: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                status?: "active" | "archived";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated plan list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MembershipPlan"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createMembershipPlan: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example VIP Membership */
                    name: string;
                    /** @example Unlock wholesale pricing */
                    description?: string;
                    /** @example vip-membership */
                    slug: string;
                    /**
                     * @description Price in cents
                     * @example 1199
                     */
                    amount: number;
                    /** @example gbp */
                    currency: string;
                    /**
                     * @example month
                     * @enum {string}
                     */
                    interval: "month" | "year";
                    /**
                     * @default 1
                     * @example 1
                     */
                    interval_count?: number;
                    /** @example 14 */
                    trial_days?: number;
                    /**
                     * @description Auto-assign members to this group
                     * @example cg_abc123
                     */
                    customer_group_id?: string;
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Plan created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MembershipPlan"];
                    };
                };
            };
        };
    };
    getMembershipPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Plan details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MembershipPlan"];
                    };
                };
            };
        };
    };
    deleteMembershipPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Plan archived */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateMembershipPlan: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example VIP Membership */
                    name?: string;
                    /** @example Unlock wholesale pricing */
                    description?: string | null;
                    /**
                     * @example active
                     * @enum {string}
                     */
                    status?: "active" | "archived";
                    /** @example 14 */
                    trial_days?: number | null;
                    /** @example cg_abc123 */
                    customer_group_id?: string | null;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Plan updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MembershipPlan"];
                    };
                };
            };
        };
    };
    listMembershipSubscriptions: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at";
                order?: "asc" | "desc";
                status?: "active" | "trialing" | "past_due" | "cancelled" | "expired" | "pending";
                plan_id?: string;
                customer_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated subscription list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["CustomerMembership"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    listRefunds: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at";
                order?: "asc" | "desc";
                order_id?: string;
                return_id?: string;
                status?: "pending" | "succeeded" | "failed";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated refund list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Refund"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    getRefund: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                /** @description Refund ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Refund details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Refund"];
                    };
                };
            };
        };
    };
    getRefundCreditNote: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Refund ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description PDF credit note binary */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    retryRefund: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Refund ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Retried refund */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Refund"];
                    };
                };
            };
        };
    };
    listReturns: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at";
                order?: "asc" | "desc";
                order_id?: string;
                customer_id?: string;
                status?: "requested" | "approved" | "received" | "closed" | "rejected" | "cancelled";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated return list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    getReturn: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    approveReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Override the return destination location.
                     * @example loc_abc123
                     */
                    location_id?: string;
                    /** @example Approved — standard return. */
                    staff_note?: string;
                };
            };
        };
        responses: {
            /** @description Return approved */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    receiveReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Per-item condition and restock overrides. If omitted, all items default to resellable/restock. */
                    items?: {
                        /** @example rli_abc123 */
                        return_line_item_id: string;
                        /**
                         * @example resellable
                         * @enum {string}
                         */
                        condition: "resellable" | "damaged" | "defective" | "unsellable";
                        /**
                         * @description Override restock decision. Defaults to false for damaged/unsellable items, true otherwise.
                         * @example true
                         */
                        restock?: boolean;
                    }[];
                    /** @example All items in good condition */
                    staff_note?: string;
                };
            };
        };
        responses: {
            /** @description Return received */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    closeReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return closed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    rejectReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Return window has expired. */
                    staff_note?: string;
                };
            };
        };
        responses: {
            /** @description Return rejected */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    cancelReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return cancelled */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    listOrderRefunds: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Order ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Order refunds */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createOrderRefund: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Order ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Line items to refund. Omit for goodwill refunds with a flat amount. */
                    line_items?: {
                        /** @example li_abc123 */
                        order_line_item_id: string;
                        /** @example 1 */
                        quantity: number;
                        /** @example 2500 */
                        amount: number;
                    }[];
                    /**
                     * @description Flat refund amount in cents (for goodwill refunds without line items).
                     * @example 500
                     */
                    amount?: number;
                    /**
                     * @description Link this refund to a return. Return must be in received or closed status.
                     * @example rtn_abc123
                     */
                    return_id?: string;
                    /**
                     * @example return
                     * @enum {string}
                     */
                    reason: "return" | "goodwill" | "order_error" | "shipping_issue" | "duplicate" | "other";
                    /** @example Customer received wrong size */
                    reason_note?: string;
                    /**
                     * @default false
                     * @example true
                     */
                    refund_shipping?: boolean;
                    /**
                     * @description Shipping refund in cents.
                     * @default 0
                     * @example 500
                     */
                    shipping_refund_amount?: number;
                    /**
                     * @description Restocking fee in cents (subtracted from total).
                     * @default 0
                     * @example 0
                     */
                    restocking_fee?: number;
                    /** @example Approved by Alice */
                    staff_note?: string;
                    /**
                     * @description Where to send the refund. "card" refunds to the original payment method via Stripe; "store_credit" adds the amount to the customer's store credit balance.
                     * @default card
                     * @example card
                     * @enum {string}
                     */
                    destination?: "card" | "store_credit";
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Refund created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Refund"];
                    };
                };
            };
        };
    };
    listOrderReturns: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Order ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Order returns */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createOrderReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Order ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Line items to return with quantities. */
                    line_items: {
                        /** @example li_abc123 */
                        order_line_item_id: string;
                        /** @example 1 */
                        quantity: number;
                    }[];
                    /**
                     * @example wrong_item
                     * @enum {string}
                     */
                    reason: "defective" | "wrong_item" | "not_as_described" | "changed_mind" | "damaged_in_shipping" | "other";
                    /** @example Ordered size M but received size L */
                    reason_note?: string;
                    /** @example Customer contacted via chat */
                    staff_note?: string;
                    /**
                     * @description Destination location for returned items.
                     * @example loc_abc123
                     */
                    location_id?: string;
                    /**
                     * @description Controls automatic refund creation. "immediate" creates a refund at return creation; "on_receipt" creates one when items are marked received.
                     * @default none
                     * @example none
                     * @enum {string}
                     */
                    refund_policy?: "none" | "immediate" | "on_receipt";
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Return created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Return"];
                    };
                };
            };
        };
    };
    listPurchaseOrders: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "expected_at";
                order?: "asc" | "desc";
                supplier_id?: string;
                status?: "draft" | "ordered" | "partial" | "received" | "closed" | "cancelled";
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated purchase order list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createPurchaseOrder: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example comp_abc123 */
                    supplier_id: string;
                    /** @example loc_abc123 */
                    destination_location_id?: string;
                    /** @example USD */
                    currency: string;
                    /** @example PO-2026-001 */
                    reference_number?: string;
                    /**
                     * Format: date-time
                     * @example 2026-09-15T00:00:00.000Z
                     */
                    expected_at?: string;
                    /** @example Urgent restock order */
                    note?: string;
                    /**
                     * @default 0
                     * @example 0
                     */
                    tax?: number;
                    /**
                     * @default 0
                     * @example 0
                     */
                    shipping?: number;
                    /**
                     * @example [
                     *       {
                     *         "variant_id": "var_abc123",
                     *         "quantity": 10,
                     *         "unit_cost": 850
                     *       }
                     *     ]
                     */
                    items?: {
                        /** @example var_abc123 */
                        variant_id: string;
                        /** @example 10 */
                        quantity: number;
                        /** @example 850 */
                        unit_cost: number;
                    }[];
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Created purchase order */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    getPurchaseOrder: {
        parameters: {
            query?: {
                expand?: string;
                currency?: string;
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Purchase order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    deletePurchaseOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updatePurchaseOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example loc_abc123 */
                    destination_location_id?: string | null;
                    /** @example PO-2026-001 */
                    reference_number?: string | null;
                    /**
                     * Format: date-time
                     * @example 2026-09-15T00:00:00.000Z
                     */
                    expected_at?: string | null;
                    /** @example Urgent restock order */
                    note?: string | null;
                    /** @example USD */
                    currency?: string;
                    /** @example 500 */
                    tax?: number;
                    /** @example 1200 */
                    shipping?: number;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Updated purchase order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    addPurchaseOrderItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    items: {
                        /** @example var_abc123 */
                        variant_id: string;
                        /** @example 10 */
                        quantity: number;
                        /** @example 850 */
                        unit_cost: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Added items */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrderItem"][];
                    };
                };
            };
        };
    };
    removePurchaseOrderItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updatePurchaseOrderItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example 10 */
                    quantity?: number;
                    /** @example 850 */
                    unit_cost?: number;
                    /** @example Backordered, expected next week */
                    note?: string | null;
                };
            };
        };
        responses: {
            /** @description Updated item */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrderItem"];
                    };
                };
            };
        };
    };
    markPurchaseOrderOrdered: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Ordered purchase order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    receivePurchaseOrderItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    items: {
                        /** @example poi_abc123 */
                        item_id: string;
                        /** @example 5 */
                        quantity: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Updated purchase order with received quantities */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    cancelPurchaseOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Cancelled purchase order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    closePurchaseOrder: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Closed purchase order */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["PurchaseOrder"];
                    };
                };
            };
        };
    };
    listPurchaseOrderItemMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Metafield values map keyed by slug */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    batchSetPurchaseOrderItemMetafieldValues: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    [key: string]: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[] | null;
                };
            };
        };
        responses: {
            /** @description Updated metafield values map */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    setPurchaseOrderItemMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    value: string | number | boolean | {
                        value: number;
                        unit: string;
                    } | (string | number)[];
                };
            };
        };
        responses: {
            /** @description Saved metafield value */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    clearPurchaseOrderItemMetafieldValue: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                slug: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Value cleared */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listLocations: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "name";
                order?: "asc" | "desc";
                type?: "retail" | "warehouse" | "popup" | "online";
                active?: "true" | "false";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated location list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Location"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createLocation: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Birmingham Store */
                    name: string;
                    /** @example birmingham-store */
                    handle?: string;
                    /**
                     * @default retail
                     * @example retail
                     * @enum {string}
                     */
                    type?: "retail" | "warehouse" | "popup" | "online";
                    /** @example 123 High St */
                    address_line1?: string | null;
                    /** @example Suite 4 */
                    address_line2?: string | null;
                    /** @example Birmingham */
                    city?: string | null;
                    /** @example West Midlands */
                    state?: string | null;
                    /** @example B1 1AA */
                    postal_code?: string | null;
                    /** @example GB */
                    country?: string | null;
                    /** @example +441234567890 */
                    phone?: string | null;
                    /**
                     * Format: email
                     * @example store@example.com
                     */
                    email?: string | null;
                    /** @default {} */
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Location created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Location"];
                    };
                };
            };
        };
    };
    getLocation: {
        parameters: {
            query?: {
                fields?: string;
            };
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Location details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Location"];
                    };
                };
            };
        };
    };
    deleteLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Location deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Birmingham Store */
                    name?: string;
                    /** @example birmingham-store */
                    handle?: string;
                    /**
                     * @example retail
                     * @enum {string}
                     */
                    type?: "retail" | "warehouse" | "popup" | "online";
                    /** @example true */
                    is_active?: boolean;
                    /** @example 123 High St */
                    address_line1?: string | null;
                    /** @example Suite 4 */
                    address_line2?: string | null;
                    /** @example Birmingham */
                    city?: string | null;
                    /** @example West Midlands */
                    state?: string | null;
                    /** @example B1 1AA */
                    postal_code?: string | null;
                    /** @example GB */
                    country?: string | null;
                    /** @example +441234567890 */
                    phone?: string | null;
                    /**
                     * Format: email
                     * @example store@example.com
                     */
                    email?: string | null;
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    /**
                     * @default false
                     * @example false
                     */
                    create_redirect?: boolean;
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Location updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Location"];
                    };
                };
            };
        };
    };
    setDefaultLocation: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Location set as default */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Location"];
                    };
                };
            };
        };
    };
    transferLocationInventory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example loc_abc123def456ghi789 */
                    destination_location_id: string;
                };
            };
        };
        responses: {
            /** @description Inventory transferred */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TransferResult"];
                    };
                };
            };
        };
    };
    listPosts: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                type?: "page" | "post";
                status?: "draft" | "published" | "archived";
                category_id?: string;
                tag?: string;
                search?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated post list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Post"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createPost: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Getting Started with Hydra */
                    title: string;
                    /** @example getting-started-with-hydra */
                    handle?: string;
                    /**
                     * @example # Welcome
                     *
                     *     This is your first post.
                     */
                    body?: string;
                    /** @example A quick introduction to Hydra headless commerce. */
                    excerpt?: string;
                    /**
                     * @default post
                     * @example post
                     * @enum {string}
                     */
                    type?: "page" | "post";
                    /**
                     * @default draft
                     * @example draft
                     * @enum {string}
                     */
                    status?: "draft" | "published" | "archived";
                    /** @example Jane Smith */
                    author_name?: string;
                    /** @example img_abc123 */
                    featured_image_id?: string | null;
                    /**
                     * Format: date-time
                     * @example 2026-08-24T12:00:00.000Z
                     */
                    published_at?: string | null;
                    /**
                     * @default []
                     * @example [
                     *       "ccat_abc123"
                     *     ]
                     */
                    category_ids?: string[];
                    /**
                     * @default []
                     * @example [
                     *       "tutorials",
                     *       "getting-started"
                     *     ]
                     */
                    tags?: string[];
                    /** @default {} */
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    /** @default {} */
                    metadata?: {
                        [key: string]: string | number;
                    };
                };
            };
        };
        responses: {
            /** @description Post created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Post"];
                    };
                };
            };
        };
    };
    getPost: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Post details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Post"];
                    };
                };
            };
        };
    };
    deletePost: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Post deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updatePost: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Getting Started with Hydra */
                    title?: string;
                    /** @example getting-started-with-hydra */
                    handle?: string;
                    /**
                     * @example # Welcome
                     *
                     *     Updated content.
                     */
                    body?: string;
                    /** @example A quick introduction to Hydra headless commerce. */
                    excerpt?: string | null;
                    /**
                     * @example published
                     * @enum {string}
                     */
                    status?: "draft" | "published" | "archived";
                    /** @example Jane Smith */
                    author_name?: string | null;
                    /** @example img_abc123 */
                    featured_image_id?: string | null;
                    /**
                     * Format: date-time
                     * @example 2026-08-24T12:00:00.000Z
                     */
                    published_at?: string | null;
                    /**
                     * @example [
                     *       "ccat_abc123"
                     *     ]
                     */
                    category_ids?: string[];
                    /**
                     * @example [
                     *       "tutorials",
                     *       "getting-started"
                     *     ]
                     */
                    tags?: string[];
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                    metadata?: {
                        [key: string]: string | number;
                    };
                    /**
                     * @default false
                     * @example false
                     */
                    create_redirect?: boolean;
                };
            };
        };
        responses: {
            /** @description Post updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Post"];
                    };
                };
            };
        };
    };
    addPostCategories: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @example [
                     *       "ccat_abc123",
                     *       "ccat_def456"
                     *     ]
                     */
                    category_ids: string[];
                };
            };
        };
        responses: {
            /** @description Categories added */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Post"];
                    };
                };
            };
        };
    };
    removePostCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                category_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Category removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listContentCategories: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                search?: string;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated content category list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContentCategory"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createContentCategory: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Engineering */
                    title: string;
                    /** @example engineering */
                    handle?: string;
                    /** @example Technical articles and product updates. */
                    description?: string;
                    /** @default {} */
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Content category created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContentCategory"];
                    };
                };
            };
        };
    };
    getContentCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Content category details */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContentCategory"];
                    };
                };
            };
        };
    };
    deleteContentCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Content category deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateContentCategory: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Engineering */
                    title?: string;
                    /** @example engineering */
                    handle?: string;
                    /** @example Technical articles and product updates. */
                    description?: string;
                    seo?: {
                        title?: string;
                        description?: string;
                    };
                };
            };
        };
        responses: {
            /** @description Content category updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["ContentCategory"];
                    };
                };
            };
        };
    };
    listNavigationMenus: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                handle?: string;
                location?: "header" | "footer" | "sidebar";
                is_active?: boolean | null;
                expand?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated navigation menu list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationMenu"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    createNavigationMenu: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Main Menu */
                    title: string;
                    /** @example main-menu */
                    handle?: string;
                    /** @enum {string|null} */
                    location?: "header" | "footer" | "sidebar" | null;
                    /** @default true */
                    is_active?: boolean;
                    /** @default [] */
                    items?: {
                        /** @example Dresses */
                        label: string;
                        /** @example /collections/women-dresses */
                        url?: string | null;
                        /**
                         * @default link
                         * @enum {string}
                         */
                        item_type?: "link" | "heading" | "featured";
                        position?: number;
                        metadata?: {
                            image?: string;
                            image_alt?: string;
                            description?: string;
                            cta?: string;
                        } | null;
                        /** @default true */
                        is_visible?: boolean;
                        /** @default [] */
                        children?: {
                            /** @example Dresses */
                            label: string;
                            /** @example /collections/women-dresses */
                            url?: string | null;
                            /**
                             * @default link
                             * @enum {string}
                             */
                            item_type?: "link" | "heading" | "featured";
                            position?: number;
                            metadata?: {
                                image?: string;
                                image_alt?: string;
                                description?: string;
                                cta?: string;
                            } | null;
                            /** @default true */
                            is_visible?: boolean;
                            /** @default [] */
                            children?: {
                                /** @example Dresses */
                                label: string;
                                /** @example /collections/women-dresses */
                                url?: string | null;
                                /**
                                 * @default link
                                 * @enum {string}
                                 */
                                item_type?: "link" | "heading" | "featured";
                                position?: number;
                                metadata?: {
                                    image?: string;
                                    image_alt?: string;
                                    description?: string;
                                    cta?: string;
                                } | null;
                                /** @default true */
                                is_visible?: boolean;
                            }[];
                        }[];
                    }[];
                };
            };
        };
        responses: {
            /** @description Navigation menu created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationMenu"];
                    };
                };
            };
        };
    };
    getNavigationMenu: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Navigation menu with items */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationMenu"];
                    };
                };
            };
        };
    };
    deleteNavigationMenu: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Navigation menu deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateNavigationMenu: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Main Menu */
                    title?: string;
                    /** @example main-menu */
                    handle?: string;
                    /** @enum {string|null} */
                    location?: "header" | "footer" | "sidebar" | null;
                    is_active?: boolean;
                };
            };
        };
        responses: {
            /** @description Navigation menu updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationMenu"];
                    };
                };
            };
        };
    };
    addNavigationItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Women */
                    label: string;
                    /** @example /collections/women */
                    url?: string | null;
                    /**
                     * @default link
                     * @enum {string}
                     */
                    item_type?: "link" | "heading" | "featured";
                    parent_item_id?: string | null;
                    position?: number;
                    metadata?: {
                        image?: string;
                        image_alt?: string;
                        description?: string;
                        cta?: string;
                    } | null;
                    /** @default true */
                    is_visible?: boolean;
                };
            };
        };
        responses: {
            /** @description Menu item added */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationItem"];
                    };
                };
            };
        };
    };
    reorderNavigationItems: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    items: {
                        /** @example ni_abc123 */
                        id: string;
                        /** @example null */
                        parent_item_id: string | null;
                        /** @example 0 */
                        position: number;
                    }[];
                };
            };
        };
        responses: {
            /** @description Menu items reordered */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteNavigationItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Menu item deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateNavigationItem: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
                item_id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Women */
                    label?: string;
                    url?: string | null;
                    /** @enum {string} */
                    item_type?: "link" | "heading" | "featured";
                    parent_item_id?: string | null;
                    position?: number;
                    metadata?: {
                        image?: string;
                        image_alt?: string;
                        description?: string;
                        cta?: string;
                    } | null;
                    is_visible?: boolean;
                };
            };
        };
        responses: {
            /** @description Menu item updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NavigationItem"];
                    };
                };
            };
        };
    };
    listNotifications: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
                /** @description Filter by notification type */
                type?: "email_verification" | "welcome" | "password_reset" | "password_changed" | "order_confirmation" | "order_cancelled" | "refund_issued" | "draft_order_payment_request" | "shipping_confirmation" | "delivery_confirmation" | "cart_recovery" | "new_order" | "low_stock" | "domain_warning" | "domain_revoked" | "domain_recovered";
                /** @description Filter by delivery status */
                status?: "sent" | "failed" | "skipped";
                /** @description Filter by recipient email */
                email?: string;
                /** @description Filter by resource type (matches metadata keys) */
                resource_type?: "order" | "customer";
                /** @description Filter by resource ID (e.g. ord_abc123) */
                resource_id?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated notification log */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NotificationLog"][];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    getNotification: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Notification detail */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["NotificationLog"];
                    };
                };
            };
        };
    };
    testNotification: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Notification type to test
                     * @example new_order
                     * @enum {string}
                     */
                    type: "email_verification" | "welcome" | "password_reset" | "password_changed" | "order_confirmation" | "order_cancelled" | "refund_issued" | "draft_order_payment_request" | "shipping_confirmation" | "delivery_confirmation" | "cart_recovery" | "new_order" | "low_stock" | "domain_warning" | "domain_revoked" | "domain_recovered";
                    /**
                     * Format: email
                     * @description Email address to send the test to
                     * @example admin@example.com
                     */
                    email: string;
                };
            };
        };
        responses: {
            /** @description Test email result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["TestNotificationResult"];
                    };
                };
            };
        };
    };
    getNotificationDomain: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Domain status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainStatus"];
                    };
                };
            };
        };
    };
    registerNotificationDomain: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Domain registered with DNS records */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainStatus"];
                    };
                };
            };
        };
    };
    removeNotificationDomain: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Domain removed */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    verifyNotificationDomain: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Verification result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["DomainStatus"];
                    };
                };
            };
        };
    };
    getAccountingAuthorizeUrl: {
        parameters: {
            query?: {
                slug?: string;
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Authorization URL */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getAccountingStatus: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Integration status */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            connected: boolean;
                            provider: string | null;
                            /** @enum {string} */
                            status: "connected" | "expired" | "error" | "disconnected";
                            company_name: string | null;
                            last_sync_at: string | null;
                            error_message: string | null;
                        };
                    };
                };
            };
        };
    };
    testAccountingConnection: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Test result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            valid: boolean;
                            company_name: string | null;
                            error: string | null;
                        };
                    };
                };
            };
        };
    };
    disconnectAccounting: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Disconnected */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateAccountingSettings: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    income_account_id?: string;
                    deposit_account_id?: string;
                };
            };
        };
        responses: {
            /** @description Settings updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    syncOrderToAccounting: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sync result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            success: boolean;
                            error: string | null;
                        };
                    };
                };
            };
        };
    };
    retryAccountingSync: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                orderId: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Retry result */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            success: boolean;
                            error: string | null;
                        };
                    };
                };
            };
        };
    };
    listAccountingSyncLog: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                entity_type?: "order" | "customer" | "payment";
                status?: "pending" | "synced" | "failed" | "skipped";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Sync log entries */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: {
                            id: string;
                            entity_type: string;
                            entity_id: string;
                            external_entity_type: string | null;
                            external_entity_id: string | null;
                            status: string;
                            error_message: string | null;
                            retry_count: number;
                            metadata: {
                                [key: string]: unknown;
                            } | null;
                            created_at: string;
                            updated_at: string;
                        }[];
                        pagination: {
                            cursor: string | null;
                            has_more: boolean;
                            total: number;
                        };
                    };
                };
            };
        };
    };
    registerCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    email: string;
                    /** @example SecurePass1 */
                    password: string;
                    /** @example Jane */
                    first_name: string;
                    /** @example Smith */
                    last_name: string;
                    /** @example +14155550123 */
                    phone?: string;
                    /** @example en */
                    locale?: string;
                };
            };
        };
        responses: {
            /** @description Account created, tokens returned */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
        };
    };
    loginCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    email: string;
                    /** @example SecurePass1 */
                    password: string;
                };
            };
        };
        responses: {
            /** @description Login successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
        };
    };
    refreshCustomerToken: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4 */
                    refresh_token: string;
                };
            };
        };
        responses: {
            /** @description Tokens refreshed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["TokenResponse"];
                };
            };
        };
    };
    logoutCustomer: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example dGhpcyBpcyBhIHJlZnJlc2ggdG9rZW4 */
                    refresh_token: string;
                };
            };
        };
        responses: {
            /** @description Logged out */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    forgotPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: email
                     * @example jane@example.com
                     */
                    email: string;
                };
            };
        };
        responses: {
            /** @description Reset instructions sent */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    resetPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example abc123def456 */
                    token: string;
                    /** @example SecurePass1 */
                    password: string;
                };
            };
        };
        responses: {
            /** @description Password reset successful */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    verifyEmail: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example abc123def456 */
                    token: string;
                };
            };
        };
        responses: {
            /** @description Email verified */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": components["schemas"]["MessageResponse"];
                };
            };
        };
    };
    getCustomerProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer profile */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCustomerProfile: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane */
                    first_name?: string;
                    /** @example Smith */
                    last_name?: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /** @example es-419 */
                    locale?: string | null;
                };
            };
        };
        responses: {
            /** @description Updated customer profile */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    changeCustomerPassword: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example OldPass1 */
                    current_password: string;
                    /** @example SecurePass1 */
                    new_password: string;
                };
            };
        };
        responses: {
            /** @description Password changed, new tokens returned */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomerOrders: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated order list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomerOwnAddresses: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createCustomerOwnAddress: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane */
                    first_name?: string | null;
                    /** @example Smith */
                    last_name?: string | null;
                    /** @example Acme Inc. */
                    company?: string | null;
                    /** @example 123 Main St */
                    line1: string;
                    /** @example Apt 4B */
                    line2?: string | null;
                    /** @example San Francisco */
                    city: string;
                    /** @example CA */
                    state?: string | null;
                    /** @example 94105 */
                    postal_code?: string | null;
                    /** @example US */
                    country: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /**
                     * @default false
                     * @example false
                     */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    deleteCustomerOwnAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Address deleted */
            204: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    updateCustomerOwnAddress: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Jane */
                    first_name?: string | null;
                    /** @example Smith */
                    last_name?: string | null;
                    /** @example Acme Inc. */
                    company?: string | null;
                    /** @example 123 Main St */
                    line1?: string;
                    /** @example Apt 4B */
                    line2?: string | null;
                    /** @example San Francisco */
                    city?: string;
                    /** @example CA */
                    state?: string | null;
                    /** @example 94105 */
                    postal_code?: string | null;
                    /** @example US */
                    country?: string;
                    /** @example +14155550123 */
                    phone?: string | null;
                    /** @example true */
                    is_default?: boolean;
                };
            };
        };
        responses: {
            /** @description Address updated */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    createCustomerReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Order ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @description Line items to return with quantities. */
                    line_items: {
                        /** @example li_abc123 */
                        order_line_item_id: string;
                        /** @example 1 */
                        quantity: number;
                    }[];
                    /**
                     * @example wrong_item
                     * @enum {string}
                     */
                    reason: "defective" | "wrong_item" | "not_as_described" | "changed_mind" | "damaged_in_shipping" | "other";
                    /** @example Ordered size M but received size L */
                    reason_note?: string;
                };
            };
        };
        responses: {
            /** @description Return request created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomerReturns: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Customer returns list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    cancelCustomerReturn: {
        parameters: {
            query?: never;
            header?: never;
            path: {
                /** @description Return ID */
                id: string;
            };
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Return cancelled */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getCustomerCreditSelf: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Credit balance */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    listCustomerCreditTransactionsSelf: {
        parameters: {
            query?: {
                limit?: number;
                cursor?: string;
                fields?: string;
                sort?: "created_at" | "updated_at" | "title" | "relevance";
                order?: "asc" | "desc";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Paginated transaction list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    getCustomerMembership: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Active membership or null */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
    subscribeMembership: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example mplan_abc123 */
                    plan_id: string;
                    /**
                     * Format: uri
                     * @example https://auriclejewelry.com/account/membership?success=true
                     */
                    success_url: string;
                    /**
                     * Format: uri
                     * @example https://auriclejewelry.com/vip-membership
                     */
                    cancel_url: string;
                };
            };
        };
        responses: {
            /** @description Stripe Checkout URL */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["SubscribeCheckout"];
                    };
                };
            };
        };
    };
    getMembershipPortal: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * Format: uri
                     * @example https://auriclejewelry.com/account/membership
                     */
                    return_url: string;
                };
            };
        };
        responses: {
            /** @description Portal URL */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["MembershipPortal"];
                    };
                };
            };
        };
    };
    getAnalyticsSummary: {
        parameters: {
            query?: {
                /** @description Start date (YYYY-MM-DD). Defaults to 30 days ago. */
                from?: string;
                /** @description End date (YYYY-MM-DD). Defaults to today. */
                to?: string;
                /** @description Comparison period for change calculations. */
                compare?: "previous_period" | "previous_year" | "none";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Analytics summary with metrics and comparison */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AnalyticsSummary"];
                    };
                };
            };
        };
    };
    getRevenueTimeSeries: {
        parameters: {
            query?: {
                /** @description Start date (YYYY-MM-DD). Defaults to 30 days ago. */
                from?: string;
                /** @description End date (YYYY-MM-DD). Defaults to today. */
                to?: string;
                /** @description Comparison period for change calculations. */
                compare?: "previous_period" | "previous_year" | "none";
                /** @description Aggregation interval for time-series data. */
                interval?: "day" | "week" | "month";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Revenue time-series data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AnalyticsTimeSeries"];
                    };
                };
            };
        };
    };
    getOrdersTimeSeries: {
        parameters: {
            query?: {
                /** @description Start date (YYYY-MM-DD). Defaults to 30 days ago. */
                from?: string;
                /** @description End date (YYYY-MM-DD). Defaults to today. */
                to?: string;
                /** @description Comparison period for change calculations. */
                compare?: "previous_period" | "previous_year" | "none";
                /** @description Aggregation interval for time-series data. */
                interval?: "day" | "week" | "month";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Orders time-series data */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AnalyticsOrdersSeries"];
                    };
                };
            };
        };
    };
    getTopProducts: {
        parameters: {
            query?: {
                /** @description Start date (YYYY-MM-DD). Defaults to 30 days ago. */
                from?: string;
                /** @description End date (YYYY-MM-DD). Defaults to today. */
                to?: string;
                /** @description Comparison period for change calculations. */
                compare?: "previous_period" | "previous_year" | "none";
                /** @description Number of top products to return (1-20). */
                limit?: number;
                /** @description Sort top products by revenue or quantity sold. */
                sort_by?: "revenue" | "quantity";
            };
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Top products list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AnalyticsTopProduct"][];
                    };
                };
            };
        };
    };
    getActionItems: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Operational alerts */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AnalyticsActionItems"];
                    };
                };
            };
        };
    };
    listMemberships: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: never;
        responses: {
            /** @description Membership list */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["Membership"][];
                    };
                };
            };
        };
    };
    createStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /** @example Acme Commerce */
                    name: string;
                };
            };
        };
        responses: {
            /** @description Store created */
            201: {
                headers: {
                    [name: string]: unknown;
                };
                content: {
                    "application/json": {
                        data: components["schemas"]["AdminStoreCreate"];
                    };
                };
            };
        };
    };
    closeStore: {
        parameters: {
            query?: never;
            header?: never;
            path?: never;
            cookie?: never;
        };
        requestBody?: {
            content: {
                "application/json": {
                    /**
                     * @description Must match the project slug to confirm closure.
                     * @example acme-commerce
                     */
                    confirm: string;
                };
            };
        };
        responses: {
            /** @description Project closed */
            200: {
                headers: {
                    [name: string]: unknown;
                };
                content?: never;
            };
        };
    };
}

/**
 * Re-exported types from the generated OpenAPI spec.
 * Import these for type-safe SDK usage:
 *
 *   import type { Product, Order, Customer } from '@gethydra/sdk';
 */

type Product$1 = components['schemas']['Product'];
type Variant$2 = components['schemas']['Variant'];
type VariantPrice$1 = components['schemas']['VariantPrice'];
type ProductStats$1 = components['schemas']['ProductStats'];
type GenerateVariantsResult$1 = components['schemas']['GenerateVariantsResult'];
type Image$2 = components['schemas']['Image'];
type Collection$1 = components['schemas']['Collection'];
type Customer$1 = components['schemas']['Customer'];
type CustomerGroup$1 = components['schemas']['CustomerGroup'];
type Company$1 = components['schemas']['Company'];
type Cart$1 = components['schemas']['Cart'];
type CartItem = components['schemas']['CartItem'];
type CheckoutCreate$1 = components['schemas']['CheckoutCreate'];
type CheckoutGet$1 = components['schemas']['CheckoutGet'];
type CheckoutListItem$1 = components['schemas']['CheckoutListItem'];
type Order$2 = components['schemas']['Order'];
type DraftOrder$1 = components['schemas']['DraftOrder'];
type FulfillmentOrder$2 = components['schemas']['FulfillmentOrder'];
type Fulfillment$1 = components['schemas']['Fulfillment'];
type Refund$1 = components['schemas']['Refund'];
type Return$1 = components['schemas']['Return'];
type PurchaseOrder$1 = components['schemas']['PurchaseOrder'];
type InventoryLevel$1 = components['schemas']['InventoryLevel'];
type ShippingZone$1 = components['schemas']['ShippingZone'];
type ShippingRate$1 = components['schemas']['ShippingRate'];
type Promotion$1 = components['schemas']['Promotion'];
type Discount$1 = components['schemas']['Discount'];
type TaxGroup$1 = components['schemas']['TaxGroup'];
type TaxRate$1 = components['schemas']['TaxRate'];
type TaxExemption$1 = components['schemas']['TaxExemption'];
type Store$1 = components['schemas']['Store'];
type Webhook$1 = components['schemas']['Webhook'];
type Tag$1 = components['schemas']['Tag'];
type Redirect$1 = components['schemas']['Redirect'];
type Location$1 = components['schemas']['Location'];
type ExchangeRate$1 = components['schemas']['ExchangeRate'];
type NotificationLog$1 = components['schemas']['NotificationLog'];
type AnalyticsSummary$1 = components['schemas']['AnalyticsSummary'];
type AnalyticsTimeSeries$1 = components['schemas']['AnalyticsTimeSeries'];
type AnalyticsOrdersSeries$1 = components['schemas']['AnalyticsOrdersSeries'];
type AnalyticsTopProduct$1 = components['schemas']['AnalyticsTopProduct'];
type AnalyticsActionItems$1 = components['schemas']['AnalyticsActionItems'];
interface Pagination {
    cursor: string | null;
    has_more: boolean;
    total: number;
}
interface ListResponse<T> {
    data: T[];
    pagination: Pagination;
}
interface DataResponse<T> {
    data: T;
}

interface PaginateOptions {
    /** Maximum number of pages to fetch before stopping. Prevents runaway iteration on large datasets. */
    maxPages?: number;
}
/**
 * Auto-pagination iterator. Fetches pages one at a time, yielding each item.
 * Stops when `has_more` is false or `maxPages` is reached.
 *
 * Usage:
 *   for await (const product of hydra.products.iterate({ status: 'active' })) {
 *     console.log(product.title);
 *   }
 */
declare function paginate<T>(fetchPage: (cursor?: string) => Promise<ListResponse<T>>, options?: PaginateOptions): AsyncGenerator<T, void, undefined>;
/**
 * Collects all items from an async generator into an array.
 * Safety cap prevents unbounded memory growth — defaults to 10,000 items.
 *
 * Usage:
 *   const products = await hydra.products.toArray({ status: 'active' });
 *   const first100 = await hydra.products.toArray({ status: 'active' }, { limit: 100 });
 */
declare function toArray<T>(iterator: AsyncGenerator<T, void, undefined>, options?: {
    limit?: number;
}): Promise<T[]>;

type Product = components['schemas']['Product'];
type ProductStats = components['schemas']['ProductStats'];
type Variant$1 = components['schemas']['Variant'];
type Image$1 = components['schemas']['Image'];
type GenerateVariantsResult = components['schemas']['GenerateVariantsResult'];
type ListParams$o = NonNullable<operations['listProducts']['parameters']['query']>;
type CreateBody$k = NonNullable<operations['createProduct']['requestBody']>['content']['application/json'];
type UpdateBody$k = NonNullable<operations['updateProduct']['requestBody']>['content']['application/json'];
type DuplicateBody = NonNullable<operations['duplicateProduct']['requestBody']>['content']['application/json'];
type CreateVariantBody = NonNullable<operations['createProductVariant']['requestBody']>['content']['application/json'];
type GenerateVariantsBody = NonNullable<operations['generateProductVariants']['requestBody']>['content']['application/json'];
type AttachImagesBody = NonNullable<operations['attachProductImages']['requestBody']>['content']['application/json'];
declare class ProductsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$o): Promise<ListResponse<Product>>;
    iterate(params?: Omit<ListParams$o, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Product, void, undefined>;
    toArray(params?: Omit<ListParams$o, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Product[]>;
    get(id: string, params?: Pick<ListParams$o, 'expand' | 'currency' | 'fields'>): Promise<DataResponse<Product>>;
    create(body: CreateBody$k, options?: ResourceRequestOptions): Promise<DataResponse<Product>>;
    update(id: string, body: UpdateBody$k): Promise<DataResponse<Product>>;
    delete(id: string): Promise<void>;
    batchCreate(body: {
        products: CreateBody$k[];
    }, options?: ResourceRequestOptions): Promise<DataResponse<Product[]>>;
    duplicate(id: string, body: DuplicateBody): Promise<DataResponse<Product>>;
    getStats(id: string): Promise<DataResponse<ProductStats>>;
    listVariants(productId: string, params?: NonNullable<operations['listProductVariants']['parameters']['query']>): Promise<DataResponse<Variant$1[]>>;
    createVariant(productId: string, body: CreateVariantBody, options?: ResourceRequestOptions): Promise<DataResponse<Variant$1>>;
    generateVariants(productId: string, body: GenerateVariantsBody): Promise<DataResponse<GenerateVariantsResult>>;
    listImages(productId: string): Promise<DataResponse<Image$1[]>>;
    uploadImage(productId: string, formData: FormData): Promise<DataResponse<Image$1>>;
    attachImages(productId: string, body: AttachImagesBody): Promise<DataResponse<Image$1[]>>;
    setMetafield(productId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearMetafield(productId: string, slug: string): Promise<void>;
}

type Variant = components['schemas']['Variant'];
type VariantPrice = components['schemas']['VariantPrice'];
type UpdateBody$j = NonNullable<operations['updateVariant']['requestBody']>['content']['application/json'];
type UpsertPriceBody = NonNullable<operations['upsertVariantPrice']['requestBody']>['content']['application/json'];
declare class VariantsResource {
    private client;
    constructor(client: Hydra);
    get(id: string, params?: {
        expand?: string;
        currency?: string;
        fields?: string;
    }): Promise<DataResponse<Variant>>;
    update(id: string, body: UpdateBody$j): Promise<DataResponse<Variant>>;
    delete(id: string): Promise<void>;
    listPrices(variantId: string): Promise<DataResponse<Record<string, VariantPrice>>>;
    upsertPrice(variantId: string, priceKeySlug: string, body: UpsertPriceBody): Promise<DataResponse<VariantPrice>>;
    deletePrice(variantId: string, priceKeySlug: string): Promise<void>;
    setMetafield(variantId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearMetafield(variantId: string, slug: string): Promise<void>;
}

type Collection = components['schemas']['Collection'];
type ListParams$n = NonNullable<operations['listCollections']['parameters']['query']>;
type CreateBody$j = NonNullable<operations['createCollection']['requestBody']>['content']['application/json'];
type UpdateBody$i = NonNullable<operations['updateCollection']['requestBody']>['content']['application/json'];
type AddProductsBody = NonNullable<operations['addCollectionProducts']['requestBody']>['content']['application/json'];
type ReorderProductsBody = NonNullable<operations['reorderCollectionProducts']['requestBody']>['content']['application/json'];
type ReorderCollectionsBody = NonNullable<operations['reorderCollections']['requestBody']>['content']['application/json'];
declare class CollectionsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$n): Promise<ListResponse<Collection>>;
    iterate(params?: Omit<ListParams$n, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Collection, void, undefined>;
    toArray(params?: Omit<ListParams$n, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Collection[]>;
    get(id: string, params?: Pick<ListParams$n, 'expand' | 'fields'>): Promise<DataResponse<Collection>>;
    create(body: CreateBody$j, options?: ResourceRequestOptions): Promise<DataResponse<Collection>>;
    update(id: string, body: UpdateBody$i): Promise<DataResponse<Collection>>;
    delete(id: string): Promise<void>;
    tree(): Promise<DataResponse<unknown>>;
    reorder(body: ReorderCollectionsBody): Promise<void>;
    addProducts(collectionId: string, body: AddProductsBody): Promise<void>;
    reorderProducts(collectionId: string, body: ReorderProductsBody): Promise<void>;
    removeProduct(collectionId: string, productId: string): Promise<void>;
    setMetafield(collectionId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearMetafield(collectionId: string, slug: string): Promise<void>;
}

type Cart = components['schemas']['Cart'];
type GetParams = NonNullable<operations['getCart']['parameters']['query']>;
type AddItemBody$1 = NonNullable<operations['addCartItem']['requestBody']>['content']['application/json'];
type UpdateItemBody$3 = NonNullable<operations['updateCartItem']['requestBody']>['content']['application/json'];
declare class CartResource {
    private client;
    constructor(client: Hydra);
    create(): Promise<DataResponse<Cart>>;
    get(id: string, params?: GetParams): Promise<DataResponse<Cart>>;
    addItem(cartId: string, body: AddItemBody$1): Promise<DataResponse<Cart>>;
    updateItem(cartId: string, itemId: string, body: UpdateItemBody$3): Promise<DataResponse<Cart>>;
    removeItem(cartId: string, itemId: string): Promise<DataResponse<Cart>>;
    clear(cartId: string): Promise<DataResponse<Cart>>;
}

type CheckoutCreate = components['schemas']['CheckoutCreate'];
type CheckoutGet = components['schemas']['CheckoutGet'];
type CreateBody$i = NonNullable<operations['createCheckout']['requestBody']>['content']['application/json'];
type ApplyDiscountBody = NonNullable<operations['applyCheckoutDiscount']['requestBody']>['content']['application/json'];
type ApplyCreditBody = NonNullable<operations['applyCheckoutCredit']['requestBody']>['content']['application/json'];
declare class CheckoutResource {
    private client;
    constructor(client: Hydra);
    create(body: CreateBody$i, options?: ResourceRequestOptions): Promise<DataResponse<CheckoutCreate>>;
    get(id: string): Promise<DataResponse<CheckoutGet>>;
    applyDiscount(checkoutId: string, body: ApplyDiscountBody): Promise<DataResponse<CheckoutGet>>;
    removeDiscount(checkoutId: string): Promise<DataResponse<CheckoutGet>>;
    applyCredit(checkoutId: string, body: ApplyCreditBody): Promise<DataResponse<CheckoutGet>>;
    removeCredit(checkoutId: string): Promise<DataResponse<CheckoutGet>>;
    completeWithCredit(checkoutId: string): Promise<DataResponse<CheckoutGet>>;
}

type Order$1 = components['schemas']['Order'];
type FulfillmentOrder$1 = components['schemas']['FulfillmentOrder'];
type ListParams$m = NonNullable<operations['listOrders']['parameters']['query']>;
type CreateBody$h = NonNullable<operations['createOrder']['requestBody']>['content']['application/json'];
type UpdateBody$h = NonNullable<operations['updateOrder']['requestBody']>['content']['application/json'];
declare class OrdersResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$m): Promise<ListResponse<Order$1>>;
    iterate(params?: Omit<ListParams$m, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Order$1, void, undefined>;
    toArray(params?: Omit<ListParams$m, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Order$1[]>;
    get(id: string, params?: {
        expand?: string;
        currency?: string;
        fields?: string;
    }): Promise<DataResponse<Order$1>>;
    create(body: CreateBody$h, options?: ResourceRequestOptions): Promise<DataResponse<Order$1>>;
    update(id: string, body: UpdateBody$h): Promise<DataResponse<Order$1>>;
    listFulfillmentOrders(orderId: string): Promise<DataResponse<FulfillmentOrder$1[]>>;
    /**
     * Returns the API path for downloading the invoice PDF for an order.
     * The first request to this endpoint assigns a permanent invoice number.
     */
    invoiceUrl(orderId: string): string;
    setMetafield(orderId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearMetafield(orderId: string, slug: string): Promise<void>;
}

type Fulfillment = components['schemas']['Fulfillment'];
type CreateBody$g = NonNullable<operations['createFulfillment']['requestBody']>['content']['application/json'];
type UpdateBody$g = NonNullable<operations['updateFulfillment']['requestBody']>['content']['application/json'];
type CancelBody = NonNullable<operations['cancelFulfillment']['requestBody']>['content']['application/json'];
declare class FulfillmentsResource {
    private client;
    constructor(client: Hydra);
    /** Create a fulfillment for a fulfillment order */
    create(fulfillmentOrderId: string, body: CreateBody$g, options?: ResourceRequestOptions): Promise<DataResponse<Fulfillment>>;
    update(id: string, body: UpdateBody$g): Promise<DataResponse<Fulfillment>>;
    cancel(id: string, body?: CancelBody): Promise<DataResponse<Fulfillment>>;
}

type Refund = components['schemas']['Refund'];
type ListParams$l = NonNullable<operations['listRefunds']['parameters']['query']>;
type CreateBody$f = NonNullable<operations['createOrderRefund']['requestBody']>['content']['application/json'];
declare class RefundsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$l): Promise<ListResponse<Refund>>;
    iterate(params?: Omit<ListParams$l, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Refund, void, undefined>;
    toArray(params?: Omit<ListParams$l, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Refund[]>;
    get(id: string, params?: {
        expand?: string;
        fields?: string;
    }): Promise<DataResponse<Refund>>;
    create(orderId: string, body: CreateBody$f, options?: ResourceRequestOptions): Promise<DataResponse<Refund>>;
    listByOrder(orderId: string): Promise<DataResponse<Refund[]>>;
    retry(id: string): Promise<DataResponse<Refund>>;
    /**
     * Returns the API path for downloading the credit note PDF for a refund.
     * The first request to this endpoint assigns a permanent credit note number.
     */
    creditNoteUrl(id: string): string;
}

type Return = components['schemas']['Return'];
type ListParams$k = NonNullable<operations['listReturns']['parameters']['query']>;
type CreateBody$e = NonNullable<operations['createOrderReturn']['requestBody']>['content']['application/json'];
type ApproveBody = NonNullable<operations['approveReturn']['requestBody']>['content']['application/json'];
type ReceiveBody$1 = NonNullable<operations['receiveReturn']['requestBody']>['content']['application/json'];
type RejectBody = NonNullable<operations['rejectReturn']['requestBody']>['content']['application/json'];
declare class ReturnsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$k): Promise<ListResponse<Return>>;
    iterate(params?: Omit<ListParams$k, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Return, void, undefined>;
    toArray(params?: Omit<ListParams$k, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Return[]>;
    get(id: string, params?: {
        expand?: string;
        fields?: string;
    }): Promise<DataResponse<Return>>;
    create(orderId: string, body: CreateBody$e, options?: ResourceRequestOptions): Promise<DataResponse<Return>>;
    listByOrder(orderId: string): Promise<DataResponse<Return[]>>;
    approve(id: string, body?: ApproveBody): Promise<DataResponse<Return>>;
    receive(id: string, body?: ReceiveBody$1): Promise<DataResponse<Return>>;
    close(id: string): Promise<DataResponse<Return>>;
    reject(id: string, body?: RejectBody): Promise<DataResponse<Return>>;
    cancel(id: string): Promise<DataResponse<Return>>;
}

type DraftOrder = components['schemas']['DraftOrder'];
type DraftOrderLineItem = components['schemas']['DraftOrderLineItem'];
type Order = components['schemas']['Order'];
type ListParams$j = NonNullable<operations['listDraftOrders']['parameters']['query']>;
type CreateBody$d = NonNullable<operations['createDraftOrder']['requestBody']>['content']['application/json'];
type UpdateBody$f = NonNullable<operations['updateDraftOrder']['requestBody']>['content']['application/json'];
type AddItemsBody = NonNullable<operations['addDraftOrderItems']['requestBody']>['content']['application/json'];
type UpdateItemBody$2 = NonNullable<operations['updateDraftOrderItem']['requestBody']>['content']['application/json'];
declare class DraftOrdersResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$j): Promise<ListResponse<DraftOrder>>;
    iterate(params?: Omit<ListParams$j, 'cursor'>, options?: PaginateOptions): AsyncGenerator<DraftOrder, void, undefined>;
    toArray(params?: Omit<ListParams$j, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<DraftOrder[]>;
    get(id: string, params?: {
        expand?: string;
        currency?: string;
        fields?: string;
    }): Promise<DataResponse<DraftOrder>>;
    create(body: CreateBody$d, options?: ResourceRequestOptions): Promise<DataResponse<DraftOrder>>;
    update(id: string, body: UpdateBody$f): Promise<DataResponse<DraftOrder>>;
    delete(id: string): Promise<void>;
    addItems(draftOrderId: string, body: AddItemsBody): Promise<DataResponse<DraftOrderLineItem[]>>;
    updateItem(draftOrderId: string, itemId: string, body: UpdateItemBody$2): Promise<DataResponse<DraftOrderLineItem>>;
    removeItem(draftOrderId: string, itemId: string): Promise<void>;
    complete(id: string): Promise<DataResponse<Order>>;
    send(id: string, body?: {
        subject?: string;
        message?: string;
        cc?: string[];
        bcc?: string[];
    }): Promise<DataResponse<DraftOrder>>;
}

type Customer = components['schemas']['Customer'];
type ListParams$i = NonNullable<operations['listCustomers']['parameters']['query']>;
type CreateBody$c = NonNullable<operations['createCustomer']['requestBody']>['content']['application/json'];
type UpdateBody$e = NonNullable<operations['updateCustomer']['requestBody']>['content']['application/json'];
type CreateAddressBody$1 = NonNullable<operations['createCustomerAddress']['requestBody']>['content']['application/json'];
type CreateNoteBody$1 = NonNullable<operations['createCustomerNote']['requestBody']>['content']['application/json'];
declare class CustomersResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$i): Promise<ListResponse<Customer>>;
    iterate(params?: Omit<ListParams$i, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Customer, void, undefined>;
    toArray(params?: Omit<ListParams$i, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Customer[]>;
    get(id: string, params?: Pick<ListParams$i, 'expand' | 'fields'>): Promise<DataResponse<Customer>>;
    create(body: CreateBody$c, options?: ResourceRequestOptions): Promise<DataResponse<Customer>>;
    update(id: string, body: UpdateBody$e): Promise<DataResponse<Customer>>;
    delete(id: string): Promise<void>;
    listAddresses(customerId: string): Promise<DataResponse<unknown[]>>;
    createAddress(customerId: string, body: CreateAddressBody$1): Promise<DataResponse<unknown>>;
    listNotes(customerId: string): Promise<DataResponse<unknown[]>>;
    createNote(customerId: string, body: CreateNoteBody$1): Promise<DataResponse<unknown>>;
    deleteNote(customerId: string, noteId: string): Promise<void>;
    setMetafield(customerId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearMetafield(customerId: string, slug: string): Promise<void>;
}

type CustomerGroup = components['schemas']['CustomerGroup'];
type ListParams$h = NonNullable<operations['listCustomerGroups']['parameters']['query']>;
type CreateBody$b = NonNullable<operations['createCustomerGroup']['requestBody']>['content']['application/json'];
type UpdateBody$d = NonNullable<operations['updateCustomerGroup']['requestBody']>['content']['application/json'];
type AddMembersBody = NonNullable<operations['addCustomerGroupMembers']['requestBody']>['content']['application/json'];
declare class CustomerGroupsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$h): Promise<ListResponse<CustomerGroup>>;
    iterate(params?: Omit<ListParams$h, 'cursor'>, options?: PaginateOptions): AsyncGenerator<CustomerGroup, void, undefined>;
    toArray(params?: Omit<ListParams$h, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<CustomerGroup[]>;
    get(id: string): Promise<DataResponse<CustomerGroup>>;
    create(body: CreateBody$b, options?: ResourceRequestOptions): Promise<DataResponse<CustomerGroup>>;
    update(id: string, body: UpdateBody$d): Promise<DataResponse<CustomerGroup>>;
    delete(id: string): Promise<void>;
    addMembers(groupId: string, body: AddMembersBody): Promise<void>;
    removeMember(groupId: string, customerId: string): Promise<void>;
}

type UpdateBody$c = NonNullable<operations['updateAddress']['requestBody']>['content']['application/json'];
declare class AddressesResource {
    private client;
    constructor(client: Hydra);
    update(id: string, body: UpdateBody$c): Promise<DataResponse<unknown>>;
    delete(id: string): Promise<void>;
}

type InventoryLevel = components['schemas']['InventoryLevel'];
type InventoryAdjustment = components['schemas']['InventoryAdjustment'];
type ProductAdjustment = components['schemas']['ProductAdjustment'];
type ListParams$g = NonNullable<operations['listInventory']['parameters']['query']>;
type SetBody = NonNullable<operations['setInventory']['requestBody']>['content']['application/json'];
type AdjustBody = NonNullable<operations['adjustInventory']['requestBody']>['content']['application/json'];
type InventoryResult = InventoryLevel & {
    adjustment: InventoryAdjustment;
};
declare class InventoryResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$g): Promise<ListResponse<InventoryLevel>>;
    iterate(params?: Omit<ListParams$g, 'cursor'>, options?: PaginateOptions): AsyncGenerator<InventoryLevel, void, undefined>;
    toArray(params?: Omit<ListParams$g, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<InventoryLevel[]>;
    listAdjustments(params: {
        product_id: string;
        limit?: number;
        cursor?: string;
        fields?: string;
    }): Promise<ListResponse<ProductAdjustment>>;
    iterateAdjustments(params: Omit<{
        product_id: string;
        limit?: number;
        cursor?: string;
        fields?: string;
    }, 'cursor'>, options?: PaginateOptions): AsyncGenerator<ProductAdjustment, void, undefined>;
    adjustmentsToArray(params: Omit<{
        product_id: string;
        limit?: number;
        cursor?: string;
        fields?: string;
    }, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<ProductAdjustment[]>;
    set(variantId: string, body: SetBody): Promise<DataResponse<InventoryResult>>;
    adjust(variantId: string, body: AdjustBody): Promise<DataResponse<InventoryResult>>;
    listVariantAdjustments(variantId: string, params?: {
        limit?: number;
        cursor?: string;
        fields?: string;
    }): Promise<ListResponse<InventoryAdjustment>>;
    iterateVariantAdjustments(variantId: string, params?: Omit<{
        limit?: number;
        cursor?: string;
        fields?: string;
    }, 'cursor'>, options?: PaginateOptions): AsyncGenerator<InventoryAdjustment, void, undefined>;
    variantAdjustmentsToArray(variantId: string, params?: Omit<{
        limit?: number;
        cursor?: string;
        fields?: string;
    }, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<InventoryAdjustment[]>;
}

type ShippingZone = components['schemas']['ShippingZone'];
type ShippingRate = components['schemas']['ShippingRate'];
type ListZonesParams = NonNullable<operations['listShippingZones']['parameters']['query']>;
type CreateZoneBody = NonNullable<operations['createShippingZone']['requestBody']>['content']['application/json'];
type UpdateZoneBody = NonNullable<operations['updateShippingZone']['requestBody']>['content']['application/json'];
type CreateRateBody$1 = NonNullable<operations['createShippingRate']['requestBody']>['content']['application/json'];
type UpdateRateBody$1 = NonNullable<operations['updateShippingRate']['requestBody']>['content']['application/json'];
type AvailableRatesBody = NonNullable<operations['getAvailableShippingRates']['requestBody']>['content']['application/json'];
declare class ShippingResource {
    private client;
    constructor(client: Hydra);
    listZones(params?: ListZonesParams): Promise<ListResponse<ShippingZone>>;
    iterateZones(params?: Omit<ListZonesParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<ShippingZone, void, undefined>;
    zonesToArray(params?: Omit<ListZonesParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<ShippingZone[]>;
    getZone(id: string, params?: Pick<ListZonesParams, 'expand' | 'currency' | 'fields'>): Promise<DataResponse<ShippingZone>>;
    createZone(body: CreateZoneBody, options?: ResourceRequestOptions): Promise<DataResponse<ShippingZone>>;
    updateZone(id: string, body: UpdateZoneBody): Promise<DataResponse<ShippingZone>>;
    deleteZone(id: string): Promise<void>;
    createRate(zoneId: string, body: CreateRateBody$1, options?: ResourceRequestOptions): Promise<DataResponse<ShippingRate>>;
    updateRate(id: string, body: UpdateRateBody$1): Promise<DataResponse<ShippingRate>>;
    deleteRate(id: string): Promise<void>;
    /** Get available shipping rates for a destination (public access) */
    getAvailableRates(body: AvailableRatesBody): Promise<DataResponse<ShippingRate[]>>;
}

type Promotion = components['schemas']['Promotion'];
type ListParams$f = NonNullable<operations['listPromotions']['parameters']['query']>;
type CreateBody$a = NonNullable<operations['createPromotion']['requestBody']>['content']['application/json'];
type UpdateBody$b = NonNullable<operations['updatePromotion']['requestBody']>['content']['application/json'];
declare class PromotionsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$f): Promise<ListResponse<Promotion>>;
    iterate(params?: Omit<ListParams$f, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Promotion, void, undefined>;
    toArray(params?: Omit<ListParams$f, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Promotion[]>;
    get(id: string): Promise<DataResponse<Promotion>>;
    create(body: CreateBody$a, options?: ResourceRequestOptions): Promise<DataResponse<Promotion>>;
    update(id: string, body: UpdateBody$b): Promise<DataResponse<Promotion>>;
    delete(id: string): Promise<void>;
}

type Discount = components['schemas']['Discount'];
type ListParams$e = NonNullable<operations['listDiscounts']['parameters']['query']>;
type CreateBody$9 = NonNullable<operations['createDiscount']['requestBody']>['content']['application/json'];
type UpdateBody$a = NonNullable<operations['updateDiscount']['requestBody']>['content']['application/json'];
declare class DiscountsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$e): Promise<ListResponse<Discount>>;
    iterate(params?: Omit<ListParams$e, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Discount, void, undefined>;
    toArray(params?: Omit<ListParams$e, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Discount[]>;
    get(id: string): Promise<DataResponse<Discount>>;
    create(body: CreateBody$9, options?: ResourceRequestOptions): Promise<DataResponse<Discount>>;
    update(id: string, body: UpdateBody$a): Promise<DataResponse<Discount>>;
    delete(id: string): Promise<void>;
}

type Image = components['schemas']['Image'];
type ListParams$d = NonNullable<operations['listImages']['parameters']['query']>;
type UpdateBody$9 = NonNullable<operations['updateImage']['requestBody']>['content']['application/json'];
type ReorderBody$2 = NonNullable<operations['reorderImages']['requestBody']>['content']['application/json'];
declare class ImagesResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$d): Promise<ListResponse<Image>>;
    iterate(params?: Omit<ListParams$d, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Image, void, undefined>;
    toArray(params?: Omit<ListParams$d, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Image[]>;
    /** Upload an image to the store library */
    upload(formData: FormData): Promise<DataResponse<Image>>;
    update(id: string, body: UpdateBody$9): Promise<DataResponse<Image>>;
    delete(id: string): Promise<void>;
    detach(id: string): Promise<void>;
    batchDelete(imageIds: string[]): Promise<void>;
    batchDetach(imageIds: string[]): Promise<void>;
    reorder(body: ReorderBody$2): Promise<void>;
}

type Webhook = components['schemas']['Webhook'];
type ListParams$c = NonNullable<operations['listWebhooks']['parameters']['query']>;
type CreateBody$8 = NonNullable<operations['createWebhook']['requestBody']>['content']['application/json'];
type UpdateBody$8 = NonNullable<operations['updateWebhook']['requestBody']>['content']['application/json'];
declare class WebhooksResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$c): Promise<ListResponse<Webhook>>;
    iterate(params?: Omit<ListParams$c, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Webhook, void, undefined>;
    toArray(params?: Omit<ListParams$c, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Webhook[]>;
    get(id: string): Promise<DataResponse<Webhook>>;
    create(body: CreateBody$8, options?: ResourceRequestOptions): Promise<DataResponse<Webhook>>;
    update(id: string, body: UpdateBody$8): Promise<DataResponse<Webhook>>;
    delete(id: string): Promise<void>;
}

type Store = components['schemas']['Store'];
type UpdateBody$7 = NonNullable<operations['updateStore']['requestBody']>['content']['application/json'];
declare class StoreResource {
    private client;
    constructor(client: Hydra);
    get(params?: {
        fields?: string;
    }): Promise<DataResponse<Store>>;
    update(body: UpdateBody$7): Promise<DataResponse<Store>>;
    getDomainRecord(): Promise<DataResponse<unknown>>;
    verifyDomain(): Promise<DataResponse<unknown>>;
    publish(): Promise<DataResponse<{
        store_id: string;
        published_at: string;
        previous_published_at: string | null;
        changes_count: number;
    }>>;
}

type Tag = components['schemas']['Tag'];
type ListParams$b = NonNullable<operations['listTags']['parameters']['query']>;
type CreateBody$7 = NonNullable<operations['createTag']['requestBody']>['content']['application/json'];
type UpdateBody$6 = NonNullable<operations['updateTag']['requestBody']>['content']['application/json'];
declare class TagsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$b): Promise<ListResponse<Tag>>;
    iterate(params?: Omit<ListParams$b, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Tag, void, undefined>;
    toArray(params?: Omit<ListParams$b, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Tag[]>;
    create(body: CreateBody$7, options?: ResourceRequestOptions): Promise<DataResponse<Tag>>;
    update(id: string, body: UpdateBody$6): Promise<DataResponse<Tag>>;
    delete(id: string): Promise<void>;
}

type Redirect = components['schemas']['Redirect'];
type ListParams$a = NonNullable<operations['listRedirects']['parameters']['query']>;
type CreateBody$6 = NonNullable<operations['createRedirect']['requestBody']>['content']['application/json'];
declare class RedirectsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$a): Promise<ListResponse<Redirect>>;
    iterate(params?: Omit<ListParams$a, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Redirect, void, undefined>;
    toArray(params?: Omit<ListParams$a, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Redirect[]>;
    create(body: CreateBody$6, options?: ResourceRequestOptions): Promise<DataResponse<Redirect>>;
    lookup(path: string): Promise<DataResponse<Redirect>>;
    delete(id: string): Promise<void>;
}

type Company = components['schemas']['Company'];
type ListParams$9 = NonNullable<operations['listCompanies']['parameters']['query']>;
type CreateBody$5 = NonNullable<operations['createCompany']['requestBody']>['content']['application/json'];
type UpdateBody$5 = NonNullable<operations['updateCompany']['requestBody']>['content']['application/json'];
type CreateAddressBody = NonNullable<operations['createCompanyAddress']['requestBody']>['content']['application/json'];
type UpdateAddressBody = NonNullable<operations['updateCompanyAddress']['requestBody']>['content']['application/json'];
type CreateContactBody = NonNullable<operations['createCompanyContact']['requestBody']>['content']['application/json'];
type UpdateContactBody = NonNullable<operations['updateCompanyContact']['requestBody']>['content']['application/json'];
type CreateNoteBody = NonNullable<operations['createCompanyNote']['requestBody']>['content']['application/json'];
declare class CompaniesResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$9): Promise<ListResponse<Company>>;
    iterate(params?: Omit<ListParams$9, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Company, void, undefined>;
    toArray(params?: Omit<ListParams$9, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Company[]>;
    get(id: string, params?: Pick<ListParams$9, 'expand' | 'fields'>): Promise<DataResponse<Company>>;
    create(body: CreateBody$5, options?: ResourceRequestOptions): Promise<DataResponse<Company>>;
    update(id: string, body: UpdateBody$5): Promise<DataResponse<Company>>;
    delete(id: string): Promise<void>;
    listAddresses(companyId: string): Promise<DataResponse<unknown[]>>;
    createAddress(companyId: string, body: CreateAddressBody): Promise<DataResponse<unknown>>;
    updateAddress(companyId: string, addressId: string, body: UpdateAddressBody): Promise<DataResponse<unknown>>;
    deleteAddress(companyId: string, addressId: string): Promise<void>;
    listContacts(companyId: string): Promise<DataResponse<unknown[]>>;
    createContact(companyId: string, body: CreateContactBody): Promise<DataResponse<unknown>>;
    updateContact(companyId: string, contactId: string, body: UpdateContactBody): Promise<DataResponse<unknown>>;
    deleteContact(companyId: string, contactId: string): Promise<void>;
    listNotes(companyId: string): Promise<DataResponse<unknown[]>>;
    createNote(companyId: string, body: CreateNoteBody): Promise<DataResponse<unknown>>;
    deleteNote(companyId: string, noteId: string): Promise<void>;
}

type PurchaseOrder = components['schemas']['PurchaseOrder'];
type ListParams$8 = NonNullable<operations['listPurchaseOrders']['parameters']['query']>;
type CreateBody$4 = NonNullable<operations['createPurchaseOrder']['requestBody']>['content']['application/json'];
type UpdateBody$4 = NonNullable<operations['updatePurchaseOrder']['requestBody']>['content']['application/json'];
type AddItemBody = NonNullable<operations['addPurchaseOrderItems']['requestBody']>['content']['application/json'];
type UpdateItemBody$1 = NonNullable<operations['updatePurchaseOrderItem']['requestBody']>['content']['application/json'];
type ReceiveBody = NonNullable<operations['receivePurchaseOrderItems']['requestBody']>['content']['application/json'];
declare class PurchaseOrdersResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$8): Promise<ListResponse<PurchaseOrder>>;
    iterate(params?: Omit<ListParams$8, 'cursor'>, options?: PaginateOptions): AsyncGenerator<PurchaseOrder, void, undefined>;
    toArray(params?: Omit<ListParams$8, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<PurchaseOrder[]>;
    get(id: string, params?: Pick<ListParams$8, 'expand' | 'fields'>): Promise<DataResponse<PurchaseOrder>>;
    create(body: CreateBody$4, options?: ResourceRequestOptions): Promise<DataResponse<PurchaseOrder>>;
    update(id: string, body: UpdateBody$4): Promise<DataResponse<PurchaseOrder>>;
    delete(id: string): Promise<void>;
    addItem(purchaseOrderId: string, body: AddItemBody): Promise<DataResponse<unknown>>;
    updateItem(purchaseOrderId: string, itemId: string, body: UpdateItemBody$1): Promise<DataResponse<unknown>>;
    removeItem(purchaseOrderId: string, itemId: string): Promise<void>;
    markOrdered(id: string): Promise<DataResponse<PurchaseOrder>>;
    receive(id: string, body: ReceiveBody): Promise<DataResponse<PurchaseOrder>>;
    cancel(id: string): Promise<DataResponse<PurchaseOrder>>;
    close(id: string): Promise<DataResponse<PurchaseOrder>>;
    setItemMetafield(purchaseOrderId: string, itemId: string, slug: string, body: {
        value: unknown;
    }): Promise<DataResponse<unknown>>;
    clearItemMetafield(purchaseOrderId: string, itemId: string, slug: string): Promise<void>;
}

type FulfillmentOrder = components['schemas']['FulfillmentOrder'];
declare class FulfillmentOrdersResource {
    private client;
    constructor(client: Hydra);
    /** List fulfillment orders for an order (use orders.listFulfillmentOrders instead) */
    listForOrder(orderId: string): Promise<DataResponse<FulfillmentOrder[]>>;
}

type ListParams$7 = NonNullable<operations['listMetafieldDefinitions']['parameters']['query']>;
type CreateBody$3 = NonNullable<operations['createMetafieldDefinition']['requestBody']>['content']['application/json'];
type UpdateBody$3 = NonNullable<operations['updateMetafieldDefinition']['requestBody']>['content']['application/json'];
type ReorderBody$1 = NonNullable<operations['reorderMetafieldDefinitions']['requestBody']>['content']['application/json'];
declare class MetafieldsResource {
    private client;
    constructor(client: Hydra);
    /** List metafield definitions for the store */
    listDefinitions(params?: ListParams$7): Promise<DataResponse<unknown[]>>;
    createDefinition(body: CreateBody$3): Promise<DataResponse<unknown>>;
    updateDefinition(ownerType: string, slug: string, body: UpdateBody$3): Promise<DataResponse<unknown>>;
    archiveDefinition(ownerType: string, slug: string): Promise<void>;
    reorderDefinitions(ownerType: string, body: ReorderBody$1): Promise<void>;
}

type TaxGroup = components['schemas']['TaxGroup'];
type TaxRate = components['schemas']['TaxRate'];
type TaxExemption = components['schemas']['TaxExemption'];
type ListGroupsParams = NonNullable<operations['listTaxGroups']['parameters']['query']>;
type CreateGroupBody = NonNullable<operations['createTaxGroup']['requestBody']>['content']['application/json'];
type UpdateGroupBody = NonNullable<operations['updateTaxGroup']['requestBody']>['content']['application/json'];
type ListRatesParams = NonNullable<operations['listTaxRates']['parameters']['query']>;
type CreateRateBody = NonNullable<operations['createTaxRate']['requestBody']>['content']['application/json'];
type UpdateRateBody = NonNullable<operations['updateTaxRate']['requestBody']>['content']['application/json'];
type ListExemptionsParams = NonNullable<operations['listTaxExemptions']['parameters']['query']>;
type CreateExemptionBody = NonNullable<operations['createTaxExemption']['requestBody']>['content']['application/json'];
declare class TaxResource {
    private client;
    constructor(client: Hydra);
    listGroups(params?: ListGroupsParams): Promise<ListResponse<TaxGroup>>;
    iterateGroups(params?: Omit<ListGroupsParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<TaxGroup, void, undefined>;
    groupsToArray(params?: Omit<ListGroupsParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<TaxGroup[]>;
    getGroup(id: string): Promise<DataResponse<TaxGroup>>;
    createGroup(body: CreateGroupBody, options?: ResourceRequestOptions): Promise<DataResponse<TaxGroup>>;
    updateGroup(id: string, body: UpdateGroupBody): Promise<DataResponse<TaxGroup>>;
    deleteGroup(id: string): Promise<void>;
    listRates(params?: ListRatesParams): Promise<ListResponse<TaxRate>>;
    iterateRates(params?: Omit<ListRatesParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<TaxRate, void, undefined>;
    ratesToArray(params?: Omit<ListRatesParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<TaxRate[]>;
    createRate(body: CreateRateBody, options?: ResourceRequestOptions): Promise<DataResponse<TaxRate>>;
    updateRate(id: string, body: UpdateRateBody): Promise<DataResponse<TaxRate>>;
    deleteRate(id: string): Promise<void>;
    listExemptions(params?: ListExemptionsParams): Promise<ListResponse<TaxExemption>>;
    iterateExemptions(params?: Omit<ListExemptionsParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<TaxExemption, void, undefined>;
    exemptionsToArray(params?: Omit<ListExemptionsParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<TaxExemption[]>;
    createExemption(body: CreateExemptionBody, options?: ResourceRequestOptions): Promise<DataResponse<TaxExemption>>;
    deleteExemption(id: string): Promise<void>;
}

type ExchangeRate = components['schemas']['ExchangeRate'];
type ListParams$6 = NonNullable<operations['listExchangeRates']['parameters']['query']>;
declare class ExchangeRatesResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$6): Promise<DataResponse<ExchangeRate[]>>;
    refresh(): Promise<DataResponse<unknown>>;
}

type FilterAttribute = components['schemas']['FilterAttribute'];
type ListParams$5 = NonNullable<operations['listFilterAttributes']['parameters']['query']>;
type CreateBody$2 = NonNullable<operations['createFilterAttribute']['requestBody']>['content']['application/json'];
type UpdateBody$2 = NonNullable<operations['updateFilterAttribute']['requestBody']>['content']['application/json'];
type ReorderBody = NonNullable<operations['reorderFilterAttributes']['requestBody']>['content']['application/json'];
declare class FilterAttributesResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$5): Promise<ListResponse<FilterAttribute>>;
    iterate(params?: Omit<ListParams$5, 'cursor'>, options?: PaginateOptions): AsyncGenerator<FilterAttribute, void, undefined>;
    toArray(params?: Omit<ListParams$5, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<FilterAttribute[]>;
    get(id: string): Promise<DataResponse<FilterAttribute>>;
    create(body: CreateBody$2, options?: ResourceRequestOptions): Promise<DataResponse<FilterAttribute>>;
    update(id: string, body: UpdateBody$2): Promise<DataResponse<FilterAttribute>>;
    delete(id: string): Promise<void>;
    reorder(body: ReorderBody): Promise<ListResponse<FilterAttribute>>;
    discover(): Promise<DataResponse<unknown[]>>;
}

type NavigationMenu = components['schemas']['NavigationMenu'];
type NavigationItem = components['schemas']['NavigationItem'];
type ListParams$4 = NonNullable<operations['listNavigationMenus']['parameters']['query']>;
type CreateBody$1 = NonNullable<operations['createNavigationMenu']['requestBody']>['content']['application/json'];
type UpdateBody$1 = NonNullable<operations['updateNavigationMenu']['requestBody']>['content']['application/json'];
type CreateItemBody = NonNullable<operations['addNavigationItem']['requestBody']>['content']['application/json'];
type UpdateItemBody = NonNullable<operations['updateNavigationItem']['requestBody']>['content']['application/json'];
type ReorderItemsBody = NonNullable<operations['reorderNavigationItems']['requestBody']>['content']['application/json'];
declare class NavigationResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$4): Promise<ListResponse<NavigationMenu>>;
    iterate(params?: Omit<ListParams$4, 'cursor'>, options?: PaginateOptions): AsyncGenerator<NavigationMenu, void, undefined>;
    toArray(params?: Omit<ListParams$4, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<NavigationMenu[]>;
    get(id: string): Promise<DataResponse<NavigationMenu>>;
    create(body: CreateBody$1, options?: ResourceRequestOptions): Promise<DataResponse<NavigationMenu>>;
    update(id: string, body: UpdateBody$1): Promise<DataResponse<NavigationMenu>>;
    delete(id: string): Promise<void>;
    addItem(menuId: string, body: CreateItemBody): Promise<DataResponse<NavigationItem>>;
    updateItem(menuId: string, itemId: string, body: UpdateItemBody): Promise<DataResponse<NavigationItem>>;
    deleteItem(menuId: string, itemId: string): Promise<void>;
    reorderItems(menuId: string, body: ReorderItemsBody): Promise<void>;
}

type NotificationLog = components['schemas']['NotificationLog'];
type ListParams$3 = NonNullable<operations['listNotifications']['parameters']['query']>;
declare class NotificationsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$3): Promise<ListResponse<NotificationLog>>;
    iterate(params?: Omit<ListParams$3, 'cursor'>, options?: PaginateOptions): AsyncGenerator<NotificationLog, void, undefined>;
    toArray(params?: Omit<ListParams$3, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<NotificationLog[]>;
    get(id: string): Promise<DataResponse<NotificationLog>>;
}

type CheckoutListItem = components['schemas']['CheckoutListItem'];
type ListParams$2 = NonNullable<operations['listCheckouts']['parameters']['query']>;
declare class CheckoutsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams$2): Promise<ListResponse<CheckoutListItem>>;
    iterate(params?: Omit<ListParams$2, 'cursor'>, options?: PaginateOptions): AsyncGenerator<CheckoutListItem, void, undefined>;
    toArray(params?: Omit<ListParams$2, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<CheckoutListItem[]>;
}

type AnalyticsSummary = components['schemas']['AnalyticsSummary'];
type AnalyticsTimeSeries = components['schemas']['AnalyticsTimeSeries'];
type AnalyticsOrdersSeries = components['schemas']['AnalyticsOrdersSeries'];
type AnalyticsTopProduct = components['schemas']['AnalyticsTopProduct'];
type AnalyticsActionItems = components['schemas']['AnalyticsActionItems'];
type SummaryParams = NonNullable<operations['getAnalyticsSummary']['parameters']['query']>;
type RevenueParams = NonNullable<operations['getRevenueTimeSeries']['parameters']['query']>;
type OrdersParams = NonNullable<operations['getOrdersTimeSeries']['parameters']['query']>;
type TopProductsParams = NonNullable<operations['getTopProducts']['parameters']['query']>;
declare class AnalyticsResource {
    private client;
    constructor(client: Hydra);
    summary(params?: SummaryParams): Promise<DataResponse<AnalyticsSummary>>;
    revenue(params?: RevenueParams): Promise<DataResponse<AnalyticsTimeSeries>>;
    orders(params?: OrdersParams): Promise<DataResponse<AnalyticsOrdersSeries>>;
    topProducts(params?: TopProductsParams): Promise<DataResponse<AnalyticsTopProduct[]>>;
    actionItems(): Promise<DataResponse<AnalyticsActionItems>>;
}

type CreditTransaction = NonNullable<operations['issueCustomerCredit']['responses']['201']['content']['application/json']['data']>;
type CreditBalance = NonNullable<operations['getCustomerCredit']['responses']['200']['content']['application/json']['data']>;
type ListParams$1 = NonNullable<operations['listCustomerCreditTransactions']['parameters']['query']>;
type IssueCreditBody = NonNullable<operations['issueCustomerCredit']['requestBody']>['content']['application/json'];
declare class StoreCreditResource {
    private client;
    constructor(client: Hydra);
    getBalance(customerId: string): Promise<DataResponse<CreditBalance>>;
    issue(customerId: string, body: IssueCreditBody, options?: ResourceRequestOptions): Promise<DataResponse<CreditTransaction>>;
    listTransactions(customerId: string, params?: ListParams$1): Promise<ListResponse<CreditTransaction>>;
    iterateTransactions(customerId: string, params?: Omit<ListParams$1, 'cursor'>, options?: PaginateOptions): AsyncGenerator<CreditTransaction, void, undefined>;
    transactionsToArray(customerId: string, params?: Omit<ListParams$1, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<CreditTransaction[]>;
}

type SearchResult = components['schemas']['SearchResult'];
type SearchSuggestions = components['schemas']['SearchSuggestions'];
type SearchParams = NonNullable<operations['search']['parameters']['query']>;
type SuggestParams = NonNullable<operations['searchSuggest']['parameters']['query']>;
declare class SearchResource {
    private client;
    constructor(client: Hydra);
    search(params: SearchParams): Promise<SearchResult>;
    suggest(params: SuggestParams): Promise<SearchSuggestions>;
}

type Location = components['schemas']['Location'];
type TransferResult = components['schemas']['TransferResult'];
type ListParams = NonNullable<operations['listLocations']['parameters']['query']>;
type CreateBody = NonNullable<operations['createLocation']['requestBody']>['content']['application/json'];
type UpdateBody = NonNullable<operations['updateLocation']['requestBody']>['content']['application/json'];
type TransferBody = NonNullable<operations['transferLocationInventory']['requestBody']>['content']['application/json'];
declare class LocationsResource {
    private client;
    constructor(client: Hydra);
    list(params?: ListParams): Promise<ListResponse<Location>>;
    iterate(params?: Omit<ListParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<Location, void, undefined>;
    toArray(params?: Omit<ListParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<Location[]>;
    get(id: string): Promise<DataResponse<Location>>;
    create(body: CreateBody, options?: ResourceRequestOptions): Promise<DataResponse<Location>>;
    update(id: string, body: UpdateBody): Promise<DataResponse<Location>>;
    delete(id: string): Promise<void>;
    setDefault(id: string): Promise<DataResponse<Location>>;
    transfer(id: string, body: TransferBody): Promise<DataResponse<TransferResult>>;
}

interface IntegrationStatus {
    connected: boolean;
    provider: string | null;
    status: 'connected' | 'expired' | 'error' | 'disconnected';
    company_name: string | null;
    last_sync_at: string | null;
    error_message: string | null;
}
interface IntegrationValidateResult {
    valid: boolean;
    company_name: string | null;
    error: string | null;
}
interface SyncResult {
    success: boolean;
    error: string | null;
}
interface SyncLogEntry {
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
declare class IntegrationsResource {
    private client;
    constructor(client: Hydra);
    getAccountingStatus(): Promise<DataResponse<IntegrationStatus>>;
    getAuthorizeUrl(): Promise<DataResponse<{
        authorize_url: string;
    }>>;
    testConnection(): Promise<DataResponse<IntegrationValidateResult>>;
    disconnect(): Promise<void>;
    updateSettings(settings: {
        income_account_id?: string;
        deposit_account_id?: string;
    }): Promise<DataResponse<Record<string, unknown>>>;
    syncOrder(orderId: string): Promise<DataResponse<SyncResult>>;
    retrySyncOrder(orderId: string): Promise<DataResponse<SyncResult>>;
    listSyncLog(params?: ListSyncLogParams): Promise<ListResponse<SyncLogEntry>>;
    iterateSyncLog(params?: Omit<ListSyncLogParams, 'cursor'>, options?: PaginateOptions): AsyncGenerator<SyncLogEntry, void, undefined>;
    toArraySyncLog(params?: Omit<ListSyncLogParams, 'cursor'>, options?: PaginateOptions & {
        limit?: number;
    }): Promise<SyncLogEntry[]>;
}

interface AppInfo {
    /** Integration/plugin name (e.g. "MyShopTheme") */
    name: string;
    /** Integration version (e.g. "2.0.0") */
    version?: string;
    /** Integration URL (e.g. "https://mytheme.com") */
    url?: string;
}
interface HydraConfig {
    /** API key (sk_live_*, sk_test_*, pk_live_*, pk_test_*) */
    apiKey: string;
    /** API base URL. Default: https://api.hydrajs.dev */
    baseUrl?: string;
    /** Request timeout in ms. Default: 80_000 (80 seconds) */
    timeout?: number;
    /** Max automatic retries on network/server errors. Default: 1 */
    maxNetworkRetries?: number;
    /** Integration identification sent in User-Agent */
    appInfo?: AppInfo;
}
interface RequestOptions {
    params?: Record<string, unknown>;
    body?: unknown;
    headers?: Record<string, string>;
    signal?: AbortSignal;
    idempotencyKey?: string;
    /** Override client-level timeout for this request (ms) */
    timeout?: number;
    /** Override client-level maxNetworkRetries for this request */
    maxNetworkRetries?: number;
}
/** Options available on resource-level methods (create, update, etc.) */
type ResourceRequestOptions = Pick<RequestOptions, 'idempotencyKey' | 'timeout' | 'maxNetworkRetries'>;
declare class Hydra {
    readonly apiKey: string;
    readonly baseUrl: string;
    readonly timeout: number;
    readonly maxNetworkRetries: number;
    readonly appInfo?: AppInfo;
    readonly products: ProductsResource;
    readonly variants: VariantsResource;
    readonly collections: CollectionsResource;
    readonly cart: CartResource;
    readonly checkout: CheckoutResource;
    readonly checkouts: CheckoutsResource;
    readonly search: SearchResource;
    readonly orders: OrdersResource;
    readonly fulfillments: FulfillmentsResource;
    readonly refunds: RefundsResource;
    readonly returns: ReturnsResource;
    readonly draftOrders: DraftOrdersResource;
    readonly customers: CustomersResource;
    readonly customerGroups: CustomerGroupsResource;
    readonly addresses: AddressesResource;
    readonly storeCredit: StoreCreditResource;
    readonly inventory: InventoryResource;
    readonly shipping: ShippingResource;
    readonly promotions: PromotionsResource;
    readonly discounts: DiscountsResource;
    readonly images: ImagesResource;
    readonly webhooks: WebhooksResource;
    readonly store: StoreResource;
    readonly tags: TagsResource;
    readonly redirects: RedirectsResource;
    readonly locations: LocationsResource;
    readonly companies: CompaniesResource;
    readonly purchaseOrders: PurchaseOrdersResource;
    readonly fulfillmentOrders: FulfillmentOrdersResource;
    readonly metafields: MetafieldsResource;
    readonly tax: TaxResource;
    readonly exchangeRates: ExchangeRatesResource;
    readonly filterAttributes: FilterAttributesResource;
    readonly navigation: NavigationResource;
    readonly notifications: NotificationsResource;
    readonly analytics: AnalyticsResource;
    readonly integrations: IntegrationsResource;
    constructor(config: HydraConfig);
    request<T>(method: string, path: string, options?: RequestOptions): Promise<T>;
    /** Multipart upload for file-based endpoints (e.g. images) */
    upload<T>(path: string, formData: FormData, options?: Pick<RequestOptions, 'signal' | 'timeout' | 'maxNetworkRetries'>): Promise<T>;
    private executeRequest;
    private executeUpload;
    /**
     * Build an AbortSignal that fires on timeout OR user-supplied signal,
     * whichever comes first.
     */
    private buildSignal;
    /**
     * Parse an error response into a typed HydraError subclass.
     * Non-JSON bodies (CDN 502, proxy HTML) surface the raw text for debuggability.
     */
    private buildError;
    /**
     * Determine whether a failed request should be retried.
     * Client errors (400, 401, 403, 404) are never retried — they won't change.
     */
    private shouldRetry;
    private getUserAgent;
}

/**
 * Typed error classes matching the Hydra API error shape.
 *
 * API errors return: `{ error: { code, message, field?, details? } }`
 * All subclasses extend HydraError, so existing `instanceof HydraError`
 * checks continue to work.
 */
interface HydraErrorBody {
    error: {
        code: string;
        message: string;
        field?: string;
        details?: Record<string, unknown>;
    };
}
declare class HydraError extends Error {
    readonly code: string;
    readonly status: number;
    readonly field?: string;
    readonly details?: Record<string, unknown>;
    readonly retryAfter?: number;
    /** Raw response body when the API returns non-JSON (e.g. CDN 502 HTML page) */
    readonly rawBody?: string;
    constructor(body: HydraErrorBody, status: number, headers: Headers, rawBody?: string);
    get isRetryable(): boolean;
    get isNotFound(): boolean;
    get isValidationError(): boolean;
}
/** Network failures, timeouts, TLS errors — no HTTP response received */
declare class HydraConnectionError extends HydraError {
    constructor(message: string);
}
/** 401 Unauthorized — wrong or missing API key */
declare class HydraAuthenticationError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}
/** 403 Forbidden — valid key but insufficient permissions */
declare class HydraPermissionError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}
/** 404 Not Found — resource does not exist */
declare class HydraNotFoundError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}
/** 429 Too Many Requests — rate limited, check retryAfter */
declare class HydraRateLimitError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}
/** 400 + code: 'validation_error' — invalid request body or params */
declare class HydraValidationError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}
/** 409 Conflict — idempotency key reuse with different params */
declare class HydraIdempotencyError extends HydraError {
    constructor(body: HydraErrorBody, headers: Headers);
}

export { AddressesResource, type AnalyticsActionItems$1 as AnalyticsActionItems, type AnalyticsOrdersSeries$1 as AnalyticsOrdersSeries, AnalyticsResource, type AnalyticsSummary$1 as AnalyticsSummary, type AnalyticsTimeSeries$1 as AnalyticsTimeSeries, type AnalyticsTopProduct$1 as AnalyticsTopProduct, type AppInfo, type Cart$1 as Cart, type CartItem, CartResource, type CheckoutCreate$1 as CheckoutCreate, type CheckoutGet$1 as CheckoutGet, type CheckoutListItem$1 as CheckoutListItem, CheckoutResource, CheckoutsResource, type Collection$1 as Collection, CollectionsResource, CompaniesResource, type Company$1 as Company, type Customer$1 as Customer, type CustomerGroup$1 as CustomerGroup, CustomerGroupsResource, CustomersResource, type DataResponse, type Discount$1 as Discount, DiscountsResource, type DraftOrder$1 as DraftOrder, DraftOrdersResource, type ExchangeRate$1 as ExchangeRate, ExchangeRatesResource, type Fulfillment$1 as Fulfillment, type FulfillmentOrder$2 as FulfillmentOrder, FulfillmentOrdersResource, FulfillmentsResource, type GenerateVariantsResult$1 as GenerateVariantsResult, Hydra, HydraAuthenticationError, type HydraConfig, HydraConnectionError, HydraError, type HydraErrorBody, HydraIdempotencyError, HydraNotFoundError, HydraPermissionError, HydraRateLimitError, HydraValidationError, type Image$2 as Image, ImagesResource, IntegrationsResource, type InventoryLevel$1 as InventoryLevel, InventoryResource, type ListResponse, type Location$1 as Location, LocationsResource, MetafieldsResource, type NotificationLog$1 as NotificationLog, NotificationsResource, type Order$2 as Order, OrdersResource, type PaginateOptions, type Pagination, type Product$1 as Product, type ProductStats$1 as ProductStats, ProductsResource, type Promotion$1 as Promotion, PromotionsResource, type PurchaseOrder$1 as PurchaseOrder, PurchaseOrdersResource, type Redirect$1 as Redirect, RedirectsResource, type Refund$1 as Refund, RefundsResource, type RequestOptions, type ResourceRequestOptions, type Return$1 as Return, ReturnsResource, SearchResource, type ShippingRate$1 as ShippingRate, ShippingResource, type ShippingZone$1 as ShippingZone, type Store$1 as Store, StoreCreditResource, StoreResource, type Tag$1 as Tag, TagsResource, type TaxExemption$1 as TaxExemption, type TaxGroup$1 as TaxGroup, type TaxRate$1 as TaxRate, TaxResource, type Variant$2 as Variant, type VariantPrice$1 as VariantPrice, VariantsResource, type Webhook$1 as Webhook, WebhooksResource, paginate, toArray };
