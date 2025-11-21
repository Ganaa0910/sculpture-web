<script lang="ts">
	/**
	 * Optimized image component with best practices for loading and caching
	 */
	interface Props {
		src: string;
		alt: string;
		class?: string;
		priority?: boolean; // If true, use eager loading and high priority
		width?: number;
		height?: number;
	}

	let {
		src,
		alt,
		class: className = '',
		priority = false,
		width,
		height
	}: Props = $props();
</script>

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
