import type { voidFunction } from '../../types/global';
import type { scrollHook } from '../../types/hook';

export const slideEffectAction = (element: HTMLElement, scrollPosition: scrollHook): void => {
	if (scrollPosition.direction === 'up') {
		element.style.top = '';
	} else {
		element.style.top = `-${element.clientHeight + 30}px`;
	}
};
export const compactEffectAction = (
	element: HTMLElement
): {
	initCompactEffect: voidFunction<never>;
	updateCompactEffect: (scrollPosition: scrollHook) => void;
	destroyCompactEffect: voidFunction<never>;
} => {
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entryElement) => {
				entryElement.target.classList.toggle(
					'compact',
					window.scrollY === 0 &&
						entryElement.boundingClientRect.top === 0 &&
						(entryElement.intersectionRatio === 1 ||
							entryElement.boundingClientRect.y < entryElement.rootBounds.y)
				);
			});
		},
		{
			threshold: [1],
			rootMargin: `0px 0px  -${window.innerHeight - element.clientHeight - 10}px 0px`
		}
	);
	return {
		initCompactEffect: () => observer.observe(element),
		updateCompactEffect: (scrollPosition: scrollHook) => {
			if (scrollPosition.scrollY !== 0 && element.getBoundingClientRect().top === 0)
				element.classList.add('compact');
		},
		destroyCompactEffect: () => observer.disconnect()
	};
};

export const mergeEffectAction = (element: HTMLElement): void => {
	if (window.scrollY === 0) element.classList.remove('compact');
	if (element.getBoundingClientRect().top <= 0) element.classList.add('mergeToTop');
	if (element.getBoundingClientRect().top > 0) element.classList.remove('mergeToTop');
};
