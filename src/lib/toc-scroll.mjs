export const getActiveTocIndex = (targetTops, viewportHeight, atBottom) => {
	if (!targetTops.length) return -1;
	if (atBottom) return targetTops.length - 1;

	const marker = Math.min(Math.max(viewportHeight * 0.55, 160), 480);
	let currentIndex = 0;

	for (const [index, top] of targetTops.entries()) {
		if (top <= marker) currentIndex = index;
	}

	return currentIndex;
};
