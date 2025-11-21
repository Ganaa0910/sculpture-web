<svelte:head>
	<title>About - Juraan</title>
	<meta name="description" content="Learn about Juraan's artistic journey, philosophy, and approach to bronze sculpture" />
	<!-- Preload critical images -->
	<link rel="preload" as="image" href="/backgrounds/about.png" fetchpriority="high" />
	<link rel="preload" as="image" href="/juraan-portrait.jpg" />
</svelte:head>

<main class="relative pt-24 pb-section">
	<!-- About Background -->
	<div class="fixed inset-0 z-0">
		<img
			src="/backgrounds/about.png"
			alt="About background"
			class="w-full h-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/30 to-bg-primary/75"></div>
	</div>

	<div class="relative z-10 max-w-4xl mx-auto px-6">
		
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="font-serif text-h1 text-primary mb-6">About the Artist</h1>
		</header>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
			
			<!-- Artist Portrait -->
			<div class="order-2 lg:order-1">
				<div class="aspect-[4/5] bg-bg-secondary border border-border-subtle overflow-hidden">
					<img
						src="/juraan-portrait.jpg"
						alt="Juraan in his studio"
						class="w-full h-full object-cover"
						loading="eager"
					/>
				</div>
			</div>

			<!-- Biography -->
			<div class="order-1 lg:order-2 space-y-8">
				
				<section class="space-y-6">
					<h2 class="font-serif text-h2 text-primary">Juraan</h2>
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
</main>