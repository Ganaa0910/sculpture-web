<script>
	import { sculptures } from '$lib/data/sculptures';
	import SculptureCard from '$lib/components/SculptureCard.svelte';
</script>

<svelte:head>
	<title>Gallery - Juraan</title>
	<meta name="description" content="Explore Juraan's collection of bronze sculptures and mythological artworks" />
</svelte:head>

<main class="pt-24 pb-section">
	<div class="max-w-container mx-auto px-6">
		
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="font-serif text-h1 text-primary mb-6">Gallery</h1>
			<p class="font-sans text-body text-secondary max-w-2xl mx-auto">
				A collection of bronze sculptures exploring mythological themes, 
				each piece crafted to embody timeless narratives of power, wisdom, and transcendence.
			</p>
		</header>

		<!-- Sculpture Grid -->
		<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
			{#each sculptures as sculpture}
				<SculptureCard 
					{sculpture}
					onClick={() => {
						// TODO: Open lightbox modal
						console.log('Open sculpture:', sculpture.title);
					}}
				/>
			{/each}
		</section>

		{#if sculptures.length === 0}
			<div class="text-center py-16">
				<p class="font-sans text-body text-secondary">No sculptures to display at the moment.</p>
			</div>
		{/if}

	</div>
</main>