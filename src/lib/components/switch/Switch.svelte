<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Switch' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	let label: HTMLSpanElement;
</script>

<div data-testid={testID} class={clsx(color, 'switch', className)}>
	<input
		type="checkbox"
		aria-label={label && label.textContent}
		{...$$restProps}
		on:change
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		on:input
		use:useAction
	/>
	<div class="inputMask">
		<span bind:this={label} class="text off">
			{#if $$slots.off}
				<slot name="off" />
			{:else}
				<slot />
			{/if}
		</span>
		<span class="text on">
			{#if $$slots.on}
				<slot name="on" />
			{:else}
				<slot />
			{/if}
		</span>
		<span class="thumb" />
	</div>
</div>

<style lang="scss">
	.switch {
		@import 'components/switch';
	}
</style>
