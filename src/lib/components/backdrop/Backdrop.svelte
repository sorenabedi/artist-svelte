<script lang="ts">
	import type { transitionAction, transitionConfig, useAction } from '../../types/global';
	import type { ColorProp } from '../../types/components/props';
	import clsx from 'clsx';
	import { fade } from 'svelte/transition';

	const testID =
		process.env.NODE_ENV === 'test' ? 'Backdrop' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let overlayBlur = false;
	export let transition: transitionAction = fade;
	export let transitionConfig: transitionConfig = { duration: 300 };
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div
	class={clsx(color, 'backdrop', className)}
	class:overlayBlur
	data-testid={testID}
	transition:transition={transitionConfig}
	use:useAction
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
/>

<style lang="scss">
	.backdrop {
		@import 'components/backdrop';
	}
</style>
