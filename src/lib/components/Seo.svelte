<script>
	import { page } from '$app/state';

	/** @type {{ title: string, description: string, image?: string, type?: string, jsonLd?: object }} */
	let { title, description, image = '/og.jpg', type = 'website', jsonLd } = $props();

	// Origin comes from the request, so any domain pointed at the site works without config.
	const abs = (path) => new URL(encodeURI(path), page.url.origin).href;
	let url = $derived(page.url.origin + page.url.pathname);
	let imageUrl = $derived(abs(image));
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:site_name" content="Juraan" />
	<meta property="og:type" content={type} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={imageUrl} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />

	{#if jsonLd}
		{@html `<script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`}
	{/if}
</svelte:head>
