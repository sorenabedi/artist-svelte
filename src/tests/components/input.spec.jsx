import Input from '../../lib/components/input';
import { render } from '@testing-library/svelte';

describe('Input component test suite', () => {
	it('it works', async () => {
		const component = render(Input,{props:{ id: 'input-id-1' }});
		expect(() => component.getAllByTestId('Input')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).toHaveClass('default', 'input');
	});
	it('testing a11y label HTMLFor', async () => {
		const { getByTestId ,component} = render(Input);
		expect(getByTestId('Input').querySelector('input')).not.toHaveAttribute('id');
		expect(getByTestId('Input').querySelector('label')).not.toHaveAttribute('for');
		component.$$set({ id: 'input-id-34' });
		await tick();
		expect(getByTestId('Input').querySelector('input')).toHaveAttribute('id','input-id-34');
		expect(getByTestId('Input').querySelector('label')).toHaveAttribute('for','input-id-34');
	});
	it('testing input type change', async () => {
		const { getByTestId ,component} = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input').querySelector('input')).toHaveAttribute('type','text');
		component.$$set({ type: 'search' });
		await tick();
		expect(getByTestId('Input').querySelector('input')).toHaveAttribute('type','search');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).toHaveClass('default');
		expect(getByTestId('Input')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Input')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Input')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).toHaveClass('fill');
		expect(getByTestId('Input')).not.toHaveClass('outline');
		component.$$set({ variant: 'outline' });
		await tick();
		expect(getByTestId('Input')).toHaveClass('outline');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Input')).toHaveClass('fill');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Input')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Input')).not.toHaveClass('shadow');
	});
	it('testing interactive fullWidth prop change', async () => {
		const { getByTestId, component } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });

		await tick();
		expect(getByTestId('Input')).toHaveClass('fullWidth');
		component.$$set({ fullWidth: false });
		await tick();
		expect(getByTestId('Input')).not.toHaveClass('fullWidth');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Input,{props:{ id: 'input-id-1' }});
		expect(getByTestId('Input')).not.toHaveClass('rtl');
		component.$$set({ rtl: true });

		await tick();
		expect(getByTestId('Input')).toHaveClass('rtl');
		component.$$set({ rtl: false });
		await tick();
		expect(getByTestId('Input')).not.toHaveClass('rtl');
	});
});
