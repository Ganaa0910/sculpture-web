<script>
	import { featuredSculpture, sculptures, getSculpturesByCategory } from '$lib/data/sculptures';

	// Get a selection of sculptures for the gallery preview (excluding featured)
	const galleryPreview = sculptures
		.filter(s => s.category === 'sculpture' && !s.featured)
		.slice(0, 6);

	// Get a few drawings for preview
	const drawingsPreview = getSculpturesByCategory('drawing').slice(0, 4);
</script>

<svelte:head>
	<title>Juraan - Bronze Sculptor</title>
	<meta
		name="description"
		content="Juraan creates bronze sculptures exploring mythological themes, capturing timeless narratives of power, wisdom, and transcendence."
	/>
	<!-- Preload critical images for faster loading -->
	<link rel="preload" as="image" href={featuredSculpture.image} fetchpriority="high" />
</svelte:head>

<!-- Hero Section -->
<main class="relative flex min-h-screen items-center justify-center">
	<!-- Background Video -->
	<div class="absolute inset-0 z-0 overflow-hidden">
		<video
			autoplay
			muted
			loop
			playsinline
			class="h-full w-full object-cover min-w-full min-h-full"
		>
			<source src="/videos/3.mp4" type="video/mp4" />
			<!-- Fallback image -->
			<img
				src={featuredSculpture.image}
				alt={featuredSculpture.title}
				class="h-full w-full object-cover"
				loading="eager"
				fetchpriority="high"
			/>
		</video>
		<!-- Base darkness overlay -->
		<div class="absolute inset-0 bg-bg-primary/70"></div>
		<!-- Primary vignette -->
		<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/40 to-bg-primary/95"></div>
		<!-- Secondary vignette for depth -->
		<div class="absolute inset-0 bg-gradient-radial-tight from-transparent to-bg-primary/60"></div>
		<!-- Edge shadows -->
		<div class="absolute inset-0 shadow-inner-refined"></div>
		<!-- Enhanced corner gradients -->
		<div class="absolute inset-0 bg-gradient-corners-intense"></div>
		<!-- Edge burn -->
		<div class="absolute inset-0 shadow-edge-burn"></div>
		<!-- Film grain overlay -->
		<div class="absolute inset-0 film-grain opacity-25"></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1 class="text-hero text-bronze-light mb-8 animate-fade-in" style="font-family: var(--font-family-juraan);">Juraan</h1>
		<p class="text-h3 text-secondary mb-12 animate-slide-up font-sans">
			Sculptor · Bronze · Mythology
		</p>
		<div class="flex animate-slide-up flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/gallery"
				class="text-small border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View Works
			</a>
			<button
				on:click={() => document.querySelector('#about-section')?.scrollIntoView({ behavior: 'smooth' })}
				class="text-secondary text-small border border-border-medium bg-transparent px-8 py-3 font-sans tracking-wider uppercase transition-all duration-300 hover:border-bronze hover:text-bronze-light cursor-pointer"
			>
				About the Artist
			</button>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div class="absolute bottom-8 left-1/2 transform -translate-x-1/2">
		<!-- Desktop: Mouse scroll -->
		<div class="hidden sm:flex w-6 h-10 rounded-full border border-bronze-light justify-center items-start pt-2">
			<div class="w-1 h-3 bg-bronze-light rounded-full animate-bounce"></div>
		</div>
		<!-- Mobile: Swipe up gesture -->
		<div class="sm:hidden flex flex-col items-center space-y-2">
			<div class="w-8 h-1 bg-bronze-light rounded-full animate-pulse"></div>
			<div class="w-6 h-1 bg-bronze-light/60 rounded-full"></div>
			<div class="w-4 h-1 bg-bronze-light/30 rounded-full"></div>
			<svg class="w-6 h-6 text-bronze-light animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11l5-5m0 0l5 5m-5-5v12" />
			</svg>
		</div>
	</div>
</main>

