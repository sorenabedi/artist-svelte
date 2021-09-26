import Button from '../../lib/components/button';
import SVG from '../mocks/svg';
import { render, fireEvent } from '@testing-library/svelte';
import { jest } from '@jest/globals';

describe('Button component test suite', () => {
	it('it works', async () => {
		const component = render(Button);
		expect(() => component.getAllByTestId('Button')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Button);
		expect(getByTestId('Button')).toHaveClass('outline', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).toHaveClass('default');
		expect(getByTestId('Button')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('Button')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('Button')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).toHaveClass('outline');
		expect(getByTestId('Button')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('Button')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('Button')).toHaveClass('outline-gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
		await component.$$set({ fullWidth: true });
		expect(getByTestId('Button')).toHaveClass('fullWidth');
		await component.$$set({ fullWidth: false });
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
	});
	it('testing interactive circle prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('circle');
		await component.$$set({ circle: true });
		expect(getByTestId('Button')).toHaveClass('circle');
		await component.$$set({ circle: false });
		expect(getByTestId('Button')).not.toHaveClass('circle');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('rtl');
		await component.$$set({ rtl: true });
		expect(getByTestId('Button')).toHaveClass('rtl');
		await component.$$set({ rtl: false });
		expect(getByTestId('Button')).not.toHaveClass('rtl');
	});
	it('testing interactive SVGIcon prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(false);
		await component.$$set({ SVGIcon: SVG });
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(true);
		await component.$$set({ SVGIcon: undefined });
		expect(getByTestId('Button').innerHTML.includes('</svg>')).not.toEqual(true);
	});
	it('testing interactive click prop change', async () => {
		const { getByTestId, component } = render(Button);
		const mock = jest.fn();
		await component.$on('click', mock);
		expect(mock).not.toHaveBeenCalled();
		await fireEvent.click(getByTestId('Button'));
		expect(mock).toHaveBeenCalled();
	});
});
