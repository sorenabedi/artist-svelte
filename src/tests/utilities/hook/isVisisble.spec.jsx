import IsVisibleContainer from '../../container/hook/isVisible.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('RTL hook test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(IsVisibleContainer);
		expect(() => getByTestId('Visible')).not.toThrow();
		expect(() => getByTestId('Hidden')).not.toThrow();
	});
	it('testing hook functionality', async () => {
		const { getByTestId } = render(IsVisibleContainer);
		expect(getByTestId('Visible').innerHTML).toEqual('undefined');
		expect(getByTestId('Hidden').innerHTML).toEqual('undefined');
		fireEvent.click(getByTestId('initCheck'));
		await tick();
		expect(getByTestId('Visible').innerHTML).toEqual('true');
		// expect(getByTestId('Hidden').innerHTML).toEqual('false');
	});
});
