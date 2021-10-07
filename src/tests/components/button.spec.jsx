import Button from '../../lib/components/button';
import { SVGIcon } from '../../lib/utilities';
import SVG from '../mocks/svg';
import { render, fireEvent } from '@testing-library/svelte';
import fragment from 'svelte-fragment-component';
import { tick } from 'svelte';

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
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).toHaveClass('outline');
		expect(getByTestId('Button')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('fill');
		component.$$set({ variant: 'outline-gradient' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('outline-gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('fullWidth');
		component.$$set({ fullWidth: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
	});
	it('testing interactive circle prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('circle');
		component.$$set({ circle: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('circle');
		component.$$set({ circle: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('circle');
	});
	it('testing interactive class prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).toHaveClass('outline', 'default');
		expect(getByTestId('Button')).not.toHaveClass('testClass');
		component.$$set({ class: 'testClass' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('outline', 'default');
		expect(getByTestId('Button')).toHaveClass('testClass');
		component.$$set({ class: 'testClass1 testClass2' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('outline', 'default');
		expect(getByTestId('Button')).not.toHaveClass('testClass');
		expect(getByTestId('Button')).toHaveClass('testClass1', 'testClass2');
	});
	it('testing useAction functionality', async () => {
		const onMountFunc = Jest.fn();
		const onUpdateFunc = Jest.fn();
		const onDestroyFunc = Jest.fn();
		expect(onMountFunc).not.toHaveBeenCalled();
		expect(onUpdateFunc).not.toHaveBeenCalled();
		expect(onDestroyFunc).not.toHaveBeenCalled();
		const useAction = () => {
			onMountFunc();
			return {
				destroy: onDestroyFunc,
				update: onUpdateFunc
			};
		};
		const { component, unmount } = render(Button, { props: { useAction } });

		expect(onMountFunc).toHaveBeenCalledTimes(1);
		expect(onUpdateFunc).not.toHaveBeenCalled();
		expect(onDestroyFunc).not.toHaveBeenCalled();
		component.$$set({ class: 'test' });
		await tick();
		expect(onMountFunc).toHaveBeenCalledTimes(1);
		expect(onUpdateFunc).not.toHaveBeenCalled();
		expect(onDestroyFunc).not.toHaveBeenCalled();

		unmount();

		expect(onMountFunc).toHaveBeenCalledTimes(1);
		expect(onUpdateFunc).not.toHaveBeenCalled();
		expect(onDestroyFunc).toHaveBeenCalledTimes(1);
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).not.toHaveClass('rtl');
		component.$$set({ rtl: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('rtl');
		component.$$set({ rtl: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('rtl');
	});
	it('test setting SVGIcon slot', async () => {
		const { getByTestId } = render(
			<Button>
				<fragment slot="SvgIcon">
					<SVGIcon data={SVG} />
				</fragment>
			</Button>
		);
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(true);
	});
	it('testing no SVGIcon slot', async () => {
		const { getByTestId } = render(<Button />);
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(false);
	});
	it('testing interactive click prop change', async () => {
		const { getByTestId, component } = render(Button);
		const mock = Jest.fn();
		component.$on('click', mock);
		await tick();
		expect(mock).not.toHaveBeenCalled();
		fireEvent.click(getByTestId('Button'));
		await tick();
		expect(mock).toHaveBeenCalled();
	});
});
