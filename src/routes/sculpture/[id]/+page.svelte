<script>
	import { page } from '$app/state';
	import { getSculptureById } from '#lib/data/sculptures.ts';
	import ImageZoom from '#lib/components/ImageZoom.svelte';
	import Seo from '#lib/components/Seo.svelte';

	let sculpture = $derived(getSculptureById(page.params.id));
	let selectedImageIndex = $state(0);
	let zoomModal = $state();

	let selectedImage = $derived(sculpture?.gallery?.[selectedImageIndex] || sculpture?.image || '');

	function selectImage(index) {
		selectedImageIndex = index;
	}

	function nextImage() {
		if (sculpture?.gallery) {
			selectedImageIndex = (selectedImageIndex + 1) % sculpture.gallery.length;
		}
	}

	function prevImage() {
		if (sculpture?.gallery) {
			selectedImageIndex =
				(selectedImageIndex - 1 + sculpture.gallery.length) % sculpture.gallery.length;
		}
	}

	function openZoom() {
		if (zoomModal) {
			zoomModal.open();
		}
	}
</script>

{#if sculpture}
	<Seo
		title="{sculpture.title} — Juraan"
		description={sculpture.description ||
			`${sculpture.title}${sculpture.year ? ` (${sculpture.year})` : ''}. ${sculpture.material || 'Bronze'}${sculpture.dimensions ? `, ${sculpture.dimensions} cm` : ''}. By Mongolian sculptor Juraan.`}
		image={sculpture.image}
		type="article"
		jsonLd={{
			'@context': 'https://schema.org',
			'@type': 'VisualArtwork',
			name: sculpture.title,
			artform: sculpture.category === 'drawing' ? 'Drawing' : 'Sculpture',
			artMedium: sculpture.material,
			dateCreated: sculpture.year ? String(sculpture.year) : undefined,
			image: new URL(encodeURI(sculpture.image), page.url.origin).href,
			creator: { '@type': 'Person', name: 'Juraan', alternateName: 'Lkhagvasuren Nyamkhuu' }
		}}
	/>
{/if}

<svelte:head>
	{#if sculpture}
		<link rel="preload" as="image" href={sculpture.image} fetchpriority="high" />
	{:else}
		<title>Sculpture Not Found — Juraan</title>
		<meta name="robots" content="noindex" />
	{/if}
</svelte:head>

{#if sculpture}
	<main class="relative min-h-screen bg-bg-primary">
		<!-- Back Navigation - Fixed -->
		<div class="fixed top-20 left-6 z-50 pt-4">
			<a
				href="/gallery"
				class="text-secondary group inline-flex items-center space-x-2 border border-border-subtle bg-bg-primary/80 px-4 py-2 backdrop-blur transition-colors hover:text-bronze-light"
			>
				<svg
					class="h-4 w-4 transition-transform group-hover:-translate-x-1"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h18"
					/>
				</svg>
				<span class="text-tiny font-sans tracking-wider uppercase">Back</span>
			</a>
		</div>

		<!-- Hero Image Section -->
		<section class="relative h-screen">
			<!-- Main Image with Navigation -->
			<div class="group relative h-full">
				<div class="absolute inset-0 bg-bg-primary">
					{#key selectedImageIndex}
						<img
							src={selectedImage}
							alt={sculpture.title}
							class="h-full w-full animate-fade-in object-contain"
							loading="eager"
							fetchpriority="high"
						/>
					{/key}
				</div>

				<!-- Gradient Overlays for seamless vignette effect -->
				<div
					class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-bg-primary via-bg-primary/30 via-bg-primary/60 to-transparent"
				></div>
				<div
					class="pointer-events-none absolute inset-x-0 bottom-0 h-[40vh] bg-gradient-to-t from-bg-primary via-bg-primary/40 via-bg-primary/70 to-transparent"
				></div>

				<!-- Navigation Arrows -->
				{#if sculpture.gallery && sculpture.gallery.length > 1}
					<button
						onclick={prevImage}
						class="absolute top-1/2 left-4 z-20 -translate-y-1/2 border border-border-subtle bg-bg-secondary/50 p-3 text-text-primary backdrop-blur transition-all hover:border-bronze-dark hover:text-bronze-light md:left-6 md:p-4 md:opacity-0 md:group-hover:opacity-100"
						aria-label="Previous image"
					>
						<svg
							class="h-5 w-5 md:h-6 md:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 19l-7-7 7-7"
							/>
						</svg>
					</button>

					<button
						onclick={nextImage}
						class="absolute top-1/2 right-4 z-20 -translate-y-1/2 border border-border-subtle bg-bg-secondary/50 p-3 text-text-primary backdrop-blur transition-all hover:border-bronze-dark hover:text-bronze-light md:right-6 md:p-4 md:opacity-0 md:group-hover:opacity-100"
						aria-label="Next image"
					>
						<svg
							class="h-5 w-5 md:h-6 md:w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M9 5l7 7-7 7"
							/>
						</svg>
					</button>

					<!-- Image Counter -->
					<div
						class="absolute bottom-8 left-4 z-20 border border-border-subtle bg-bg-secondary/80 px-4 py-2 backdrop-blur md:left-1/2 md:-translate-x-1/2 md:px-6 md:py-3"
					>
						<p class="text-tiny font-mono tracking-wider text-text-secondary">
							{selectedImageIndex + 1} / {sculpture.gallery.length}
						</p>
					</div>
				{/if}

				<!-- Zoom Button -->
				<button
					onclick={openZoom}
					class="group/zoom absolute right-4 bottom-8 z-20 border border-border-subtle bg-bg-secondary/80 px-4 py-2 text-text-secondary backdrop-blur transition-all hover:border-bronze-dark hover:text-bronze-light md:right-8 md:px-6 md:py-3"
				>
					<span class="text-tiny flex items-center gap-2 font-mono tracking-wider uppercase">
						<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
							/>
						</svg>
						<span class="hidden md:inline">View Full Size</span>
						<span class="md:hidden">Zoom</span>
					</span>
				</button>
			</div>

			<!-- Scroll Indicator -->
			<div class="absolute bottom-24 left-1/2 z-10 -translate-x-1/2 md:bottom-12">
				<div class="flex animate-bounce flex-col items-center gap-2">
					<span
						class="text-tiny md:text-small font-mono tracking-wider text-text-secondary uppercase"
						>Scroll for details</span
					>
					<svg
						class="h-6 w-6 text-bronze-light"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M19 14l-7 7m0 0l-7-7m7 7V3"
						/>
					</svg>
				</div>
			</div>
		</section>

		<!-- Content Section -->
		<section class="relative bg-bg-primary py-24">
			<div class="mx-auto max-w-5xl px-6">
				<!-- Title -->
				<header class="mb-16 text-center">
					<h1
						class="text-hero text-primary mb-6 leading-tight"
						style="font-family: var(--font-family-juraan);"
					>
						{sculpture.title}
					</h1>
					{#if sculpture.year}
						<p class="text-h3 font-mono tracking-wider text-bronze-light">
							{sculpture.year}
						</p>
					{/if}
				</header>

				<div class="grid grid-cols-1 gap-16 lg:grid-cols-3">
					<!-- Description -->
					<div class="space-y-8 lg:col-span-2">
						{#if sculpture.description}
							<section>
								<h2 class="text-h3 text-primary mb-6 font-serif">About This Work</h2>
								<p class="text-body text-secondary font-sans text-lg leading-relaxed">
									{sculpture.description}
								</p>
							</section>
						{/if}

						<!-- Thumbnail Gallery -->
						{#if sculpture.gallery && sculpture.gallery.length > 1}
							<section>
								<h2 class="text-h3 text-primary mb-6 font-serif">Gallery</h2>
								<div class="grid grid-cols-4 gap-3 md:grid-cols-6">
									{#each sculpture.gallery as img, i}
										<button
											onclick={() => selectImage(i)}
											class="group/thumb aspect-square cursor-pointer overflow-hidden border transition-all duration-300 {selectedImageIndex ===
											i
												? 'border-bronze ring-2 ring-bronze/50'
												: 'border-border-subtle hover:border-bronze-dark'}"
										>
											<img
												src={img}
												alt="{sculpture.title} - view {i + 1}"
												class="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-110"
												loading="lazy"
											/>
										</button>
									{/each}
								</div>
							</section>
						{/if}
					</div>

					<!-- Sidebar -->
					<div class="space-y-8">
						<!-- Technical Details -->
						{#if sculpture.material || sculpture.dimensions}
							<section class="space-y-6 border border-border-subtle bg-bg-secondary p-8">
								<h2 class="text-h3 text-primary font-serif">Details</h2>
								<div class="space-y-4">
									{#if sculpture.material}
										<div>
											<span
												class="text-tiny text-tertiary mb-2 block font-mono tracking-wider uppercase"
												>Material</span
											>
											<span class="text-body text-secondary font-sans">{sculpture.material}</span>
										</div>
									{/if}
									{#if sculpture.dimensions}
										<div>
											<span
												class="text-tiny text-tertiary mb-2 block font-mono tracking-wider uppercase"
												>Dimensions</span
											>
											<span class="text-body text-secondary font-sans">{sculpture.dimensions}</span>
										</div>
									{/if}
								</div>
							</section>
						{/if}

						<!-- Call to Action -->
						<section class="space-y-6 border border-bronze-dark bg-bg-secondary p-8">
							<h3 class="text-h3 text-primary font-serif">Interested?</h3>
							<p class="text-small text-secondary font-sans leading-relaxed">
								For inquiries about this work, collaborations, or exhibition opportunities, please
								get in touch.
							</p>
							<a
								href="/contact"
								class="text-small block border border-bronze bg-transparent px-6 py-3 text-center font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
							>
								Get in Touch
							</a>
						</section>
					</div>
				</div>
			</div>
		</section>

		<!-- Image Zoom Modal -->
		<ImageZoom bind:this={zoomModal} src={selectedImage} alt={sculpture.title} />
	</main>
{:else}
	<main class="pt-24 pb-section">
		<div class="mx-auto max-w-4xl px-6 text-center">
			<h1 class="text-h1 text-primary mb-6 font-serif">Sculpture Not Found</h1>
			<p class="text-body text-secondary mb-8 font-sans">
				The sculpture you're looking for doesn't exist or may have been removed.
			</p>
			<a
				href="/gallery"
				class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
			>
				Return to Works
			</a>
		</div>
	</main>
{/if}
