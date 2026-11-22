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

	let active = $state(0);
	let track = $state();
	let viewer = $state();

	// new sculpture (prev/next links reuse this component) -> back to the first photo
	$effect(() => {
		sculpture?.id;
		active = 0;
		if (track) track.scrollLeft = 0;
	});

	function go(i, smooth = true) {
		const count = images.length;
		const target = (i + count) % count;
		const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
		track.scrollTo({
			left: target * track.clientWidth,
			behavior: smooth && !reduce ? 'smooth' : 'auto'
		});
	}

	function onTrackScroll() {
		active = Math.round(track.scrollLeft / track.clientWidth);
	}

	function onKeydown(e) {
		if (images.length < 2 || document.querySelector('dialog[open]')) return;
		if (e.target.closest?.('input, textarea, select')) return;
		if (e.key === 'ArrowRight') go(active + 1);
		else if (e.key === 'ArrowLeft') go(active - 1);
	}

	const pad = (v) => String(v).padStart(2, '0');
</script>

<svelte:window onkeydown={onKeydown} />

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

{#if sculpture}
	<main class="detail">
		<!-- Stage: swipeable photos, click to open the viewer -->
		<section class="stage" aria-roledescription="carousel" aria-label="{sculpture.title} photos">
			<div class="track" bind:this={track} onscroll={onTrackScroll} data-lenis-prevent>
				{#each images as src, i (src)}
					<button
						class="slide"
						onclick={() => viewer.open(i)}
						aria-label="Enlarge photo {i + 1} of {images.length}"
					>
						<img
							{src}
							alt="{sculpture.title} by Juraan, view {i + 1}"
							loading={i === 0 ? 'eager' : 'lazy'}
							fetchpriority={i === 0 ? 'high' : undefined}
							decoding="async"
						/>
					</button>
				{/each}
			</div>

			{#if images.length > 1}
				<button class="arrow prev" onclick={() => go(active - 1)} aria-label="Previous photo">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><path d="M15 5l-7 7 7 7" /></svg
					>
				</button>
				<button class="arrow next" onclick={() => go(active + 1)} aria-label="Next photo">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><path d="M9 5l7 7-7 7" /></svg
					>
				</button>
			{/if}

			<div class="stage-foot">
				{#if images.length > 1}
					<span class="count" aria-live="polite">
						{pad(active + 1)} <span class="dim">/ {pad(images.length)}</span>
					</span>
					<span class="progress" aria-hidden="true">
						<span style="width: {((active + 1) / images.length) * 100}%"></span>
					</span>
				{/if}
				<button class="enlarge" onclick={() => viewer.open(active)}>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></svg
					>
					Enlarge
				</button>
			</div>
		</section>

		<!-- Placard -->
		<aside class="info">
			<div class="info-inner">
				<nav class="crumbs">
					<a href="/gallery" class="back">
						<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
							><path d="M19 12H5m6-6l-6 6 6 6" /></svg
						>
						All works
					</a>
					{#if n >= 0}<span class="no">No. {pad(n + 1)} / {pad(works.length)}</span>{/if}
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
					<div class="thumbs" role="tablist" aria-label="Choose photo">
						{#each images as src, i (src)}
							<button
								role="tab"
								aria-selected={active === i}
								aria-label="Photo {i + 1}"
								class:active={active === i}
								onclick={() => go(i)}
							>
								<img {src} alt="" loading="lazy" decoding="async" />
							</button>
						{/each}
					</div>
				{/if}

				<a href="/contact" class="inquire">
					<span>Inquire about this work</span>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
						><path d="M5 12h14m-6-6l6 6-6 6" /></svg
					>
				</a>

				{#if works.length > 1 && n >= 0}
					<nav class="pager" aria-label="More works">
						<a href="/sculpture/{prevWork.id}" class="pager-link">
							<span class="pager-label">← Previous</span>
							<span class="pager-title">{prevWork.title}</span>
						</a>
						<a href="/sculpture/{nextWork.id}" class="pager-link right">
							<span class="pager-label">Next →</span>
							<span class="pager-title">{nextWork.title}</span>
						</a>
					</nav>
				{/if}
			</div>
		</aside>

		<ImageZoom bind:this={viewer} {images} alt={sculpture.title} onclose={(i) => go(i, false)} />
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
	.detail {
		--nav: 6rem;
		padding-top: var(--nav);
		background: var(--color-bg-primary);
	}

	/* ---------- Stage ---------- */
	.stage {
		position: relative;
		height: 72svh;
		background: radial-gradient(ellipse 60% 55% at 50% 45%, #1d1a16 0%, #0d0c0b 60%, #0a0a0a 100%);
		animation: rise 0.7s ease-out both;
	}
	.track {
		display: flex;
		height: 100%;
		overflow-x: auto;
		scroll-snap-type: x mandatory;
		overscroll-behavior-x: contain;
		scrollbar-width: none;
	}
	.track::-webkit-scrollbar {
		display: none;
	}
	.slide {
		flex: 0 0 100%;
		height: 100%;
		display: block; /* block, not grid: the img's height:100% must resolve against this box */
		padding: 1.25rem 1.25rem 3.5rem;
		scroll-snap-align: center;
		background: none;
		border: 0;
		cursor: zoom-in;
	}
	.slide img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: drop-shadow(0 30px 40px rgb(0 0 0 / 0.6));
	}

	.arrow {
		position: absolute;
		top: 50%;
		translate: 0 -50%;
		display: none;
		place-items: center;
		width: 3rem;
		height: 3rem;
		border: 1px solid rgb(255 255 255 / 0.12);
		border-radius: 999px;
		background: rgb(10 10 10 / 0.55);
		backdrop-filter: blur(8px);
		color: var(--color-text-primary);
		cursor: pointer;
		transition:
			border-color 0.3s,
			color 0.3s,
			opacity 0.3s;
	}
	.arrow svg,
	.enlarge svg,
	.back svg,
	.inquire svg {
		width: 1.1rem;
		height: 1.1rem;
		flex: none;
	}
	.arrow:hover,
	.arrow:focus-visible {
		border-color: var(--color-bronze);
		color: var(--color-bronze-light);
		outline: none;
	}
	.prev {
		left: 1.5rem;
	}
	.next {
		right: 1.5rem;
	}

	.stage-foot {
		position: absolute;
		inset: auto 0 0 0;
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 0.9rem 1.25rem;
		pointer-events: none;
	}
	.stage-foot > * {
		pointer-events: auto;
	}
	.count {
		font-family: var(--font-family-mono);
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		color: var(--color-bronze-light);
	}
	.dim {
		color: var(--color-text-tertiary);
	}
	.progress {
		flex: 1;
		max-width: 10rem;
		height: 1px;
		background: rgb(255 255 255 / 0.12);
	}
	.progress span {
		display: block;
		height: 100%;
		background: var(--color-bronze);
		transition: width 0.4s ease;
	}
	.enlarge {
		margin-left: auto;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.55rem 0.9rem;
		border: 1px solid rgb(255 255 255 / 0.12);
		border-radius: 999px;
		background: rgb(10 10 10 / 0.55);
		backdrop-filter: blur(8px);
		font-family: var(--font-family-mono);
		font-size: 0.7rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		cursor: pointer;
		transition:
			border-color 0.3s,
			color 0.3s;
	}
	.enlarge:hover,
	.enlarge:focus-visible {
		border-color: var(--color-bronze);
		color: var(--color-bronze-light);
		outline: none;
	}

	/* ---------- Placard ---------- */
	.info {
		padding: 2.5rem 1.25rem 4rem;
	}
	.info-inner {
		max-width: 34rem;
		animation: rise 0.7s 0.1s ease-out both;
	}
	.crumbs {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 2rem;
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
	.back:hover {
		color: var(--color-bronze-light);
	}
	.back:hover svg {
		translate: -3px 0;
	}
	.back svg {
		transition: translate 0.3s;
	}
	.no {
		color: var(--color-bronze);
	}

	.title {
		margin: 0 0 2rem;
		font-family: var(--font-family-juraan);
		font-size: clamp(2.75rem, 6vw, 4.75rem);
		font-weight: 400;
		line-height: 0.95;
		color: var(--color-text-primary);
		text-wrap: balance;
	}

	.specs {
		margin: 0 0 2rem;
		border-top: 1px solid var(--color-border-subtle);
	}
	.specs div {
		display: grid;
		grid-template-columns: 8.5rem 1fr;
		gap: 1rem;
		padding: 0.85rem 0;
		border-bottom: 1px solid var(--color-border-subtle);
	}
	.specs dt {
		font-family: var(--font-family-mono);
		font-size: 0.7rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
		padding-top: 0.2rem;
	}
	.specs dd {
		margin: 0;
		font-size: 1.05rem;
		color: var(--color-text-primary);
	}

	.desc {
		margin: 0 0 2rem;
		font-size: 1.05rem;
		line-height: 1.7;
		color: var(--color-text-secondary);
	}

	.thumbs {
		display: flex;
		gap: 0.5rem;
		margin-bottom: 2rem;
		overflow-x: auto;
		scrollbar-width: none;
		padding: 3px;
	}
	.thumbs button {
		flex: none;
		width: 4.25rem;
		aspect-ratio: 3 / 4;
		padding: 0;
		border: 0;
		background: var(--color-bg-secondary);
		outline: 1px solid var(--color-border-subtle);
		outline-offset: 2px;
		opacity: 0.5;
		cursor: pointer;
		transition:
			opacity 0.3s,
			outline-color 0.3s;
	}
	.thumbs button:hover,
	.thumbs button:focus-visible {
		opacity: 0.85;
	}
	.thumbs button.active {
		opacity: 1;
		outline-color: var(--color-bronze);
	}
	.thumbs img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.inquire {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1.1rem 1.4rem;
		border: 1px solid var(--color-bronze);
		color: var(--color-bronze-light);
		font-family: var(--font-family-mono);
		font-size: 0.78rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		transition:
			background 0.35s,
			color 0.35s;
	}
	.inquire:hover,
	.inquire:focus-visible {
		background: var(--color-bronze);
		color: var(--color-bg-primary);
		outline: none;
	}
	.inquire:hover svg {
		translate: 4px 0;
	}
	.inquire svg {
		transition: translate 0.3s;
	}

	.pager {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1px;
		margin-top: 3rem;
		background: var(--color-border-subtle);
		border-block: 1px solid var(--color-border-subtle);
	}
	.pager-link {
		display: grid;
		gap: 0.35rem;
		padding: 1.1rem 0.25rem;
		background: var(--color-bg-primary);
		transition: background 0.3s;
	}
	.pager-link.right {
		text-align: right;
	}
	.pager-link:hover {
		background: var(--color-bg-secondary);
	}
	.pager-label {
		font-family: var(--font-family-mono);
		font-size: 0.65rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}
	.pager-title {
		font-family: var(--font-family-serif);
		font-size: 1rem;
		color: var(--color-text-primary);
		transition: color 0.3s;
	}
	.pager-link:hover .pager-title {
		color: var(--color-bronze-light);
	}

	/* ---------- Desktop: sticky stage left, placard right ---------- */
	@media (min-width: 1024px) {
		.detail {
			display: grid;
			grid-template-columns: minmax(0, 1.55fr) minmax(24rem, 1fr);
			align-items: start;
		}
		.stage {
			position: sticky;
			top: var(--nav);
			height: calc(100svh - var(--nav));
		}
		.slide {
			padding: 2.5rem 5.5rem 4.5rem;
		}
		.arrow {
			display: grid;
			opacity: 0;
		}
		.stage:hover .arrow,
		.arrow:focus-visible {
			opacity: 1;
		}
		.stage-foot {
			padding: 1.25rem 2rem;
		}
		.info {
			min-height: calc(100svh - var(--nav));
			display: flex;
			align-items: center;
			padding: 3rem clamp(2rem, 4vw, 4.5rem);
			border-left: 1px solid var(--color-border-subtle);
		}
	}

	@keyframes rise {
		from {
			opacity: 0;
			transform: translateY(14px);
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.stage,
		.info-inner {
			animation: none;
		}
	}
</style>
