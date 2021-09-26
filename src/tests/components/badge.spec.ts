import Badge from '../../lib/components/badge';
import { render } from '@testing-library/svelte';

describe('Badge component test suite', () => {
	it('it works', async () => {
		const component = render(Badge);
		expect(() => component.getAllByTestId('badge')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Badge);
		expect(getByTestId('badge')).toHaveClass('outline', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('badge')).toHaveClass('default');
		expect(getByTestId('badge')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('badge')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('badge')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('badge')).toHaveClass('outline');
		expect(getByTestId('badge')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('badge')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('badge')).toHaveClass('outline-gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('badge')).not.toHaveClass('fullWidth');
		await component.$$set({ fullWidth: true });
		expect(getByTestId('badge')).toHaveClass('fullWidth');
		await component.$$set({ fullWidth: false });
		expect(getByTestId('badge')).not.toHaveClass('fullWidth');
	});
});
