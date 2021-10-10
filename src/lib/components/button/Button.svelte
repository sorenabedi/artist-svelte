<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Button' : /* istanbul ignore next */ undefined;

	export let rtl = false;
	export let circle = false;
	export let fullWidth = false;
	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
	export let useAction: useAction = () => ({});
	export let href: string | undefined = undefined;
	let className: string | undefined = undefined;
	export { className as class };
</script>

{#if href}
	<a
		{href}
		class={clsx(color, variant, 'button', className)}
		class:fullWidth
		class:rtl
		class:circle
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		use:useAction
		data-testid={testID}
		{...$$restProps}
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
	</a>
{:else}
	<button
		class={clsx(color, variant, 'button', className)}
		class:fullWidth
		class:rtl
		class:circle
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		use:useAction
		data-testid={testID}
		{...$$restProps}
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
{/if}

<style lang="scss">
	.button {
		@import 'components/button';
		@include button-outline;
		@include button-fill;
		@include button-gradient;
	}
</style>
