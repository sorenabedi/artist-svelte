import prismParser from '../../lib/utilities/prismParser';
import { render } from '@testing-library/svelte';
import { tick } from 'svelte';
import Prism from 'prismjs';
describe('prismParser component test suite', () => {
	it('it works', async () => {
		const { getByTestId } = render(prismParser);
		expect(() => getByTestId('PrismParser')).not.toThrowError();
	});
	it('testing interactive inline change', async () => {
		const { getByTestId, component } = render(prismParser, { inline: false });
		expect(
			getByTestId('PrismParser').parentElement.querySelectorAll(':scope > pre').length
		).toEqual(1);
		expect(
			getByTestId('PrismParser').parentElement.querySelectorAll(':scope > pre > code').length
		).toEqual(1);
		component.$$set({ inline: true });
		await tick();

		expect(
			getByTestId('PrismParser').parentElement.querySelectorAll(':scope > pre').length
		).toEqual(0);
		expect(
			getByTestId('PrismParser').parentElement.querySelectorAll(':scope > code').length
		).toEqual(1);
	});
	it('testing interactive language change', async () => {
		const { getByTestId, component } = render(prismParser);
		expect(getByTestId('PrismParser')).toHaveClass('language-markup');
		component.$$set({ language: 'js' });
		await tick();
		expect(getByTestId('PrismParser')).not.toHaveClass('language-markup');
		expect(getByTestId('PrismParser')).toHaveClass('language-js');
	});
	it('testing interactive data change', async () => {
		const { getByTestId, component } = render(prismParser);
		component.$$set({ data: '<div>test#12</div>' });
		await tick();
		expect(getByTestId('PrismParser').parentElement.querySelector(':scope code').innerHTML).toEqual(
			'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>test#12<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>'
		);
		expect(
			getByTestId('PrismParser').parentElement.querySelector(':scope code').innerHTML
		).not.toEqual('<div>test#12</div>');
	});
});
