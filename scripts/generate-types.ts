/**
 * Generates TypeScript types from the Hydra API's OpenAPI spec.
 *
 * Pipeline:
 *   Hono routes -> generate-openapi.ts -> openapi.json -> openapi-typescript -> src/types/openapi.ts
 *
 * Usage:
 *   bun run scripts/generate-types.ts
 */
import { execSync } from 'node:child_process';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const apiDir = resolve(import.meta.dirname, '../../api');
const outputPath = resolve(import.meta.dirname, '../src/types/openapi.ts');

// Step 1: Generate OpenAPI JSON from Hono routes
const spec = execSync('bun run scripts/generate-openapi.ts', {
	cwd: apiDir,
	encoding: 'utf-8',
	maxBuffer: 50 * 1024 * 1024,
});

// Step 2: Write spec to temp file
const tempSpec = resolve(apiDir, 'openapi.json');
writeFileSync(tempSpec, spec);

// Step 3: Generate TypeScript types from spec
execSync(`npx openapi-typescript ${tempSpec} -o ${outputPath}`, {
	stdio: 'inherit',
});

console.log(`Types generated at ${outputPath}`);
