<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, RtlProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	import rtlHook from '../../utilities/hook/rtl';
	import componentRtlSetup from '../../utilities/hook/rtl/internal-component-rtl';
	import Badge from '../badge';
	import TextBlock from '../textBlock';
	import Paper from '../paper';

	const testID = process.env.NODE_ENV === 'test' ? 'Card' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'primary';
	export let variant: VariantProp = 'fill';
	export let rtl: RtlProp = undefined;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	const { isEnabled } = rtlHook;
</script>

<div class={clsx('cardContainer', className)} data-testid={testID} use:useAction>
	{#if $$slots.title}
		<div class:rtl={componentRtlSetup(rtl, $isEnabled)} class={clsx('cardHeader')}>
			<TextBlock {color} {variant}><slot name="title" /></TextBlock>
			{#if $$slots.notification}
				<Badge {color} {variant}><slot name="notification" /></Badge>
			{/if}
		</div>
	{/if}
	<Paper class="card" {color} shadow>
		<div class="cardContent">
			<slot />
		</div>

		{#if $$slots.actions}
			<div class={clsx('cardActions', ' balanced')}>
				<slot name="actions" />
			</div>
		{/if}
	</Paper>
</div>

<style lang="scss">
	.cardContainer {
		@import '../../scss/components/card';
	}
</style>
