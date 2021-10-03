<script lang="ts">
	import type { ColorProp, InputTypeProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Input' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: Exclude<VariantProp, 'outline-gradient'> = 'fill';
	export let shadow = false;
	export let id: string;
	export let type: InputTypeProp = 'text';
	export let rtl = false;
	export let fullWidth = false;
	let label: HTMLSpanElement;
</script>

<div
	data-testid={testID}
	class={clsx(color, variant, 'input')}
	class:shadow
	class:fullWidth
	class:rtl
>
	<input
		{id}
		{type}
		aria-label={label && label.textContent}
		on:change
		on:click
		on:dblclick
		on:input
		placeholder=" "
		{...$$restProps}
	/>
	<label for={id} bind:this={label}>
		<slot />
	</label>
</div>

<style lang="scss">
	.input {
		@import 'components/input';
		@include button-fill;
		@include button-outline;
	}
</style>
