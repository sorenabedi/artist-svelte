import Navbar from '../container/navbar.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';
import { jest } from '@jest/globals';

describe('Navbar component test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(Navbar);
		expect(getByTestId('Navbar')).toBeTruthy();
	});

	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).toHaveClass('inherit');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('inherit');
		expect(getByTestId('Navbar')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('inherit');
		expect(getByTestId('Navbar')).not.toHaveClass('primary');
		expect(getByTestId('Navbar')).toHaveClass('danger');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Navbar, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Navbar')).toHaveClass('navbar', 'testClass23', 'testing58');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('shadow');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).not.toHaveClass('outline');
		component.$$set({ variant: 'outline' });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('outline');
		expect(getByTestId('Navbar')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('fill');
		expect(getByTestId('Navbar')).not.toHaveClass('outline');
	});
	it('testing interactive sticky prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).not.toHaveClass('sticky');
		component.$$set({ sticky: true });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('sticky');
		expect(getByTestId('Navbar')).not.toHaveClass('fixed');
		component.$$set({ sticky: 'fixed' });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('sticky');
		expect(getByTestId('Navbar')).toHaveClass('fixed');
	});
	it('testing interactive rounded prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).toHaveClass('rounded');
		component.$$set({ rounded: false });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('rounded');
		component.$$set({ rounded: true });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('rounded');
	});
	it('testing interactive fullWidth prop change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).not.toHaveClass('fullWidth');
		component.$$set({ fullWidth: true });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('fullWidth');
		component.$$set({ fullWidth: false });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('fullWidth');
	});
	it('testing interactive mergeEffect prop class change', async () => {
		const { getByTestId, component } = render(Navbar);
		expect(getByTestId('Navbar')).not.toHaveClass('mergeToTop');
		component.$$set({ mergeEffect: true, sticky: true });
		await tick();
		expect(getByTestId('Navbar')).not.toHaveClass('mergeToTop');
		component.$$set({ mergeEffect: 'initial' });
		await tick();
		expect(getByTestId('Navbar')).toHaveClass('mergeToTop');
	});
});
