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
		component.$$set({ variant: 'gradient' });
		await tick();
		expect(getByTestId('Title')).toHaveClass('gradient');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Title, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Title')).toHaveClass('title', 'testClass23', 'testing58');
	});
	it('testing interactive muted change', async () => {
		const { getByTestId, component } = render(Title);
		component.$$set({ muted: false });
		await tick();
		expect(getByTestId('Title')).not.toHaveClass('muted');
		component.$$set({ muted: true });
		await tick();
		expect(getByTestId('Title')).toHaveClass('muted');
		component.$$set({ muted: false });
		await tick();
		expect(getByTestId('Title')).not.toHaveClass('muted');
	});
	it('testing interactive headingType change', async () => {
		const { getByTestId, component } = render(Title);
		component.$$set({ headingType: 'h1' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h1');
		component.$$set({ headingType: 'h2' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h2');
		component.$$set({ headingType: 'h3' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h3');
		component.$$set({ headingType: 'h4' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h4');
		component.$$set({ headingType: 'h5' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h5');
		component.$$set({ headingType: 'h6' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('h6');
		component.$$set({ headingType: 'span' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('span');
		component.$$set({ headingType: 'strong' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('strong');
		component.$$set({ headingType: 'em' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('em');
		component.$$set({ headingType: 'i' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('i');
		component.$$set({ headingType: 'span' });
		await tick();
		expect(getByTestId('Title').tagName.toLowerCase()).toEqual('span');
	});
});
