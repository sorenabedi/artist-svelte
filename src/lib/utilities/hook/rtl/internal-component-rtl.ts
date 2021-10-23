import { browser } from '$app/env';
import globalVars from '../../../env';

export default (rtlInput: boolean, rtlHookStatus: boolean): boolean => {
	if (browser) {
		return rtlInput !== undefined ? rtlInput : rtlHookStatus;
	} else {
		/* istanbul ignore next */
		return rtlInput !== undefined ? rtlInput : globalVars.RTL;
	}
};
