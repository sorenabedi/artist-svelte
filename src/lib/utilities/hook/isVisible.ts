import { browser } from '$app/env';

export default (element: HTMLElement): boolean => {
	if (!browser) /* istanbul ignore next */ return false;
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
};
