<script lang="ts">
	import clsx from 'clsx';

	export let className = '';
	const testID =
		process.env.NODE_ENV === 'test' ? 'AvatarStack' : /* istanbul ignore next */ undefined;
</script>

<div data-testid={testID} class={clsx('avatarStack', className)}>
	<slot />
</div>

<style lang="scss">
	.avatarStack {
		@import 'components/avatarStack';
	}
</style>
