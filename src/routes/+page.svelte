<script>
	import { featuredSculpture } from '$lib/data/sculptures';
</script>

<svelte:head>
	<title>Juraan - Bronze Sculptor</title>
	<meta name="description" content="Juraan creates bronze sculptures exploring mythological themes, capturing timeless narratives of power, wisdom, and transcendence." />
</svelte:head>

<!-- Hero Section -->
<main class="relative min-h-screen flex items-center justify-center">
	
	<!-- Background Image -->
	<div class="absolute inset-0 z-0">
		<img 
			src={featuredSculpture.image} 
			alt={featuredSculpture.title}
			class="w-full h-full object-cover"
		/>
		<div class="absolute inset-0 bg-bg-primary/60"></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 text-center px-6 max-w-4xl mx-auto">
		<h1 class="font-serif text-hero text-primary mb-8 animate-fade-in">
			Juraan
		</h1>
		<p class="font-sans text-h3 text-secondary mb-12 animate-slide-up">
			Sculptor · Bronze · Mythology
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
			<a 
				href="/gallery" 
				class="bg-transparent border border-bronze text-bronze-light hover:bg-bronze hover:text-bg-primary transition-all duration-300 px-8 py-3 font-sans text-small uppercase tracking-wider"
			>
				View Gallery
			</a>
			<a 
				href="/about" 
				class="bg-transparent border border-border-medium text-secondary hover:border-bronze hover:text-bronze-light transition-all duration-300 px-8 py-3 font-sans text-small uppercase tracking-wider"
			>
				About the Artist
			</a>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
		<div class="w-6 h-10 border border-bronze-light rounded-full flex justify-center">
			<div class="w-1 h-3 bg-bronze-light rounded-full mt-2 animate-bounce"></div>
		</div>
		<p class="font-mono text-tiny text-muted mt-2 uppercase tracking-wider">Scroll</p>
	</div>

</main>

<!-- Featured Work Section -->
<section class="py-section">
	<div class="max-w-container mx-auto px-6">
		<div class="text-center mb-16">
			<h2 class="font-serif text-h2 text-primary mb-6">Latest Work</h2>
			<p class="font-sans text-body text-secondary max-w-2xl mx-auto">
				Each bronze sculpture emerges from mythological tradition, 
				exploring timeless themes through contemporary artistic vision.
			</p>
		</div>
		
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div class="order-2 lg:order-1">
				<h3 class="font-serif text-h3 text-primary mb-4">{featuredSculpture.title}</h3>
				{#if featuredSculpture.year}
					<p class="font-mono text-tiny text-tertiary uppercase tracking-wider mb-4">
						{featuredSculpture.year}
					</p>
				{/if}
				<p class="font-sans text-body text-secondary leading-relaxed mb-6">
					{featuredSculpture.description}
				</p>
				{#if featuredSculpture.material || featuredSculpture.dimensions}
					<div class="space-y-2 mb-8">
						{#if featuredSculpture.material}
							<p class="font-mono text-tiny text-muted uppercase tracking-wider">
								{featuredSculpture.material}
							</p>
						{/if}
						{#if featuredSculpture.dimensions}
							<p class="font-mono text-tiny text-muted uppercase tracking-wider">
								{featuredSculpture.dimensions}
							</p>
						{/if}
					</div>
				{/if}
				<a 
					href="/gallery" 
					class="font-sans text-bronze-light hover:text-bronze transition-colors border-b border-bronze-light hover:border-bronze"
				>
					View Full Gallery →
				</a>
			</div>
			
			<div class="order-1 lg:order-2">
				<div class="aspect-sculpture overflow-hidden bg-bg-secondary border border-border-subtle">
					<img 
						src={featuredSculpture.image} 
						alt={featuredSculpture.title}
						class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					/>
				</div>
			</div>
		</div>
	</div>
</section>