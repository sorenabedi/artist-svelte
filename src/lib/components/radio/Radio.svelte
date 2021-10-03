<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Radio' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let shadow = false;
	let label: HTMLSpanElement;
</script>

<div data-testid={testID} class={clsx(color, 'radio')} class:shadow>
	<input
		type="radio"
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
	.radio {
		@import 'components/radio';
	}
</style>
