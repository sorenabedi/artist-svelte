<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	const testID = process.env.NODE_ENV === 'test' ? 'Radio' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let shadow = false;
	export let id: string = `i-${nanoid(5)}`;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	let label: HTMLSpanElement;
</script>

<div data-testid={testID} class={clsx(color, 'radio', className)} class:shadow>
	<input
		{id}
		type="radio"
		aria-label={label && label.textContent}
		on:change
		on:click
		on:dblclick
		on:input
		use:useAction
		{...$$restProps}
	/>
	<div class="inputMask">
		<span />
	</div>
	<label for={id} bind:this={label}>
		<slot />
	</label>
</div>

<style lang="scss">
	.radio {
		@import 'components/radio';
	}
</style>
