<script>
	export let sculpture;
	export let onClick = () => {};
</script>

<div 
	class="bg-bg-secondary border border-border-subtle hover:border-bronze-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group h-full"
	on:click={onClick}
	on:keydown={(e) => e.key === 'Enter' && onClick()}
	role="button"
	tabindex="0"
>
	<div class="relative h-full overflow-hidden">
		<img
			src={sculpture.image}
			alt={sculpture.title}
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
			loading="lazy"
			decoding="async"
		/>
		
		<!-- Overlay text -->
		<div class="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-transparent to-transparent"></div>
		<div class="absolute bottom-0 left-0 right-0 p-4">
			<h3 class="font-serif text-h3 text-primary mb-1 leading-tight">{sculpture.title}</h3>
			
			{#if sculpture.year}
				<p class="font-mono text-tiny text-bronze-light uppercase tracking-wider">
					{sculpture.year}
				</p>
			{/if}
		</div>
	</div>
</div>