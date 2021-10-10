import Paper from '../../lib/components/paper';
import Button from '../../lib/components/button';
import { render } from '@testing-library/svelte';

describe('Paper component test suite', () => {
	it('it works', async () => {
		const component = render(<Paper />);
		expect(() => component.getAllByTestId('Paper')).not.toThrow();
	});

	it('testing default classes', async () => {
		const { getByTestId } = render(Paper);
		expect(getByTestId('Paper')).toHaveClass('paper');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Paper);
		expect(getByTestId('Paper')).toHaveClass('default');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Paper')).toHaveClass('primary');
		expect(getByTestId('Paper')).not.toHaveClass('default');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Paper, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Paper')).toHaveClass('paper', 'testClass23', 'testing58');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Paper);
		expect(getByTestId('Paper')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Paper')).toHaveClass('shadow');
	});
	it('testing interactive fullWidth prop change', async () => {
		const { getByTestId, component } = render(Paper);
		expect(getByTestId('Paper')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });
		await tick();
		expect(getByTestId('Paper')).toHaveClass('fullWidth');
	});
});
