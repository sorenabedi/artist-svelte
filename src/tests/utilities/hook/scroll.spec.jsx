import ScrollHook, { store } from '../../../lib/utilities/hook/scroll';
import { jest } from '@jest/globals';

describe('scroll hook test suite (scroll functions)', () => {
	const spyScrollTo = jest.fn();
	beforeEach(() => {
		Object.defineProperty(global.window, 'scrollTo', { value: spyScrollTo });
		Object.defineProperty(global.window, 'scrollY', { value: 1 });
		spyScrollTo.mockClear();
	});
	it('it works', async () => {
		const { scrollPosition, scrollToTop, setScroll } = ScrollHook();
		expect(scrollPosition).toBeDefined();
		expect(scrollPosition).toHaveProperty('subscribe');
		expect(scrollToTop).toBeDefined();
		expect(setScroll).toBeDefined();
	});
	it('testing scroll to top functionality', async () => {
		const { scrollToTop } = ScrollHook();
		expect(spyScrollTo).not.toHaveBeenCalled();
		scrollToTop();
		expect(spyScrollTo).toHaveBeenCalledWith({
			top: 0,
			behavior: 'smooth'
		});
	});
	it('testing scroll to a certain position functionality', async () => {
		const { setScroll } = ScrollHook();
		expect(spyScrollTo).not.toHaveBeenCalled();
		const desiredPosition = { behavior: 'auto', left: 40, top: 75 };
		setScroll();
		expect(spyScrollTo).toHaveBeenCalledWith({
			behavior: 'smooth'
		});
		setScroll(desiredPosition);
		expect(spyScrollTo).toHaveBeenCalledWith(desiredPosition);
	});
});
