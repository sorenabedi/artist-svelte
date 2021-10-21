import { jest } from '@jest/globals';
import { Throttle } from '../../../lib/utilities/helper';

const FIXED_SYSTEM_TIME = '2020-01-12T00:00:00Z';

describe('Throttle helper test suite ', () => {
	beforeEach(() => {
		jest.useFakeTimers('modern');
		jest.setSystemTime(Date.parse(FIXED_SYSTEM_TIME));
	});
	it('testing throttle function', () => {
		const func = jest.fn();
		const throttledFunction = Throttle(func, 100);
		throttledFunction();
		setInterval(() => throttledFunction(), 10);
		jest.advanceTimersByTime(10);
		expect(func).toBeCalled();
		expect(func).toHaveBeenCalledTimes(1);

		jest.advanceTimersByTime(110);
		expect(func).toHaveBeenCalledTimes(2);

		jest.advanceTimersByTime(1100);
		expect(func).toHaveBeenCalledTimes(12);
	});
});
