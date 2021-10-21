//credit: https://ehsangazar.com/optimizing-javascript-event-listeners-for-performance-e28406ad406c#:~:text=creating%20a%20loop.-,Throttling,-Throttling%20is%20a
import type { unknownFunction } from '../../../types/global';

/**
 *
 *
 *
 */

export default function (
	callback: unknownFunction,
	delay = 100,
	scope: unknownFunction = null
): unknownFunction {
	let wait = false;
	return (...args) => {
		if (!wait) {
			callback.call(scope, ...args);
			wait = true;
			setTimeout(function () {
				wait = false;
			}, delay);
		}
	};
}
