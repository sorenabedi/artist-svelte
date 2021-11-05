import TextBlock from '../../lib/components/textBlock';
import { render } from '@testing-library/svelte';

describe('TextBlock component test suite', () => {
	it('it works', async () => {
		const component = render(TextBlock);
		expect(() => component.getAllByTestId('TextBlock')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(TextBlock);
		expect(getByTestId('TextBlock')).toHaveClass('default', 'textBlock');
	});
	it('testing interactive color change', async () => {
		const { getByTestId, component } = render(TextBlock);
		expect(getByTestId('TextBlock')).toHaveClass('default');
		expect(getByTestId('TextBlock')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('TextBlock')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('TextBlock')).toHaveClass('danger');
	});
	it('testing custom classes', async () => {
		const { getByTestId } = render(TextBlock, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('TextBlock')).toHaveClass('testClass23', 'testing58');
	});
	it('testing interactive muted change', async () => {
		const { getByTestId, component } = render(TextBlock);
		component.$$set({ muted: false });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('muted');
		component.$$set({ muted: true });
		await tick();
		expect(getByTestId('TextBlock')).toHaveClass('muted');
		component.$$set({ muted: false });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('muted');
	});
	it('testing interactive textStyle change', async () => {
		const { getByTestId, component } = render(TextBlock);
		component.$$set({ textStyle: undefined });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('uppercase');
		component.$$set({ textStyle: 'uppercase' });
		await tick();
		expect(getByTestId('TextBlock')).toHaveClass('uppercase');
		component.$$set({ textStyle: 'lowercase' });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('uppercase');
		expect(getByTestId('TextBlock')).toHaveClass('lowercase');
	});
	it('testing interactive truncate change', async () => {
		const { getByTestId, component } = render(TextBlock);
		component.$$set({ truncate: false });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('truncate');
		component.$$set({ truncate: true });
		await tick();
		expect(getByTestId('TextBlock')).toHaveClass('truncate');
		component.$$set({ truncate: false });
		await tick();
		expect(getByTestId('TextBlock')).not.toHaveClass('truncate');
	});
	it.each(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'strong', 'em', 'i', 'p'])(
		'testing interactive elementType (%p) change',
		async (elementType) => {
			const { getByTestId, component } = render(TextBlock, { elementType });
			expect(getByTestId('TextBlock').tagName.toLowerCase()).toEqual(elementType);

			expect(getByTestId('TextBlock')).not.toHaveClass('primary');
			component.$$set({ color: 'primary' });
			await tick();
			expect(getByTestId('TextBlock')).toHaveClass('primary');
		}
	);
});
