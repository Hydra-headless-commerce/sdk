import type { ListResponse } from './types';

export interface PaginateOptions {
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
export async function* paginate<T>(
	fetchPage: (cursor?: string) => Promise<ListResponse<T>>,
	options?: PaginateOptions,
): AsyncGenerator<T, void, undefined> {
	let cursor: string | undefined;
	let pages = 0;
	const maxPages = options?.maxPages;

	do {
		const page = await fetchPage(cursor);
		pages++;
		for (const item of page.data) {
			yield item;
		}
		cursor = page.pagination.has_more ? (page.pagination.cursor ?? undefined) : undefined;
	} while (cursor && (maxPages === undefined || pages < maxPages));
}

const DEFAULT_TO_ARRAY_LIMIT = 10_000;

/**
 * Collects all items from an async generator into an array.
 * Safety cap prevents unbounded memory growth — defaults to 10,000 items.
 *
 * Usage:
 *   const products = await hydra.products.toArray({ status: 'active' });
 *   const first100 = await hydra.products.toArray({ status: 'active' }, { limit: 100 });
 */
export async function toArray<T>(
	iterator: AsyncGenerator<T, void, undefined>,
	options?: { limit?: number },
): Promise<T[]> {
	const limit = options?.limit ?? DEFAULT_TO_ARRAY_LIMIT;
	const results: T[] = [];

	for await (const item of iterator) {
		results.push(item);
		if (results.length >= limit) break;
	}

	return results;
}
