<script>
	import { page } from '$app/state';
	import { getSculptureById } from '$lib/data/sculptures';

	let sculpture = $derived(getSculptureById(page.params.id));
	let selectedImage = $state('');

	$effect(() => {
		if (sculpture) {
			selectedImage = sculpture.image;
		}
	});

	function selectImage(src) {
		selectedImage = src;
	}
</script>

<svelte:head>
	{#if sculpture}
		<title>{sculpture.title} - Juraan</title>
		<meta
			name="description"
			content={sculpture.description || `${sculpture.title} - Bronze sculpture by Juraan`}
		/>
		<!-- Preload sculpture image -->
		<link rel="preload" as="image" href={sculpture.image} fetchpriority="high" />
	{:else}
		<title>Sculpture Not Found - Juraan</title>
	{/if}
</svelte:head>

{#if sculpture}
	<main class="relative pt-24 pb-section bg-bg-primary">
		<!-- Detail Background -->
		<div class="absolute inset-0 z-0">
			<img
				src={sculpture.image}
				alt={sculpture.title}
				class="h-full w-full object-cover object-center"
				loading="eager"
				fetchpriority="high"
			/>
			<div class="absolute inset-0 bg-bg-primary/90"></div>
			<div
				class="bg-gradient-radial absolute inset-0 from-transparent via-bg-primary/40 to-bg-primary/80"
			></div>
		</div>

		<div class="relative z-10 mx-auto max-w-6xl px-6">
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

			<div class="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
				<!-- Large Image + Gallery -->
				<div class="order-2 lg:order-1 space-y-4">
					<div class="aspect-[4/5] overflow-hidden border border-border-subtle bg-bg-secondary">
						<img
							src={selectedImage || sculpture.image}
							alt={sculpture.title}
							class="h-full w-full object-cover transition-all duration-300 hover:scale-105"
							loading="eager"
							fetchpriority="high"
						/>
					</div>

					<!-- Thumbnail Gallery -->
					{#if sculpture.gallery && sculpture.gallery.length > 0}
						<div class="grid grid-cols-5 gap-2">
							<!-- Main image thumbnail -->
							<button
								onclick={() => selectImage(sculpture.image)}
								class="aspect-square overflow-hidden border transition-all duration-200 cursor-pointer {selectedImage === sculpture.image ? 'border-bronze' : 'border-border-subtle hover:border-bronze-dark'}"
							>
								<img
									src={sculpture.image}
									alt="{sculpture.title} - main"
									class="h-full w-full object-cover"
									loading="lazy"
								/>
							</button>
							<!-- Gallery thumbnails -->
							{#each sculpture.gallery as img, i}
								<button
									onclick={() => selectImage(img)}
									class="aspect-square overflow-hidden border transition-all duration-200 cursor-pointer {selectedImage === img ? 'border-bronze' : 'border-border-subtle hover:border-bronze-dark'}"
								>
									<img
										src={img}
										alt="{sculpture.title} - view {i + 2}"
										class="h-full w-full object-cover"
										loading="lazy"
									/>
								</button>
							{/each}
						</div>
					{/if}
				</div>

				<!-- Sculpture Details -->
				<div class="order-1 space-y-8 lg:order-2">
					<header>
						<h1
							class="text-hero text-primary mb-4 leading-tight"
							style="font-family: var(--font-family-juraan);"
						>
							{sculpture.title}
						</h1>
						{#if sculpture.year}
							<p class="text-body font-mono tracking-wider text-bronze-light uppercase">
								{sculpture.year}
							</p>
						{/if}
					</header>

					{#if sculpture.description}
						<section class="space-y-4">
							<h2 class="text-h3 text-primary font-serif">Description</h2>
							<p class="text-body text-secondary font-sans leading-relaxed">
								{sculpture.description}
							</p>
						</section>
					{/if}

					<!-- Technical Details -->
					{#if sculpture.material || sculpture.dimensions}
						<section class="space-y-4">
							<h2 class="text-h3 text-primary font-serif">Details</h2>
							<div class="space-y-3">
								{#if sculpture.material}
									<div class="flex items-center space-x-4">
										<span class="text-tiny text-tertiary w-20 font-mono tracking-wider uppercase"
											>Material</span
										>
										<span class="text-body text-secondary font-sans">{sculpture.material}</span>
									</div>
								{/if}
								{#if sculpture.dimensions}
									<div class="flex items-center space-x-4">
										<span class="text-tiny text-tertiary w-20 font-mono tracking-wider uppercase"
											>Size</span
										>
										<span class="text-body text-secondary font-sans">{sculpture.dimensions}</span>
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
								class="text-small inline-block border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
							>
								Inquire About This Piece
							</a>
							<p class="text-small text-tertiary font-sans">
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
