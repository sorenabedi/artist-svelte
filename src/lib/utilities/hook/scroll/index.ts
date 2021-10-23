import type { Readable } from 'svelte/store';
import type { scrollHook } from '../../../types/hook';
import { browser } from '$app/env';
import { readable } from 'svelte/store';
import Throttle from '../../helper/throttle';

export const currentBodyPosition = (): { scrollX: number; scrollY: number } =>
	browser && { scrollY: window.scrollY, scrollX: window.scrollX };
let scrollThreshold = 50;
export const store = readable<scrollHook>(currentBodyPosition(), (set) => {
	let position = currentBodyPosition().scrollY;
	/* istanbul ignore next */
	const setScrollHeight = () => {
		const currentScrollPosition = currentBodyPosition();
		const direction = position > currentScrollPosition.scrollY ? 'up' : 'down';
		if (Math.abs(position - currentScrollPosition.scrollY) > scrollThreshold)
			position = currentScrollPosition.scrollY;
		set({ ...currentScrollPosition, direction });
	};
	browser && window.addEventListener('scroll', Throttle(setScrollHeight));

	return () => {
		if (browser) window.removeEventListener('scroll', setScrollHeight);
	};
});

export default (
	threshold = 50
): {
	scrollPosition: Readable<scrollHook>;
	scrollToTop: () => void;
	setScroll: (ScrollToOptions: ScrollToOptions) => void;
} => {
	scrollThreshold = threshold;
	const setScroll = (ScrollToOptions: ScrollToOptions) => {
		if (!browser) /* istanbul ignore next */ return;
		window.scrollTo({ behavior: 'smooth', ...ScrollToOptions });
	};
	const scrollToTop = () => {
		if (!browser) /* istanbul ignore next */ return;
		window.scrollTo({ behavior: 'smooth', top: 0 });
	};
	return {
		scrollPosition: store,
		scrollToTop,
		setScroll
	};
};
