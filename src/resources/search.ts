import type { Hydra } from '../client';
import type { components, operations } from '../types/openapi';

type SearchResult = components['schemas']['SearchResult'];
type SearchSuggestions = components['schemas']['SearchSuggestions'];
type SearchParams = NonNullable<operations['search']['parameters']['query']>;
type SuggestParams = NonNullable<operations['searchSuggest']['parameters']['query']>;

export class SearchResource {
	constructor(private client: Hydra) {}

	async search(params: SearchParams): Promise<SearchResult> {
		return this.client.request('GET', '/v1/search', { params });
	}

	async suggest(params: SuggestParams): Promise<SearchSuggestions> {
		return this.client.request('GET', '/v1/search/suggest', { params });
	}
}
