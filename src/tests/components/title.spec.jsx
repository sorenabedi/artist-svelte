import Title from '../../lib/components/title';
import { render } from '@testing-library/svelte';

describe('Title component test suite', () => {
	it('it works', async () => {
		const component = render(Title);
		expect(() => component.getAllByTestId('Title')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Title);
		expect(getByTestId('Title')).toHaveClass('outline', 'default', 'title');
	});
	it('testing interactive color change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('Title')).toHaveClass('default');
		expect(getByTestId('Title')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('danger');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('Title')).toHaveClass('outline');
		expect(getByTestId('Title')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('fill');
		component.$$set({ variant: 'outline-gradient' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('outline-gradient');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Title, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Title')).toHaveClass('title', 'testClass23', 'testing58');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('Title')).toHaveClass('outline');
		expect(getByTestId('Title')).not.toHaveClass('fill');
		component.$$set({ variant: 'fill' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('fill');
		component.$$set({ variant: 'outline-gradient' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('outline-gradient');
	});
});
