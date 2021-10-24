import { jest } from '@jest/globals';
import Button from '../../lib/components/button';
import { SvgParser } from '../../lib/utilities';
import SVG from '../mocks/svg';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('Button component (button tag) test suite', () => {
	it('it works', async () => {
		const { getAllByTestId, getByTestId } = render(Button);
		expect(() => getAllByTestId('Button')).not.toThrow();
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button')).toHaveClass('button', 'outline', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
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
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button')).toHaveClass('outline');
		expect(getByTestId('Button')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('fill');
		component.$$set({ variant: 'gradient' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
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
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button')).not.toHaveClass('circle');
		component.$$set({ circle: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('circle');
		component.$$set({ circle: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('circle');
	});
	it('testing interactive active prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button')).not.toHaveClass('active');
		component.$$set({ active: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('active');
		component.$$set({ active: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('active');
	});
	it('testing interactive class prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
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
		const onMountFunc = jest.fn();
		const onUpdateFunc = jest.fn();
		const onDestroyFunc = jest.fn();
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
		const { component, unmount, getByTestId } = render(Button, { props: { useAction } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');

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
	it('testing custom classes', async () => {
		const { getByTestId } = render(Button, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button')).toHaveClass('testClass23', 'testing58');
	});
	it('test setting SVGIcon slot', async () => {
		const { getByTestId } = render(
			<Button>
				<fragment slot="SvgIcon">
					<SvgParser data={SVG} />
				</fragment>
			</Button>
		);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(true);
	});
	it('testing no SVGIcon slot', async () => {
		const { getByTestId } = render(<Button />);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(false);
	});
	it('testing interactive click prop change', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('button');
		const mock = jest.fn();
		component.$on('click', mock);
		await tick();
		expect(mock).not.toHaveBeenCalled();
		fireEvent.click(getByTestId('Button'));
		await tick();
		expect(mock).toHaveBeenCalled();
	});
});

describe('Button component (anchor tag) test suite', () => {
	it('it works', async () => {
		const { getByTestId, getAllByTestId } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(() => getAllByTestId('Button')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).toHaveClass('button', 'outline', 'default');
	});
	it('testing href attribute', async () => {
		const { getByTestId, component } = render(Button);
		expect(getByTestId('Button')).toHaveClass('button', 'outline', 'default');
		component.$$set({ href: '/test' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('button', 'outline', 'default');
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button').getAttribute('href')).toBe('/test');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).toHaveClass('outline');
		expect(getByTestId('Button')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('fill');
		component.$$set({ variant: 'gradient' });
		await tick();
		expect(getByTestId('Button')).toHaveClass('gradient');
	});
	it('testing interactive width prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('fullWidth');
		component.$$set({ fullWidth: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('fullWidth');
	});
	it('testing interactive circle prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).not.toHaveClass('circle');
		component.$$set({ circle: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('circle');
		component.$$set({ circle: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('circle');
	});
	it('testing interactive active prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button')).not.toHaveClass('active');
		component.$$set({ active: true });
		await tick();
		expect(getByTestId('Button')).toHaveClass('active');
		component.$$set({ active: false });
		await tick();
		expect(getByTestId('Button')).not.toHaveClass('active');
	});
	it('testing interactive class prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
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
		const onMountFunc = jest.fn();
		const onUpdateFunc = jest.fn();
		const onDestroyFunc = jest.fn();
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
		const { component, unmount, getByTestId } = render(Button, {
			props: { href: '/test', useAction }
		});

		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
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
	it('testing custom classes', async () => {
		const { getByTestId } = render(Button, {
			props: { href: '/test', class: 'testClass23 testing58' }
		});
		expect(getByTestId('Button')).toHaveClass('testClass23', 'testing58');
	});
	it('test setting SVGIcon slot', async () => {
		const { getByTestId } = render(
			<Button href="/test">
				<fragment slot="SvgIcon">
					<SvgParser data={SVG} />
				</fragment>
			</Button>
		);
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button').getAttribute('href')).toBe('/test');
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(true);
	});
	it('testing no SVGIcon slot', async () => {
		const { getByTestId } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		expect(getByTestId('Button').getAttribute('href')).toBe('/test');
		expect(getByTestId('Button').innerHTML.includes('</svg>')).toEqual(false);
	});
	it('testing interactive click prop change', async () => {
		const { getByTestId, component } = render(Button, { props: { href: '/test' } });
		expect(getByTestId('Button').tagName.toLocaleLowerCase()).toBe('a');
		const mock = jest.fn();
		component.$on('click', mock);
		await tick();
		expect(mock).not.toHaveBeenCalled();
		fireEvent.click(getByTestId('Button'));
		await tick();
		expect(mock).toHaveBeenCalled();
	});
});
