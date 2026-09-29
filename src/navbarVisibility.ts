interface NavbarVisibilityOptions {
	isInteractionOpen?: () => boolean;
}

const TOP_VISIBLE_THRESHOLD = 40;
const HIDE_START_THRESHOLD = 80;
const DIRECTION_DELTA = 8;

export function setupNavbarVisibility(header: HTMLElement, options: NavbarVisibilityOptions = {}) {
	let lastScrollY = Math.max(window.scrollY, 0);
	let framePending = false;

	const show = () => {
		header.dataset.state = 'visible';
	};

	const update = () => {
		const currentScrollY = Math.max(window.scrollY, 0);
		header.dataset.scrolled = String(currentScrollY > TOP_VISIBLE_THRESHOLD);

		if (currentScrollY < TOP_VISIBLE_THRESHOLD || options.isInteractionOpen?.()) {
			show();
			lastScrollY = currentScrollY;
			framePending = false;
			return;
		}

		const delta = currentScrollY - lastScrollY;
		if (Math.abs(delta) >= DIRECTION_DELTA) {
			header.dataset.state = delta > 0 && currentScrollY > HIDE_START_THRESHOLD ? 'hidden' : 'visible';
			lastScrollY = currentScrollY;
		}

		framePending = false;
	};

	const onScroll = () => {
		if (framePending) return;
		framePending = true;
		window.requestAnimationFrame(update);
	};

	header.dataset.state = 'visible';
	header.dataset.scrolled = String(lastScrollY > TOP_VISIBLE_THRESHOLD);
	window.addEventListener('scroll', onScroll, { passive: true });

	return { show };
}

export const navbarVisibilityConfig = {
	topVisibleThreshold: TOP_VISIBLE_THRESHOLD,
	hideStartThreshold: HIDE_START_THRESHOLD,
	directionDelta: DIRECTION_DELTA
};
