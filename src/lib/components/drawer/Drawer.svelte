<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, PositionProp, VariantProp } from '../../types/components/props';
	import booleanStore from '../../store/boolean';
	import clsx from 'clsx';
	import Backdrop from '../backdrop';

	const testID = process.env.NODE_ENV === 'test' ? 'Drawer' : /* istanbul ignore next */ undefined;

	export let color: ColorProp | 'inherit' = 'default';
	export let variant: Exclude<VariantProp, 'gradient'> = 'outline';
	export let shadow = false;
	export let overlayBlur = false;
	export let overlay = false;
	export let from: PositionProp = 'left';
	export let fullWidth = true;
	export let expanded = false;

	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };

	const { isEnabled: isOpen, enable: open, disable: close, toggle } = booleanStore(expanded);
</script>

<svelte:head>
	{#if $isOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

<slot name="trigger" />
<div
	class={clsx(color, 'drawerContainer', variant, className)}
	class:expanded={$isOpen}
	data-testid={testID}
>
	{#if $isOpen}
		<Backdrop
			{overlayBlur}
			color={overlay && color !== 'inherit' ? color : 'transparent'}
			on:click={() => close()}
		/>
	{/if}
	<div
		class={clsx('drawer', from)}
		class:expanded={$isOpen}
		class:shadow
		class:fullWidth
		use:useAction
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
	>
		<div class="header">
			<slot name="header" />
		</div>
		<div class="content">
			<slot {close} {toggle} {open} expaneded={$isOpen} />
		</div>
	</div>
</div>

<style lang="scss">
	.drawerContainer {
		@import '../../scss/components/drawer';
	}
</style>
