import BooleanStore from '../../lib/store/boolean';
import { render } from '@testing-library/svelte';
import { get } from 'svelte/store';

describe('Modal component test suite', () => {
	it('it works', async () => {
		const firstInstance = BooleanStore(true);
		const secondInstance = BooleanStore(false);
		expect(get(firstInstance.isEnabled)).toBe(true);
		expect(get(secondInstance.isEnabled)).toBe(false);
	});
	it('check enable/disable method', async () => {
		const { isEnabled, disable, enable } = BooleanStore(true);
		expect(get(isEnabled)).toBe(true);
		disable();
		expect(get(isEnabled)).toBe(false);
		disable();
		expect(get(isEnabled)).toBe(false);
		enable();
		expect(get(isEnabled)).toBe(true);
		enable();
		expect(get(isEnabled)).toBe(true);
	});
	it('check toggle method', async () => {
		const { isEnabled, toggle } = BooleanStore(true);
		expect(get(isEnabled)).toBe(true);
		toggle();
		expect(get(isEnabled)).toBe(false);
		toggle();
		expect(get(isEnabled)).toBe(true);
	});
});
