<script>
	import { page } from '$app/state';
	import { sculptures, getSculptureById } from '#lib/data/sculptures.ts';
	import ImageZoom from '#lib/components/ImageZoom.svelte';
	import Seo from '#lib/components/Seo.svelte';

	const works = sculptures.filter((s) => s.category === 'sculpture');

	let sculpture = $derived(getSculptureById(page.params.id));
	let images = $derived(
		sculpture?.gallery?.length ? sculpture.gallery : sculpture ? [sculpture.image] : []
	);
	let n = $derived(works.findIndex((s) => s.id === sculpture?.id));
	let prevWork = $derived(works[(n - 1 + works.length) % works.length]);
	let nextWork = $derived(works[(n + 1) % works.length]);
	let dims = $derived(sculpture?.dimensions?.replace(/\s*x\s*/gi, ' × '));

	let viewer = $state();
	let views = $state([]); // figure elements, for the "Views" index
	let active = $state(0);

	// Track which photo is in view (drives the index in the pinned text column).
	$effect(() => {
		const els = views.filter(Boolean);
		if (!els.length) return;
		const io = new IntersectionObserver(
			(entries) => {
				for (const e of entries) if (e.isIntersecting) active = els.indexOf(e.target);
			},
			{ rootMargin: '-45% 0px -45% 0px' }
		);
		els.forEach((el) => io.observe(el));
		return () => io.disconnect();
	});

	function showView(i) {
		const el = views[i];
		if (!el) return;
		if (window.lenis) window.lenis.scrollTo(el, { offset: -96 });
		else el.scrollIntoView({ behavior: 'smooth' });
	}

	const pad = (v) => String(v).padStart(2, '0');
</script>

