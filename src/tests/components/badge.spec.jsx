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
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Badge')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Badge')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('Badge')).toHaveClass('outline');
		expect(getByTestId('Badge')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Badge')).toHaveClass('fill');
		component.$$set({ variant: 'gradient' });
		await tick();
		expect(getByTestId('Badge')).toHaveClass('gradient');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Badge, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Badge')).toHaveClass('testClass23', 'testing58');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Badge);
		expect(getByTestId('Badge')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });
		await tick();
		expect(getByTestId('Badge')).toHaveClass('fullWidth');
		component.$$set({ fullWidth: false });
		await tick();
		expect(getByTestId('Badge')).not.toHaveClass('fullWidth');
	});
});
