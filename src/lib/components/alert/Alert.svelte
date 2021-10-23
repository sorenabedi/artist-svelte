<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, RtlProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	import rtlHook from '../../utilities/hook/rtl';
	import componentRtlSetup from '../../utilities/hook/rtl/internal-component-rtl';
	const testID = process.env.NODE_ENV === 'test' ? 'Alert' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'fill';

	export let rtl: RtlProp = undefined;
	export let shadow = false;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	const { isEnabled } = rtlHook;
</script>

<div
	data-testid={testID}
	class={clsx('alertContainer', color, variant, className)}
	class:rtl={componentRtlSetup(rtl, $isEnabled)}
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
		@import '../../scss/components/alert/index.scss';
	}
</style>
