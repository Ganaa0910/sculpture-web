<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';

	const links = [
		{ href: '/', label: 'Home' },
		{ href: '/gallery', label: 'Sculptures' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	let mobileMenuOpen = $state(false);
	let navHidden = $state(false);
	let lastScroll = 0;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}

	onMount(() => {
		const handleScroll = () => {
			const currentScroll = window.scrollY;

			// Don't hide nav when mobile menu is open
			if (mobileMenuOpen) {
				navHidden = false;
				lastScroll = currentScroll;
				return;
			}

			// Always show nav when at top
			if (currentScroll <= 100) {
				navHidden = false;
			}
			// Hide when scrolling down, show when scrolling up
			else if (currentScroll > lastScroll && currentScroll > 100) {
				navHidden = true;
			} else if (currentScroll < lastScroll) {
				navHidden = false;
			}

			lastScroll = currentScroll;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<nav class="fixed top-0 w-full z-50 bg-bg-primary/85 backdrop-blur-nav border-b border-bronze-dark/20 transition-transform duration-300 ease-in-out {navHidden ? '-translate-y-full' : 'translate-y-0'}">
	<div class="max-w-container mx-auto px-6 py-6">
		<div class="flex justify-between items-center">
			<!-- Artist Name with decorative elements -->
			<a href="/" class="group flex items-center space-x-3">
				<div class="w-8 h-[1px] bg-bronze-dark group-hover:bg-bronze-light transition-colors duration-300"></div>
				<span class="text-h3 text-primary group-hover:text-bronze-light transition-colors duration-300 tracking-wider" style="font-family: var(--font-family-juraan);">
					JURAAN
				</span>
				<div class="w-8 h-[1px] bg-bronze-dark group-hover:bg-bronze-light transition-colors duration-300"></div>
			</a>
			
			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center space-x-12">
				{#each links as link}
					<a 
						href={link.href}
						class="relative group font-sans text-small tracking-[0.2em] text-tertiary hover:text-bronze-light transition-all duration-300 {$page.url.pathname === link.href ? 'text-bronze-light' : ''}"
					>
						<span class="relative z-10">{link.label}</span>
						<!-- Underline animation -->
						<div class="absolute bottom-[-4px] left-0 w-0 h-[1px] bg-bronze-light group-hover:w-full transition-all duration-300 {$page.url.pathname === link.href ? 'w-full' : ''}"></div>
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button 
				class="md:hidden relative w-10 h-10 rounded-full border border-bronze-dark/40 hover:border-bronze-light text-secondary hover:text-bronze-light transition-all duration-300 group flex items-center justify-center"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<div class="relative w-5 h-5 flex items-center justify-center">
					<div class="absolute w-5 h-[1px] bg-current transition-all duration-300 ease-in-out origin-center {mobileMenuOpen ? 'rotate-45' : '-translate-y-1.5'}"></div>
					<div class="absolute w-5 h-[1px] bg-current transition-all duration-300 ease-in-out {mobileMenuOpen ? 'opacity-0 scale-0' : ''}"></div>
					<div class="absolute w-5 h-[1px] bg-current transition-all duration-300 ease-in-out origin-center {mobileMenuOpen ? '-rotate-45' : 'translate-y-1.5'}"></div>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	<div class="md:hidden bg-bg-primary/95 backdrop-blur-nav border-b border-bronze-dark/20 overflow-hidden transition-all duration-300 ease-in-out {mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}">
		<div class="px-6 py-8 space-y-6 transform transition-transform duration-300 ease-in-out {mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}">
			{#each links as link, index}
				<a 
					href={link.href}
					class="block relative group font-sans text-body tracking-[0.15em] text-secondary hover:text-bronze-light transition-all duration-300 {$page.url.pathname === link.href ? 'text-bronze-light' : ''} py-2 transform {mobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}"
					style="transition-delay: {mobileMenuOpen ? (index + 1) * 100 : 0}ms"
					on:click={closeMobileMenu}
				>
					<div class="flex items-center space-x-4">
						<div class="w-4 h-[1px] bg-bronze-dark group-hover:bg-bronze-light group-hover:w-6 transition-all duration-300 {$page.url.pathname === link.href ? 'bg-bronze-light w-6' : ''}"></div>
						<span>{link.label}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</nav>