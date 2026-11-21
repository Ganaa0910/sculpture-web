<script>
	import Seo from '#lib/components/Seo.svelte';
	// No data needed for now - static content
</script>

<Seo
	title="About Juraan — Lkhagvasuren Nyamkhuu"
	description="Lkhagvasuren Nyamkhuu (Juraan) is a Mongolian bronze sculptor whose work explores myth, faith and traditional narrative."
	image="/juraan-portrait.jpg"
/>

<main class="relative bg-bg-primary pt-24 pb-section">
	<div class="mx-auto max-w-7xl px-6">
		<!-- Section Header -->
		<div class="mb-20 text-center">
			<p class="text-tiny mb-4 font-mono tracking-widest text-bronze-light uppercase">The Artist</p>
			<h1 class="text-h1 text-primary font-serif" style="font-family: var(--font-family-juraan);">
				Lkhagvasuren Nyamkhuu
			</h1>
		</div>

		<div class="mb-20 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
			<!-- Artist Portrait - Larger on desktop -->
			<div class="lg:col-span-5">
				<div class="sticky top-24 aspect-[3/4] overflow-hidden bg-bg-secondary">
					<img
						src="/juraan-portrait.jpg"
						alt="Juraan in his studio"
						class="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
						loading="eager"
					/>
				</div>
			</div>

			<!-- Biography -->
			<div class="space-y-12 lg:col-span-7">
				<section class="space-y-6">
					<div class="text-tiny space-y-1 font-mono tracking-widest text-bronze-light uppercase">
						<p>Born 1967, Khujirt, Uvurkhangai Province, Mongolia</p>
						<p>Graduated 1987, College of Fine Arts, Ulaanbaatar</p>
					</div>
					<div class="text-body text-secondary max-w-3xl space-y-6 font-sans leading-relaxed">
						<p>
							Lkhagvasuren Nyamkhuu is a Mongolian sculptor and artist whose work is deeply rooted
							in Mongolian tradition, culture and history, drawing inspiration from the country's
							influence on religion, philosophy and mythology. His sculptures often reflect a
							profound personal connection to rich nature and wildlife, and domestic animals like
							dogs, which have played a central role in both his life and his art. His beloved dog,
							Chico, was the starting point of this sculptural journey, igniting a desire to
							preserve and honour the living world through bronze.
						</p>
						<p>
							Beginning his artistic career as a painter specializing in Mongol zurag, a traditional
							and highly intricate Mongolian painting style, his practice evolved into sculpture,
							allowing him to fully express the rich and layered worldview shaped by his life
							experiences.
						</p>
						<p>
							Today, Lkhagvasuren continues to shape a powerful sculptural language that bridges
							ancestral wisdom, spiritual symbolism, and contemporary form, offering audiences
							around the world a rare and authentic window into Mongolia's wild beauty and
							philosophical depth.
						</p>
					</div>
				</section>
			</div>
		</div>

		<!-- Exhibitions & Recognition Grid -->
		<div
			class="grid grid-cols-1 gap-12 border-t border-border-subtle pt-16 md:grid-cols-2 lg:gap-16"
		>
			<!-- Solo Exhibitions -->
			<section class="space-y-6">
				<h2 class="text-h3 text-primary font-serif">Solo Exhibitions</h2>
				<div class="space-y-4">
					<div class="space-y-3 border-l-2 border-bronze-dark/30 pl-4">
						<div>
							<p class="text-tiny font-mono text-bronze-light">2017</p>
							<p class="text-small text-secondary font-sans">Yakutsk, Sakha Republic, Russia</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">2007</p>
							<p class="text-small text-secondary font-sans">Ulaanbaatar</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">2001</p>
							<p class="text-small text-secondary font-sans">Tokyo, Japan</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1997</p>
							<p class="text-small text-secondary font-sans">Los Angeles, USA</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1996</p>
							<p class="text-small text-secondary font-sans">Ulaanbaatar</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1994</p>
							<p class="text-small text-secondary font-sans">Ulaanbaatar</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Group Exhibitions -->
			<section class="space-y-6">
				<h2 class="text-h3 text-primary font-serif">Group Exhibitions</h2>
				<div class="space-y-4">
					<div class="space-y-3 border-l-2 border-bronze-dark/30 pl-4">
						<div>
							<p class="text-tiny font-mono text-bronze-light">2016</p>
							<p class="text-small text-secondary font-sans">Hohhot, China</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">2008</p>
							<p class="text-small text-secondary font-sans">Beijing, China</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1999</p>
							<p class="text-small text-secondary font-sans">France</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">Since 1987</p>
							<p class="text-small text-secondary font-sans">
								Union of Mongolian Artists Exhibitions, Ulaanbaatar
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Awards & Recognition -->
			<section class="space-y-6">
				<h2 class="text-h3 text-primary font-serif">Awards & Recognition</h2>
				<div class="space-y-4">
					<div class="space-y-3 border-l-2 border-bronze-dark/30 pl-4">
						<div>
							<p class="text-tiny font-mono text-bronze-light">1998</p>
							<p class="text-small text-secondary font-sans">
								UMA Prize, Union of Mongolian Artists
							</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1998</p>
							<p class="text-small text-secondary font-sans">
								Certificate of Honour, Government of Mongolia
							</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1993</p>
							<p class="text-small text-secondary font-sans">
								Runner-up Prize, Noma Concours, Japan
							</p>
						</div>
						<div>
							<p class="text-tiny font-mono text-bronze-light">1991</p>
							<p class="text-small text-secondary font-sans">
								Encouragement Prize, Noma Concours, Japan
							</p>
						</div>
					</div>
				</div>
			</section>

			<!-- Notable Commissions -->
			<section class="space-y-6">
				<h2 class="text-h3 text-primary font-serif">Notable Commissions</h2>
				<div class="border-l-2 border-bronze-dark/30 pl-4">
					<p class="text-tiny font-mono text-bronze-light">1998</p>
					<p class="text-small text-secondary font-sans">
						"The Seven Treasures of the State" (Төрийн долоо эрдэнэ)
					</p>
					<p class="text-tiny text-tertiary mt-1 font-mono">Government Palace of Mongolia</p>
				</div>
			</section>
		</div>
	</div>
</main>
