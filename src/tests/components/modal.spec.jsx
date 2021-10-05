import Modal from '../container/modal.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';

describe('Modal component test suite', () => {
	it('it works', async () => {
		const { getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		expect(openBtn).toBeTruthy();
	});
	it('modal opens on clicking trigger', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		expect(container.querySelectorAll('.modal').length).toBe(0);
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
	});
	it('modal interactive noCloseBtn prop change', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		expect(container.querySelectorAll('.modal .close button').length).toBe(1);
		component.$$set({ noCloseBtn: true });
		await tick();
		expect(container.querySelectorAll('.modal .close button').length).toBe(0);
	});
	it('modal interactive overlayBlur prop change', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		expect(container.querySelectorAll('.modal .backdrop.overlayBlur').length).toBe(0);
		component.$$set({ overlayBlur: true });
		await tick();
		expect(container.querySelectorAll('.modal .backdrop.overlayBlur').length).toBe(1);
	});
	it('modal closes on clicking default close button', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		const closeBtn = container.querySelector('.modal .close button');
		await fireEvent.click(closeBtn);
		await new Promise((r) => setTimeout(r, 500));
		expect(container.querySelectorAll('.modal').length).toBe(0);
	});
	it('modal closes on pressing Esc key', async () => {
		const { container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		const modal = container.querySelector('.modal');
		await fireEvent.keyDown(modal, { key: 'Escape' });
		await new Promise((r) => setTimeout(r, 500));
		expect(container.querySelectorAll('.modal').length).toBe(0);
	});
	it('modal closes on clicking custom footer close button', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		const closeBtn = getByText('Close Modal');

		await fireEvent.click(closeBtn);
		await new Promise((r) => setTimeout(r, 500));
		expect(container.querySelectorAll('.modal').length).toBe(0);
	});
	it('modal closes on backdrop click', async () => {
		const { component, container, getByText } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(container.querySelectorAll('.modal').length).toBe(1);
		const backdrop = container.querySelector('.modal .backdrop');
		await fireEvent.click(backdrop);
		await new Promise((r) => setTimeout(r, 500));
		expect(container.querySelectorAll('.modal').length).toBe(0);
	});

	it('testing interactive color prop change', async () => {
		const { component, container, getByText, getByTestId } = render(Modal);
		const openBtn = getByText('Open Modal');
		await fireEvent.click(openBtn);
		expect(getByTestId('Modal')).toHaveClass('default');
		expect(getByTestId('Modal')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Modal')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Modal')).toHaveClass('danger');
	});
});
