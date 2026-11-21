import { error } from '@sveltejs/kit';
import { getSculptureById } from '#lib/data/sculptures';

export const load = ({ params }) => {
	if (!getSculptureById(params.id)) error(404, 'Sculpture not found');
};
