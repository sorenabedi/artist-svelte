import Drawer from '../container/drawer.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('Drawer component test suite', () => {
	it('it works', async () => {
		const { getByTestId, getAllByTestId } = render(Drawer);
		expect(getByTestId('Drawer')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')).toBeTruthy();
	});
	it('testing trigger click', async () => {
		const { getByTestId, getAllByTestId, getByText } = render(Drawer);
		expect(getByTestId('Drawer')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')).toBeTruthy();
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('expanded');
		await fireEvent.click(getByText('Open drawer'));
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('expanded');
		await fireEvent.click(getByText('Open drawer'));
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('expanded');
	});
	it('testing backdrop element click', async () => {
		const { getByTestId, getAllByTestId, getByText } = render(Drawer);
		expect(getByTestId('Drawer')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')).toBeTruthy();
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('expanded');
		await fireEvent.click(getByText('Open drawer'));
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('expanded');
		await fireEvent.click(getByTestId('Backdrop'));
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('expanded');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Drawer);
		expect(getByTestId('Drawer')).toHaveClass('default');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Drawer')).toHaveClass('primary');
		expect(getByTestId('Drawer')).not.toHaveClass('default');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Drawer);
		expect(getByTestId('Drawer')).toHaveClass('outline');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Drawer')).toHaveClass('fill');
		expect(getByTestId('Drawer')).not.toHaveClass('outline');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Drawer);
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('shadow');
	});
	it('testing interactive from prop change', async () => {
		const { getByTestId, component } = render(Drawer);
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('left');
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('right');
		component.$$set({ from: 'right' });
		await tick();
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('right');
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('left');
	});
	it('testing expanded prop set', async () => {
		const { getByTestId } = render(Drawer, { props: { expanded: true } });
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('expanded');
	});
	it('testing expanded prop set', async () => {
		const { getByTestId } = render(Drawer, { props: { expanded: false } });
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).not.toHaveClass('expanded');
	});
	it('testing interactive overlayBlur prop change', async () => {
		const { getByTestId, component } = render(Drawer, { props: { expanded: true } });
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('expanded');
		expect(getByTestId('Backdrop')).not.toHaveClass('overlayBlur');
		component.$$set({ overlayBlur: true });
		await tick();
		expect(getByTestId('Backdrop')).toHaveClass('overlayBlur');
	});
	it('testing interactive overlay prop change', async () => {
		const { getByTestId, component } = render(Drawer, { props: { expanded: true } });
		expect(getByTestId('Drawer').querySelector(':scope > .drawer')).toHaveClass('expanded');
		expect(getByTestId('Backdrop')).toHaveClass('transparent');
		component.$$set({ overlay: true, color: 'danger' });
		await tick();
		expect(getByTestId('Backdrop')).not.toHaveClass('transparent');
		expect(getByTestId('Backdrop')).toHaveClass('danger');
	});
});
