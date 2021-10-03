import Radio from '../../lib/components/radio';
import { render } from '@testing-library/svelte';

describe('Radio component test suite', () => {
	it('it works', async () => {
		const component = render(Radio);
		expect(() => component.getAllByTestId('Radio')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Radio);
		expect(getByTestId('Radio')).toHaveClass('default', 'radio');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Radio);
		expect(getByTestId('Radio')).toHaveClass('default');
		expect(getByTestId('Radio')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Radio')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Radio')).toHaveClass('danger');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Radio);
		expect(getByTestId('Radio')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Radio')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Radio')).not.toHaveClass('shadow');
	});
});
