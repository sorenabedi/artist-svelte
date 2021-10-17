import { browser } from '$app/env';
import booleanStore from '../../store/boolean';

const rtlCheck = (): boolean => browser && document.body.getAttribute('dir') === 'rtl';
const { isEnabled, disable, enable } = browser && booleanStore(rtlCheck());
const set = (dir: 'ltr' | 'rtl' = 'ltr'): void => {
	if (!browser) /* istanbul ignore next */ return;
	document.body.setAttribute('dir', dir);
	if (dir === 'rtl') enable();
	if (dir === 'ltr') disable();
};
const toggle = (): void => {
	set(rtlCheck() ? 'ltr' : 'rtl');
};

export default { isEnabled, toggle, set };
