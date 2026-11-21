<script>
	import Seo from '#lib/components/Seo.svelte';
	import { getSculpturesByCategory } from '#lib/data/sculptures.ts';
	import SculptureCard from '#lib/components/SculptureCard.svelte';
	import { staggerReveal } from '#lib/actions/scrollReveal.js';
	import { goto } from '$app/navigation';

	const sculptures = getSculpturesByCategory('sculpture');
</script>

<Seo
	title="Works — Juraan"
	description="The complete collection of bronze sculptures by Mongolian sculptor Juraan (Lkhagvasuren Nyamkhuu)."
/>

<svelte:head>
	<!-- Preload critical background image -->
	<link rel="preload" as="image" href="/backgrounds/gallery.png" fetchpriority="high" />
</svelte:head>

<main class="relative bg-bg-primary pt-24 pb-section">
	<!-- Gallery Background -->
	<div class="absolute inset-0 z-0">
		<img
			src="/backgrounds/gallery.png"
			alt="Gallery background"
			class="h-full w-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-bg-primary/20 to-bg-primary/70"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-container px-6">
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="text-h1 mb-6 text-bronze-light" style="font-family: var(--font-family-juraan);">
				Works
			</h1>
			<p class="text-body text-secondary mx-auto max-w-2xl font-sans">
				A collection of bronze sculptures exploring mythological themes, each piece crafted to
				embody timeless narratives of power, wisdom, and transcendence.
			</p>
		</header>

		<!-- Bento Gallery Layout -->
		<section class="bento-grid">
			{#each sculptures as sculpture, index}
				{@const patterns = [1, 2, 3, 4, 5, 6, 2, 3, 4, 6, 1, 2]}
				<div
					class="bento-item bento-size-{patterns[index % patterns.length]}"
					use:staggerReveal={{ index, stagger: 20, distance: 10, duration: 300 }}
				>
					<SculptureCard {sculpture} onClick={() => goto(`/sculpture/${sculpture.id}`)} />
				</div>
			{/each}
		</section>

		{#if sculptures.length === 0}
			<div class="py-16 text-center">
				<p class="text-body text-secondary font-sans">No sculptures to display at the moment.</p>
			</div>
		{/if}
	</div>
</main>
