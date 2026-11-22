<script>
	/**
	 * Fullscreen viewer on a native <dialog> (ESC, focus trap, top layer for free).
	 * Zoom is done with transform-origin: the point under the cursor/finger stays put,
	 * and panning just moves the origin. Mouse: click to zoom, move to explore, wheel to
	 * zoom deeper. Touch: double-tap, pinch, drag.
	 */
	let { images = [], alt = '', onclose = () => {} } = $props();

	const MAX = 5;
	const CLICK_ZOOM = 2.5;

	let dialog = $state();
	let img = $state();
	let index = $state(0);
	let scale = $state(1);
	let ox = $state(50); // transform-origin, % of the image box
	let oy = $state(50);

	let src = $derived(images[index] ?? '');
	let zoomed = $derived(scale > 1.01);

	export function open(i = 0) {
		index = i;
		reset();
		dialog.showModal();
		window.lenis?.stop();
	}

	function reset() {
		scale = 1;
		ox = oy = 50;
	}

	function step(d) {
		if (images.length < 2) return;
		index = (index + d + images.length) % images.length;
		reset();
	}

	function onClose() {
		window.lenis?.start();
		onclose(index);
	}

	const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

	/** pointer position as % of the image's untransformed box */
	function originAt(clientX, clientY) {
		const r = img.getBoundingClientRect();
		// getBoundingClientRect includes the current transform, so undo it
		const w = r.width / scale;
		const h = r.height / scale;
		const left = r.left + (r.width - w) * (ox / 100);
		const top = r.top + (r.height - h) * (oy / 100);
		return [
			clamp(((clientX - left) / w) * 100, 0, 100),
			clamp(((clientY - top) / h) * 100, 0, 100)
		];
	}

	// --- mouse -------------------------------------------------------------
	function onClick(e) {
		if (e.pointerType === 'touch') return; // touch uses double-tap
		if (zoomed) return reset();
		[ox, oy] = originAt(e.clientX, e.clientY);
		scale = CLICK_ZOOM;
	}

	function onMouseMove(e) {
		if (!zoomed) return;
		[ox, oy] = originAt(e.clientX, e.clientY);
	}

	// wheel needs a non-passive listener to stop the page/dialog from scrolling
	$effect(() => {
		if (!img) return;
		const onWheel = (e) => {
			e.preventDefault();
			if (!zoomed) [ox, oy] = originAt(e.clientX, e.clientY);
			scale = clamp(scale * Math.exp(-e.deltaY * 0.0025), 1, MAX);
			if (!zoomed) reset();
		};
		img.addEventListener('wheel', onWheel, { passive: false });
		return () => img.removeEventListener('wheel', onWheel);
	});

	// --- touch -------------------------------------------------------------
	const pts = new Map();
	let pinch = null; // { d0, s0 }
	let lastTap = 0;

	function onPointerDown(e) {
		if (e.pointerType !== 'touch') return;
		pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
		if (pts.size === 2) {
			const [a, b] = [...pts.values()];
			pinch = { d0: Math.hypot(a.x - b.x, a.y - b.y), s0: scale };
			if (!zoomed) [ox, oy] = originAt((a.x + b.x) / 2, (a.y + b.y) / 2);
		} else if (pts.size === 1) {
			const now = Date.now();
			if (now - lastTap < 280) {
				if (zoomed) reset();
				else {
					[ox, oy] = originAt(e.clientX, e.clientY);
					scale = CLICK_ZOOM;
				}
			}
			lastTap = now;
		}
	}

	function onPointerMove(e) {
		if (e.pointerType !== 'touch' || !pts.has(e.pointerId)) return;
		const prev = pts.get(e.pointerId);
		pts.set(e.pointerId, { x: e.clientX, y: e.clientY });

		if (pinch && pts.size === 2) {
			const [a, b] = [...pts.values()];
			scale = clamp((pinch.s0 * Math.hypot(a.x - b.x, a.y - b.y)) / pinch.d0, 1, MAX);
		} else if (pts.size === 1 && zoomed) {
			// moving the origin by Δ% shifts the content by Δ% · size · (scale − 1), so invert that
			const r = img.getBoundingClientRect();
			const k = 100 / (scale - 1);
			ox = clamp(ox - ((e.clientX - prev.x) / (r.width / scale)) * k, 0, 100);
			oy = clamp(oy - ((e.clientY - prev.y) / (r.height / scale)) * k, 0, 100);
		}
	}

	function onPointerUp(e) {
		pts.delete(e.pointerId);
		if (pts.size < 2) pinch = null;
		if (!zoomed && pts.size === 0) reset();
	}

	function onKeydown(e) {
		if (e.key === 'ArrowRight') step(1);
		else if (e.key === 'ArrowLeft') step(-1);
	}
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	class="viewer"
	onclose={onClose}
	onkeydown={onKeydown}
	onclick={(e) => e.target === dialog && dialog.close()}
	aria-label={alt}
