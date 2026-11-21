<script>
	import Seo from '#lib/components/Seo.svelte';
	import { enhance } from '$app/forms';

	let form;
	let submitted = false;
</script>

<Seo
	title="Contact — Juraan"
	description="Get in touch with Juraan about acquiring works, commissions and exhibitions."
/>

<svelte:head>
	<!-- Preload critical background image -->
	<link rel="preload" as="image" href="/backgrounds/contact.png" fetchpriority="high" />
</svelte:head>

<main class="relative bg-bg-primary pt-24 pb-section">
	<!-- Contact Background -->
	<div class="absolute inset-0 z-0">
		<img
			src="/backgrounds/contact.png"
			alt="Contact background"
			class="h-full w-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div
			class="bg-gradient-radial absolute inset-0 from-transparent via-bg-primary/25 to-bg-primary/80"
		></div>
	</div>

	<div class="relative z-10 mx-auto max-w-4xl px-6">
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="text-h1 mb-6 text-bronze-light" style="font-family: var(--font-family-juraan);">
				Contact
			</h1>
			<p class="text-body text-secondary mx-auto max-w-2xl font-sans">
				Interested in commissioning a piece, discussing exhibitions, or learning more about the
				work? I welcome conversations about art, mythology, and the stories bronze can tell.
			</p>
		</header>

		<div class="grid grid-cols-1 gap-16 lg:grid-cols-2">
			<!-- Contact Form -->
			<div class="order-2 lg:order-1">
				{#if submitted}
					<div class="border border-bronze-dark bg-bg-secondary p-8 text-center">
						<h3 class="text-h3 mb-4 font-serif text-bronze-light">Message Sent</h3>
						<p class="text-body text-secondary font-sans">
							Thank you for your inquiry. I'll respond within 1-2 business days.
						</p>
					</div>
				{:else}
					<form
						bind:this={form}
						method="POST"
						class="space-y-6"
						use:enhance={() => {
							return async ({ result }) => {
								if (result.type === 'success') {
									submitted = true;
									form.reset();
								}
							};
						}}
					>
						<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div>
								<label for="name" class="text-small text-secondary mb-2 block font-sans"
									>Name *</label
								>
								<input
									type="text"
									id="name"
									name="name"
									required
									class="text-primary w-full border border-border-medium bg-bg-secondary px-4 py-3 placeholder-text-muted transition-colors focus:border-bronze"
									placeholder="Your full name"
								/>
							</div>
							<div>
								<label for="email" class="text-small text-secondary mb-2 block font-sans"
									>Email *</label
								>
								<input
									type="email"
									id="email"
									name="email"
									required
									class="text-primary w-full border border-border-medium bg-bg-secondary px-4 py-3 placeholder-text-muted transition-colors focus:border-bronze"
									placeholder="your@email.com"
								/>
							</div>
						</div>

						<div>
							<label for="subject" class="text-small text-secondary mb-2 block font-sans"
								>Subject</label
							>
							<select
								id="subject"
								name="subject"
								class="text-primary w-full border border-border-medium bg-bg-secondary px-4 py-3 transition-colors focus:border-bronze"
							>
								<option value="general">General Inquiry</option>
								<option value="commission">Commission Request</option>
								<option value="exhibition">Exhibition Opportunity</option>
								<option value="purchase">Purchase Inquiry</option>
								<option value="press">Press/Media</option>
							</select>
						</div>

						<div>
							<label for="message" class="text-small text-secondary mb-2 block font-sans"
								>Message *</label
							>
							<textarea
								id="message"
								name="message"
								required
								rows="6"
								class="text-primary w-full resize-y border border-border-medium bg-bg-secondary px-4 py-3 placeholder-text-muted transition-colors focus:border-bronze"
								placeholder="Tell me about your interest in the work..."
							></textarea>
						</div>

						<button
							type="submit"
							class="text-small border border-bronze bg-transparent px-8 py-3 font-sans tracking-wider text-bronze-light uppercase transition-all duration-300 hover:bg-bronze hover:text-bg-primary"
						>
							Send Message
						</button>
					</form>
				{/if}
			</div>

			<!-- Contact Information -->
			<div class="order-1 space-y-8 lg:order-2">
				<section>
					<h3 class="text-h3 text-primary mb-4 font-serif">Studio</h3>
					<div class="text-secondary space-y-2">
						<p class="text-body font-sans">Available by appointment</p>
						<p class="text-small font-sans">Studio visits welcome for serious inquiries</p>
					</div>
				</section>

				<section>
					<h3 class="text-h3 text-primary mb-4 font-serif">Inquiries</h3>
					<div class="space-y-3">
						<div>
							<p class="text-small text-tertiary font-sans">Email</p>
							<a
								href="mailto:Juraanaa1313@gmail.com"
								class="text-body font-sans text-bronze-light transition-colors hover:text-bronze"
							>
								Juraanaa1313@gmail.com
							</a>
						</div>
						<div>
							<p class="text-small text-tertiary font-sans">Phone</p>
							<a
								href="tel:+97699441383"
								class="text-body text-secondary font-sans transition-colors hover:text-bronze-light"
							>
								+976 99 441 383
							</a>
							<br />
							<a
								href="tel:+97693114813"
								class="text-body text-secondary font-sans transition-colors hover:text-bronze-light"
							>
								+976 93 114 813
							</a>
						</div>
						<div>
							<p class="text-small text-tertiary font-sans">Viber</p>
							<a
								href="viber://chat?number=+97699441383"
								class="text-body text-secondary font-sans transition-colors hover:text-bronze-light"
							>
								+976 99 441 383
							</a>
						</div>
					</div>
				</section>

				<section>
					<h3 class="text-h3 text-primary mb-4 font-serif">Response Time</h3>
					<p class="text-body text-secondary font-sans leading-relaxed">
						I personally respond to all inquiries within 1-2 business days. For urgent matters or
						time-sensitive opportunities, please mention this in your message.
					</p>
				</section>

				<section>
					<h3 class="text-h3 text-primary mb-4 font-serif">Commissions</h3>
					<p class="text-body text-secondary font-sans leading-relaxed">
						Custom bronze sculptures are available with lead times typically ranging from 6-12
						months depending on scale and complexity. Initial consultations are complimentary.
					</p>
				</section>
			</div>
		</div>
	</div>
</main>
