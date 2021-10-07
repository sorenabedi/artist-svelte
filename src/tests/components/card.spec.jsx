import Card from '../../lib/components/card';
import Button from '../../lib/components/button';
import { render } from '@testing-library/svelte';

describe('Card component test suite', () => {
	it('it works', async () => {
		const component = render(<Card />);
		expect(() => component.getAllByTestId('Card')).not.toThrow();
	});

	it('testing default classes', async () => {
		const { getByTestId } = render(Card);
		expect(getByTestId('Card')).toHaveClass('cardContainer');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component, container } = render(
			<Card color="primary">
				<Fragment slot="title">some title</Fragment>
				<Fragment slot="notification">All rights reserved</Fragment>
				<strong>Soren Abedi</strong> requested to follow you
				<Fragment slot="actions">
					<Button rtl color="primary">
						Accept
					</Button>
					<Button variant="outline" color="primary">
						X
					</Button>
				</Fragment>
			</Card>
		);
		expect(getByTestId('Card').querySelectorAll('.primary').length).toBe(4);
		expect(getByTestId('Card').querySelectorAll('.default').length).toBe(0);
	});
	it('testing interactive variant prop change', async () => {
		const { getByTestId, component, container } = render(
			<Card variant="outline" color="warning">
				<Fragment slot="title">some title</Fragment>
				<Fragment slot="notification">All rights reserved</Fragment>
				<strong>Soren Abedi</strong> requested to follow you
				<Fragment slot="actions">
					<Button rtl variant="fill" color="primary">
						Accept
					</Button>
					<Button variant="fill" color="primary">
						X
					</Button>
				</Fragment>
			</Card>
		);
		expect(getByTestId('Badge')).toHaveClass('outline', 'warning');
	});
	it('testing interactive rtl prop change', async () => {
		const { getByTestId, component } = render(
			<Card rtl>
				<Fragment slot="title">some title</Fragment>
			</Card>
		);
		expect(getByTestId('Card').querySelector('.cardHeader')).toHaveClass('rtl');
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Card, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Card')).toHaveClass('cardContainer', 'testClass23', 'testing58');
	});
	it('testing interactive title slot change', async () => {
		const { getByTestId } = render(
			<Card>
				<Fragment slot="title">some title</Fragment>
			</Card>
		);
		expect(getByTestId('Card').querySelector('h4')).toHaveTextContent('some title');
	});
	it('testing no SVGIcon slot', async () => {
		const { getByTestId } = render(<Card />);
		expect(getByTestId('Card').innerHTML.includes('</svg>')).toEqual(false);
	});
});
