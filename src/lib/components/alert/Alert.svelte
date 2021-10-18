<script lang="ts">
	import clsx from 'clsx';
	import globalVars from '../../env';
	import type { useAction } from '../../types/global';
	import type { ColorProp, RtlProp, VariantProp } from '../../types/components/props';
	const testID = process.env.NODE_ENV === 'test' ? 'Alert' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'fill';

	export let rtl: RtlProp = undefined;
	export let shadow = false;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div
	data-testid={testID}
	class={clsx('alertContainer', color, variant, className)}
	class:rtl={rtl !== undefined ? rtl : globalVars.RTL}
	class:shadow
	use:useAction
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
>
	{#if $$slots.SvgIcon}
		<span class="icon">
			<slot name="SvgIcon" />
		</span>
	{/if}
	<div>
		{#if $$slots.title}
			<h6 class="title">
				<slot name="title" />
			</h6>
		{/if}
		<slot />
	</div>
</div>

<style lang="scss">
	.alertContainer {
		@import 'components/alert';
		@include alert-outline;
		@include alert-fill;
		@include alert-gradient;
	}
</style>
