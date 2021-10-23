import { SvgParser } from '../../lib/utilities';
import { render } from '@testing-library/svelte';
import SVG, { SVGNoViewBox } from '../mocks/svg';

describe('SvgParser component test suite', () => {
	it('it works', async () => {
		const component = render(SvgParser);
		expect(() => component.getAllByTestId('SvgParser')).not.toThrow();
	});
	it('testing rendered SVG', async () => {
		const { getByTestId, component } = render(SvgParser);
		expect(getByTestId('SvgParser').innerHTML).toEqual('');
		await component.$$set({ data: SVG });
		expect(getByTestId('SvgParser').innerHTML).not.toEqual('');
	});
	it('testing SVG size props', async () => {
		const { getByTestId, component } = render(SvgParser, { props: { data: SVG } });
		expect(getByTestId('SvgParser').getAttribute('width')).toEqual(
			getByTestId('SvgParser').getAttribute('height')
		);
		await component.$$set({ width: '500px' });
		expect(getByTestId('SvgParser').getAttribute('width')).not.toEqual(
			getByTestId('SvgParser').getAttribute('height')
		);

		await component.$$set({ height: '500px' });
		expect(getByTestId('SvgParser').getAttribute('width')).toEqual(
			getByTestId('SvgParser').getAttribute('height')
		);
		await component.$$set({ size: '150px' });
		expect(getByTestId('SvgParser').getAttribute('width')).toEqual(
			getByTestId('SvgParser').getAttribute('height')
		);
		expect(getByTestId('SvgParser').getAttribute('width')).toEqual('150px');
	});
	it('testing SVG color, fill and stroke props', async () => {
		const { getByTestId, component } = render(SvgParser, { props: { data: SVG } });
		expect([
			getByTestId('SvgParser').getAttribute('fill'),
			getByTestId('SvgParser').getAttribute('stroke')
		]).toEqual(new Array(2).fill('currentColor'));
		await component.$$set({ fill: 'red' });
		expect(getByTestId('SvgParser').getAttribute('fill')).toEqual('red');
		expect(getByTestId('SvgParser').getAttribute('stroke')).toEqual('currentColor');

		await component.$$set({ stroke: 'blue' });
		expect(getByTestId('SvgParser').getAttribute('fill')).toEqual('red');
		expect(getByTestId('SvgParser').getAttribute('stroke')).toEqual('blue');
		await component.$$set({ color: 'green' });
		expect(getByTestId('SvgParser').getAttribute('fill')).toEqual('green');
		expect(getByTestId('SvgParser').getAttribute('stroke')).toEqual('green');
	});
	it('testing SVG viewBox', async () => {
		const { getByTestId, component } = render(SvgParser, { props: { data: SVGNoViewBox } });
		expect(getByTestId('SvgParser').getAttribute('viewBox')).toEqual('0 0 20 20');
		await component.$$set({ data: SVG });
		expect(getByTestId('SvgParser').getAttribute('viewBox')).not.toEqual('0 0 20 20');
		await component.$$set({ viewBox: '10 10 10 10' });
		expect(getByTestId('SvgParser').getAttribute('viewBox')).toEqual('10 10 10 10');
	});
});
