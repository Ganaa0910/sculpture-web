<script>
	import { featuredSculpture, sculptures, getSculpturesByCategory } from '$lib/data/sculptures';

	// Get a selection of sculptures for the gallery preview (excluding featured)
	const galleryPreview = sculptures
		.filter(s => s.category === 'sculpture' && !s.featured)
		.slice(0, 6);
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

<!-- About the Artist Section -->
<section class="py-section bg-bg-primary border-y border-border-subtle">
	<div class="mx-auto max-w-4xl px-6 text-center">
		<p class="font-mono text-tiny text-bronze-light uppercase tracking-widest mb-4">About the Artist</p>
		<h2 class="text-h2 text-primary mb-8 font-serif">Juraan</h2>
		<p class="text-body text-secondary font-sans leading-relaxed mb-6">
			Juraan is a Mongolian sculptor whose bronze works explore the intersection of mythology, spirituality,
			and the human condition. Drawing from Buddhist philosophy and shamanic traditions, his sculptures capture
			timeless narratives of power, wisdom, and transcendence.
		</p>
		<p class="text-body text-secondary font-sans leading-relaxed mb-8">
			Each piece is cast and patinated by hand, creating unique works that honor the ancient art of bronze
			sculpture while speaking to contemporary concerns about duality, consciousness, and the nature of being.
		</p>
		<a
			href="/about"
			class="inline-block text-small border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
		>
			Read Full Biography
		</a>
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

<!-- Exhibitions Section -->
<section class="py-section">
	<div class="mx-auto max-w-container px-6">
		<!-- Section Header -->
		<div class="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
			<div>
				<p class="font-mono text-tiny text-bronze-light uppercase tracking-widest mb-3">Solo Exhibition 2024</p>
				<h2 class="text-h1 text-primary leading-tight" style="font-family: var(--font-family-juraan);">The World of Juraan</h2>
			</div>
			<p class="text-body text-secondary max-w-md font-sans md:text-right">
				A journey into mythological bronze—where ancient narratives meet contemporary sculptural vision.
			</p>
		</div>

		<!-- Editorial Layout -->
		<div class="grid grid-cols-12 gap-4 md:gap-6">
			<!-- Large Hero Image -->
			<div class="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden group">
				<img
					src="/featured/at-expo-sculpture.JPG"
					alt="God and Devil sculpture at exhibition"
					class="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition-all duration-700 ease-out"
					loading="lazy"
				/>
			</div>
			<!-- Side Stack -->
			<div class="col-span-6 md:col-span-4 aspect-[3/4] md:aspect-auto md:h-full overflow-hidden group">
				<img
					src="/featured/crowd-2.JPG"
					alt="Visitors engaging with the work"
					class="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition-all duration-700 ease-out"
					loading="lazy"
				/>
			</div>
			<!-- Bottom Row -->
			<div class="col-span-6 md:col-span-4 aspect-[4/5] overflow-hidden group">
				<img
					src="/featured/crowd-1.JPG"
					alt="Exhibition opening night"
					class="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition-all duration-700 ease-out"
					loading="lazy"
				/>
			</div>
			<div class="col-span-12 md:col-span-8 aspect-[16/9] overflow-hidden group relative">
				<img
					src="/featured/1.JPG"
					alt="Exhibition space"
					class="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-[1.02] transition-all duration-700 ease-out"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>

