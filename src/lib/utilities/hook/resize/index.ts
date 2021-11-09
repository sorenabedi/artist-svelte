import { browser } from '$app/env';
import { readable } from 'svelte/store';
import Debounce from '../../helper/debounce';

type resizeHook = {
	width: number;
	height: number;
	scaleDirection?: 'down' | 'up';
	scaleFromEdge?: 'horizontal' | 'vertical' | 'both';
};

const multiplyObjectValues = (obj: { [key: string]: number }) =>
	Object.values(obj).reduce((a, b) => a * b);

const determineScaleFromEdge = (oldDimensions: resizeHook, newDimensions: resizeHook) => {
	switch (true) {
		case oldDimensions.height === newDimensions.height &&
			oldDimensions.width !== newDimensions.width:
			return 'horizontal';

		case oldDimensions.height !== newDimensions.height &&
			oldDimensions.width === newDimensions.width:
			return 'vertical';

		case oldDimensions.height !== newDimensions.height &&
			oldDimensions.width !== newDimensions.width:
			return 'both';
		default:
			return undefined;
	}
};

const currentWindowSize = (): { width: number; height: number } =>
	browser ? { width: window.innerWidth, height: window.innerHeight } : undefined;
export const store = readable<resizeHook>(currentWindowSize(), (set) => {
	let windowDimensions = currentWindowSize();

	/* istanbul ignore next */
	const setWindowDimensions = Debounce(() => {
		const currentWindowDimensions = currentWindowSize();
		const scaleDirection =
			multiplyObjectValues(windowDimensions) > multiplyObjectValues(currentWindowDimensions)
				? 'down'
				: 'up';
		const scaleFromEdge: resizeHook['scaleFromEdge'] = determineScaleFromEdge(
			windowDimensions,
			currentWindowDimensions
		);
		if (
			Math.abs(
				multiplyObjectValues(windowDimensions) - multiplyObjectValues(currentWindowDimensions)
			) > 1
		)
			windowDimensions = currentWindowDimensions;
		set({ ...currentWindowDimensions, scaleDirection, scaleFromEdge });
	}, 100);
	browser && window.addEventListener('resize', setWindowDimensions);

	return () => {
		if (browser) window.removeEventListener('resize', setWindowDimensions);
	};
});

export default store;
