<script>
	import { featuredSculpture, sculptures, getSculpturesByCategory, getSculptureById } from '$lib/data/sculptures';

	// Get a selection of sculptures for the gallery preview (excluding featured)
	const galleryPreview = sculptures
		.filter((s) => s.category === 'sculpture' && !s.featured)
		.slice(0, 6);

	// Get God and Devil sculptures for highlight section
	const godAndDevil = getSculptureById('god-and-devil');
	const buddha = getSculptureById('buddha');
	const devil = getSculptureById('devil');
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
		<video autoplay muted loop playsinline class="h-full min-h-full w-full min-w-full object-cover">
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
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-bg-primary/40 to-bg-primary/95"
		></div>
		<!-- Secondary vignette for depth -->
		<div class="bg-gradient-radial-tight absolute inset-0 from-transparent to-bg-primary/60"></div>
		<!-- Edge shadows -->
		<div class="shadow-inner-refined absolute inset-0"></div>
		<!-- Enhanced corner gradients -->
		<div class="bg-gradient-corners-intense absolute inset-0"></div>
		<!-- Edge burn -->
		<div class="shadow-edge-burn absolute inset-0"></div>
		<!-- Film grain overlay -->
		<div class="film-grain absolute inset-0 opacity-25"></div>
	</div>

	<!-- Hero Content -->
	<div class="relative z-10 mx-auto max-w-4xl px-6 text-center">
		<h1
			class="text-hero mb-8 animate-fade-in text-bronze-light"
			style="font-family: var(--font-family-juraan);"
		>
			Juraan
		</h1>
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
	<div class="absolute bottom-8 left-1/2 -translate-x-1/2 transform">
		<!-- Desktop: Mouse scroll -->
		<div
			class="hidden h-10 w-6 items-start justify-center rounded-full border border-bronze-light pt-2 sm:flex"
		>
			<div class="h-3 w-1 animate-bounce rounded-full bg-bronze-light"></div>
		</div>
		<!-- Mobile: Swipe up gesture -->
		<div class="flex flex-col items-center space-y-2 sm:hidden">
			<div class="h-1 w-8 animate-pulse rounded-full bg-bronze-light"></div>
			<div class="h-1 w-6 rounded-full bg-bronze-light/60"></div>
			<div class="h-1 w-4 rounded-full bg-bronze-light/30"></div>
			<svg
				class="h-6 w-6 animate-bounce text-bronze-light"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M7 11l5-5m0 0l5 5m-5-5v12"
				/>
			</svg>
		</div>
	</div>
</main>

