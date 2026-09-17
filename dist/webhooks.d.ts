/**
 * Webhook signature verification utility.
 *
 * Separate entry point (`@gethydra/sdk/webhooks`) — not bundled with the main
 * client since it's only needed server-side in webhook handlers.
 *
 * Uses crypto.subtle.verify() for constant-time comparison across all runtimes
 * (Node 18+, Deno, Bun, Cloudflare Workers, browsers).
 */
/**
 * Verify a webhook signature against a payload and secret.
 *
 * @param payload - The raw request body string
 * @param signature - The hex-encoded HMAC-SHA256 signature from the webhook header
 * @param secret - The webhook signing secret
 * @returns true if the signature is valid
 *
 * @example
 * ```typescript
 * import { verifyWebhookSignature } from '@gethydra/sdk/webhooks';
 *
 * const isValid = await verifyWebhookSignature(
 *   rawBody,
 *   request.headers.get('X-Hydra-Signature'),
 *   webhookSecret,
 * );
 * ```
 */
declare function verifyWebhookSignature(payload: string, signature: string, secret: string): Promise<boolean>;

export { verifyWebhookSignature };
