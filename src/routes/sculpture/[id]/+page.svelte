<script>
	import { page } from '$app/stores';
	import { getSculptureById } from '$lib/data/sculptures';
	
	$: sculpture = getSculptureById($page.params.id);
</script>

<svelte:head>
	{#if sculpture}
		<title>{sculpture.title} - Juraan</title>
		<meta name="description" content="{sculpture.description || `${sculpture.title} - Bronze sculpture by Juraan`}" />
		<!-- Preload sculpture image -->
		<link rel="preload" as="image" href={sculpture.image} fetchpriority="high" />
	{:else}
		<title>Sculpture Not Found - Juraan</title>
	{/if}
</svelte:head>

{#if sculpture}
	<main class="relative pt-24 pb-section">
		<!-- Detail Background -->
		<div class="fixed inset-0 z-0">
			<img
				src={sculpture.image}
				alt={sculpture.title}
				class="w-full h-full object-cover object-center"
				loading="eager"
				fetchpriority="high"
			/>
			<div class="absolute inset-0 bg-bg-primary/90"></div>
			<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/40 to-bg-primary/80"></div>
		</div>

		<div class="relative z-10 max-w-6xl mx-auto px-6">
			
			<!-- Back Navigation -->
			<div class="mb-8">
				<a 
					href="/gallery" 
					class="inline-flex items-center space-x-2 text-secondary hover:text-bronze-light transition-colors group"
				>
					<svg class="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
					</svg>
					<span class="font-sans text-small uppercase tracking-wider">Back to Gallery</span>
				</a>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
				
				<!-- Large Image -->
				<div class="order-2 lg:order-1">
					<div class="aspect-[4/5] overflow-hidden bg-bg-secondary border border-border-subtle">
						<img
							src={sculpture.image}
							alt={sculpture.title}
							class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
							loading="eager"
							fetchpriority="high"
						/>
					</div>
				</div>

				<!-- Sculpture Details -->
				<div class="order-1 lg:order-2 space-y-8">
					
					<header>
						<h1 class="font-serif text-hero text-primary mb-4 leading-tight">{sculpture.title}</h1>
						{#if sculpture.year}
							<p class="font-mono text-body text-bronze-light uppercase tracking-wider">
								{sculpture.year}
							</p>
						{/if}
					</header>

					{#if sculpture.description}
						<section class="space-y-4">
							<h2 class="font-serif text-h3 text-primary">Description</h2>
							<p class="font-sans text-body text-secondary leading-relaxed">
								{sculpture.description}
							</p>
						</section>
					{/if}

					<!-- Technical Details -->
					{#if sculpture.material || sculpture.dimensions}
						<section class="space-y-4">
							<h2 class="font-serif text-h3 text-primary">Details</h2>
							<div class="space-y-3">
								{#if sculpture.material}
									<div class="flex items-center space-x-4">
										<span class="font-mono text-tiny text-tertiary uppercase tracking-wider w-20">Material</span>
										<span class="font-sans text-body text-secondary">{sculpture.material}</span>
									</div>
								{/if}
								{#if sculpture.dimensions}
									<div class="flex items-center space-x-4">
										<span class="font-mono text-tiny text-tertiary uppercase tracking-wider w-20">Size</span>
										<span class="font-sans text-body text-secondary">{sculpture.dimensions}</span>
									</div>
								{/if}
							</div>
						</section>
					{/if}

					<!-- Call to Action -->
					<section class="pt-8">
						<div class="space-y-4">
							<a 
								href="/contact" 
								class="inline-block bg-transparent border border-bronze text-bronze-light hover:bg-bronze hover:text-bg-primary transition-all duration-300 px-8 py-3 font-sans text-small uppercase tracking-wider"
							>
								Inquire About This Piece
							</a>
							<p class="font-sans text-small text-tertiary">
								Available for purchase or commission. Contact for pricing and availability.
							</p>
						</div>
					</section>

				</div>
			</div>

		</div>
	</main>
{:else}
	<main class="pt-24 pb-section">
		<div class="max-w-4xl mx-auto px-6 text-center">
			<h1 class="font-serif text-h1 text-primary mb-6">Sculpture Not Found</h1>
			<p class="font-sans text-body text-secondary mb-8">
				The sculpture you're looking for doesn't exist or may have been removed.
			</p>
			<a 
				href="/gallery" 
				class="inline-block bg-transparent border border-bronze text-bronze-light hover:bg-bronze hover:text-bg-primary transition-all duration-300 px-8 py-3 font-sans text-small uppercase tracking-wider"
			>
				Return to Gallery
			</a>
		</div>
	</main>
{/if}