<script>
	import Seo from '#lib/components/Seo.svelte';
	import WorksGrid from '#lib/components/WorksGrid.svelte';
	import { featuredSculpture, sculptures, getSculptureById } from '#lib/data/sculptures.ts';

	const godAndDevil = getSculptureById('god-and-devil');
	const buddha = getSculptureById('buddha');
	const devil = getSculptureById('devil');

	const allWorks = sculptures.filter((s) => s.category === 'sculpture');
	// God and Devil has its own section, so leave its pieces out of the selection
	const selected = allWorks
		.filter((s) => !['god-and-devil', 'buddha', 'devil'].includes(s.id))
		.slice(0, 9);

	// Two rows; each row's widths come from the photo ratios so both photos share a height.
	const exhibition = [
		[
			{
				src: '/featured/at-expo-sculpture.JPG',
				a: 0.667,
				alt: 'A sculpture on show at the exhibition'
			},
			{ src: '/featured/crowd-2.JPG', a: 1.5, alt: 'Visitors at the exhibition' }
		],
		[
			{
				src: '/featured/musician.JPG',
				a: 1.5,
				alt: 'A traditional musician performing at the opening'
			},
			{
				src: '/featured/god-and-devil.JPG',
				a: 0.667,
				alt: 'God and Devil installed in the exhibition space'
			}
		]
	];
</script>

<Seo
	title="Juraan — Mongolian Bronze Sculptor"
	description="Bronze sculptures by Juraan (Lkhagvasuren Nyamkhuu), a Mongolian sculptor exploring myth, faith and the human figure. Works, exhibitions and commissions."
	jsonLd={{
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Juraan',
		alternateName: 'Lkhagvasuren Nyamkhuu',
		jobTitle: 'Sculptor',
		nationality: 'Mongolian',
		knowsAbout: ['Bronze sculpture', 'Figurative sculpture', 'Drawing']
	}}
/>

<svelte:head>
	<link rel="preload" as="image" href={featuredSculpture.image} fetchpriority="high" />
</svelte:head>

