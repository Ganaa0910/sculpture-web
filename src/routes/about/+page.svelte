<script>
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	onMount(() => {
		// Redirect to home page about section
		goto('/#about-section', { replaceState: true });
	});
</script>

<svelte:head>
	<title>About - Juraan</title>
	<meta name="description" content="Learn about Juraan's artistic journey, philosophy, and approach to bronze sculpture" />
</svelte:head>

<!-- Loading state while redirecting -->
<main class="min-h-screen flex items-center justify-center bg-bg-primary">
	<div class="text-center">
		<div class="w-12 h-12 border-2 border-bronze border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
		<p class="text-secondary font-sans">Redirecting...</p>
	</div>
</main>
