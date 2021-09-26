import Checkbox from '../../lib/components/checkbox';
import { render } from '@testing-library/svelte';

describe('Checkbox component test suite', () => {
	it('it works', async () => {
		const component = render(Checkbox);
		expect(() => component.getAllByTestId('Checkbox')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Checkbox);
		expect(getByTestId('Checkbox')).toHaveClass('default', 'checkbox');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Checkbox);
		expect(getByTestId('Checkbox')).toHaveClass('default');
		expect(getByTestId('Checkbox')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('Checkbox')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('Checkbox')).toHaveClass('danger');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Checkbox);
		expect(getByTestId('Checkbox')).not.toHaveClass('shadow');
		await component.$$set({ shadow: true });
		expect(getByTestId('Checkbox')).toHaveClass('shadow');
		await component.$$set({ shadow: false });
		expect(getByTestId('Checkbox')).not.toHaveClass('shadow');
	});
});
