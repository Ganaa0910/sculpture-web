import { getSculptureBySlug } from '$lib/api/strapi';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	try {
		const sculpture = await getSculptureBySlug(params.slug);

		if (!sculpture) {
			throw error(404, 'Sculpture not found');
		}

		return {
			sculpture
		};
	} catch (err) {
		console.error('Failed to load sculpture:', err);
		throw error(404, 'Sculpture not found');
	}
};
