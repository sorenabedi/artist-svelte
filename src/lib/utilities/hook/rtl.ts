import { browser } from '$app/env';
import booleanStore from '../../store/boolean';

const rtlCheck = (): boolean => browser && document.body.getAttribute('dir') === 'rtl';
const { isEnabled, toggle: toggleState } = browser && booleanStore(rtlCheck());
const set = (dir: 'ltr' | 'rtl' = 'ltr'): void => {
	browser && document.body.setAttribute('dir', dir);
	toggleState();
};
const toggle = (): void => {
	set(rtlCheck() ? 'ltr' : 'rtl');
};

export default { isEnabled, toggle, set };
