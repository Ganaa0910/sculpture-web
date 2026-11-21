<script lang="ts">
	/**
	 * Optimized image component with art direction support
	 * Handles different images for mobile vs desktop
	 */
	interface Props {
		src: string;
		srcMobile?: string; // Optional mobile-specific image
		alt: string;
		class?: string;
		priority?: boolean;
		width?: number;
		height?: number;
	}

	let {
		src,
		srcMobile,
		alt,
		class: className = '',
		priority = false,
		width,
		height
	}: Props = $props();
</script>

{#if srcMobile}
	<!-- Art direction: different images for mobile vs desktop -->
	<picture>
		<source media="(min-width: 768px)" srcset={src} />
		<source media="(max-width: 767px)" srcset={srcMobile} />
		<img
			{src}
			{alt}
			class={className}
			loading={priority ? 'eager' : 'lazy'}
			fetchpriority={priority ? 'high' : undefined}
			decoding={priority ? 'auto' : 'async'}
			{width}
			{height}
		/>
	</picture>
{:else}
	<!-- Single image for all viewports -->
	<img
		{src}
		{alt}
		class={className}
		loading={priority ? 'eager' : 'lazy'}
		fetchpriority={priority ? 'high' : undefined}
		decoding={priority ? 'auto' : 'async'}
		{width}
		{height}
	/>
{/if}
