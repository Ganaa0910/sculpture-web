/**
 * Svelte action for scroll-triggered reveal animations
 * Uses Intersection Observer for performance
 */
export function scrollReveal(node, options = {}) {
	const { delay = 0, duration = 400, distance = 20, once = true } = options;

	// Set initial state - subtle starting position
	node.style.opacity = '0';
	node.style.transform = `translateY(${distance}px)`;
	node.style.transition = `opacity ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1), transform ${duration}ms cubic-bezier(0.25, 0.1, 0.25, 1)`;
	node.style.transitionDelay = `${delay}ms`;
	node.style.willChange = 'opacity, transform';

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Small RAF delay for smoother batching
					requestAnimationFrame(() => {
						node.style.opacity = '1';
						node.style.transform = 'translateY(0)';
					});

					if (once) {
						observer.unobserve(node);
						// Clean up will-change after animation
						setTimeout(() => {
							node.style.willChange = 'auto';
						}, duration + delay);
					}
				} else if (!once) {
					node.style.opacity = '0';
					node.style.transform = `translateY(${distance}px)`;
				}
			});
		},
		{
			threshold: 0,
			rootMargin: '50px 0px 50px 0px' // Trigger early - 50px before entering viewport
		}
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		},
		update(newOptions) {
			const newDelay = newOptions.delay ?? delay;
			node.style.transitionDelay = `${newDelay}ms`;
		}
	};
}

/**
 * Staggered reveal for grid items
 * Adds incremental delay based on visible row position
 */
export function staggerReveal(node, options = {}) {
	const {
		index = 0,
		baseDelay = 0,
		stagger = 20, // Much faster stagger
		duration = 300,
		distance = 10 // Minimal movement
	} = options;

	// Only animate first few items, rest appear instantly
	if (index > 12) {
		node.style.opacity = '1';
		node.style.transform = 'translateY(0)';
		return { destroy() {}, update() {} };
	}

	// Cap the stagger so items don't wait too long
	const cappedIndex = Math.min(index, 6);
	const delay = baseDelay + cappedIndex * stagger;

	return scrollReveal(node, {
		delay,
		duration,
		distance,
		once: true
	});
}
