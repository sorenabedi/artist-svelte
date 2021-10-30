import Sidemenu from '../../lib/components/sidemenu';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('Sidemenu component test suite', () => {
	it('it works', async () => {
		const { getAllByTestId } = render(Sidemenu);
		expect(() => getAllByTestId('Sidemenu')).not.toThrow();
	});
	it('testing interactive expanded prop change', async () => {
		const { getByTestId, component } = render(Sidemenu);
		expect(getByTestId('Sidemenu')).not.toHaveClass('expanded');
		component.$$set({ expanded: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).toHaveClass('expanded');
		component.$$set({ expanded: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('expanded');
	});
	it('testing interactive fixed prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, { expanded: true });
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('fixed');
		component.$$set({ fixed: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).toHaveClass('fixed');
		component.$$set({ fixed: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('fixed');
	});
	it('testing interactive overlay related prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, {
			expanded: true,
			fixed: true,
			overlay: false
		});
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).toThrow();
		component.$$set({ overlay: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		component.$$set({ fixed: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).toThrow();
		component.$$set({ fixed: true, overlay: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		component.$$set({ expanded: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).toThrow();
		component.$$set({ expanded: true, overlay: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).toThrow();
		component.$$set({ expanded: true, overlay: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		await fireEvent.click(getByTestId('Backdrop'));
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).toThrow();
		expect(getByTestId('Sidemenu')).not.toHaveClass('expanded');
	});
	it('testing interactive overlayBlur prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, {
			expanded: true,
			fixed: true,
			overlay: true,
			overlayBlur: false
		});
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		expect(getByTestId('Backdrop')).not.toHaveClass('overlayBlur');
		component.$$set({ overlayBlur: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		expect(getByTestId('Backdrop')).toHaveClass('overlayBlur');
		component.$$set({ overlayBlur: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		expect(getByTestId('Backdrop')).not.toHaveClass('overlayBlur');
	});
	it('testing interactive compact prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, {
			expanded: true,
			compact: false
		});
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Sidemenu')).not.toThrow();
		expect(getByTestId('Sidemenu')).not.toHaveClass('compact', 'expandOnFocus');
		component.$$set({ compact: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('expandOnFocus');
		expect(getByTestId('Sidemenu')).toHaveClass('compact');
		component.$$set({ compact: 'expandOnFocus' });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).toHaveClass('compact', 'expandOnFocus');
		component.$$set({ compact: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('compact', 'expandOnFocus');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, {
			expanded: true
		});
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Sidemenu')).not.toThrow();
		expect(getByTestId('Sidemenu')).not.toHaveClass('rtl');
		component.$$set({ rtl: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).toHaveClass('rtl');
		component.$$set({ rtl: false });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('rtl');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Sidemenu, { color: 'inherit' });
		expect(getByTestId('Sidemenu')).toHaveClass('inherit');
		component.$$set({ fixed: true, expanded: true, overlay: true });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(() => getByTestId('Backdrop')).not.toThrow();
		expect(getByTestId('Backdrop')).toHaveClass('transparent');
		expect(getByTestId('Backdrop')).not.toHaveClass('primary');
		expect(getByTestId('Sidemenu')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Sidemenu')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Sidemenu')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Sidemenu);
		expect(getByTestId('Sidemenu')).toHaveClass('fill');
		expect(getByTestId('Sidemenu')).not.toHaveClass('outline');
		component.$$set({ variant: 'outline' });
		await tick();
		expect(getByTestId('Sidemenu')).toHaveClass('outline');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Sidemenu')).toHaveClass('fill');
	});
	it('testing custom classes', async () => {
		const { getByTestId, component } = render(Sidemenu, {
			props: { class: 'testClass23 testing58' }
		});
		expect(getByTestId('Sidemenu')).toHaveClass('testClass23', 'testing58');
		component.$$set({ class: undefined });
		tick();
		await new Promise((r) => setTimeout(r, 500));
		expect(getByTestId('Sidemenu')).not.toHaveClass('testClass23', 'testing58');
	});
});
