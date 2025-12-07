<script>
	import { getSculptureById } from '$lib/data/sculptures';
	import ImageZoom from '$lib/components/ImageZoom.svelte';

	const godAndDevil = getSculptureById('god-and-devil');
	const buddha = getSculptureById('buddha');
	const devil = getSculptureById('devil');

	let zoomModal = $state();
	let zoomImage = $state('');

	function openZoom(imageSrc) {
		zoomImage = imageSrc;
		if (zoomModal) {
			zoomModal.open();
		}
	}
</script>

<svelte:head>
	<title>God and Devil - Juraan</title>
	<meta
		name="description"
		content="A profound duality in bronze - exploring the eternal dance between light and shadow, divinity and darkness."
	/>
	{#if buddha && devil}
		<link rel="preload" as="image" href={buddha.image} fetchpriority="high" />
		<link rel="preload" as="image" href={devil.image} fetchpriority="high" />
	{/if}
</svelte:head>

{#if godAndDevil && buddha && devil}
	<main class="relative bg-bg-primary pt-24 pb-section">
		<!-- Mobile: Title First, Desktop: Split Layout -->
		<div class="lg:hidden">
			<!-- Mobile Title Section -->
			<div class="px-6 py-12 text-center">
				<!-- Back Navigation -->
				<div class="mb-8">
					<a
						href="/gallery"
						class="text-secondary group inline-flex items-center space-x-2 transition-colors hover:text-bronze-light"
					>
						<svg
							class="h-5 w-5 transition-transform group-hover:-translate-x-1"
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
						<span class="text-small font-sans tracking-wider uppercase">Back to Works</span>
					</a>
				</div>

				<h1
					class="text-h1 text-primary mb-4 leading-tight"
					style="font-family: var(--font-family-juraan);"
				>
					{godAndDevil.title}
				</h1>
				<p class="text-h3 text-bronze-light font-serif mb-6">
					A Meditation on Duality
				</p>
				<p class="text-body text-secondary font-sans leading-relaxed max-w-xl mx-auto">
					Two pieces in eternal dialogue—Buddha in serene contemplation, Devil in introspective meditation.
					Neither purely good nor evil, both exist as reflections of human consciousness.
				</p>
			</div>

			<!-- Mobile: Cinematic Side-by-Side -->
			<div class="relative h-[70vh] flex gap-0">
				<!-- Devil - Left -->
				<div class="relative w-[45%] overflow-hidden group cursor-zoom-in"
					onclick={() => openZoom(devil.image)}
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && openZoom(devil.image)}
				>
					<img
						src={devil.image}
						alt={devil.title}
						class="h-full w-full object-cover transition-all duration-500 group-active:scale-105"
						loading="eager"
						fetchpriority="high"
					/>
					<!-- Gradient overlay for depth -->
					<div class="absolute inset-0 bg-gradient-to-r from-transparent to-bg-primary/30 pointer-events-none"></div>

					<!-- Label -->
					<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-primary/95 to-transparent p-3 pointer-events-none">
						<p class="text-tiny text-bronze-light font-serif text-center">Devil</p>
					</div>
				</div>

				<!-- Buddha - Right -->
				<div class="relative w-[55%] overflow-hidden group cursor-zoom-in"
					onclick={() => openZoom(buddha.image)}
					role="button"
					tabindex="0"
					onkeydown={(e) => e.key === 'Enter' && openZoom(buddha.image)}
				>
					<img
						src={buddha.image}
						alt={buddha.title}
						class="h-full w-full object-cover transition-all duration-500 group-active:scale-105"
						loading="eager"
						fetchpriority="high"
					/>
					<!-- Gradient overlay for depth -->
					<div class="absolute inset-0 bg-gradient-to-l from-transparent to-bg-primary/30 pointer-events-none"></div>

					<!-- Label -->
					<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-primary/95 to-transparent p-3 pointer-events-none">
						<p class="text-tiny text-bronze-light font-serif text-center">Buddha</p>
					</div>
				</div>

				<!-- Cinematic vignette overlay -->
				<div class="absolute inset-0 pointer-events-none" style="background: radial-gradient(ellipse 75% 70% at center, transparent 20%, rgba(10, 10, 10, 0.3) 50%, rgba(10, 10, 10, 0.7) 80%, rgba(10, 10, 10, 0.95) 95%);"></div>
			</div>
		</div>

		<!-- Desktop: Split Layout -->
		<div class="hidden lg:flex items-center min-h-screen relative overflow-hidden">
			<!-- Devil - Left Side -->
			<div class="relative flex-1 h-screen overflow-hidden group cursor-zoom-in"
				onclick={() => openZoom(devil.image)}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && openZoom(devil.image)}
			>
				<img
					src={devil.image}
					alt={devil.title}
					class="h-full w-full object-contain object-right transition-all duration-500 group-hover:scale-105"
					loading="eager"
					fetchpriority="high"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-bg-primary/90"></div>

				<!-- Zoom hint -->
				<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
					<div class="bg-bg-secondary/90 backdrop-blur px-4 py-2 rounded border border-bronze-light">
						<p class="text-tiny text-bronze-light font-mono tracking-wider uppercase flex items-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
							</svg>
							Click to zoom
						</p>
					</div>
				</div>
			</div>

			<!-- Center - Title Section -->
			<div class="relative flex-shrink-0 w-[600px] flex items-center justify-center bg-bg-primary z-10 px-12">
				<div class="text-center max-w-xl">
					<!-- Back Navigation -->
					<div class="mb-8">
						<a
							href="/gallery"
							class="text-secondary group inline-flex items-center space-x-2 transition-colors hover:text-bronze-light"
						>
							<svg
								class="h-5 w-5 transition-transform group-hover:-translate-x-1"
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
							<span class="text-small font-sans tracking-wider uppercase">Back to Works</span>
						</a>
					</div>

					<h1
						class="text-hero text-primary mb-4 leading-tight"
						style="font-family: var(--font-family-juraan);"
					>
						{godAndDevil.title}
					</h1>
					<p class="text-h3 text-bronze-light font-serif mb-6">
						A Meditation on Duality
					</p>
					<p class="text-body text-secondary font-sans leading-relaxed mb-8">
						Two pieces in eternal dialogue—Buddha in serene contemplation, Devil in introspective meditation.
						Neither purely good nor evil, both exist as reflections of human consciousness.
					</p>

					<!-- Scroll indicator -->
					<div class="flex justify-center">
						<button
							onclick={() => document.querySelector('#details-section')?.scrollIntoView({ behavior: 'smooth' })}
							class="text-bronze-light hover:text-bronze transition-colors"
						>
							<svg class="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
							</svg>
						</button>
					</div>
				</div>
			</div>

			<!-- Buddha - Right Side -->
			<div class="relative flex-1 h-screen overflow-hidden group cursor-zoom-in"
				onclick={() => openZoom(buddha.image)}
				role="button"
				tabindex="0"
				onkeydown={(e) => e.key === 'Enter' && openZoom(buddha.image)}
			>
				<img
					src={buddha.image}
					alt={buddha.title}
					class="h-full w-full object-contain object-left transition-all duration-500 group-hover:scale-105"
					loading="eager"
					fetchpriority="high"
				/>
				<div class="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-bg-primary/90"></div>

				<!-- Zoom hint -->
				<div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
					<div class="bg-bg-secondary/90 backdrop-blur px-4 py-2 rounded border border-bronze-light">
						<p class="text-tiny text-bronze-light font-mono tracking-wider uppercase flex items-center gap-2">
							<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
							</svg>
							Click to zoom
						</p>
					</div>
				</div>
			</div>

			<!-- Unified vignette over entire desktop layout -->
			<div class="absolute inset-0 pointer-events-none z-20" style="background: radial-gradient(ellipse 80% 75% at center, transparent 0%, transparent 30%, rgba(10, 10, 10, 0.35) 55%, rgba(10, 10, 10, 0.65) 75%, rgba(10, 10, 10, 0.9) 92%, #0a0a0a 98%);"></div>
		</div>

		<!-- Details Section -->
		<div class="relative" id="details-section">
			<div class="bg-bg-primary py-section">

			<div class="mx-auto max-w-7xl px-6">
				<!-- Combined Details -->
				<div class="max-w-4xl mx-auto space-y-8">
				<section class="space-y-4">
					<h2 class="text-h2 text-primary font-serif">The Duality</h2>
					<p class="text-body text-secondary font-sans leading-relaxed">
						These two pieces exist as a unified work, exploring the Buddhist concept that
						enlightenment comes not from rejecting the shadow self, but from understanding it.
						God and Devil are not adversaries—they are aspects of the same consciousness,
						two faces of the human condition sitting in parallel meditation.
					</p>
					<p class="text-body text-secondary font-sans leading-relaxed">
						In Mongolian tradition, spiritual forces exist in balance. This work draws from
						both Buddhist philosophy and shamanic understanding: that wisdom comes from
						integrating opposites, not from choosing one over the other.
					</p>
				</section>

				<!-- Technical Details -->
				<section class="space-y-4">
					<h2 class="text-h2 text-primary font-serif">Details</h2>
					<div class="space-y-3">
						<div class="flex items-center space-x-4">
							<span class="text-tiny text-tertiary w-24 font-mono tracking-wider uppercase">Year</span>
							<span class="text-body text-secondary font-sans">{godAndDevil.year}</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="text-tiny text-tertiary w-24 font-mono tracking-wider uppercase">Material</span>
							<span class="text-body text-secondary font-sans">{godAndDevil.material}</span>
						</div>
						<div class="flex items-center space-x-4">
							<span class="text-tiny text-tertiary w-24 font-mono tracking-wider uppercase">Size</span>
							<span class="text-body text-secondary font-sans">{godAndDevil.dimensions}</span>
						</div>
					</div>
				</section>

				<!-- Call to Action -->
				<section class="pt-8 text-center">
					<div class="space-y-4">
						<a
							href="/contact"
							class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
						>
							Inquire About This Collection
						</a>
						<p class="text-small text-tertiary font-sans">
							Available as a pair or individually. Contact for pricing and availability.
						</p>
					</div>
				</section>
				</div>
			</div>
		</div>
		</div>

		<!-- Image Zoom Modal -->
		<ImageZoom bind:this={zoomModal} src={zoomImage} alt="God and Devil" />
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
