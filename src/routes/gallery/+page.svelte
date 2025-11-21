<script>
	import { sculptures } from '$lib/data/sculptures';
	import SculptureCard from '$lib/components/SculptureCard.svelte';
</script>

<svelte:head>
	<title>Works - Juraan</title>
	<meta name="description" content="Explore Juraan's collection of bronze sculptures and mythological artworks" />
	<!-- Preload critical background image -->
	<link rel="preload" as="image" href="/backgrounds/gallery.png" fetchpriority="high" />
</svelte:head>

<main class="relative pt-24 pb-section">
	<!-- Gallery Background -->
	<div class="fixed inset-0 z-0">
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

	<div class="relative z-10 max-w-container mx-auto px-6">
		
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="text-h1 text-bronze-light mb-6" style="font-family: var(--font-family-juraan);">Works</h1>
			<p class="font-sans text-body text-secondary max-w-2xl mx-auto">
				A collection of bronze sculptures exploring mythological themes, 
				each piece crafted to embody timeless narratives of power, wisdom, and transcendence.
			</p>
		</header>

		<!-- Bento Gallery Layout -->
		<section class="bento-grid animate-fade-in">
			{#each sculptures as sculpture, index}
				{@const patterns = [1, 2, 3, 4, 5, 6, 2, 3, 4, 6, 1, 2]}
				<div class="bento-item bento-size-{patterns[index % patterns.length]}">
					<SculptureCard 
						{sculpture}
						onClick={() => {
							window.location.href = `/sculpture/${sculpture.id}`;
						}}
					/>
				</div>
			{/each}
		</section>

		{#if sculptures.length === 0}
			<div class="text-center py-16">
				<p class="font-sans text-body text-secondary">No sculptures to display at the moment.</p>
			</div>
		{/if}

	</div>
</main>