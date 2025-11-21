<script>
	import { page } from '$app/stores';
	
	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/gallery', label: 'Gallery' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="fixed top-0 w-full z-50 bg-bg-primary/80 backdrop-blur-nav border-b border-border-subtle">
	<div class="max-w-container mx-auto px-6 py-4">
		<div class="flex justify-between items-center">
			<a href="/" class="font-serif text-h3 text-primary hover:text-bronze-light transition-colors">
				Juraan
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex space-x-8">
				{#each links as link}
					<a 
						href={link.href}
						class="font-sans text-small uppercase tracking-wider text-secondary hover:text-bronze-light transition-colors {$page.url.pathname === link.href ? 'text-bronze-light' : ''}"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden text-secondary hover:text-bronze-light transition-colors"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					{#if mobileMenuOpen}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
					{:else}
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden bg-bg-primary/95 backdrop-blur-nav border-b border-border-subtle">
			<div class="px-6 py-4 space-y-4">
				{#each links as link}
					<a 
						href={link.href}
						class="block font-sans text-small uppercase tracking-wider text-secondary hover:text-bronze-light transition-colors {$page.url.pathname === link.href ? 'text-bronze-light' : ''}"
						on:click={closeMobileMenu}
					>
						{link.label}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>