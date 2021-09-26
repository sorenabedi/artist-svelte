<script lang="ts">
	import clsx from 'clsx';
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import { SVGIcon } from '../../utilities';

	export let color: ColorProp = 'default';
	export let rtl = false;
	export let shadow = false;
	export let SvgIcon: string | false = false;
	export let variant: VariantProp = 'fill';
</script>

<div
	data-testid={process.env.NODE_ENV === 'test' ? 'Alert' : undefined}
	class={clsx('alertContainer', color, variant)}
	class:rtl
	class:shadow
>
	{#if SvgIcon}
		<SVGIcon {color} {variant} data={SvgIcon} />
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
