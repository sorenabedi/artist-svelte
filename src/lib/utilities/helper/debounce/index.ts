//credit: https://github.com/chodorowicz/ts-debounce
import type { unknownFunction, DebouncedFunction } from '../../../types/global';

type Options<TT> = {
	isImmediate?: boolean;
	maxWait?: number;
	callback?: (data: TT) => void;
};

/**
 *
 *
 *
 */
export default function debounce<originalFunction extends unknownFunction>(
	func: originalFunction,
	waitMilliseconds = 50,
	options: Options<ReturnType<originalFunction>> = {}
): DebouncedFunction<originalFunction> {
	let timeoutId: ReturnType<typeof setTimeout> | undefined;
	const isImmediate = options.isImmediate ?? false;
	const callback = options.callback ?? false;
	const maxWait = options.maxWait;
	let lastInvokeTime = Date.now();

	let promises: {
		resolve: (x: ReturnType<originalFunction>) => void;
		reject: (reason?: unknown) => void;
	}[] = [];

	function nextInvokeTimeout() {
		if (maxWait !== undefined) {
			const timeSinceLastInvocation = Date.now() - lastInvokeTime;

			if (timeSinceLastInvocation + waitMilliseconds >= maxWait) {
				return maxWait - timeSinceLastInvocation;
			}
		}

		return waitMilliseconds;
	}

	const debouncedFunction = function (
		this: ThisParameterType<originalFunction>,
		...args: Parameters<originalFunction>
	) {
		return new Promise<ReturnType<originalFunction>>((resolve, reject) => {
			const invokeFunction = () => {
				timeoutId = undefined;
				lastInvokeTime = Date.now();
				if (!isImmediate) {
					const result = func.apply(this, args);
					callback && callback(result);
					promises.forEach(({ resolve }) => resolve(result));
					promises = [];
				}
			};

			const shouldCallNow = isImmediate && timeoutId === undefined;

			if (timeoutId !== undefined) {
				clearTimeout(timeoutId);
			}

			timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());

			if (shouldCallNow) {
				const result = func.apply(this, args);
				callback && callback(result);
				return resolve(result);
			}
			promises.push({ resolve, reject });
		});
	};

	debouncedFunction.cancel = function (reason?: unknown) {
		if (timeoutId !== undefined) {
			clearTimeout(timeoutId);
		}
		promises.forEach(({ reject }) => reject(reason));
		promises = [];
	};

	return debouncedFunction;
}
