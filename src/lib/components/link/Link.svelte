<script lang="ts">
	import type { AnchorRelProp, AnchorTargetProp, ColorProp } from '../../types/components/props';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Link' : /* istanbul ignore next */ undefined;

	export let active = false;
	export let truncate = false;
	export let rel: AnchorRelProp | string | undefined = undefined;
	export let target: AnchorTargetProp = '_parent';
	export let color: ColorProp = 'default';
	export let useAction: useAction = () => ({});
	export let href: string;
	let className: string | undefined = undefined;
	export { className as class };
</script>

<a
	{href}
	{rel}
	{target}
	class={clsx(color, 'link', className)}
	class:active
	class:truncate
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
	use:useAction
	data-testid={testID}
	{...$$restProps}
>
	<span>
		<slot />
	</span>
</a>

<style lang="scss">
	.link {
		@import '../../scss/components/link';
	}
</style>
