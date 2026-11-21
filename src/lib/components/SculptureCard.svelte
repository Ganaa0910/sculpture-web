<script>
	export let sculpture;
	export let onClick = () => {};
</script>

<div
	class="group h-full cursor-pointer border border-border-subtle bg-bg-secondary transition-all duration-300 hover:-translate-y-1 hover:border-bronze-dark"
	on:click={onClick}
	on:keydown={(e) => e.key === 'Enter' && onClick()}
	role="button"
	tabindex="0"
	style="will-change: transform; transform: translateZ(0);"
>
	<div class="relative h-full overflow-hidden">
		<img
			src={sculpture.image}
			alt={sculpture.title}
			class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
			loading="lazy"
			decoding="async"
			width="800"
			height="1067"
			style="will-change: transform;"
		/>

		<!-- Overlay text -->
		<div
			class="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent"
		></div>
		<div class="absolute right-0 bottom-0 left-0 p-4">
			<h3 class="text-h3 text-primary mb-1 font-serif leading-tight">{sculpture.title}</h3>

			{#if sculpture.year}
				<p class="text-tiny font-mono tracking-wider text-bronze-light uppercase">
					{sculpture.year}
				</p>
			{/if}
		</div>
	</div>
</div>
