// Strapi base types
export interface StrapiMedia {
	id: number;
	name: string;
	alternativeText: string | null;
	caption: string | null;
	width: number;
	height: number;
	formats: {
		thumbnail?: StrapiImageFormat;
		small?: StrapiImageFormat;
		medium?: StrapiImageFormat;
		large?: StrapiImageFormat;
	};
	url: string;
	previewUrl: string | null;
	provider: string;
	createdAt: string;
	updatedAt: string;
}

export interface StrapiImageFormat {
	name: string;
	hash: string;
	ext: string;
	mime: string;
	width: number;
	height: number;
	size: number;
	url: string;
}

export interface StrapiResponse<T> {
	data: T;
	meta: {
		pagination?: {
			page: number;
			pageSize: number;
			pageCount: number;
			total: number;
		};
	};
}

export interface StrapiEntity<T> {
	id: number;
	documentId: string;
	attributes: T;
}

// Content type interfaces
export interface Sculpture {
	title: string;
	slug: string;
	description: string;
	dateCreated: string;
	dimensions: string;
	materials: string;
	images: {
		data: StrapiEntity<StrapiMedia>[];
	};
	featured: boolean;
	order: number;
	exhibition?: {
		data: StrapiEntity<Exhibition> | null;
	};
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Exhibition {
	title: string;
	slug: string;
	description: string;
	location: string;
	startDate: string;
	endDate: string | null;
	coverImage: {
		data: StrapiEntity<StrapiMedia> | null;
	};
	sculptures?: {
		data: StrapiEntity<Sculpture>[];
	};
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface About {
	content: string;
	artistStatement: string;
	bio: string;
	profileImage: {
		data: StrapiEntity<StrapiMedia> | null;
	};
	email: string;
	phone: string;
	socialLinks: {
		instagram?: string;
		facebook?: string;
		twitter?: string;
		website?: string;
	} | null;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export interface Blog {
	title: string;
	slug: string;
	content: string;
	excerpt: string;
	coverImage: {
		data: StrapiEntity<StrapiMedia> | null;
	};
	publishedAt: string;
	author: string;
	tags: string[] | null;
	createdAt: string;
	updatedAt: string;
}
