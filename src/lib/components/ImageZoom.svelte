<script>
	/**
	 * Fullscreen viewer on a native <dialog> (ESC, focus trap, top layer for free).
	 * Zoom is done with transform-origin; panning moves the origin, eased in rAF. Mouse: click to zoom, move to explore, wheel to
	 * zoom deeper. Touch: double-tap, pinch, drag.
	 */
	let { images = [], alt = '', onclose = () => {} } = $props();

	const MAX = 5;
	const CLICK_ZOOM = 2.5;

	let dialog = $state();
	let frame = $state(); // never transformed: all pointer maths is measured against it
	let img = $state();
	let index = $state(0);
	let scale = $state(1);
	let ox = $state(50); // rendered transform-origin, % of the frame
	let oy = $state(50);
	let tx = 50; // where the origin is easing towards
	let ty = 50;
	let raf = 0;

	let src = $derived(images[index] ?? '');
	let zoomed = $derived(scale > 1.01);

	export function open(i = 0) {
		index = i;
		reset();
		dialog.showModal();
		window.lenis?.stop();
		raf = requestAnimationFrame(tick);
	}

	// Ease the origin toward its target every frame: smooth pan, no per-event jumps.
	function tick() {
		const dx = tx - ox;
		const dy = ty - oy;
		if (Math.abs(dx) > 0.01 || Math.abs(dy) > 0.01) {
			ox += dx * 0.16;
			oy += dy * 0.16;
		}
		raf = requestAnimationFrame(tick);
	}

	function setOrigin(x, y, immediate = false) {
		tx = x;
		ty = y;
		if (immediate) {
			ox = x;
			oy = y;
		}
	}

	function reset() {
		scale = 1;
	}

	function step(d) {
		if (images.length < 2) return;
		index = (index + d + images.length) % images.length;
		reset();
		setOrigin(50, 50, true);
	}

	function onClose() {
		cancelAnimationFrame(raf);
		window.lenis?.start();
		onclose(index);
	}

	const clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));

	/**
	 * Mouse: map the cursor's position across the whole frame onto the actual picture
	 * (object-fit: contain leaves empty bands), so the frame edge = the sculpture's edge.
	 * Click-zoom and panning share this mapping, so nothing jumps between them.
	 */
	let lastFx = 0.5;
	let lastFy = 0.5;
	function aim(clientX, clientY) {
		const r = frame.getBoundingClientRect();
		lastFx = clamp((clientX - r.left) / r.width, 0, 1);
		lastFy = clamp((clientY - r.top) / r.height, 0, 1);
		return aimAt(lastFx, lastFy);
	}

	/**
	 * Origin (as % of frame) such that cursor at the frame's left/top edge shows the
	 * picture's left/top edge flush with the frame, and right/bottom likewise.
	 * Scaling by s about O maps point P to O + s(P − O); solving for the edge to land on
	 * the frame edge gives O = sL/(s−1) on one side and (sR − W)/(s−1) on the other.
	 */
	function aimAt(fx, fy, s = scale > 1.01 ? scale : CLICK_ZOOM) {
		const nw = img.naturalWidth || 1;
		const nh = img.naturalHeight || 1;
		const r = frame.getBoundingClientRect();
		const k = Math.min(r.width / nw, r.height / nh);
		const axis = (f, frameLen, picLen) => {
			const p = picLen / frameLen; // picture length as fraction of the frame
			if (p * s <= 1) return 50; // still fits when zoomed: keep centred
			const lo = (1 - p) / 2; // picture start, fraction of frame
			const hi = lo + p;
			const oLo = (s * lo) / (s - 1);
			const oHi = (s * hi - 1) / (s - 1);
			return (oLo + f * (oHi - oLo)) * 100;
		};
		return [axis(fx, r.width, nw * k), axis(fy, r.height, nh * k)];
	}

	/** Touch: the exact point under the finger, as % of the frame. */
	function pointAt(clientX, clientY) {
		const r = frame.getBoundingClientRect();
		return [
			clamp(((clientX - r.left) / r.width) * 100, 0, 100),
			clamp(((clientY - r.top) / r.height) * 100, 0, 100)
		];
	}

	// --- mouse -------------------------------------------------------------
	function onClick(e) {
		if (e.pointerType === 'touch') return; // touch uses double-tap
		if (zoomed) return reset();
		setOrigin(...aim(e.clientX, e.clientY), true);
		scale = CLICK_ZOOM;
	}

	function onMouseMove(e) {
		if (zoomed) setOrigin(...aim(e.clientX, e.clientY));
	}

	// wheel needs a non-passive listener to stop the page/dialog from scrolling
	$effect(() => {
		if (!frame) return;
		const onWheel = (e) => {
			e.preventDefault();
			const wasZoomed = zoomed;
			scale = clamp(scale * Math.exp(-e.deltaY * 0.0025), 1, MAX);
			// the edge-flush origin depends on the zoom level, so re-aim for the new scale
			const [x, y] = aim(e.clientX, e.clientY);
			setOrigin(x, y, !wasZoomed);
		};
		frame.addEventListener('wheel', onWheel, { passive: false });
		return () => frame.removeEventListener('wheel', onWheel);
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
			if (!zoomed) setOrigin(...pointAt((a.x + b.x) / 2, (a.y + b.y) / 2), true);
		} else if (pts.size === 1) {
			const now = Date.now();
			if (now - lastTap < 280) {
				if (zoomed) reset();
				else {
					setOrigin(...pointAt(e.clientX, e.clientY), true);
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
			const r = frame.getBoundingClientRect();
			const k = 100 / (scale - 1);
			setOrigin(
				clamp(tx - ((e.clientX - prev.x) / r.width) * k, 0, 100),
				clamp(ty - ((e.clientY - prev.y) / r.height) * k, 0, 100),
				true
			);
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
	<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
	<div
		class="frame"
		class:zoomed
		bind:this={frame}
		onclick={onClick}
		onpointermove={(e) => (e.pointerType === 'touch' ? onPointerMove(e) : onMouseMove(e))}
		onpointerdown={onPointerDown}
		onpointerup={onPointerUp}
		onpointercancel={onPointerUp}
	>
		<img
			bind:this={img}
			{src}
			alt="{alt}, image {index + 1} of {images.length}"
			style="transform: scale({scale}); transform-origin: {ox}% {oy}%;"
			draggable="false"
		/>
	</div>

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

	.frame {
		position: fixed;
		inset: 4.5rem clamp(0.5rem, 6vw, 6rem);
		touch-action: none;
		cursor: zoom-in;
		animation: viewer-in 0.4s ease-out;
	}
	.frame.zoomed {
		cursor: zoom-out;
	}
	.frame img {
		width: 100%;
		height: 100%;
		object-fit: contain;
		user-select: none;
		/* only scale animates; the origin is eased in JS (a CSS transition on it restarts every event = jitter) */
		transition: transform 0.5s cubic-bezier(0.2, 0.7, 0.2, 1);
		will-change: transform;
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
		.frame,
		.frame img {
			animation: none;
			transition: none;
		}
	}
</style>
