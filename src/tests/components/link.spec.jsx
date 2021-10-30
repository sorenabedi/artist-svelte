import Link from '../../lib/components/link';
import { render } from '@testing-library/svelte';

describe('Link component test suite', () => {
	it('it works', async () => {
		const { getAllByTestId } = render(Link, { href: '#unitTest' });
		expect(() => getAllByTestId('Link')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).toHaveClass('link', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).toHaveClass('default');
		expect(getByTestId('Link')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Link')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Link')).toHaveClass('danger');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Link, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Link')).toHaveClass('testClass23', 'testing58');
	});
	it('testing interactive rel prop change', async () => {
		const { getByTestId, component } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).not.toHaveAttribute('rel');
		component.$$set({ rel: 'external' });
		await tick();
		expect(getByTestId('Link')).toHaveAttribute('rel', 'external');
		component.$$set({ rel: undefined });
		await tick();
		expect(getByTestId('Link')).not.toHaveAttribute('rel');
	});
	it('testing interactive target prop change', async () => {
		const { getByTestId, component } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).toHaveAttribute('target', '_parent');
		component.$$set({ target: '_top' });
		await tick();
		expect(getByTestId('Link')).toHaveAttribute('target', '_top');
		component.$$set({ target: '_blank' });
		await tick();
		expect(getByTestId('Link')).toHaveAttribute('target', '_blank');
	});
	it('testing interactive truncate prop change', async () => {
		const { getByTestId, component } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).not.toHaveClass('truncate');
		component.$$set({ truncate: true });
		await tick();
		expect(getByTestId('Link')).toHaveClass('truncate');
		component.$$set({ truncate: false });
		await tick();
		expect(getByTestId('Link')).not.toHaveClass('truncate');
	});
	it('testing interactive href prop change', async () => {
		const { getByTestId, component } = render(Link, { href: '#unitTest' });
		expect(getByTestId('Link')).toHaveAttribute('href', '#unitTest');
		component.$$set({ href: '#testURL' });
		await tick();
		expect(getByTestId('Link')).toHaveAttribute('href', '#testURL');
		component.$$set({ href: '#testURL2' });
		await tick();
		expect(getByTestId('Link')).toHaveAttribute('href', '#testURL2');
	});
});
