import Avatar from '../../lib/components/avatar';
import AvatarStack from '../../lib/components/avatarStack';
import { render } from '@testing-library/svelte';

describe('Avatar component test suite', () => {
	it('it works', async () => {
		const component = render(Avatar);
		expect(() => component.getAllByTestId('Avatar')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(Avatar);
		expect(getByTestId('Avatar')).toHaveClass('default', 'avatarContainer');
	});
	it('testing interactive color prop change', async () => {
		const { getByTestId, component } = render(Avatar);
		expect(getByTestId('Avatar')).toHaveClass('default');
		expect(getByTestId('Avatar')).not.toHaveClass('primary');
		component.$$set({ color: 'primary' });
		await tick();
		expect(getByTestId('Avatar')).toHaveClass('primary');
		component.$$set({ color: 'danger' });
		await tick();
		expect(getByTestId('Avatar')).toHaveClass('danger');
	});
	it('testing text overlay', async () => {
		const { getByTestId } = render(Avatar, { props: { text: 'overlay TXT' } });
		expect(getByTestId('Avatar')).toHaveTextContent('overlay TXT');
	});
	it('testing border', async () => {
		const { getByTestId } = render(Avatar, { props: { text: 'overlay TXT', bordered: true } });
		expect(getByTestId('Avatar')).toHaveTextContent('overlay TXT');
		expect(getByTestId('Avatar')).toHaveClass('bordered');
	});
	it('testing indicator', async () => {
		const { getByTestId, component } = render(Avatar, {
			props: { text: 'overlay TXT', indicator: false }
		});
		expect(getByTestId('Avatar')).toHaveTextContent('overlay TXT');
		expect(getByTestId('Avatar').querySelectorAll('.indicator')).toHaveLength(0);
		component.$$set({ indicator: true });
		await tick();
		expect(getByTestId('Avatar').querySelectorAll('.indicator')).toHaveLength(1);
	});

	it('testing custom classes', async () => {
		const { getByTestId } = render(Avatar, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('Avatar')).toHaveClass('avatarContainer', 'testClass23', 'testing58');
	});
	it('testing image', async () => {
		const { getByTestId, component } = render(Avatar, { props: { image: '/some/url' } });
		expect(getByTestId('Avatar').querySelectorAll('img')).toHaveLength(1);
		expect(getByTestId('Avatar').querySelector('img')).not.toHaveAttribute('src', '/some/path');
		expect(getByTestId('Avatar').querySelector('img')).toHaveAttribute('src', '/some/url');
		expect(getByTestId('Avatar').querySelector('img')).not.toHaveAttribute('alt');
		component.$$set({ alt: 'testing [alt]' });
		await tick();
		expect(getByTestId('Avatar').querySelector('img')).toHaveAttribute(
			'alt',
			'avatar - testing [alt]'
		);
		component.$$set({ image: '/some/url/2' });
		await tick();
		expect(getByTestId('Avatar').querySelector('img')).toHaveAttribute(
			'alt',
			'avatar - testing [alt]'
		);
		expect(getByTestId('Avatar').querySelector('img')).toHaveAttribute('src', '/some/url/2');
	});
});
describe('AvatarStack component test suite', () => {
	it('it works', async () => {
		const component = render(AvatarStack);
		expect(() => component.getAllByTestId('AvatarStack')).not.toThrow();
	});
	it('testing default classes', async () => {
		const { getByTestId } = render(AvatarStack);
		expect(getByTestId('AvatarStack')).toHaveClass('avatarStack');
	});
	it('testing custom classes', async () => {
		const { getByTestId } = render(AvatarStack, { props: { class: 'testClass23 testing58' } });
		expect(getByTestId('AvatarStack')).toHaveClass('avatarStack', 'testClass23', 'testing58');
	});
	it('testing slot', async () => {
		const { getByTestId } = render(<AvatarStack>some text</AvatarStack>);
		expect(getByTestId('AvatarStack')).toHaveTextContent('some text');
	});
});
