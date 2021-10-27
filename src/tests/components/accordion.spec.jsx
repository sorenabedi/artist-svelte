import Accordion from '../container/accordion.test.svelte';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('Accordion component test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(Accordion);
		expect(getByTestId('Accordion')).toBeTruthy();
	});
	it('test multi selectable prop', async () => {
		const { getByTestId, getAllByTestId } = render(Accordion, {
			props: {
				multiSelectable: true
			}
		});
		expect(getByTestId('Accordion')).toBeTruthy();

		const firstItem = getAllByTestId('AccordionItem')[0];
		const secondItem = getAllByTestId('AccordionItem')[1];
		expect(firstItem).not.toHaveClass('expanded');
		expect(secondItem).not.toHaveClass('expanded');
		await fireEvent.click(firstItem.querySelector('.toggler'));
		await fireEvent.click(secondItem.querySelector('.toggler'));
		expect(firstItem).toHaveClass('expanded');
		expect(secondItem).toHaveClass('expanded');
	});
	it('test single selectable prop', async () => {
		const { getByTestId, getAllByTestId } = render(Accordion, {
			props: {
				multiSelectable: false
			}
		});
		expect(getByTestId('Accordion')).toBeTruthy();

		const firstItem = getAllByTestId('AccordionItem')[0];
		const secondItem = getAllByTestId('AccordionItem')[1];
		expect(firstItem).not.toHaveClass('expanded');
		expect(secondItem).not.toHaveClass('expanded');
		await fireEvent.click(firstItem.querySelector('.toggler'));
		expect(firstItem).toHaveClass('expanded');
		expect(secondItem).not.toHaveClass('expanded');
		await fireEvent.click(secondItem.querySelector('.toggler'));
		expect(firstItem).not.toHaveClass('expanded');
		expect(secondItem).toHaveClass('expanded');
	});
});
describe('AccordionItem component test suite', () => {
	it('it works', async () => {
		const { getAllByTestId } = render(Accordion);
		expect(getAllByTestId('AccordionItem')).toBeTruthy();
	});
	it('test multi selectable prop', async () => {
		const { getByTestId, getAllByTestId } = render(Accordion, { props: { multiSelectable: true } });
		expect(getByTestId('Accordion')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')).toBeTruthy();
	});
	it('testing custom classes', async () => {
		const { getAllByTestId, getByText, container } = render(Accordion, {
			props: { class: 'testClass23 testing58' }
		});
		expect(getAllByTestId('AccordionItem')[0]).toHaveClass('testClass23', 'testing58');
		expect(getAllByTestId('AccordionItem')[1]).toHaveClass('testClass23', 'testing58');
	});

	it('testing interactive color prop change', async () => {
		const { getByTestId, getAllByTestId, component } = render(Accordion);
		expect(getByTestId('Accordion')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')[0]).toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[1]).toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[0]).not.toHaveClass('primary');
		expect(getAllByTestId('AccordionItem')[1]).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getAllByTestId('AccordionItem')[0]).not.toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[1]).not.toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[0]).toHaveClass('primary');
		expect(getAllByTestId('AccordionItem')[1]).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getAllByTestId('AccordionItem')[0]).not.toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[1]).not.toHaveClass('inherit');
		expect(getAllByTestId('AccordionItem')[0]).not.toHaveClass('primary');
		expect(getAllByTestId('AccordionItem')[1]).not.toHaveClass('primary');
		expect(getAllByTestId('AccordionItem')[0]).toHaveClass('danger');
		expect(getAllByTestId('AccordionItem')[1]).toHaveClass('danger');
	});

	it('testing interactive disabled prop change', async () => {
		const { getByTestId, getAllByTestId, component } = render(Accordion);
		expect(getByTestId('Accordion')).toBeTruthy();
		expect(getAllByTestId('AccordionItem')[0].querySelector('button')).not.toHaveAttribute(
			'disabled'
		);
		expect(getAllByTestId('AccordionItem')[1].querySelector('button')).not.toHaveAttribute(
			'disabled'
		);
		component.$$set({ disabled: true });
		await tick();
		expect(getAllByTestId('AccordionItem')[0].querySelector('button')).toHaveAttribute('disabled');
		expect(getAllByTestId('AccordionItem')[1].querySelector('button')).toHaveAttribute('disabled');
	});
});
