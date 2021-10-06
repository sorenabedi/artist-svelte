<script lang="ts">
	import type { ColorProp, InputTypeProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	import SvgIcon from '../../utilities/svg-icon.svelte';
	const testID = process.env.NODE_ENV === 'test' ? 'Input' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: Exclude<VariantProp, 'outline-gradient'> = 'fill';
	export let shadow = false;
	export let icon: string | undefined = undefined;
	export let id: string = `i-${nanoid(5)}`;
	export let type: InputTypeProp = 'text';
	export let rtl = false;
	export let fullWidth = false;
	let label: HTMLSpanElement;
</script>

<div
	data-testid={testID}
	class={clsx(color, variant, 'input')}
	class:shadow
	class:icon
	class:fullWidth
	class:rtl
>
	<div class="inputContainer">
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
			{#if icon}
				<div class="icon">
					<SvgIcon data={icon} />
				</div>
			{/if}
			<div class="label">
				<slot />
			</div>
		</label>
	</div>
</div>

<style lang="scss">
	.input {
		@import 'components/input';
		@include button-fill;
		@include button-outline;
	}
</style>
