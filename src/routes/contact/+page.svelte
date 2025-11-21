<script>
	import { enhance } from '$app/forms';
	
	let form;
	let submitted = false;
</script>

<svelte:head>
	<title>Contact - Juraan</title>
	<meta name="description" content="Get in touch with Juraan for artwork inquiries, commissions, and exhibitions" />
	<!-- Preload critical background image -->
	<link rel="preload" as="image" href="/backgrounds/contact.png" fetchpriority="high" />
</svelte:head>

<main class="relative pt-24 pb-section">
	<!-- Contact Background -->
	<div class="fixed inset-0 z-0">
		<img
			src="/backgrounds/contact.png"
			alt="Contact background"
			class="w-full h-full object-cover object-center"
			loading="eager"
			fetchpriority="high"
		/>
		<div class="absolute inset-0 bg-bg-primary/85"></div>
		<div class="absolute inset-0 bg-gradient-radial from-transparent via-bg-primary/25 to-bg-primary/80"></div>
	</div>

	<div class="relative z-10 max-w-4xl mx-auto px-6">
		
		<!-- Page Header -->
		<header class="mb-16 text-center">
			<h1 class="text-h1 text-bronze-light mb-6" style="font-family: var(--font-family-juraan);">Contact</h1>
			<p class="font-sans text-body text-secondary max-w-2xl mx-auto">
				Interested in commissioning a piece, discussing exhibitions, or learning more about the work? 
				I welcome conversations about art, mythology, and the stories bronze can tell.
			</p>
		</header>

		<div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
			
			<!-- Contact Form -->
			<div class="order-2 lg:order-1">
				{#if submitted}
					<div class="bg-bg-secondary border border-bronze-dark p-8 text-center">
						<h3 class="font-serif text-h3 text-bronze-light mb-4">Message Sent</h3>
						<p class="font-sans text-body text-secondary">Thank you for your inquiry. I'll respond within 1-2 business days.</p>
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
						<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<label for="name" class="block font-sans text-small text-secondary mb-2">Name *</label>
								<input 
									type="text" 
									id="name" 
									name="name" 
									required
									class="w-full bg-bg-secondary border border-border-medium focus:border-bronze text-primary placeholder-text-muted px-4 py-3 transition-colors"
									placeholder="Your full name"
								/>
							</div>
							<div>
								<label for="email" class="block font-sans text-small text-secondary mb-2">Email *</label>
								<input 
									type="email" 
									id="email" 
									name="email" 
									required
									class="w-full bg-bg-secondary border border-border-medium focus:border-bronze text-primary placeholder-text-muted px-4 py-3 transition-colors"
									placeholder="your@email.com"
								/>
							</div>
						</div>
						
						<div>
							<label for="subject" class="block font-sans text-small text-secondary mb-2">Subject</label>
							<select 
								id="subject" 
								name="subject"
								class="w-full bg-bg-secondary border border-border-medium focus:border-bronze text-primary px-4 py-3 transition-colors"
							>
								<option value="general">General Inquiry</option>
								<option value="commission">Commission Request</option>
								<option value="exhibition">Exhibition Opportunity</option>
								<option value="purchase">Purchase Inquiry</option>
								<option value="press">Press/Media</option>
							</select>
						</div>
						
						<div>
							<label for="message" class="block font-sans text-small text-secondary mb-2">Message *</label>
							<textarea 
								id="message" 
								name="message" 
								required
								rows="6"
								class="w-full bg-bg-secondary border border-border-medium focus:border-bronze text-primary placeholder-text-muted px-4 py-3 transition-colors resize-y"
								placeholder="Tell me about your interest in the work..."
							></textarea>
						</div>
						
						<button 
							type="submit"
							class="bg-transparent border border-bronze text-bronze-light hover:bg-bronze hover:text-bg-primary transition-all duration-300 px-8 py-3 font-sans text-small uppercase tracking-wider"
						>
							Send Message
						</button>
					</form>
				{/if}
			</div>

			<!-- Contact Information -->
			<div class="order-1 lg:order-2 space-y-8">
				
				<section>
					<h3 class="font-serif text-h3 text-primary mb-4">Studio</h3>
					<div class="space-y-2 text-secondary">
						<p class="font-sans text-body">Available by appointment</p>
						<p class="font-sans text-small">Studio visits welcome for serious inquiries</p>
					</div>
				</section>

				<section>
					<h3 class="font-serif text-h3 text-primary mb-4">Inquiries</h3>
					<div class="space-y-3">
						<div>
							<p class="font-sans text-small text-tertiary">Email</p>
							<a href="mailto:juraan@example.com" class="font-sans text-body text-bronze-light hover:text-bronze transition-colors">
								juraan@example.com
							</a>
						</div>
						<div>
							<p class="font-sans text-small text-tertiary">Phone</p>
							<p class="font-sans text-body text-secondary">+1 (555) 123-4567</p>
						</div>
					</div>
				</section>

				<section>
					<h3 class="font-serif text-h3 text-primary mb-4">Response Time</h3>
					<p class="font-sans text-body text-secondary leading-relaxed">
						I personally respond to all inquiries within 1-2 business days. 
						For urgent matters or time-sensitive opportunities, please mention this in your message.
					</p>
				</section>

				<section>
					<h3 class="font-serif text-h3 text-primary mb-4">Commissions</h3>
					<p class="font-sans text-body text-secondary leading-relaxed">
						Custom bronze sculptures are available with lead times typically ranging 
						from 6-12 months depending on scale and complexity. Initial consultations are complimentary.
					</p>
				</section>

			</div>
		</div>

	</div>
</main>