import Switch from '../../lib/components/switch';
import { render, fireEvent } from '@testing-library/svelte';
import { tick } from 'svelte';

describe('Switch component test suite', () => {
	it('it works', async () => {
		const component = render(Switch);
		expect(() => component.getAllByTestId('Switch')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Switch);
		expect(getByTestId('Switch')).toHaveClass('default', 'switch');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Switch);
		expect(getByTestId('Switch')).toHaveClass('default');
		expect(getByTestId('Switch')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Switch')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Switch')).toHaveClass('danger');
	});
	it('testing custom classes', async () => {
		const { getByTestId } = render(Switch, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Switch')).toHaveClass('switch', 'testClass23', 'testing58');
	});
	it('testing checked attribute 2 way binding', async () => {
		const { getByTestId, component } = render(Switch, { props: { checked: true } });
		expect(getByTestId('Switch').querySelector('input').checked).toEqual(true);
		await fireEvent.click(getByTestId('Switch').querySelector('input'));
		await tick();
		expect(getByTestId('Switch').querySelector('input').checked).toEqual(false);
		component.$$set({ checked: true });
		await tick();
		expect(getByTestId('Switch').querySelector('input').checked).toEqual(true);
	});
	it('testing on/off slots', async () => {
		const { getByTestId } = render(
			<Switch>
				<fragment slot="on">turns on</fragment>
				<fragment slot="off">turns off</fragment>
			</Switch>
		);
		expect(getByTestId('Switch').querySelector('.on')).toHaveTextContent('turns on');
		expect(getByTestId('Switch').querySelector('.off')).toHaveTextContent('turns off');
	});
	it('testing interactive slot change', async () => {
		const { getByTestId } = render(<Switch>switch</Switch>);
		expect(getByTestId('Switch').querySelector('.on')).toHaveTextContent('switch');

		expect(getByTestId('Switch').querySelector('.off')).toHaveTextContent('switch');
	});
});
