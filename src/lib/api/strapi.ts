import type {
	StrapiResponse,
	StrapiEntity,
	Sculpture,
	Exhibition,
	About,
	Blog
} from '$lib/types/strapi';

// Strapi API configuration
const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_TOKEN || '';

/**
 * Fetches data from Strapi API with proper error handling
 */
async function fetchStrapi<T>(
	path: string,
	params: Record<string, string> = {}
): Promise<StrapiResponse<T>> {
	const url = new URL(`/api${path}`, STRAPI_URL);

	// Add query params
	Object.entries(params).forEach(([key, value]) => {
		url.searchParams.append(key, value);
	});

	try {
		const response = await fetch(url.toString(), {
			headers: {
				'Content-Type': 'application/json',
				...(STRAPI_TOKEN && { Authorization: `Bearer ${STRAPI_TOKEN}` })
			}
		});

		if (!response.ok) {
			throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
		}

		return await response.json();
	} catch (error) {
		console.error('Strapi fetch error:', error);
		throw error;
	}
}

// Sculptures API
export async function getSculptures(featured?: boolean): Promise<StrapiEntity<Sculpture>[]> {
	const params: Record<string, string> = {
		'populate': '*',
		'sort': 'order:asc'
	};

	if (featured !== undefined) {
		params['filters[featured][$eq]'] = String(featured);
	}

	const response = await fetchStrapi<StrapiEntity<Sculpture>[]>('/sculptures', params);
	return response.data;
}

export async function getSculptureBySlug(slug: string): Promise<StrapiEntity<Sculpture> | null> {
	const params = {
		'filters[slug][$eq]': slug,
		'populate': '*'
	};

	const response = await fetchStrapi<StrapiEntity<Sculpture>[]>('/sculptures', params);
	return response.data[0] || null;
}

// Exhibitions API
export async function getExhibitions(): Promise<StrapiEntity<Exhibition>[]> {
	const params = {
		'populate': '*',
		'sort': 'startDate:desc'
	};

	const response = await fetchStrapi<StrapiEntity<Exhibition>[]>('/exhibitions', params);
	return response.data;
}

export async function getExhibitionBySlug(slug: string): Promise<StrapiEntity<Exhibition> | null> {
	const params = {
		'filters[slug][$eq]': slug,
		'populate': '*'
	};

	const response = await fetchStrapi<StrapiEntity<Exhibition>[]>('/exhibitions', params);
	return response.data[0] || null;
}

// About API (single type)
export async function getAbout(): Promise<StrapiEntity<About> | null> {
	const params = {
		'populate': '*'
	};

	const response = await fetchStrapi<StrapiEntity<About>>('/about', params);
	return response.data;
}

// Blog API
export async function getBlogs(limit?: number): Promise<StrapiEntity<Blog>[]> {
	const params: Record<string, string> = {
		'populate': '*',
		'sort': 'publishedAt:desc'
	};

	if (limit) {
		params['pagination[limit]'] = String(limit);
	}

	const response = await fetchStrapi<StrapiEntity<Blog>[]>('/blogs', params);
	return response.data;
}

export async function getBlogBySlug(slug: string): Promise<StrapiEntity<Blog> | null> {
	const params = {
		'filters[slug][$eq]': slug,
		'populate': '*'
	};

	const response = await fetchStrapi<StrapiEntity<Blog>[]>('/blogs', params);
	return response.data[0] || null;
}

// Utility to get full media URL
export function getMediaUrl(url: string): string {
	if (url.startsWith('http')) {
		return url;
	}
	return `${STRAPI_URL}${url}`;
}

// Utility to get responsive image srcset
export function getImageSrcSet(media: StrapiEntity<any>): string {
	const formats = media.attributes.formats;
	const baseUrl = STRAPI_URL;

	const sources: string[] = [];

	if (formats.small) {
		sources.push(`${baseUrl}${formats.small.url} ${formats.small.width}w`);
	}
	if (formats.medium) {
		sources.push(`${baseUrl}${formats.medium.url} ${formats.medium.width}w`);
	}
	if (formats.large) {
		sources.push(`${baseUrl}${formats.large.url} ${formats.large.width}w`);
	}

	// Original as fallback
	sources.push(`${baseUrl}${media.attributes.url} ${media.attributes.width}w`);

	return sources.join(', ');
}
