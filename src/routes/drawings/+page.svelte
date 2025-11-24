<script>
	import { getSculpturesByCategory } from '$lib/data/sculptures';
	import { onMount } from 'svelte';

	const drawings = getSculpturesByCategory('drawing');
	let visible = $state(false);

	onMount(() => {
		// Disable Lenis smooth scroll on this page for performance
		if (typeof window !== 'undefined' && window.lenis) {
			window.lenis.destroy();
		}
		visible = true;
	});
</script>

<svelte:head>
	<title>Drawings - Juraan</title>
	<meta name="description" content="Explore Juraan's collection of drawings and sketches" />
	<link rel="preload" as="image" href="/backgrounds/gallery.png" fetchpriority="high" />
</svelte:head>

<main class="relative pt-24 pb-section bg-bg-primary">
	<!-- Gallery Background -->
	<div class="absolute inset-0 z-0">
		<img
			src="/backgrounds/gallery.png"
			alt="Gallery background"
			class="w-full h-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/20 to-bg-primary/70"></div>
	</div>

	<div class="relative z-10 max-w-container mx-auto px-4 sm:px-6 overflow-hidden">

		<!-- Page Header -->
		<header class="mb-8 sm:mb-16 text-center">
			<h1 class="text-h1 text-bronze-light mb-4 sm:mb-6" style="font-family: var(--font-family-juraan);">Drawings</h1>
			<p class="font-sans text-small sm:text-body text-secondary max-w-2xl mx-auto px-2">
				Studies and sketches that inform the sculptural work—explorations of form,
				anatomy, and mythological composition.
			</p>
		</header>

		<!-- Simple Grid Layout -->
		<section class="drawings-grid animate-fade-in">
			{#each drawings as drawing}
				<a
					href="/sculpture/{drawing.id}"
					class="drawing-card group"
				>
					<div class="aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-subtle group-hover:border-bronze-dark transition-all duration-300">
						<img
							src={drawing.image}
							alt={drawing.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 will-change-transform"
							loading="lazy"
							decoding="async"
							fetchpriority="low"
						/>
					</div>
				</a>
			{/each}
		</section>

		{#if drawings.length === 0}
			<div class="text-center py-16">
				<p class="font-sans text-body text-secondary">No drawings to display at the moment.</p>
				<p class="font-sans text-small text-tertiary mt-2">Check back soon for new works.</p>
			</div>
		{/if}

	</div>
</main>

<style>
	.drawings-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: 2rem;
		contain: layout style;
		width: 100%;
	}

	.drawing-card {
		contain: layout style paint;
		content-visibility: auto;
		contain-intrinsic-size: auto 300px;
		min-width: 0;
	}

	@media (max-width: 1024px) {
		.drawings-grid {
			grid-template-columns: repeat(3, 1fr);
			gap: 1.5rem;
		}
	}

	@media (max-width: 768px) {
		.drawings-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 1rem;
		}
	}

	@media (max-width: 480px) {
		.drawings-grid {
			grid-template-columns: repeat(2, 1fr);
			gap: 0.75rem;
		}

		.drawing-card {
			contain-intrinsic-size: auto 200px;
		}
	}
</style>
