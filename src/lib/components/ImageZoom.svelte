<script>
	let { src = '', alt = '' } = $props();

	let isOpen = $state(false);
	let scale = $state(1);
	let translateX = $state(0);
	let translateY = $state(0);
	let isDragging = $state(false);
	let startX = 0;
	let startY = 0;
	let initialPinchDistance = 0;
	let initialScale = 1;

	export function open() {
		isOpen = true;
		resetTransform();
		document.body.style.overflow = 'hidden';
	}

	export function close() {
		isOpen = false;
		document.body.style.overflow = '';
		resetTransform();
	}

	function resetTransform() {
		scale = 1;
		translateX = 0;
		translateY = 0;
	}

	function handleWheel(e) {
		e.preventDefault();
		const delta = e.deltaY * -0.002;
		scale = Math.min(Math.max(1, scale + delta), 4);

		if (scale === 1) {
			translateX = 0;
			translateY = 0;
		}
	}

	function handleMouseDown(e) {
		if (scale > 1) {
			isDragging = true;
			startX = e.clientX - translateX;
			startY = e.clientY - translateY;
		}
	}

	function handleMouseMove(e) {
		if (isDragging) {
			translateX = e.clientX - startX;
			translateY = e.clientY - startY;
		}
	}

	function handleMouseUp() {
		isDragging = false;
	}

	function handleKeydown(e) {
		if (e.key === 'Escape') close();
	}

	function getTouchDistance(touches) {
		const dx = touches[0].clientX - touches[1].clientX;
		const dy = touches[0].clientY - touches[1].clientY;
		return Math.sqrt(dx * dx + dy * dy);
	}

	function handleTouchStart(e) {
		if (e.touches.length === 1 && scale > 1) {
			// Single finger drag
			isDragging = true;
			startX = e.touches[0].clientX - translateX;
			startY = e.touches[0].clientY - translateY;
		} else if (e.touches.length === 2) {
			// Pinch to zoom
			initialPinchDistance = getTouchDistance(e.touches);
			initialScale = scale;
		}
	}

	function handleTouchMove(e) {
		e.preventDefault();

		if (e.touches.length === 1 && isDragging) {
			// Single finger drag
			translateX = e.touches[0].clientX - startX;
			translateY = e.touches[0].clientY - startY;
		} else if (e.touches.length === 2) {
			// Pinch to zoom
			const currentDistance = getTouchDistance(e.touches);
			const scaleChange = currentDistance / initialPinchDistance;
			scale = Math.min(Math.max(1, initialScale * scaleChange), 4);

			if (scale === 1) {
				translateX = 0;
				translateY = 0;
			}
		}
	}

	function handleTouchEnd(e) {
		if (e.touches.length === 0) {
			isDragging = false;
			initialPinchDistance = 0;
		}
	}
</script>

{#if isOpen}
	<div
		class="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
		onclick={close}
		onkeydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<!-- Close button -->
		<button
			onclick={close}
			class="absolute top-6 right-6 z-10 text-bronze-light hover:text-bronze transition-colors p-2"
			aria-label="Close zoom view"
		>
			<svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>

		<!-- Zoom controls -->
		<div class="absolute top-6 left-6 z-10 flex flex-col gap-2">
			<button
				onclick={(e) => { e.stopPropagation(); scale = Math.min(scale + 0.5, 4); }}
				class="bg-bg-secondary/80 backdrop-blur text-bronze-light hover:text-bronze border border-border-subtle hover:border-bronze-dark transition-all p-2 rounded"
				aria-label="Zoom in"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
				</svg>
			</button>
			<button
				onclick={(e) => { e.stopPropagation(); scale = Math.max(scale - 0.5, 1); if (scale === 1) { translateX = 0; translateY = 0; } }}
				class="bg-bg-secondary/80 backdrop-blur text-bronze-light hover:text-bronze border border-border-subtle hover:border-bronze-dark transition-all p-2 rounded"
				aria-label="Zoom out"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
				</svg>
			</button>
			<button
				onclick={(e) => { e.stopPropagation(); resetTransform(); }}
				class="bg-bg-secondary/80 backdrop-blur text-bronze-light hover:text-bronze border border-border-subtle hover:border-bronze-dark transition-all p-2 rounded text-tiny"
				aria-label="Reset zoom"
			>
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
				</svg>
			</button>
		</div>

		<!-- Instructions -->
		<div class="absolute bottom-6 left-1/2 -translate-x-1/2 text-bronze-light/60 text-tiny font-mono tracking-wider uppercase text-center px-4">
			<span class="hidden md:inline">Scroll to zoom • Drag to pan • ESC to close</span>
			<span class="md:hidden">Pinch to zoom • Drag to pan</span>
		</div>

		<!-- Image container -->
		<div
			class="max-w-[90vw] max-h-[90vh] overflow-hidden cursor-{scale > 1 ? 'move' : 'zoom-in'}"
			onclick={(e) => e.stopPropagation()}
			onwheel={handleWheel}
			onmousedown={handleMouseDown}
			onmousemove={handleMouseMove}
			onmouseup={handleMouseUp}
			onmouseleave={handleMouseUp}
			ontouchstart={handleTouchStart}
			ontouchmove={handleTouchMove}
			ontouchend={handleTouchEnd}
			role="button"
			tabindex="0"
		>
			<img
				{src}
				{alt}
				class="max-w-full max-h-[90vh] object-contain transition-transform duration-200 select-none"
				style="transform: scale({scale}) translate({translateX / scale}px, {translateY / scale}px); cursor: {isDragging ? 'grabbing' : scale > 1 ? 'grab' : 'zoom-in'};"
				draggable="false"
			/>
		</div>
	</div>
{/if}
