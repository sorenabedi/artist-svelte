<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp } from '../../types/components/props';
	import clsx from 'clsx';

	const testID = process.env.NODE_ENV === 'test' ? 'Paper' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let shadow = false;
	export let fullWidth = false;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div
	class={clsx(color, 'paper', className)}
	class:shadow
	class:fullWidth
	data-testid={testID}
	use:useAction
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
>
	<slot />
</div>

<style lang="scss">
	.paper {
		@import '../../scss/components/paper';
	}
</style>
