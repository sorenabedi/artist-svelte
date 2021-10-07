<script lang="ts">
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID =
		process.env.NODE_ENV === 'test' ? 'AvatarStack' : /* istanbul ignore next */ undefined;

	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div data-testid={testID} class={clsx('avatarStack', className)} use:useAction>
	<slot />
</div>

<style lang="scss">
	.avatarStack {
		@import 'components/avatarStack';
	}
</style>
