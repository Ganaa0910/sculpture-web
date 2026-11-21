import { getSculptures } from '$lib/api/strapi';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	try {
		const sculptures = await getSculptures();

		return {
			sculptures
		};
	} catch (error) {
		console.error('Failed to load sculptures:', error);
		return {
			sculptures: []
		};
	}
};
