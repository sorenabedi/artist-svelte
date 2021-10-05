<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	const testID =
		process.env.NODE_ENV === 'test' ? 'Checkbox' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let shadow = false;
	export let id: string = `i-${nanoid(5)}`;
	let label: HTMLSpanElement;
</script>

<div data-testid={testID} class={clsx(color, 'checkbox')} class:shadow>
	<input
		{id}
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
	<label for={id} bind:this={label}>
		<slot />
	</label>
</div>

<style lang="scss">
	.checkbox {
		@import 'components/checkbox';
	}
</style>
