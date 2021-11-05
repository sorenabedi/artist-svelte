<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID =
		process.env.NODE_ENV === 'test' ? 'TextBlock' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let muted: boolean = false;
	export let truncate: boolean = false;
	export let textStyle: 'uppercase' | 'lowercase' | 'capitalize' | undefined = undefined;
	export let elementType:
		| 'h1'
		| 'h2'
		| 'h3'
		| 'h4'
		| 'h5'
		| 'h6'
		| 'span'
		| 'strong'
		| 'em'
		| 'i'
		| 'p' = 'h4';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

{#if elementType === 'h1'}
	<h1
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'h2'}
	<h2
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'h3'}
	<h3
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'h4'}
	<h4
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'h5'}
	<h5
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'h6'}
	<h6
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'span'}
	<span
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'strong'}
	<strong
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'em'}
	<em
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'i'}
	<i
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
{:else if elementType === 'p'}
	<p
		class={clsx(color, 'textBlock', className, textStyle)}
		class:muted
		class:truncate
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
	</p>
{/if}

<style lang="scss">
	.textBlock {
		@import '../../scss/components/textBlock';
	}
</style>
