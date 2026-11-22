<script>
	/**
	 * Justified spotlight grid: equal-height rows whose widths come from each photo's real
	 * aspect ratio (nothing cropped, no holes). Hover lights one piece and dims the rest.
	 */
	import { staggerReveal } from '#lib/actions/scrollReveal.js';

	let { works = [], label = 'Sculptures', eager = 6 } = $props();
</script>

<section class="works" aria-label={label}>
	{#each works as sculpture, index (sculpture.id)}
		{@const aspect = sculpture.aspect ?? 0.667}
		<a
			href="/sculpture/{sculpture.id}"
			class="work"
			style="--a: {aspect}"
			use:staggerReveal={{ index, stagger: 40, distance: 16, duration: 500 }}
		>
			<img
				src={sculpture.image}
				alt="{sculpture.title}, bronze sculpture by Juraan"
				width={Math.round(1000 * aspect)}
				height="1000"
				loading={index < eager ? 'eager' : 'lazy'}
				decoding="async"
			/>
			<span class="plaque">
				<span class="plaque-no">{String(index + 1).padStart(2, '0')}</span>
				<span class="plaque-title">{sculpture.title}</span>
				{#if sculpture.year || sculpture.dimensions}
					<span class="plaque-meta">
						{[sculpture.year, sculpture.dimensions && `${sculpture.dimensions} cm`]
							.filter(Boolean)
							.join(' · ')}
					</span>
				{/if}
			</span>
		</a>
	{/each}
</section>

<style>
	.works {
		/* target row height; rows stretch slightly to fill the width */
		--h: clamp(170px, 26vw, 400px);
		display: flex;
		flex-wrap: wrap;
		gap: clamp(8px, 1vw, 14px);
	}

	/* keeps the last row at natural height instead of blowing it up to full width */
	.works::after {
		content: '';
		flex-grow: 999;
	}

	/* Justified-row trick: basis and grow both proportional to aspect => equal heights per row */
	.work {
		position: relative;
		flex: calc(var(--a) * 100) 1 calc(var(--a) * var(--h));
		aspect-ratio: var(--a);
		overflow: hidden;
		background: var(--color-bg-secondary);
		outline: 1px solid transparent;
		outline-offset: 4px;
		transition: outline-color 0.4s;
	}

	.work img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition:
			filter 0.6s ease,
			transform 1.4s cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.work:focus-visible {
		outline-color: var(--color-bronze);
	}

	/* Museum placard */
	.plaque {
		position: absolute;
		inset: auto 0 0 0;
		display: grid;
		grid-template-columns: auto 1fr;
		column-gap: 0.75rem;
		align-items: baseline;
		padding: 2.5rem 1rem 0.9rem;
		background: linear-gradient(to top, rgb(10 10 10 / 0.92), transparent);
		transition:
			transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1),
			opacity 0.4s;
	}
	.plaque-no {
		grid-row: span 2;
		font-family: var(--font-family-mono);
		font-size: 0.7rem;
		letter-spacing: 0.15em;
		color: var(--color-bronze);
	}
	.plaque-title {
		font-family: var(--font-family-serif);
		font-size: clamp(0.85rem, 1.2vw, 1.1rem);
		line-height: 1.2;
		color: var(--color-text-primary);
	}
	.plaque-meta {
		font-family: var(--font-family-mono);
		font-size: 0.65rem;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--color-bronze-light);
		opacity: 0.8;
	}

	/* Spotlight: on pointer devices the hovered piece stays lit, everything else falls into shadow */
	@media (hover: hover) {
		.plaque {
			transform: translateY(100%);
			opacity: 0;
		}
		.work:hover .plaque,
		.work:focus-visible .plaque {
			transform: none;
			opacity: 1;
		}
		.work:hover img {
			transform: scale(1.045);
		}
		.work:hover {
			outline-color: rgb(205 127 50 / 0.45);
		}
		.works:has(.work:hover) .work:not(:hover) img {
			filter: grayscale(0.85) brightness(0.32);
		}
	}

	/* Phones: plaque always visible but compact, no number */
	@media (hover: none) {
		.plaque {
			padding: 1.75rem 0.6rem 0.55rem;
		}
		.plaque-no,
		.plaque-meta {
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.work img,
		.plaque {
			transition: none;
		}
	}
</style>
