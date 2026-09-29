import assert from 'node:assert/strict';
import test from 'node:test';
import { getActiveTocIndex } from '../src/lib/toc-scroll.mjs';

test('activates the next visible section at the reader focus line', () => {
	assert.equal(getActiveTocIndex([-260, 400, 690, 980], 768, false), 1);
});

test('activates the final section at the bottom of the page', () => {
	assert.equal(getActiveTocIndex([-900, -520, -180, 260], 768, true), 3);
});
