import Button from '../../lib/components/button';
import SVG from '../mocks/svg';
import { render, fireEvent } from '@testing-library/svelte';
import { jest } from '@jest/globals';

describe('Button component test suite', () => {
	it('it works', async () => {
		const component = render(Button);
		expect(() => component.getAllByTestId('button')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Button);
		expect(getByTestId('button')).toHaveClass('outline', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button')).toHaveClass('default');
		expect(getByTestId('button')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('button')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('button')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button')).toHaveClass('outline');
		expect(getByTestId('button')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('button')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('button')).toHaveClass('outline-gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button')).not.toHaveClass('fullWidth');
		await component.$$set({ fullWidth: true });
		expect(getByTestId('button')).toHaveClass('fullWidth');
		await component.$$set({ fullWidth: false });
		expect(getByTestId('button')).not.toHaveClass('fullWidth');
	});
	it('testing interactive circle prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button')).not.toHaveClass('circle');
		await component.$$set({ circle: true });
		expect(getByTestId('button')).toHaveClass('circle');
		await component.$$set({ circle: false });
		expect(getByTestId('button')).not.toHaveClass('circle');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button')).not.toHaveClass('rtl');
		await component.$$set({ rtl: true });
		expect(getByTestId('button')).toHaveClass('rtl');
		await component.$$set({ rtl: false });
		expect(getByTestId('button')).not.toHaveClass('rtl');
	});
	it('testing interactive SVGIcon prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('button').innerHTML.includes('</svg>')).toEqual(false);
		await component.$$set({ SVGIcon: SVG });
		expect(getByTestId('button').innerHTML.includes('</svg>')).toEqual(true);
		await component.$$set({ SVGIcon: undefined });
		expect(getByTestId('button').innerHTML.includes('</svg>')).not.toEqual(true);
	});
	it('testing interactive click prop change', async () => {
		const { getByTestId, component } = render(Button);
		const mock = jest.fn();
		await component.$on('click', mock);
		expect(mock).not.toHaveBeenCalled();
		await fireEvent.click(getByTestId('button'));
		expect(mock).toHaveBeenCalled();
	});
});