{#if sculpture}
	<Seo
		title="{sculpture.title} — Juraan"
		description={sculpture.description ||
			`${sculpture.title}${sculpture.year ? ` (${sculpture.year})` : ''}. ${sculpture.material || 'Bronze'}${sculpture.dimensions ? `, ${sculpture.dimensions} cm` : ''}. By Mongolian sculptor Juraan.`}
		image={sculpture.image}
		type="article"
		jsonLd={{
			'@context': 'https://schema.org',
			'@type': 'VisualArtwork',
			name: sculpture.title,
			artform: sculpture.category === 'drawing' ? 'Drawing' : 'Sculpture',
			artMedium: sculpture.material,
			dateCreated: sculpture.year ? String(sculpture.year) : undefined,
			image: new URL(encodeURI(sculpture.image), page.url.origin).href,
			creator: { '@type': 'Person', name: 'Juraan', alternateName: 'Lkhagvasuren Nyamkhuu' }
		}}
	/>
{/if}

<svelte:head>
	{#if sculpture}
		<link rel="preload" as="image" href={images[0]} fetchpriority="high" />
	{:else}
		<title>Sculpture Not Found — Juraan</title>
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

{#snippet enquire(cls)}
	<p class="enquire {cls}">Enquiries about this work: <a href="/contact">get in touch</a></p>
{/snippet}

{#if sculpture}
	<main class="work">
		<!-- Text: pinned beside the photos on desktop, first on mobile -->
		<aside class="text">
			<div class="text-inner">
				<nav class="crumbs">
					<a href="/gallery" class="back">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path d="M19 12H5m6-6l-6 6 6 6" /></svg
						>
						Works
					</a>
					{#if n >= 0}<span class="no">{pad(n + 1)} — {pad(works.length)}</span>{/if}
				</nav>

				<h1 class="title">{sculpture.title}</h1>

				<dl class="specs">
					{#if sculpture.year}
						<div>
							<dt>Year</dt>
							<dd>{sculpture.year}</dd>
						</div>
					{/if}
					{#if sculpture.material}
						<div>
							<dt>Medium</dt>
							<dd>{sculpture.material}</dd>
						</div>
					{/if}
					{#if dims}
						<div>
							<dt>Dimensions</dt>
							<dd>{dims} cm</dd>
						</div>
					{/if}
				</dl>

				{#if sculpture.description}
					<p class="desc">{sculpture.description}</p>
				{/if}

				{#if images.length > 1}
					<nav class="views" aria-label="Views">
						<span class="views-label">Views</span>
						{#each images as _, i (i)}
							<button class:active={active === i} onclick={() => showView(i)}>{pad(i + 1)}</button>
						{/each}
					</nav>
				{/if}

				{@render enquire('enquire-desktop')}
			</div>
		</aside>

		<!-- Photos: stacked, each one a full view of the piece -->
		<section class="plates" aria-label="{sculpture.title} photographs">
			{#each images as src, i (src)}
				<figure bind:this={views[i]}>
					<button onclick={() => viewer.open(i)} aria-label="View photograph {i + 1} full screen">
						<img
							{src}
							alt="{sculpture.title} by Juraan, view {i + 1}"
							loading={i === 0 ? 'eager' : 'lazy'}
							fetchpriority={i === 0 ? 'high' : undefined}
							decoding="async"
						/>
					</button>
				</figure>
			{/each}
		</section>

		{@render enquire('enquire-mobile')}

		{#if works.length > 1 && n >= 0}
			<nav class="pager" aria-label="More works">
				<a href="/sculpture/{prevWork.id}" class="pager-link">
					<span class="pager-label">Previous work</span>
					<span class="pager-title">{prevWork.title}</span>
				</a>
				<a href="/sculpture/{nextWork.id}" class="pager-link right">
					<span class="pager-label">Next work</span>
					<span class="pager-title">{nextWork.title}</span>
				</a>
			</nav>
		{/if}

		<ImageZoom bind:this={viewer} {images} alt={sculpture.title} />
	</main>
{:else}
	<main class="pt-24 pb-section">
		<div class="mx-auto max-w-4xl px-6 text-center">
			<h1 class="text-h1 text-primary mb-6 font-serif">Sculpture Not Found</h1>
			<p class="text-body text-secondary mb-8 font-sans">
				The sculpture you're looking for doesn't exist or may have been removed.
			</p>
			<a
				href="/gallery"
				class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				Return to Works
			</a>
		</div>
	</main>
{/if}

<style>
	.work {
		--nav: 6rem;
		padding-top: var(--nav);
		background: var(--color-bg-primary);
	}

	/* ---------- Text ---------- */
	.text {
		padding: 2.5rem 1.25rem 2rem;
	}
	.text-inner {
		max-width: 30rem;
		animation: rise 0.8s 0.1s ease-out both;
	}
	.crumbs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2.5rem;
		font-family: var(--font-family-mono);
		font-size: 0.7rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
	}
	.back {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-text-secondary);
		transition: color 0.3s;
	}
	.back svg {
		width: 1rem;
		height: 1rem;
		transition: translate 0.3s;
	}
	.back:hover {
		color: var(--color-bronze-light);
	}
	.back:hover svg {
		translate: -3px 0;
	}
	.no {
		color: var(--color-text-tertiary);
	}

	.title {
		margin: 0 0 2.25rem;
		font-family: var(--font-family-juraan);
		font-size: clamp(2.75rem, 5.5vw, 4.5rem);
		font-weight: 400;
		line-height: 0.95;
		color: var(--color-text-primary);
		text-wrap: balance;
	}

	.specs {
		margin: 0 0 2.25rem;
	}
	.specs div {
		display: grid;
		grid-template-columns: 7.5rem 1fr;
		gap: 1rem;
		padding: 0.6rem 0;
	}
	.specs dt {
		font-family: var(--font-family-mono);
		font-size: 0.68rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		padding-top: 0.25rem;
	}
	.specs dd {
		margin: 0;
		font-size: 1rem;
		color: var(--color-text-secondary);
	}

	.desc {
		margin: 0 0 2.25rem;
		font-size: 1.05rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
	}

	.views {
		display: none; /* desktop only: on mobile the photos are simply the next thing you scroll to */
		align-items: baseline;
		gap: 0.25rem;
		margin-bottom: 2.25rem;
		font-family: var(--font-family-mono);
		font-size: 0.72rem;
		letter-spacing: 0.15em;
	}
	.views-label {
		margin-right: 0.75rem;
		color: var(--color-text-tertiary);
		text-transform: uppercase;
	}
	.views button {
		padding: 0.3rem 0.35rem;
		border: 0;
		background: none;
		color: var(--color-text-tertiary);
		cursor: pointer;
		transition: color 0.3s;
	}
	.views button:hover {
		color: var(--color-text-primary);
	}
	.views button.active {
		color: var(--color-bronze-light);
	}

	.enquire {
		margin: 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--color-border-subtle);
		font-size: 0.9rem;
		color: var(--color-text-tertiary);
	}
	/* after the photos on mobile, in the pinned column on desktop */
	.enquire-desktop {
		display: none;
	}
	.enquire-mobile {
		margin: 2.5rem 1.25rem 0;
	}
	.enquire a {
		color: var(--color-text-secondary);
		text-decoration: underline;
		text-decoration-color: var(--color-bronze-dark);
		text-underline-offset: 0.25em;
		transition:
			color 0.3s,
			text-decoration-color 0.3s;
	}
	.enquire a:hover {
		color: var(--color-bronze-light);
		text-decoration-color: var(--color-bronze-light);
	}

	/* ---------- Plates ---------- */
	.plates {
		display: grid;
		gap: 0.75rem;
		padding: 0 0.75rem;
		animation: rise 0.8s ease-out both;
	}
	figure {
		margin: 0;
		background: radial-gradient(ellipse 65% 60% at 50% 45%, #1b1915 0%, #0d0c0b 65%, #0a0a0a 100%);
	}
	figure button {
		display: block;
		width: 100%;
		padding: 0;
		border: 0;
		background: none;
		cursor: zoom-in;
	}
	figure img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: auto 2 / 3; /* reserve space before load, real ratio after: no layout jump */
	}

	/* ---------- Pager ---------- */
	.pager {
		display: grid;
		grid-template-columns: 1fr 1fr;
		margin: 4rem 1.25rem 0;
		border-top: 1px solid var(--color-border-subtle);
	}
	.pager-link {
		display: grid;
		gap: 0.5rem;
		padding: 1.75rem 0;
	}
	.pager-link.right {
		text-align: right;
	}
	.pager-label {
		font-family: var(--font-family-mono);
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}
	.pager-title {
		font-family: var(--font-family-juraan);
		font-size: clamp(1.4rem, 3vw, 2.25rem);
		line-height: 1;
		color: var(--color-text-secondary);
		transition: color 0.3s;
	}
	.pager-link:hover .pager-title {
		color: var(--color-bronze-light);
	}

	/* ---------- Desktop: photos scroll on the left, text stays pinned on the right ---------- */
	@media (min-width: 1024px) {
		.work {
			display: grid;
			grid-template-columns: minmax(0, 1.6fr) minmax(22rem, 1fr);
			grid-template-areas:
				'plates text'
				'pager pager';
		}
		.plates {
			grid-area: plates;
			gap: 0;
			padding: 0;
		}
		figure {
			height: calc(100svh - var(--nav));
		}
		figure button {
			height: 100%;
			padding: 2.5rem 3rem;
		}
		figure img {
			height: 100%;
			object-fit: contain;
			filter: drop-shadow(0 30px 40px rgb(0 0 0 / 0.55));
		}
		.text {
			grid-area: text;
			position: sticky;
			top: var(--nav);
			align-self: start;
			height: calc(100svh - var(--nav));
			display: flex;
			align-items: center;
			padding: 3rem clamp(2rem, 4vw, 4.5rem);
		}
		.views {
			display: flex;
		}
		.enquire-desktop {
			display: block;
		}
		.enquire-mobile {
			display: none;
		}
		.pager {
			grid-area: pager;
			margin: 0;
			padding: 0 clamp(2rem, 4vw, 4.5rem);
		}
		.pager-link {
			padding: 3rem 0;
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.plates,
		.text-inner {
			animation: none;
		}
	}
</style>
