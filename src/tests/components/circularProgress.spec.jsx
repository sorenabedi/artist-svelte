import CircularProgress from '../../lib/components/circularProgress';
import { render } from '@testing-library/svelte';

describe('CircularProgress component test suite', () => {
	it('it works', async () => {
		const { getAllByTestId } = render(CircularProgress);
		expect(() => getAllByTestId('CircularProgress')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(CircularProgress);
		expect(getByTestId('CircularProgress')).toHaveClass('circularProgress', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(CircularProgress);
		expect(getByTestId('CircularProgress')).toHaveClass('default');
		expect(getByTestId('CircularProgress')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('CircularProgress')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('CircularProgress')).toHaveClass('danger');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(CircularProgress, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('CircularProgress')).toHaveClass('testClass23', 'testing58');
	});
	it('testing interactive noSpin prop change', async () => {
		const { getByTestId, component } = render(CircularProgress, { noSpin: false });
		expect(getByTestId('CircularProgress')).toHaveClass('spin');
		component.$$set({ noSpin: true });
		await tick();
		expect(getByTestId('CircularProgress')).not.toHaveClass('spin');
		component.$$set({ noSpin: false });
		await tick();
		expect(getByTestId('CircularProgress')).toHaveClass('spin');
	});
	it('testing interactive size prop change', async () => {
		const { getByTestId, component } = render(CircularProgress);
		expect(getByTestId('CircularProgress')).toHaveAttribute('width');
		expect(getByTestId('CircularProgress')).toHaveAttribute('height');
		expect(getByTestId('CircularProgress')).not.toHaveAttribute('width', '350px');
		expect(getByTestId('CircularProgress')).not.toHaveAttribute('height', '350px');
		component.$$set({ size: '350px' });
		await tick();
		expect(getByTestId('CircularProgress')).toHaveAttribute('width', '350px');
		expect(getByTestId('CircularProgress')).toHaveAttribute('height', '350px');
		component.$$set({ size: '350rem' });
		await tick();
		expect(getByTestId('CircularProgress')).toHaveAttribute('width', '350rem');
		expect(getByTestId('CircularProgress')).toHaveAttribute('height', '350rem');
	});
	it('testing interactive percentage prop change', async () => {
		const { getByTestId, component } = render(CircularProgress, {
			percentage: 35,
			showPercentage: true
		});
		await new Promise((r) => setTimeout(r, 450));
		expect(getByTestId('CircularProgress')).toHaveClass('percentage');
		expect(getByTestId('CircularProgress')).toHaveClass('percentage');
		expect(getByTestId('CircularProgress').querySelector(':scope text').textContent).toEqual('35%');
		expect(getByTestId('CircularProgress').querySelector(':scope circle')).toHaveAttribute(
			'stroke-dasharray',
			`${(35 * 2 * 30 * Math.PI) / 100} 999`
		);
		component.$$set({ percentage: 95 });
		await tick();
		await new Promise((r) => setTimeout(r, 450));
		expect(getByTestId('CircularProgress')).toHaveClass('percentage');
		expect(getByTestId('CircularProgress').querySelector(':scope text').textContent).toEqual('95%');
		expect(getByTestId('CircularProgress').querySelector(':scope circle')).toHaveAttribute(
			'stroke-dasharray',
			`${(95 * 2 * 30 * Math.PI) / 100} 999`
		);
	});
});