{#snippet head(no, label, title)}
	<p class="eyebrow"><span class="eyebrow-no">{no}</span> {label}</p>
	<h2 class="section-title">{title}</h2>
{/snippet}

{#snippet more(href, text)}
	<a {href} class="more">
		{text}
		<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"
			><path d="M5 12h14m-6-6l6 6-6 6" /></svg
		>
	</a>
{/snippet}

<!-- Hero -->
<header class="relative flex min-h-screen items-center justify-center">
	<div class="absolute inset-0 z-0 overflow-hidden">
		<video autoplay muted loop playsinline class="h-full min-h-full w-full min-w-full object-cover">
			<source src="/videos/3.mp4" type="video/mp4" />
			<img
				src={featuredSculpture.image}
				alt={featuredSculpture.title}
				class="h-full w-full object-cover"
				loading="eager"
				fetchpriority="high"
			/>
		</video>
		<div class="absolute inset-0 bg-bg-primary/70"></div>
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-bg-primary/40 to-bg-primary/95"
		></div>
		<div class="bg-gradient-radial-tight absolute inset-0 from-transparent to-bg-primary/60"></div>
		<div class="shadow-inner-refined absolute inset-0"></div>
		<div class="bg-gradient-corners-intense absolute inset-0"></div>
		<div class="shadow-edge-burn absolute inset-0"></div>
		<div class="film-grain absolute inset-0 opacity-25"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1
			class="text-hero mb-6 animate-fade-in text-bronze-light"
			style="font-family: var(--font-family-juraan);"
		>
			Juraan
		</h1>
		<p class="text-h3 text-secondary mb-10 animate-slide-up font-sans">
			Sculptor · Bronze · Mythology
		</p>
		<nav class="hero-links animate-slide-up" aria-label="Start here">
			<a href="/gallery">View the works</a>
			<span aria-hidden="true">/</span>
			<a href="/about">The artist</a>
		</nav>
	</div>

	<span class="scroll-cue" aria-hidden="true"></span>
</header>

<!-- Statement -->
<section class="statement">
	<p class="statement-text">
		Bronze, cast and patinated by hand. Mongolian myth, Buddhist thought and shamanic tradition,
		given weight and form.
	</p>
	<p class="statement-sign">Lkhagvasuren Nyamkhuu</p>
</section>

<!-- 01 Featured -->
{#if godAndDevil && buddha && devil}
	<section class="section featured">
		<div class="featured-text">
			{@render head('01', 'Featured work', godAndDevil.title)}
			<p class="lede">A meditation on duality</p>
			<p class="body">
				Two pieces in eternal dialogue: Buddha in serene contemplation, Devil in introspective
				meditation. Neither purely good nor evil, both exist as reflections of human consciousness.
			</p>
			{@render more('/sculpture/god-and-devil', 'View the work')}
		</div>
		<div class="pair">
			{#each [devil, buddha] as piece (piece.id)}
				<a href="/sculpture/god-and-devil" class="pair-item">
					<img
						src={piece.image}
						alt="{piece.title}, bronze by Juraan"
						loading="lazy"
						decoding="async"
					/>
					<span class="pair-label">{piece.title}</span>
				</a>
			{/each}
		</div>
	</section>
{/if}

<!-- 02 Selected works -->
<section class="section">
	<div class="section-head split">
		<div>{@render head('02', 'Selected works', 'From the studio')}</div>
		{@render more('/gallery', `All ${allWorks.length} works`)}
	</div>
	<WorksGrid works={selected} label="Selected works" eager={0} />
</section>

<!-- 03 Exhibition -->
<section class="section">
	<div class="section-head split">
		<div>{@render head('03', 'Solo exhibition · 2024', 'The World of Juraan')}</div>
		<p class="body narrow">
			A journey into mythological bronze, where ancient narratives meet contemporary sculptural
			vision.
		</p>
	</div>
	<div class="collage">
		{#each exhibition as row, r (r)}
			<div class="collage-row" style="--cols: {row.map((p) => `${p.a}fr`).join(' ')}">
				{#each row as photo (photo.src)}
					<figure style="--a: {photo.a}">
						<img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
					</figure>
				{/each}
			</div>
		{/each}
	</div>
</section>

<!-- 04 The artist -->
<section class="section artist">
	<figure class="artist-photo">
		<img
			src="/featured/juraan-himself.JPG"
			alt="Juraan at work in the studio"
			loading="lazy"
			decoding="async"
		/>
	</figure>
	<div class="artist-text">
		{@render head('04', 'The artist', 'Juraan')}
		<p class="body">
			Juraan is a Mongolian sculptor whose bronze works explore the intersection of mythology,
			spirituality, and the human condition. Drawing from Buddhist philosophy and shamanic
			traditions, his sculptures capture timeless narratives of power, wisdom, and transcendence.
		</p>
		<p class="body">
			Each piece is cast and patinated by hand, creating unique works that honor the ancient art of
			bronze sculpture while speaking to contemporary concerns about duality, consciousness, and the
			nature of being.
		</p>
		{@render more('/about', 'Read the biography')}
	</div>
</section>

<style>
	/* ---------- Hero ---------- */
	.hero-links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1.25rem;
		font-family: var(--font-family-mono);
		font-size: 0.78rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
	}
	.hero-links span {
		color: var(--color-text-tertiary);
	}
	.hero-links a {
		color: var(--color-text-primary);
		padding-bottom: 0.35rem;
		border-bottom: 1px solid var(--color-bronze-dark);
		transition:
			color 0.3s,
			border-color 0.3s;
	}
	.hero-links a:hover {
		color: var(--color-bronze-light);
		border-color: var(--color-bronze-light);
	}
	.scroll-cue {
		position: absolute;
		bottom: 2rem;
		left: 50%;
		width: 1px;
		height: 3.5rem;
		background: linear-gradient(to bottom, transparent, var(--color-bronze-light));
		transform-origin: top;
		animation: cue 2.4s ease-in-out infinite;
	}
	@keyframes cue {
		0% {
			transform: scaleY(0);
			opacity: 0;
		}
		40% {
			transform: scaleY(1);
			opacity: 1;
		}
		100% {
			transform: scaleY(1) translateY(1.5rem);
			opacity: 0;
		}
	}

	/* ---------- Shared section bits ---------- */
	.section {
		max-width: var(--max-width-container, 80rem);
		margin: 0 auto;
		padding: clamp(5rem, 11vw, 9rem) 1.5rem 0;
	}
	.section-head {
		margin-bottom: clamp(2rem, 4vw, 3.5rem);
	}
	.split {
		display: flex;
		flex-wrap: wrap;
		align-items: flex-end;
		justify-content: space-between;
		gap: 1.5rem 3rem;
	}
	.eyebrow {
		margin: 0 0 1rem;
		font-family: var(--font-family-mono);
		font-size: 0.7rem;
		letter-spacing: 0.22em;
		text-transform: uppercase;
		color: var(--color-text-tertiary);
	}
	.eyebrow-no {
		color: var(--color-bronze);
		margin-right: 0.6rem;
	}
	.section-title {
		margin: 0;
		font-family: var(--font-family-juraan);
		font-size: clamp(2.5rem, 6vw, 4.5rem);
		font-weight: 400;
		line-height: 0.95;
		color: var(--color-text-primary);
	}
	.lede {
		margin: 1.25rem 0 0;
		font-family: var(--font-family-serif);
		font-size: 1.15rem;
		color: var(--color-bronze-light);
	}
	.body {
		margin: 1.25rem 0 0;
		font-size: 1.02rem;
		line-height: 1.75;
		color: var(--color-text-secondary);
	}
	.narrow {
		max-width: 26rem;
		margin: 0;
	}
	.more {
		display: inline-flex;
		align-items: center;
		gap: 0.6rem;
		margin-top: 2rem;
		padding-bottom: 0.35rem;
		border-bottom: 1px solid var(--color-bronze-dark);
		font-family: var(--font-family-mono);
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-text-primary);
		transition:
			color 0.3s,
			border-color 0.3s;
	}
	.split > .more {
		margin-top: 0;
	}
	.more svg {
		width: 1rem;
		height: 1rem;
		transition: translate 0.3s;
	}
	.more:hover {
		color: var(--color-bronze-light);
		border-color: var(--color-bronze-light);
	}
	.more:hover svg {
		translate: 4px 0;
	}

	/* ---------- Statement ---------- */
	.statement {
		max-width: 56rem;
		margin: 0 auto;
		padding: clamp(5rem, 12vw, 10rem) 1.5rem 0;
		text-align: center;
	}
	.statement-text {
		margin: 0;
		font-family: var(--font-family-serif);
		font-size: clamp(1.5rem, 3.2vw, 2.5rem);
		line-height: 1.35;
		color: var(--color-text-primary);
		text-wrap: balance;
	}
	.statement-sign {
		margin: 2rem 0 0;
		font-family: var(--font-family-mono);
		font-size: 0.72rem;
		letter-spacing: 0.25em;
		text-transform: uppercase;
		color: var(--color-bronze);
	}

	/* ---------- 01 Featured ---------- */
	.featured {
		display: grid;
		gap: 2.5rem;
		align-items: center;
	}
	.pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: clamp(0.5rem, 1vw, 0.9rem);
	}
	.pair-item {
		position: relative;
		display: block;
		aspect-ratio: 2 / 3;
		overflow: hidden;
		background: var(--color-bg-secondary);
	}
	.pair-item img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			filter 0.8s ease,
			transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	.pair-label {
		position: absolute;
		left: 1rem;
		bottom: 0.9rem;
		font-family: var(--font-family-mono);
		font-size: 0.68rem;
		letter-spacing: 0.2em;
		text-transform: uppercase;
		color: var(--color-bronze-light);
	}
	@media (hover: hover) {
		.pair-item img {
			filter: grayscale(0.9) brightness(0.85);
		}
		.pair-item:hover img {
			filter: none;
			transform: scale(1.03);
		}
	}

	/* ---------- 03 Exhibition collage ---------- */
	.collage {
		display: grid;
		gap: clamp(0.5rem, 1vw, 0.9rem);
	}
	.collage-row {
		display: grid;
		gap: inherit;
	}
	.collage figure {
		margin: 0;
		overflow: hidden;
		background: var(--color-bg-secondary);
	}
	.collage img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			filter 0.8s ease,
			transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}
	@media (hover: hover) {
		.collage img {
			filter: grayscale(1);
		}
		.collage figure:hover img {
			filter: none;
			transform: scale(1.02);
		}
	}

	/* ---------- 04 Artist ---------- */
	.artist {
		display: grid;
		gap: 2.5rem;
		align-items: center;
		padding-bottom: clamp(5rem, 11vw, 9rem);
	}
	.artist-photo {
		margin: 0;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		background: var(--color-bg-secondary);
	}
	.artist-photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		filter: grayscale(1);
	}
	.artist-text {
		max-width: 34rem;
	}

	/* ---------- Mobile-first collage: photos stack at natural shape ---------- */
	.collage figure {
		aspect-ratio: var(--a);
	}

	@media (min-width: 768px) {
		/* fr units proportional to aspect => both photos in a row get the same height */
		.collage-row {
			grid-template-columns: var(--cols);
		}
	}

	@media (min-width: 1024px) {
		.featured {
			grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
			gap: clamp(3rem, 6vw, 6rem);
		}
		.artist {
			grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
			gap: clamp(3rem, 6vw, 6rem);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.scroll-cue {
			animation: none;
		}
	}
</style>
