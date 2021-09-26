<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import clsx from 'clsx';

	export let color: ColorProp = 'default';
	export let checked: boolean = false;
	export let shadow: boolean = false;
	export let required: boolean = false;
	export let value: string | undefined = undefined;
	let label: HTMLSpanElement;
</script>

<div class={clsx(color, 'checkbox')} class:shadow>
	<input
		type="checkbox"
		aria-label={label && label.textContent}
		on:change
		on:click
		on:dblclick
		on:input
		{checked}
		{value}
		{required}
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
