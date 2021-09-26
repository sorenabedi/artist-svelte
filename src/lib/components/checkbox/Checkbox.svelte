<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Checkbox' : undefined;

	export let color: ColorProp = 'default';
	export let shadow = false;
	let label: HTMLSpanElement;
</script>

<div data-testid={testID} class={clsx(color, 'checkbox')} class:shadow>
	<input
		type="checkbox"
		aria-label={label && label.textContent}
		on:change
		on:click
		on:dblclick
		on:input
		{...$$restProps}
	/>
	<div class="inputMask">
		<span />
	</div>
	<span bind:this={label}>
		<slot />
	</span>
</div>

<style lang="scss">
	.checkbox {
		@import 'components/checkbox';
	}
</style>
