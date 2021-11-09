import ResizeHook from '$lib/utilities/hook/resize';
import { jest } from '@jest/globals';
// import { render, fireEvent } from '@testing-library/svelte';

describe('resize hook test suite', () => {
	let windowDimensions = {};
	const removeEventListener = jest.fn();
	global.removeEventListener = removeEventListener;

	beforeEach(async () => {
		global.innerHeight = 768;
		global.innerWidth = 1024;
		windowDimensions = {};
	});
	afterEach(async () => {
		jest.clearAllMocks();
	});
	it('it works', async () => {
		const destroyHook = ResizeHook.subscribe((hookValues) => {
			windowDimensions = hookValues;
		});
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('height', 768);
		expect(removeEventListener).not.toBeCalled();
		destroyHook();
		expect(removeEventListener).toBeCalledTimes(1);
	});
	it('testing horizontal resize', async () => {
		const destroyHook = ResizeHook.subscribe((hookValues) => {
			windowDimensions = hookValues;
		});
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('height', 768);
		global.innerWidth = 1500;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 768);
		expect(windowDimensions).toHaveProperty('width', 1500);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'up');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'horizontal');
		global.innerWidth = 1200;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 768);
		expect(windowDimensions).toHaveProperty('width', 1200);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'down');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'horizontal');
		expect(removeEventListener).not.toBeCalled();
		destroyHook();
		expect(removeEventListener).toBeCalledTimes(1);
	});
	it('testing vertical resize', async () => {
		const destroyHook = ResizeHook.subscribe((hookValues) => {
			windowDimensions = hookValues;
		});
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('height', 768);
		global.innerHeight = 1500;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 1500);
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'up');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'vertical');
		global.innerHeight = 1200;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 1200);
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'down');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'vertical');
		expect(removeEventListener).not.toBeCalled();
		destroyHook();
		expect(removeEventListener).toBeCalledTimes(1);
	});
	it('testing vertical and horizontal resize at the same time', async () => {
		const destroyHook = ResizeHook.subscribe((hookValues) => {
			windowDimensions = hookValues;
		});
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('width', 1024);
		expect(windowDimensions).toHaveProperty('height', 768);
		global.innerHeight = 1500;
		global.innerWidth = 1400;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 1500);
		expect(windowDimensions).toHaveProperty('width', 1400);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'up');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'both');
		global.innerHeight = 1200;
		global.innerWidth = 1100;
		global.dispatchEvent(new Event('resize'));
		await new Promise((r) => setTimeout(r, 100));
		expect(windowDimensions).toHaveProperty('height', 1200);
		expect(windowDimensions).toHaveProperty('width', 1100);
		expect(windowDimensions).toHaveProperty('scaleDirection', 'down');
		expect(windowDimensions).toHaveProperty('scaleFromEdge', 'both');
		expect(removeEventListener).not.toBeCalled();
		destroyHook();
		expect(removeEventListener).toBeCalledTimes(1);
	});
});
