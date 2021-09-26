import Alert from '../../lib/components/alert';
import { render } from '@testing-library/svelte';
import SVG from '../mocks/svg';

describe('Alert component test suite', () => {
	it('it works', async () => {
		const component = render(Alert);
		expect(() => component.getAllByTestId('Alert')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('fill', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('default');
		expect(getByTestId('Alert')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('Alert')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('Alert')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('fill');
		expect(getByTestId('Alert')).not.toHaveClass('outline');
		await component.$$set({ variant: 'outline' });
		expect(getByTestId('Alert')).toHaveClass('outline');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('Alert')).toHaveClass('outline-gradient');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).not.toHaveClass('shadow');
		await component.$$set({ shadow: true });
		expect(getByTestId('Alert')).toHaveClass('shadow');
		await component.$$set({ shadow: false });
		expect(getByTestId('Alert')).not.toHaveClass('shadow');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).not.toHaveClass('rtl');
		await component.$$set({ rtl: true });
		expect(getByTestId('Alert')).toHaveClass('rtl');
		await component.$$set({ rtl: false });
		expect(getByTestId('Alert')).not.toHaveClass('rtl');
	});
	// it('testing interactive SVGIcon prop change', async () => {
	// 	const { getByTestId, component, container } = render(Alert, { props: { SVGIcon: SVG } });
	// 	expect(getByTestId('Alert').innerHTML.includes('</svg>')).toEqual(false);
	// 	await component.$$set({ SVGIcon: SVG });
	// 	expect(getByTestId('Alert').innerHTML.includes('</svg>')).toEqual(true);
	// 	await component.$$set({ SVGIcon: undefined });
	// 	expect(getByTestId('Alert').innerHTML.includes('</svg>')).toEqual(false);
	// });
});
