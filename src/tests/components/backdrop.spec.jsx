import Backdrop from '../../lib/components/backdrop';
import { render } from '@testing-library/svelte';

describe('Backdrop component test suite', () => {
	it('it works', async () => {
		const component = render(<Backdrop />);
		expect(() => component.getAllByTestId('Backdrop')).not.toThrow();
	});

	it('testing default classes', async () => {
		const { getByTestId } = render(Backdrop);
		expect(getByTestId('Backdrop')).toHaveClass('backdrop');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Backdrop);
		expect(getByTestId('Backdrop')).toHaveClass('default');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Backdrop')).toHaveClass('primary');
		expect(getByTestId('Backdrop')).not.toHaveClass('default');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Backdrop, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Backdrop')).toHaveClass('backdrop', 'testClass23', 'testing58');
	});
	it('testing interactive overlayBlur prop change', async () => {
		const { getByTestId, component } = render(Backdrop);
		expect(getByTestId('Backdrop')).not.toHaveClass('overlayBlur');
		component.$$set({ overlayBlur: true });
		await tick();
		expect(getByTestId('Backdrop')).toHaveClass('overlayBlur');
	});
});
