<script>
	import '../app.css';
	import { onMount } from 'svelte';
	import { beforeNavigate, onNavigate } from '$app/navigation';
	import Navigation from '#lib/components/Navigation.svelte';
	import Footer from '#lib/components/Footer.svelte';
	let { children } = $props();

	onMount(() => {
		// Initialize Lenis after the component mounts
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		// Exposed so overlays (image zoom) can pause page scrolling.
		window.lenis = lenis;

		// Animation frame loop
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);

		// Cleanup on destroy
		return () => {
			lenis.destroy();
			window.lenis = undefined;
		};
	});

	// A click during Lenis's glide would carry the glide onto the next page.
	// stop() drops the in-flight animation so SvelteKit's scroll reset/restore wins.
	beforeNavigate(() => {
		window.lenis?.stop();
		window.lenis?.start();
	});

	// Subtle crossfade between pages via the native View Transitions API.
	// Browsers without it just navigate normally.
	onNavigate((navigation) => {
		if (!document.startViewTransition) return;
		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
	<link
		href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Minion+Pro:wght@400;500&family=Sabon:wght@400;500&family=Trajan+Pro:wght@400;700&display=swap"
		rel="stylesheet"
	/>

	<link rel="stylesheet" href="https://unpkg.com/lenis@1.3.15/dist/lenis.css" />
	<script src="https://unpkg.com/lenis@1.3.15/dist/lenis.min.js"></script>
</svelte:head>

<Navigation />

<div class="min-h-screen">
	{@render children()}
</div>

<Footer />
