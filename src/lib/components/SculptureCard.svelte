<script>
	export let sculpture;
	export let onClick = () => {};
</script>

<div 
	class="bg-bg-secondary border border-border-subtle hover:border-bronze-dark transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
	on:click={onClick}
	on:keydown={(e) => e.key === 'Enter' && onClick()}
	role="button"
	tabindex="0"
>
	<div class="aspect-sculpture overflow-hidden">
		<img 
			src={sculpture.image} 
			alt={sculpture.title}
			class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
		/>
	</div>
	
	<div class="p-6">
		<h3 class="font-serif text-h3 text-primary mb-2">{sculpture.title}</h3>
		
		{#if sculpture.year}
			<p class="font-mono text-tiny text-tertiary uppercase tracking-wider mb-2">
				{sculpture.year}
			</p>
		{/if}
		
		{#if sculpture.description}
			<p class="font-sans text-small text-secondary leading-relaxed mb-4">
				{sculpture.description}
			</p>
		{/if}
		
		{#if sculpture.dimensions || sculpture.material}
			<div class="text-tiny text-muted font-mono uppercase tracking-wider space-y-1">
				{#if sculpture.material}
					<p>{sculpture.material}</p>
				{/if}
				{#if sculpture.dimensions}
					<p>{sculpture.dimensions}</p>
				{/if}
			</div>
		{/if}
	</div>
</div>