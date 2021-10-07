import Switch from '../../lib/components/switch';
import { render, fireEvent, screen } from '@testing-library/svelte';

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
