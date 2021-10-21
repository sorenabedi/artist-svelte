import Navbar from '../container/navbar.test.svelte';
import {
	mergeEffectAction,
	compactEffectAction,
	slideEffectAction
} from '../../lib/components/navbar/functions';
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
describe('Navbar slideEffectAction test suite', () => {
	it('scrolling viewport to bottom', async () => {
		const { getByTestId } = render(Navbar);

		expect(getByTestId('Navbar').style.top).toEqual('');
		const scrollHeightSpy = jest
			.spyOn(getByTestId('Navbar'), 'clientHeight', 'get')
			.mockImplementation(() => 450);
		slideEffectAction(getByTestId('Navbar'), { direction: 'down' });
		expect(scrollHeightSpy).toBeCalledTimes(1);
		expect(getByTestId('Navbar').style.top).toEqual('-480px');
	});
	it('scrolling viewport to top', async () => {
		const { getByTestId } = render(Navbar);
		getByTestId('Navbar').style.top = `-480px`;
		const scrollHeightSpy = jest
			.spyOn(getByTestId('Navbar'), 'clientHeight', 'get')
			.mockImplementation(() => 450);
		slideEffectAction(getByTestId('Navbar'), { direction: 'up' });
		expect(scrollHeightSpy).toBeCalledTimes(0);
		expect(getByTestId('Navbar').style.top).toEqual('');
	});
});

describe('Navbar mergeEffectAction test suite', () => {
	it('navbar not intersecting with viewport top', async () => {
		const { getByTestId } = render(Navbar);
		let elementTop = 50;
		const elementBoundingRect = jest.fn(() => ({ top: elementTop }));
		getByTestId('Navbar').getBoundingClientRect = elementBoundingRect;

		expect(elementBoundingRect).not.toHaveBeenCalled();
		expect(getByTestId('Navbar')).not.toHaveClass('mergeToTop');
		mergeEffectAction(getByTestId('Navbar'));
		expect(elementBoundingRect).toHaveBeenCalledTimes(2);
		expect(getByTestId('Navbar')).not.toHaveClass('mergeToTop');
	});
	it('navbar intersecting with viewport top', async () => {
		const { getByTestId } = render(Navbar);
		let elementTop = 0;
		const elementBoundingRect = jest.fn(() => ({ top: elementTop }));
		getByTestId('Navbar').getBoundingClientRect = elementBoundingRect;

		expect(elementBoundingRect).not.toHaveBeenCalled();
		expect(getByTestId('Navbar')).not.toHaveClass('mergeToTop');
		mergeEffectAction(getByTestId('Navbar'));
		expect(elementBoundingRect).toHaveBeenCalledTimes(2);
		expect(getByTestId('Navbar')).toHaveClass('mergeToTop');
	});
});

describe('Navbar compactEffectAction test suite', () => {
	let observe;
	let disconnect;
	beforeEach(() => {
		observe = jest.fn();
		disconnect = jest.fn();
		global.IntersectionObserver = jest.fn(() => ({
			observe,
			disconnect
		}));
	});

	it('it works', async () => {
		const { getByTestId } = render(Navbar);
		expect(global.IntersectionObserver).not.toBeCalled();
		expect(observe).not.toBeCalled();
		compactEffectAction(getByTestId('Navbar'));
		expect(global.IntersectionObserver).toBeCalled();
		expect(observe).not.toBeCalled();
	});

	it('initCompactEffect initiate listening on element', async () => {
		const { getByTestId } = render(Navbar);
		expect(global.IntersectionObserver).not.toBeCalled();
		expect(observe).not.toBeCalled();
		const { initCompactEffect } = compactEffectAction(getByTestId('Navbar'));
		expect(global.IntersectionObserver).toBeCalled();
		expect(observe).not.toBeCalled();
		initCompactEffect();
		expect(observe).toBeCalledTimes(1);
	});

	it('destroyCompactEffect stops listening on element', async () => {
		const { getByTestId } = render(Navbar);
		expect(global.IntersectionObserver).not.toBeCalled();
		expect(observe).not.toBeCalled();
		const { initCompactEffect, destroyCompactEffect } = compactEffectAction(getByTestId('Navbar'));
		expect(global.IntersectionObserver).toBeCalled();
		expect(observe).not.toBeCalled();
		expect(disconnect).not.toBeCalled();
		initCompactEffect();
		expect(observe).toBeCalledTimes(1);
		destroyCompactEffect();
		expect(disconnect).toBeCalledTimes(1);
	});

	it('updateCompactEffect element class', async () => {
		const { getByTestId } = render(Navbar);
		const elementBoundingRect = jest.fn(() => ({
			x: 241,
			y: 403.375,
			width: 629,
			height: 41,
			top: 0,
			right: 870,
			bottom: 444.375,
			left: 241
		}));
		getByTestId('Navbar').getBoundingClientRect = elementBoundingRect;
		const { initCompactEffect, updateCompactEffect } = compactEffectAction(getByTestId('Navbar'));
		initCompactEffect();
		updateCompactEffect({ scrollY: 0 });
		expect(getByTestId('Navbar')).not.toHaveClass('compact');

		updateCompactEffect({ scrollY: 500 });
		expect(getByTestId('Navbar')).toHaveClass('compact');
		expect(observe).toBeCalledTimes(1);
	});
});
