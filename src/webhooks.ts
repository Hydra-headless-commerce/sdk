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
export async function verifyWebhookSignature(
	payload: string,
	signature: string,
	secret: string,
): Promise<boolean> {
	// Reject obviously invalid signatures before doing crypto work
	if (!signature || signature.length % 2 !== 0) return false;

	const encoder = new TextEncoder();

	const key = await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['verify'],
	);

	// Convert hex signature to bytes for crypto.subtle.verify()
	// Using verify() instead of sign() + string compare — constant-time by spec
	const sigBytes = new Uint8Array(signature.length / 2);
	for (let i = 0; i < sigBytes.length; i++) {
		sigBytes[i] = parseInt(signature.slice(i * 2, i * 2 + 2), 16);
	}

	return crypto.subtle.verify('HMAC', key, sigBytes, encoder.encode(payload));
}
