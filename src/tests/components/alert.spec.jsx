import Alert from '../../lib/components/alert';
import { SVGIcon } from '../../lib/utilities';
import { render } from '@testing-library/svelte';
import SVG from '../mocks/svg';

describe('Alert component test suite', () => {
	it('it works', async () => {
		const component = render(<Alert />);
		expect(() => component.getAllByTestId('Alert')).not.toThrow();
	});

	it('testing default classes', async () => {
		const { getByTestId } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('fill', 'default');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('default');
		expect(getByTestId('Alert')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('danger');
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).toHaveClass('fill');
		expect(getByTestId('Alert')).not.toHaveClass('outline');
		component.$$set({ variant: 'outline' });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('outline');
		component.$$set({ variant: 'outline-gradient' });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('outline-gradient');
	});
	it('testing interactive shadow prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).not.toHaveClass('shadow');
		component.$$set({ shadow: true });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('shadow');
		component.$$set({ shadow: false });
		await tick();
		expect(getByTestId('Alert')).not.toHaveClass('shadow');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(Alert);
		expect(getByTestId('Alert')).not.toHaveClass('rtl');
		component.$$set({ rtl: true });
		await tick();
		expect(getByTestId('Alert')).toHaveClass('rtl');
		component.$$set({ rtl: false });
		await tick();
		expect(getByTestId('Alert')).not.toHaveClass('rtl');
	});
	it('testing interactive title slot change', async () => {
		const { getByTestId } = render(
			<Alert>
				<Fragment slot="title">some title</Fragment>
			</Alert>
		);
		expect(getByTestId('Alert').querySelector('h6')).toHaveTextContent('some title');
	});
	it('test setting SVGIcon slot', async () => {
		const { getByTestId } = render(
			<Alert>
				<Fragment slot="SvgIcon">
					<SVGIcon data={SVG} />
				</Fragment>
			</Alert>
		);
		console.log(getByTestId('Alert').innerHTML);
		expect(getByTestId('Alert').innerHTML.includes('</svg>')).toEqual(true);
	});
	it('testing no SVGIcon slot', async () => {
		const { getByTestId } = render(<Alert />);
		expect(getByTestId('Alert').innerHTML.includes('</svg>')).toEqual(false);
	});
});
