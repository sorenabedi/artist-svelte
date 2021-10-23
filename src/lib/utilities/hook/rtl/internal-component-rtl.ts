import { browser } from '$app/env';
import globalVars from '../../../env';

export default (rtlInput: boolean, rtlHookStatus: boolean): boolean => {
	/* istanbul ignore else */
	if (browser) {
		return rtlInput !== undefined ? rtlInput : rtlHookStatus;
	} else {
		return rtlInput !== undefined ? rtlInput : globalVars.RTL;
	}
};
