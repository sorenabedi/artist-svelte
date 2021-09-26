import { SVGIcon } from '../../lib/utilities';
import { render } from '@testing-library/svelte';
import SVG, { SVGNoViewBox } from '../mocks/svg';

describe('SVGIcon component test suite', () => {
	it('it works', async () => {
		const component = render(SVGIcon);
		expect(() => component.getAllByTestId('SVGIcon')).not.toThrow();
	});
	it('testing rendered SVG', async () => {
		const { getByTestId, component } = render(SVGIcon);
		expect(getByTestId('SVGIcon').innerHTML).toEqual('');
		await component.$$set({ data: SVG });
		expect(getByTestId('SVGIcon').innerHTML).not.toEqual('');
	});
	it('testing SVG size props', async () => {
		const { getByTestId, component } = render(SVGIcon, { props: { data: SVG } });
		expect(getByTestId('SVGIcon').getAttribute('width')).toEqual(
			getByTestId('SVGIcon').getAttribute('height')
		);
		await component.$$set({ width: '500px' });
		expect(getByTestId('SVGIcon').getAttribute('width')).not.toEqual(
			getByTestId('SVGIcon').getAttribute('height')
		);

		await component.$$set({ height: '500px' });
		expect(getByTestId('SVGIcon').getAttribute('width')).toEqual(
			getByTestId('SVGIcon').getAttribute('height')
		);
		await component.$$set({ size: '150px' });
		expect(getByTestId('SVGIcon').getAttribute('width')).toEqual(
			getByTestId('SVGIcon').getAttribute('height')
		);
		expect(getByTestId('SVGIcon').getAttribute('width')).toEqual('150px');
	});
	it('testing SVG color, fill and stroke props', async () => {
		const { getByTestId, component } = render(SVGIcon, { props: { data: SVG } });
		expect([
			getByTestId('SVGIcon').getAttribute('fill'),
			getByTestId('SVGIcon').getAttribute('stroke')
		]).toEqual(new Array(2).fill('currentColor'));
		await component.$$set({ fill: 'red' });
		expect(getByTestId('SVGIcon').getAttribute('fill')).toEqual('red');
		expect(getByTestId('SVGIcon').getAttribute('stroke')).toEqual('currentColor');

		await component.$$set({ stroke: 'blue' });
		expect(getByTestId('SVGIcon').getAttribute('fill')).toEqual('red');
		expect(getByTestId('SVGIcon').getAttribute('stroke')).toEqual('blue');
		await component.$$set({ color: 'green' });
		expect(getByTestId('SVGIcon').getAttribute('fill')).toEqual('green');
		expect(getByTestId('SVGIcon').getAttribute('stroke')).toEqual('green');
	});
	it('testing SVG viewBox', async () => {
		const { getByTestId, component } = render(SVGIcon, { props: { data: SVGNoViewBox } });
		expect(getByTestId('SVGIcon').getAttribute('viewBox')).toEqual('0 0 20 20');
		await component.$$set({ data: SVG });
		expect(getByTestId('SVGIcon').getAttribute('viewBox')).not.toEqual('0 0 20 20');
		await component.$$set({ viewBox: '10 10 10 10' });
		expect(getByTestId('SVGIcon').getAttribute('viewBox')).toEqual('10 10 10 10');
	});
});
