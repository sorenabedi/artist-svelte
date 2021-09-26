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
		await component.$$set({ color: 'primary' });
		expect(getByTestId('Title')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('Title')).toHaveClass('danger');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('Title')).toHaveClass('outline');
		expect(getByTestId('Title')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('Title')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('Title')).toHaveClass('outline-gradient');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('Title')).toHaveClass('outline');
		expect(getByTestId('Title')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('Title')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('Title')).toHaveClass('outline-gradient');
	});
});
