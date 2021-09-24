<script lang="ts">
	import clsx from 'clsx';
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import { SVGIcon } from '../../utilities';

	export let color: ColorProp = 'primary';
	export let rtl = true;
	export let shadow = false;
	export let SvgIcon: string | false = false;
	export let variant: VariantProp = 'outline-gradient';
</script>

<div class={clsx('alertContainer', color, variant)} class:rtl class:shadow>
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
