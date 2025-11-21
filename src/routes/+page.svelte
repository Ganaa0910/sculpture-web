<script>
	import { featuredSculpture } from '$lib/data/sculptures';
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
		<h1 class="text-hero text-primary mb-8 animate-fade-in font-serif">Juraan</h1>
		<p class="text-h3 text-secondary mb-12 animate-slide-up font-sans">
			Sculptor · Bronze · Mythology
		</p>
		<div class="flex animate-slide-up flex-col justify-center gap-4 sm:flex-row">
			<a
				href="/gallery"
				class="text-small border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				View Gallery
			</a>
			<a
				href="/about"
				class="text-secondary text-small border border-border-medium bg-transparent px-8 py-3 font-sans tracking-wider uppercase transition-all duration-300 hover:border-bronze hover:text-bronze-light"
			>
				About the Artist
			</a>
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
					View Full Gallery →
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
