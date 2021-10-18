<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, RtlProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	import globalVars from '../../env';
	import Badge from '../badge';
	import Title from '../title';
	import Paper from '../paper';

	const testID = process.env.NODE_ENV === 'test' ? 'Card' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'primary';
	export let variant: VariantProp = 'fill';
	export let rtl: RtlProp = undefined;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div class={clsx('cardContainer', className)} data-testid={testID} use:useAction>
	{#if $$slots.title}
		<div class:rtl={rtl !== undefined ? rtl : globalVars.RTL} class={clsx('cardHeader')}>
			<Title {color} {variant}><slot name="title" /></Title>
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
		@import 'components/card';
	}
</style>
