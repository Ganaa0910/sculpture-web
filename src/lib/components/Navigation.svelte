<script>
	import { page } from '$app/state';
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
			} else if (currentScroll > lastScroll && currentScroll > 100) {
				// Hide when scrolling down, show when scrolling up
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

<nav
	class="fixed top-0 z-50 w-full border-b border-bronze-dark/20 bg-bg-primary/85 backdrop-blur-nav transition-transform duration-300 ease-in-out {navHidden
		? '-translate-y-full'
		: 'translate-y-0'}"
>
	<div class="mx-auto max-w-container px-6 py-6">
		<div class="flex items-center justify-between">
			<!-- Artist Name with decorative elements -->
			<a href="/" class="group flex items-center space-x-3">
				<div
					class="h-[1px] w-8 bg-bronze-dark transition-colors duration-300 group-hover:bg-bronze-light"
				></div>
				<span
					class="text-h3 text-primary tracking-wider transition-colors duration-300 group-hover:text-bronze-light"
					style="font-family: var(--font-family-juraan);"
				>
					JURAAN
				</span>
				<div
					class="h-[1px] w-8 bg-bronze-dark transition-colors duration-300 group-hover:bg-bronze-light"
				></div>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden items-center space-x-12 md:flex">
				{#each links as link}
					<a
						href={link.href}
						class="group text-small text-tertiary relative font-sans tracking-[0.2em] transition-all duration-300 hover:text-bronze-light {page
							.url.pathname === link.href
							? 'text-bronze-light'
							: ''}"
					>
						<span class="relative z-10">{link.label}</span>
						<!-- Underline animation -->

						<div
							class="absolute bottom-[-4px] left-0 h-[1px] w-0 bg-bronze-light transition-all duration-300 group-hover:w-full {page
								.url.pathname === link.href
								? 'w-full'
								: ''}"
						></div>
					</a>
				{/each}
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="text-secondary group relative flex h-10 w-10 items-center justify-center rounded-full border border-bronze-dark/40 transition-all duration-300 hover:border-bronze-light hover:text-bronze-light md:hidden"
				on:click={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<div class="relative flex h-5 w-5 items-center justify-center">
					<div
						class="absolute h-[1px] w-5 origin-center bg-current transition-all duration-300 ease-in-out {mobileMenuOpen
							? 'rotate-45'
							: '-translate-y-1.5'}"
					></div>
					<div
						class="absolute h-[1px] w-5 bg-current transition-all duration-300 ease-in-out {mobileMenuOpen
							? 'scale-0 opacity-0'
							: ''}"
					></div>
					<div
						class="absolute h-[1px] w-5 origin-center bg-current transition-all duration-300 ease-in-out {mobileMenuOpen
							? '-rotate-45'
							: 'translate-y-1.5'}"
					></div>
				</div>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	<div
		class="overflow-hidden border-b border-bronze-dark/20 bg-bg-primary/95 backdrop-blur-nav transition-all duration-300 ease-in-out md:hidden {mobileMenuOpen
			? 'max-h-96 opacity-100'
			: 'max-h-0 opacity-0'}"
	>
		<div
			class="transform space-y-6 px-6 py-8 transition-transform duration-300 ease-in-out {mobileMenuOpen
				? 'translate-y-0'
				: '-translate-y-full'}"
		>
			{#each links as link, index}
				<a
					href={link.href}
					class="group text-body text-secondary relative block font-sans tracking-[0.15em] transition-all duration-300 hover:text-bronze-light {page
						.url.pathname === link.href
						? 'text-bronze-light'
						: ''} transform py-2 {mobileMenuOpen
						? 'translate-x-0 opacity-100'
						: '-translate-x-4 opacity-0'}"
					style="transition-delay: {mobileMenuOpen ? (index + 1) * 100 : 0}ms"
					on:click={closeMobileMenu}
				>
					<div class="flex items-center space-x-4">
						<div
							class="h-[1px] w-4 bg-bronze-dark transition-all duration-300 group-hover:w-6 group-hover:bg-bronze-light {page
								.url.pathname === link.href
								? 'w-6 bg-bronze-light'
								: ''}"
						></div>

						<span>{link.label}</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</nav>
