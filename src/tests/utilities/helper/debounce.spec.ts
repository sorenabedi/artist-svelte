import { jest } from '@jest/globals';
import { Debounce } from '../../../lib/utilities/helper';

const FIXED_SYSTEM_TIME = '2020-01-12T00:00:00Z';

describe('Debounce helper test suite', () => {
	beforeEach(() => {
		jest.useFakeTimers('modern');
		jest.setSystemTime(Date.parse(FIXED_SYSTEM_TIME));
	});
	it('it properly debounces function', () => {
		const func = jest.fn();
		const debouncedFunction = Debounce(func);

		const interval = setInterval(() => debouncedFunction(), 10);
		setTimeout(() => clearInterval(interval), 200);
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(200);
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(300);
		expect(func).toBeCalled();
		expect(func).toBeCalledTimes(1);

		setInterval(() => debouncedFunction(), 110);
		expect(func).toBeCalledTimes(1);

		jest.advanceTimersByTime(100);
		expect(func).toBeCalledTimes(1);

		jest.advanceTimersByTime(110);
		expect(func).toBeCalledTimes(2);

		jest.advanceTimersByTime(250);
		expect(func).toBeCalledTimes(4);
	});
	it('it properly debounces function by 100ms', () => {
		const func = jest.fn();
		const debouncedFunction = Debounce(func, 100);

		debouncedFunction();
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(50);
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(100);
		expect(func).toBeCalled();
		expect(func.mock.calls.length).toBe(1);
	});

	it('it properly debounces function with isImmediate set to true ', () => {
		const func = jest.fn();
		const debouncedFunction = Debounce(func, 100, { isImmediate: true });

		debouncedFunction();
		expect(func).toBeCalled();
		expect(func.mock.calls.length).toBe(1);

		jest.advanceTimersByTime(50);
		expect(func.mock.calls.length).toBe(1);

		jest.advanceTimersByTime(100);
		expect(func.mock.calls.length).toBe(1);

		// it should be possible to call it second time after timeout passes
		debouncedFunction();
		expect(func.mock.calls.length).toBe(2);
	});

	it('it cancels debounced function ', () => {
		const func = jest.fn();
		const debouncedFunction = Debounce(func, 100);

		const result = debouncedFunction();
		expect(func).not.toBeCalled();

		jest.advanceTimersByTime(50);
		expect(func).not.toBeCalled();

		debouncedFunction.cancel();

		jest.advanceTimersByTime(100);
		expect(func).not.toBeCalled();

		expect(result).rejects.toBeUndefined();
	});

	describe('maxWait', () => {
		it('it calls func with maxWait >= wait correctly', () => {
			const func = jest.fn();
			const debouncedFunction = Debounce(func, 100, { maxWait: 150 });
			debouncedFunction();

			jest.advanceTimersByTime(50);
			expect(func).not.toBeCalled();
			debouncedFunction();

			// function should be called because of maxWait
			jest.advanceTimersByTime(100);
			expect(func).toBeCalled();
		});

		it('it calls func with maxWait < wait correctly', () => {
			const func = jest.fn();
			const debouncedFunction = Debounce(func, 100, { maxWait: 50 });
			debouncedFunction();

			// function should be called because of maxWait
			jest.advanceTimersByTime(50);
			expect(func).toBeCalled();

			jest.advanceTimersByTime(50);
			expect(func.mock.calls.length).toBe(1);

			debouncedFunction();
			jest.advanceTimersByTime(100);
			expect(func.mock.calls.length).toBe(2);
		});

		it('it calls in the next tick with maxWait === 0', () => {
			const func = jest.fn();
			const debouncedFunction = Debounce(func, 100, { maxWait: 0 });
			debouncedFunction();

			jest.advanceTimersByTime(1);
			expect(func).toBeCalled();
		});
	});

	describe('callback', () => {
		it('it properly debounces function with callback provided', async () => {
			const mockValue = {
				message: 'Hello World'
			};
			const callback = jest.fn();
			const func = jest.fn().mockReturnValue(mockValue);

			const debouncedFunction = Debounce(func, 100, {
				callback
			});
			const promise = debouncedFunction();
			jest.advanceTimersByTime(100);
			await promise;
			expect(callback).toBeCalledWith(mockValue);
		});
	});

	describe('promises', () => {
		it('it properly debounces function and returns a Promise', async () => {
			const func = jest.fn().mockReturnValue(12345);
			const debouncedFunction = Debounce(func, 100);

			const result = debouncedFunction();
			const result1 = debouncedFunction();

			jest.advanceTimersByTime(100);

			await expect(result).resolves.toEqual(12345);
			await expect(result1).resolves.toEqual(12345);
		});

		it('it properly debounces async functions', async () => {
			const asyncFunc = jest.fn().mockResolvedValue(12345 as never);
			const debouncedFunction = Debounce(asyncFunc, 100);

			const promise = debouncedFunction();

			jest.advanceTimersByTime(100);

			await expect(promise).resolves.toEqual(12345);
		});

		it('it properly rejects after debounced function is cancelled', async () => {
			const func = jest.fn();
			const debouncedFunction = Debounce(func, 100);

			const result = debouncedFunction();
			const result1 = debouncedFunction();

			const reason = 'changed my mind';
			debouncedFunction.cancel(reason);

			await expect(result).rejects.toEqual(reason);
			await expect(result1).rejects.toEqual(reason);
		});
	});
});
