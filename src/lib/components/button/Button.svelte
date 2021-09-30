<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Button' : /* istanbul ignore next */ undefined;

	export let rtl = false;
	export let circle = false;
	export let fullWidth = false;
	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
</script>

<button
	class={clsx(color, variant)}
	class:fullWidth
	class:rtl
	class:circle
	on:click
	on:dblclick
	data-testid={testID}
>
	{#if $$slots.SvgIcon}
		<span class="icon">
			<slot name="SvgIcon" />
		</span>
		<span><slot /></span>
	{:else}
		<span>
			<slot />
		</span>
	{/if}
</button>

<style lang="scss">
	button {
		@import 'components/button';
		@include button-outline;
		@include button-fill;
		@include button-gradient;
	}
</style>
