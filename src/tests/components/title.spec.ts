import Title from '../../lib/components/title';
import { render } from '@testing-library/svelte';

describe('Title component test suite', () => {
	it('it works', async () => {
		const component = render(Title);
		expect(() => component.getAllByTestId('title')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Title);
		expect(getByTestId('title')).toHaveClass('outline', 'default', 'title');
	});
	it('testing interactive color change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('title')).toHaveClass('default');
		expect(getByTestId('title')).not.toHaveClass('primary');
		await component.$$set({ color: 'primary' });
		expect(getByTestId('title')).toHaveClass('primary');
		await component.$$set({ color: 'danger' });
		expect(getByTestId('title')).toHaveClass('danger');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('title')).toHaveClass('outline');
		expect(getByTestId('title')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('title')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('title')).toHaveClass('outline-gradient');
	});
	it('testing interactive variant change', async () => {
		const { getByTestId, component } = render(Title);
		expect(getByTestId('title')).toHaveClass('outline');
		expect(getByTestId('title')).not.toHaveClass('fill');
		await component.$$set({ variant: 'fill' });
		expect(getByTestId('title')).toHaveClass('fill');
		await component.$$set({ variant: 'outline-gradient' });
		expect(getByTestId('title')).toHaveClass('outline-gradient');
	});
});
