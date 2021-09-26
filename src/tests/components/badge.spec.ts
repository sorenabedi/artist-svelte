import Badge from '../../lib/components/badge';
import { render } from '@testing-library/svelte';

describe('Badge component test suite', () => {
	it('it works', async () => {
		const component = render(Badge);
		expect(() => component.getAllByTestId('Badge')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Badge);
		expect(getByTestId('Badge')).toHaveClass('outline', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('Badge')).toHaveClass('default');
		expect(getByTestId('Badge')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('Badge')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('Badge')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('Badge')).toHaveClass('outline');
		expect(getByTestId('Badge')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('Badge')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('Badge')).toHaveClass('outline-gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('Badge')).not.toHaveClass('fullWidth');
		await component.$$set({ fullWidth: true });
		expect(getByTestId('Badge')).toHaveClass('fullWidth');
		await component.$$set({ fullWidth: false });
		expect(getByTestId('Badge')).not.toHaveClass('fullWidth');
	});
});
