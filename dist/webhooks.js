// src/webhooks.ts
async function verifyWebhookSignature(payload, signature, secret) {
  if (!signature || signature.length % 2 !== 0) return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["verify"]
  );
  const sigBytes = new Uint8Array(signature.length / 2);
  for (let i = 0; i < sigBytes.length; i++) {
    sigBytes[i] = parseInt(signature.slice(i * 2, i * 2 + 2), 16);
  }
  return crypto.subtle.verify("HMAC", key, sigBytes, encoder.encode(payload));
}
export {
  verifyWebhookSignature
};