<!-- About the Artist Section -->
<section class="border-y border-border-subtle bg-bg-primary py-section">
	<div class="mx-auto max-w-6xl px-6">
		<div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
			<!-- Image -->
			<div class="order-2 lg:order-1">
				<div class="aspect-[4/5] overflow-hidden border border-border-subtle">
					<img
						src="/featured/juraan-himself.JPG"
						alt="Juraan - Bronze Sculptor"
						class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
						loading="lazy"
					/>
				</div>
			</div>

			<!-- Content -->
			<div class="order-1 text-center lg:order-2 lg:text-left">
				<p class="text-tiny mb-4 font-mono tracking-widest text-bronze-light uppercase">
					About the Artist
				</p>
				<h2 class="text-h2 text-primary mb-8 font-serif">Juraan</h2>
				<p class="text-body text-secondary mb-6 font-sans leading-relaxed">
					Juraan is a Mongolian sculptor whose bronze works explore the intersection of mythology,
					spirituality, and the human condition. Drawing from Buddhist philosophy and shamanic
					traditions, his sculptures capture timeless narratives of power, wisdom, and
					transcendence.
				</p>
				<p class="text-body text-secondary mb-8 font-sans leading-relaxed">
					Each piece is cast and patinated by hand, creating unique works that honor the ancient art
					of bronze sculpture while speaking to contemporary concerns about duality, consciousness,
					and the nature of being.
				</p>
				<a
					href="/about"
					class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
				>
					Read Full Biography
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Highlight Work: God and Devil -->
{#if godAndDevil && buddha && devil}
<section class="relative py-section bg-bg-secondary/20 border-y border-border-subtle">
	<div class="mx-auto max-w-7xl px-6">
		<!-- Section Header -->
		<div class="text-center mb-12">
			<p class="text-tiny font-mono tracking-widest text-bronze-light uppercase mb-3">Highlight Work</p>
			<h2 class="text-h1 text-primary mb-6 leading-tight" style="font-family: var(--font-family-juraan);">
				{godAndDevil.title}
			</h2>
			<p class="text-h3 text-bronze-light font-serif mb-4">
				A Meditation on Duality
			</p>
			<p class="text-body text-secondary font-sans leading-relaxed max-w-3xl mx-auto">
				Two pieces in eternal dialogue—Buddha in serene contemplation, Devil in introspective meditation.
				Neither purely good nor evil, both exist as reflections of human consciousness.
			</p>
		</div>

		<!-- Split Image Layout -->
		<div class="grid grid-cols-2 gap-0 mb-8">
			<!-- Devil -->
			<a href="/sculpture/god-and-devil" class="group relative aspect-[3/4] overflow-hidden">
				<img
					src={devil.image}
					alt={devil.title}
					class="h-full w-full object-cover transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-transparent to-bg-primary/20 md:group-hover:to-bg-primary/10 transition-all duration-700 pointer-events-none"></div>
				<!-- Label -->
				<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-transparent p-6 pointer-events-none">
					<p class="text-small text-bronze-light font-serif text-center">Devil</p>
				</div>
			</a>

			<!-- Buddha -->
			<a href="/sculpture/god-and-devil" class="group relative aspect-[3/4] overflow-hidden">
				<img
					src={buddha.image}
					alt={buddha.title}
					class="h-full w-full object-cover transition-all duration-700 md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-105"
					loading="lazy"
				/>
				<div class="absolute inset-0 bg-gradient-to-l from-transparent to-bg-primary/20 md:group-hover:to-bg-primary/10 transition-all duration-700 pointer-events-none"></div>
				<!-- Label -->
				<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-primary via-bg-primary/90 to-transparent p-6 pointer-events-none">
					<p class="text-small text-bronze-light font-serif text-center">Buddha</p>
				</div>
			</a>
		</div>

		<!-- CTA -->
		<div class="text-center">
			<a
				href="/sculpture/god-and-devil"
				class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				Explore This Work
			</a>
		</div>
	</div>
</section>
{/if}

<!-- Gallery Preview Section -->
<section class="bg-bg-secondary/30 py-section">
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
				class="text-small hidden border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary sm:inline-block"
			>
				View All
			</a>
		</div>

		<div class="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
			{#each galleryPreview as sculpture}
				<a href="/sculpture/{sculpture.id}" class="group">
					<div
						class="aspect-[3/4] overflow-hidden border border-border-subtle bg-bg-secondary transition-all duration-300 group-hover:border-bronze-dark"
					>
						<img
							src={sculpture.image}
							alt={sculpture.title}
							class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
							loading="lazy"
						/>
					</div>
					<div class="mt-3">
						<h3
							class="text-small text-primary font-serif transition-colors group-hover:text-bronze-light"
						>
							{sculpture.title}
						</h3>
						{#if sculpture.year}
							<p class="text-tiny text-tertiary font-mono">{sculpture.year}</p>
						{/if}
					</div>
				</a>
			{/each}
		</div>

		<div class="mt-8 text-center sm:hidden">
			<a
				href="/gallery"
				class="text-small inline-block border border-bronze bg-transparent px-6 py-2 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
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
		<div class="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
			<div>
				<p class="text-tiny mb-3 font-mono tracking-widest text-bronze-light uppercase">
					Solo Exhibition 2024
				</p>
				<h2
					class="text-h1 text-primary leading-tight"
					style="font-family: var(--font-family-juraan);"
				>
					The World of Juraan
				</h2>
			</div>
			<p class="text-body text-secondary max-w-md font-sans md:text-right">
				A journey into mythological bronze—where ancient narratives meet contemporary sculptural
				vision.
			</p>
		</div>

		<!-- Editorial Layout -->
		<div class="grid grid-cols-12 gap-4 md:gap-6">
			<!-- Large Hero Image -->
			<div class="group col-span-12 aspect-[16/10] overflow-hidden md:col-span-8">
				<img
					src="/featured/at-expo-sculpture.JPG"
					alt="Sculpture at exhibition"
					class="h-full w-full object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:scale-[1.02] md:group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
			<!-- Side Stack -->
			<div
				class="group col-span-6 aspect-[3/4] overflow-hidden md:col-span-4 md:aspect-auto md:h-full"
			>
				<img
					src="/featured/crowd-2.JPG"
					alt="Visitors engaging with the work"
					class="h-full w-full object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:scale-[1.02] md:group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
			<!-- Bottom Row -->
			<div class="group col-span-6 aspect-[4/5] overflow-hidden md:col-span-4">
				<img
					src="/featured/crowd-1.JPG"
					alt="Exhibition opening night"
					class="h-full w-full object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:scale-[1.02] md:group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
			<div class="group col-span-6 aspect-[4/5] overflow-hidden md:col-span-4">
				<img
					src="/featured/musician.JPG"
					alt="Traditional musician at exhibition"
					class="h-full w-full object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:scale-[1.02] md:group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
			<div class="group relative col-span-12 aspect-[16/9] overflow-hidden md:col-span-8">
				<img
					src="/featured/god-and-devil.JPG"
					alt="Exhibition space"
					class="h-full w-full object-cover transition-all duration-700 ease-out md:grayscale md:group-hover:scale-[1.02] md:group-hover:grayscale-0"
					loading="lazy"
				/>
			</div>
		</div>
	</div>
</section>
