import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const { url } = event;
	if (url.hostname.startsWith('www.')) {
		return new Response(null, {
			status: 301,
			headers: { location: `${url.protocol}//${url.hostname.slice(4)}${url.pathname}${url.search}` }
		});
	}
	return resolve(event);
};
