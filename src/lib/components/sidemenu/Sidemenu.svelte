<script lang="ts">
	import type { ColorProp, RtlProp, VariantProp } from '../../types/components/props';
	import type { useAction } from '../../types/global';
	import Backdrop from '../backdrop';
	import clsx from 'clsx';
	import rtlHook from '../../utilities/hook/rtl';
	import componentRtlSetup from '../../utilities/hook/rtl/internal-component-rtl';

	const testID =
		process.env.NODE_ENV === 'test' ? 'Sidemenu' : /* istanbul ignore next */ undefined;

	export let expanded = false;
	export let fixed = false;
	export let overlay = false;
	export let overlayBlur = true;
	export let compact: boolean | 'expandOnFocus' = false;
	export let rtl: RtlProp = undefined;
	export let color: ColorProp | 'inherit' = 'inherit';
	export let variant: Exclude<VariantProp, 'outline' | 'gradient'> = 'fill';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	const { isEnabled } = rtlHook;
</script>

{#if overlay && fixed && expanded}
	<Backdrop
		{overlayBlur}
		color={overlay && color !== 'inherit' ? color : 'transparent'}
		on:click={() => (expanded = false)}
	/>
{/if}
<div
	class={clsx(color, variant, 'sidemenu', className)}
	class:fixed
	class:expanded
	class:expandOnFocus={compact === 'expandOnFocus'}
	class:compact
	class:rtl={componentRtlSetup(rtl, $isEnabled)}
	data-testid={testID}
	use:useAction
>
	<div class="sidemenuContainer">
		<slot isCompact={compact} />
	</div>
</div>

<style lang="scss">
	.sidemenu {
		@import '../../scss/components/sidemenu';
	}
</style>
