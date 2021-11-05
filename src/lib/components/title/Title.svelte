<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Title' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
	export let muted: boolean = false;
	export let headingType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span' | 'strong' | 'em' | 'i' =
		'h4';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

{#if headingType === 'h1'}
	<h1
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h1>
{:else if headingType === 'h2'}
	<h2
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h2>
{:else if headingType === 'h3'}
	<h3
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h3>
{:else if headingType === 'h4'}
	<h4
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h4>
{:else if headingType === 'h5'}
	<h5
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h5>
{:else if headingType === 'h6'}
	<h6
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</h6>
{:else if headingType === 'span'}
	<span
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</span>
{:else if headingType === 'strong'}
	<strong
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</strong>
{:else if headingType === 'em'}
	<em
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</em>
{:else if headingType === 'i'}
	<i
		class={clsx(color, variant, 'title', className)}
		class:muted
		use:useAction
		data-testid={testID}
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		{...$$restProps}
	>
		<slot />
	</i>
{/if}

<style lang="scss">
	.title {
		@import '../../scss/components/title';
	}
</style>