>
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
	<img
		bind:this={img}
		{src}
		alt="{alt}, image {index + 1} of {images.length}"
		class:zoomed
		style="transform: scale({scale}); transform-origin: {ox}% {oy}%;"
		draggable="false"
		onclick={onClick}
		onpointermove={(e) => (e.pointerType === 'touch' ? onPointerMove(e) : onMouseMove(e))}
		onpointerdown={onPointerDown}
		onpointerup={onPointerUp}
		onpointercancel={onPointerUp}
	/>

	<div class="bar top">
		<span class="count">
			{String(index + 1).padStart(2, '0')}
			<span class="dim">/ {String(images.length).padStart(2, '0')}</span>
		</span>
		<form method="dialog">
			<!-- svelte-ignore a11y_autofocus (focusing the close button is the dialog pattern) -->
			<button class="icon" aria-label="Close viewer" autofocus>
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
					<path d="M6 6l12 12M18 6L6 18" />
				</svg>
			</button>
		</form>
	</div>

	{#if images.length > 1}
		<button class="icon nav prev" onclick={() => step(-1)} aria-label="Previous image">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M15 5l-7 7 7 7" />
			</svg>
		</button>
		<button class="icon nav next" onclick={() => step(1)} aria-label="Next image">
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
				<path d="M9 5l7 7-7 7" />
			</svg>
		</button>
	{/if}

	<p class="hint">
		<span class="fine"
			>{zoomed ? 'Move to explore · click to reset' : 'Click to zoom · scroll for more'}</span
		>
		<span class="coarse"
			>{zoomed ? 'Drag to explore · double-tap to reset' : 'Double-tap or pinch to zoom'}</span
		>
	</p>
</dialog>

<style>
	.viewer {
		width: 100vw;
		height: 100dvh;
		max-width: none;
		max-height: none;
		margin: 0;
		padding: 0;
		border: 0;
		background: #070707;
		color: var(--color-text-primary);
		overflow: hidden;
		display: none;
	}
	.viewer[open] {
		display: grid;
		place-items: center;
		animation: viewer-in 0.35s ease-out;
	}
	.viewer::backdrop {
		background: rgb(0 0 0 / 0.9);
	}

	img {
		max-width: 100vw;
		max-height: 100dvh;
		padding: 4.5rem clamp(0.5rem, 6vw, 6rem);
		object-fit: contain;
		user-select: none;
		touch-action: none;
		cursor: zoom-in;
		transition:
			transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1),
			transform-origin 0.12s linear;
		animation: viewer-in 0.4s ease-out;
	}
	img.zoomed {
		cursor: zoom-out;
		transition:
			transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1),
			transform-origin 0.08s linear;
	}

	.bar {
		position: fixed;
		inset: 0 0 auto 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem clamp(1rem, 3vw, 2rem);
		pointer-events: none;
	}
	.bar > * {
		pointer-events: auto;
	}
	.count {
		font-family: var(--font-family-mono);
		font-size: 0.75rem;
		letter-spacing: 0.2em;
		color: var(--color-bronze-light);
	}
	.dim {
		color: var(--color-text-tertiary);
	}

	.icon {
		display: grid;
		place-items: center;
		width: 2.75rem;
		height: 2.75rem;
		border: 1px solid rgb(255 255 255 / 0.12);
		border-radius: 999px;
		background: rgb(10 10 10 / 0.6);
		backdrop-filter: blur(8px);
		color: var(--color-text-primary);
		cursor: pointer;
		transition:
			border-color 0.3s,
			color 0.3s;
	}
	.icon:hover,
	.icon:focus-visible {
		border-color: var(--color-bronze);
		color: var(--color-bronze-light);
		outline: none;
	}
	.icon svg {
		width: 1.25rem;
		height: 1.25rem;
	}

	.nav {
		position: fixed;
		top: 50%;
		translate: 0 -50%;
	}
	.prev {
		left: clamp(0.5rem, 2vw, 1.5rem);
	}
	.next {
		right: clamp(0.5rem, 2vw, 1.5rem);
	}

	.hint {
		position: fixed;
		bottom: 1.25rem;
		left: 50%;
		translate: -50% 0;
		margin: 0;
		font-family: var(--font-family-mono);
		font-size: 0.65rem;
		letter-spacing: 0.18em;
		text-transform: uppercase;
		color: var(--color-text-secondary);
		white-space: nowrap;
		pointer-events: none;
		padding: 0.5rem 0.9rem;
		border-radius: 999px;
		background: rgb(10 10 10 / 0.65);
		backdrop-filter: blur(8px);
	}
	.coarse {
		display: none;
	}
	@media (pointer: coarse) {
		.fine {
			display: none;
		}
		.coarse {
			display: inline;
		}
		.nav {
			top: auto;
			bottom: 3.5rem;
			translate: none;
		}
	}

	@keyframes viewer-in {
		from {
			opacity: 0;
		}
	}
	@media (prefers-reduced-motion: reduce) {
		.viewer[open],
		img {
			animation: none;
			transition: none;
		}
	}
</style>
