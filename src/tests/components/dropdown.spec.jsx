import Dropdown from '../container/dropdown.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Dropdown component test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(Dropdown);
		expect(() => getByTestId('Dropdown')).toThrowError();
		expect(() => getByTestId('Dropdown-content')).toThrowError();
		expect(() => getByTestId('Dropdown-close')).not.toThrowError();
		expect(() => getByTestId('Dropdown-open')).not.toThrowError();
		expect(() => getByTestId('Dropdown-toggle')).not.toThrowError();
	});
	it('Dropdown opens on clicking open trigger', async () => {
		const { getByTestId } = render(Dropdown);
		const openBtn = getByTestId('Dropdown-open');
		expect(() => getByTestId('Dropdown')).toThrowError();
		await fireEvent.click(openBtn);
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		await fireEvent.click(openBtn);
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).not.toThrowError();
	});
	it('Dropdown toggles on clicking toggle trigger', async () => {
		const { getByTestId } = render(Dropdown);
		const toggleBtn = getByTestId('Dropdown-toggle');
		expect(() => getByTestId('Dropdown')).toThrowError();
		await fireEvent.click(toggleBtn);
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		await fireEvent.click(toggleBtn);
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).toThrowError();
		await fireEvent.click(toggleBtn);
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).not.toThrowError();
	});
	it('Dropdown closes on clicking close trigger', async () => {
		const { getByTestId } = render(Dropdown);
		const openBtn = getByTestId('Dropdown-open');
		const closeBtn = getByTestId('Dropdown-close');
		expect(() => getByTestId('Dropdown')).toThrowError();
		await fireEvent.click(openBtn);
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		await fireEvent.click(closeBtn);
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).toThrowError();
		await fireEvent.click(closeBtn);
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).toThrowError();
	});
	it('Dropdown set expanded prop initially', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ expanded: false });
		await tick();
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ expanded: true });
		await tick();
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ expanded: false });
		await tick();
		expect(() => getByTestId('Dropdown')).not.toThrowError();
	});
	it('Dropdown without expanded prop initially', async () => {
		const { component, getByTestId } = render(Dropdown);
		expect(() => getByTestId('Dropdown')).toThrowError();
		component.$$set({ expanded: true });
		await tick();
		expect(() => getByTestId('Dropdown')).toThrowError();
		component.$$set({ expanded: false });
		await tick();
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).toThrowError();
		component.$$set({ expanded: true });
		await tick();
		expect(() => getByTestId('Dropdown')).toThrowError();
	});
	it('Dropdown custom classes', async () => {
		const { getByTestId } = render(Dropdown, {
			props: { expanded: true, class: 'testClass23 testing58' }
		});

		expect(() => getByTestId('Dropdown')).not.toThrowError();
		expect(getByTestId('Dropdown')).toHaveClass('testClass23', 'testing58');
	});
	it('Dropdown interactive color prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		expect(getByTestId('Dropdown')).toHaveClass('inherit');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Dropdown')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Dropdown')).toHaveClass('danger');
	});
	it('Dropdown interactive shadow prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Dropdown')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Dropdown')).not.toHaveClass('shadow');
	});
	it('Dropdown interactive center prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ center: true });
		await tick();
		expect(getByTestId('Dropdown').parentElement).toHaveClass('center');
		component.$$set({ center: false });
		await tick();
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('center');
	});
	it('Dropdown interactive overlap prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ overlap: true });
		await tick();
		expect(getByTestId('Dropdown').parentElement).toHaveClass('overlap');
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('noOverlap');
		component.$$set({ overlap: false });
		await tick();
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('overlap');
		expect(getByTestId('Dropdown').parentElement).toHaveClass('noOverlap');
	});
	it('Dropdown interactive position prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ position: 'top' });
		await tick();
		expect(getByTestId('Dropdown').parentElement).toHaveClass('top');
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('bottom');
		component.$$set({ position: 'bottom' });
		await tick();
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('top');
		expect(getByTestId('Dropdown').parentElement).toHaveClass('bottom');
	});
	it('Dropdown interactive position prop change', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ position: 'top' });
		await tick();
		expect(getByTestId('Dropdown').parentElement).toHaveClass('top');
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('bottom');
		component.$$set({ position: 'bottom' });
		await tick();
		expect(getByTestId('Dropdown').parentElement).not.toHaveClass('top');
		expect(getByTestId('Dropdown').parentElement).toHaveClass('bottom');
	});
	it('Dropdown container render location changes when `overlap=false`', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true, overlap: false });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ position: 'top' });
		await tick();
		expect(getByTestId('Dropdown').parentElement.firstElementChild).toHaveClass('contentContainer');
		expect(getByTestId('Dropdown').parentElement.lastElementChild).not.toHaveClass(
			'contentContainer'
		);
		component.$$set({ position: 'bottom' });
		await tick();
		expect(getByTestId('Dropdown').parentElement.firstElementChild).not.toHaveClass(
			'contentContainer'
		);
		expect(getByTestId('Dropdown').parentElement.lastElementChild).toHaveClass('contentContainer');
	});
	it('Dropdown container render location changes when `overlap=false`', async () => {
		const { component, getByTestId } = render(Dropdown, { expanded: true, overlap: false });
		expect(() => getByTestId('Dropdown')).not.toThrowError();
		component.$$set({ position: 'top' });
		await tick();
		expect(getByTestId('Dropdown').parentElement.firstElementChild).toHaveClass('contentContainer');
		expect(getByTestId('Dropdown').parentElement.lastElementChild).not.toHaveClass(
			'contentContainer'
		);
		component.$$set({ position: 'bottom' });
		await tick();
		expect(getByTestId('Dropdown').parentElement.firstElementChild).not.toHaveClass(
			'contentContainer'
		);
		expect(getByTestId('Dropdown').parentElement.lastElementChild).toHaveClass('contentContainer');
	});
	it('Dropdown closes when clicked outside of component', async () => {
		const { getByTestId } = render(Dropdown, { expanded: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();

		await fireEvent.click(getByTestId('outside-component'));
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).toThrowError();
	});
	it('Dropdown should not close when clicked outside of component with `disableAutoClose=true`', async () => {
		const { getByTestId } = render(Dropdown, { expanded: true, disableAutoClose: true });
		expect(() => getByTestId('Dropdown')).not.toThrowError();

		await fireEvent.click(getByTestId('outside-component'));
		await new Promise((r) => setTimeout(r, 800));
		expect(() => getByTestId('Dropdown')).not.toThrowError();
	});
});
