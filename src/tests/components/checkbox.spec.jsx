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
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Checkbox')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Checkbox')).toHaveClass('danger');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Checkbox);
		expect(getByTestId('Checkbox')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Checkbox')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Checkbox')).not.toHaveClass('shadow');
	});
});
