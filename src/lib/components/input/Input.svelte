<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, InputTypeProp, RtlProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	import globalVars from '../../env';
	import SVGIcon from '../../utilities/svg-icon.svelte';
	const testID = process.env.NODE_ENV === 'test' ? 'Input' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: Exclude<VariantProp, 'outline-gradient'> = 'fill';
	export let shadow = false;
	export let icon: string | undefined = undefined;
	export let id: string = `i-${nanoid(5)}`;
	export let type: InputTypeProp = 'text';
	export let rtl: RtlProp = undefined;
	export let fullWidth = false;
	let label: HTMLSpanElement;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<div
	data-testid={testID}
	class={clsx(color, variant, 'input', className)}
	class:shadow
	class:icon
	class:fullWidth
	class:rtl={rtl !== undefined ? rtl : globalVars.RTL}
>
	<div class="inputContainer">
		<input
			{id}
			{type}
			aria-label={label && label.textContent}
			on:change
			on:click
			on:dblclick
			on:mouseenter
			on:mouseleave
			on:mouseover
			on:focus
			on:input
			use:useAction
			placeholder=" "
			{...$$restProps}
		/>
		<label for={id} bind:this={label}>
			{#if icon}
				<div class="icon">
					<SVGIcon data={icon} />
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
		@include input-fill;
		@include input-outline;
	}
</style>
