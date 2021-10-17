import RtlContainer from '../../container/hook/rtl.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('RTL hook test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(RtlContainer);
		expect(() => getByTestId('Status')).not.toThrow();
		expect(() => getByTestId('Toggle')).not.toThrow();
		expect(() => getByTestId('SetLTR')).not.toThrow();
		expect(() => getByTestId('SetRTL')).not.toThrow();
	});
	it('testing toggle method', async () => {
		const { getByTestId } = render(RtlContainer);
		const initialDirection = getByTestId('Status').innerHTML;
		await fireEvent.click(getByTestId('Toggle'));
		expect(getByTestId('Status').innerHTML).not.toEqual(initialDirection);
		await fireEvent.click(getByTestId('Toggle'));
		expect(getByTestId('Status').innerHTML).toEqual(initialDirection);
	});
	it('testing set method', async () => {
		const { getByTestId } = render(RtlContainer);
		fireEvent.click(getByTestId('SetRTL'));
		await tick();
		const initialDirection = getByTestId('Status').innerHTML;
		fireEvent.click(getByTestId('SetLTR'));
		await tick();
		expect(getByTestId('Status').innerHTML).not.toEqual(initialDirection);
		expect(getByTestId('Status').innerHTML).toEqual('ltr');
		fireEvent.click(getByTestId('SetLTR'));
		await tick();
		expect(getByTestId('Status').innerHTML).toEqual('ltr');
		fireEvent.click(getByTestId('SetRTL'));
		await tick();
		expect(getByTestId('Status').innerHTML).toEqual('rtl');
		expect(getByTestId('Status').innerHTML).toEqual(initialDirection);
	});
});
