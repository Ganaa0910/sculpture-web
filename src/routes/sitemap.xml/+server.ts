import { sculptures } from '#lib/data/sculptures.ts';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
	const paths = [
		'/',
		'/gallery',
		'/about',
		'/contact',
		'/sculpture/god-and-devil',
		...sculptures.filter((s) => s.id !== 'god-and-devil').map((s) => `/sculpture/${s.id}`)
	];
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `<url><loc>${url.origin}${p}</loc></url>`).join('\n')}
</urlset>`;
	return new Response(body, {
		headers: { 'Content-Type': 'application/xml', 'Cache-Control': 'max-age=3600' }
	});
};