<!-- Featured Work Section -->
<section class="py-section">
	<div class="mx-auto max-w-container px-6">
		<div class="mb-16 text-center">
			<h2 class="text-h2 text-primary mb-6 font-serif">Latest Work</h2>
			<p class="text-body text-secondary mx-auto max-w-2xl font-serif">
				Each bronze sculpture emerges from mythological tradition, exploring timeless themes through
				contemporary artistic vision.
			</p>
		</div>

		<div class="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
			<div class="order-2 lg:order-1">
				<h3 class="text-h3 text-primary mb-4 font-serif">{featuredSculpture.title}</h3>
				{#if featuredSculpture.year}
					<p class="text-tiny text-tertiary mb-4 font-mono tracking-wider uppercase">
						{featuredSculpture.year}
					</p>
				{/if}
				<p class="text-body text-secondary mb-6 font-sans leading-relaxed">
					{featuredSculpture.description}
				</p>
				{#if featuredSculpture.material || featuredSculpture.dimensions}
					<div class="mb-8 space-y-2">
						{#if featuredSculpture.material}
							<p class="text-tiny text-muted font-mono tracking-wider uppercase">
								{featuredSculpture.material}
							</p>
						{/if}
						{#if featuredSculpture.dimensions}
							<p class="text-tiny text-muted font-mono tracking-wider uppercase">
								{featuredSculpture.dimensions}
							</p>
						{/if}
					</div>
				{/if}
				<a
					href="/gallery"
					class="border-b border-bronze-light font-sans text-bronze-light transition-colors hover:border-bronze hover:text-bronze"
				>
					View Full Works →
				</a>
			</div>

			<div class="order-1 lg:order-2">
				<div class="aspect-sculpture overflow-hidden border border-border-subtle bg-bg-secondary">
					<img
						src={featuredSculpture.image}
						alt={featuredSculpture.title}
						class="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
						loading="eager"
						fetchpriority="high"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Gallery Preview Section -->
<section class="py-section bg-bg-secondary/30">
	<div class="mx-auto max-w-container px-6">
		<div class="mb-12 flex items-end justify-between">
			<div>
				<h2 class="text-h2 text-primary mb-4 font-serif">Selected Works</h2>
				<p class="text-body text-secondary max-w-xl font-sans">
					Bronze sculptures exploring mythological narratives and the human form.
				</p>
			</div>
			<a
				href="/gallery"
				class="hidden sm:inline-block text-small border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View All
			</a>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
			{#each galleryPreview as sculpture}
				<a href="/sculpture/{sculpture.id}" class="group">
					<div class="aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-subtle group-hover:border-bronze-dark transition-all duration-300">
						<img
							src={sculpture.image}
							alt={sculpture.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
					</div>
					<div class="mt-3">
						<h3 class="font-serif text-small text-primary group-hover:text-bronze-light transition-colors">{sculpture.title}</h3>
						{#if sculpture.year}
							<p class="font-mono text-tiny text-tertiary">{sculpture.year}</p>
						{/if}
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-8 text-center sm:hidden">
			<a
				href="/gallery"
				class="inline-block text-small border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View All Sculptures
			</a>
		</div>
	</div>
</section>

<!-- Drawings Preview Section -->
<section class="py-section">
	<div class="mx-auto max-w-container px-6">
		<div class="mb-12 flex items-end justify-between">
			<div>
				<h2 class="text-h2 text-primary mb-4 font-serif">Drawings</h2>
				<p class="text-body text-secondary max-w-xl font-sans">
					Studies and sketches that inform the sculptural process.
				</p>
			</div>
			<a
				href="/drawings"
				class="hidden sm:inline-block text-small border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View All
			</a>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
			{#each drawingsPreview as drawing}
				<a href="/sculpture/{drawing.id}" class="group">
					<div class="aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-subtle group-hover:border-bronze-dark transition-all duration-300">
						<img
							src={drawing.image}
							alt={drawing.title}
							class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
							loading="lazy"
						/>
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-8 text-center sm:hidden">
			<a
				href="/drawings"
				class="inline-block text-small border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View All Drawings
			</a>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-section bg-bg-secondary/30">
	<div class="mx-auto max-w-container px-6">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<div>
				<h2 class="text-h2 text-primary mb-6 font-serif">The Process</h2>
				<div class="space-y-6">
					<div class="flex gap-4">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border border-bronze flex items-center justify-center">
							<span class="font-mono text-tiny text-bronze-light">01</span>
						</div>
						<div>
							<h3 class="font-serif text-h3 text-primary mb-2">Research & Concept</h3>
							<p class="font-sans text-body text-secondary">Deep exploration of mythological sources and historical references to develop the narrative foundation.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border border-bronze flex items-center justify-center">
							<span class="font-mono text-tiny text-bronze-light">02</span>
						</div>
						<div>
							<h3 class="font-serif text-h3 text-primary mb-2">Drawing & Maquette</h3>
							<p class="font-sans text-body text-secondary">Detailed sketches and small-scale clay models refine the form before committing to bronze.</p>
						</div>
					</div>
					<div class="flex gap-4">
						<div class="flex-shrink-0 w-8 h-8 rounded-full border border-bronze flex items-center justify-center">
							<span class="font-mono text-tiny text-bronze-light">03</span>
						</div>
						<div>
							<h3 class="font-serif text-h3 text-primary mb-2">Bronze Casting</h3>
							<p class="font-sans text-body text-secondary">Traditional lost-wax casting brings each piece to life, followed by meticulous patina work.</p>
						</div>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-4">
				<div class="aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-subtle">
					<img
						src={drawingsPreview[0]?.image || '/sculptures/1.png'}
						alt="Process - sketching"
						class="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
				<div class="aspect-[3/4] overflow-hidden bg-bg-secondary border border-border-subtle mt-8">
					<img
						src={galleryPreview[0]?.image || '/sculptures/2.png'}
						alt="Process - bronze work"
						class="w-full h-full object-cover"
						loading="lazy"
					/>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about-section" class="relative py-section">
	<!-- About Background -->
	<div class="fixed inset-0 -z-10">
		<img
			src="/backgrounds/about.png"
			alt="About background"
			class="w-full h-full object-cover object-center"
			loading="lazy"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/30 to-bg-primary/75"></div>
	</div>

	<div class="relative z-10 mx-auto max-w-container px-6">

		<!-- Section Header -->
		<div class="mb-16 text-center">
			<h2 class="text-h2 text-primary mb-6 font-serif">About the Artist</h2>
		</div>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

			<!-- Artist Portrait -->
			<div>
				<div class="aspect-[4/5] bg-bg-secondary border border-border-subtle overflow-hidden">
					<img
						src="/juraan-portrait.jpg"
						alt="Juraan in his studio"
						class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Biography -->
			<div class="space-y-8">

				<section class="space-y-6">
					<h3 class="font-serif text-h3 text-primary">Juraan</h3>
					<p class="font-sans text-body text-secondary leading-relaxed">
						Working primarily in bronze, Juraan creates sculptures that bridge ancient mythological narratives
						with contemporary artistic expression. His work explores themes of power, transformation, and the
						eternal human condition through figures that seem to emerge from legend itself.
					</p>
				</section>

				<section class="space-y-6">
					<h3 class="font-serif text-h3 text-primary">Artistic Philosophy</h3>
					<p class="font-sans text-body text-secondary leading-relaxed">
						"Bronze is memory made tangible. Each piece carries forward the stories our ancestors knew,
						reimagined for our time. I seek to capture not just form, but the weight of narrative—
						the burden and beauty of myth."
					</p>
				</section>

				<section class="space-y-6">
					<h3 class="font-serif text-h3 text-primary">Process</h3>
					<p class="font-sans text-body text-secondary leading-relaxed">
						Drawing from classical techniques while embracing modern approaches, Juraan's process begins
						with extensive research into mythological sources. Each sculpture undergoes multiple iterations
						before the final bronze casting, ensuring every detail serves the narrative purpose.
					</p>
				</section>

				<!-- Exhibitions -->
				<section class="space-y-6">
					<h3 class="font-serif text-h3 text-primary">Selected Exhibitions</h3>
					<div class="space-y-3">
						<div class="flex justify-between items-start">
							<div>
								<p class="font-sans text-small text-primary">Mythological Forms</p>
								<p class="font-mono text-tiny text-tertiary uppercase tracking-wider">Contemporary Gallery</p>
							</div>
							<p class="font-mono text-tiny text-muted">2024</p>
						</div>
						<div class="flex justify-between items-start">
							<div>
								<p class="font-sans text-small text-primary">Bronze Narratives</p>
								<p class="font-mono text-tiny text-tertiary uppercase tracking-wider">Museum of Modern Sculpture</p>
							</div>
							<p class="font-mono text-tiny text-muted">2023</p>
						</div>
						<div class="flex justify-between items-start">
							<div>
								<p class="font-sans text-small text-primary">Ancient Echoes</p>
								<p class="font-mono text-tiny text-tertiary uppercase tracking-wider">Cultural Arts Center</p>
							</div>
							<p class="font-mono text-tiny text-muted">2022</p>
						</div>
					</div>
				</section>

			</div>
		</div>

	</div>
</section>
