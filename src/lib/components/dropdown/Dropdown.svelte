<script lang="ts">
	import type { ColorProp, PositionProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	import { slide } from 'svelte/transition';
	import { quintInOut } from 'svelte/easing';
	import booleanStore from '../../store/boolean';
	const testID =
		process.env.NODE_ENV === 'test' ? 'Dropdown' : /* istanbul ignore next */ undefined;

	export let color: ColorProp | 'inherit' = 'inherit';
	export let useAction: useAction = () => ({});
	export let expanded: boolean = false;
	export let disableAutoClose = false;
	export let overlap: boolean = false;
	export let center: boolean = false;
	export let shadow: boolean = false;
	export let position: Exclude<PositionProp, 'left' | 'right'> = 'bottom';
	let className: string | undefined = undefined;
	export { className as class };

	const { isEnabled: isOpen, enable: open, disable: close, toggle } = booleanStore(expanded);

	const dropdownAction: useAction = (dropDownElement) => {
		const detectOutSideClick = (event: MouseEvent) => {
			if (!$isOpen || disableAutoClose) return;
			const isClickInside = dropDownElement.contains(event.target as Node);
			if (!isClickInside) {
				close();
			}
		};
		document.addEventListener('click', detectOutSideClick);
		return {
			destroy: () => document.removeEventListener('click', detectOutSideClick)
		};
	};
</script>

<div class="dropdown">
	<div
		class={clsx('dropdownContainer', position)}
		class:center
		class:noOverlap={!overlap}
		class:overlap
		class:active={$isOpen}
		use:dropdownAction
	>
		{#if overlap || position === 'bottom'}
			<div class="triggerContainer">
				<slot name="trigger" {open} {close} {toggle} isOpen={$isOpen} />
			</div>
		{/if}
		{#if $isOpen}
			<div
				class={clsx('contentContainer', color, className)}
				class:shadow
				transition:slide|local={{ easing: quintInOut, duration: 700 }}
				use:useAction
				tabindex="0"
				data-testid={testID}
				{...$$restProps}
			>
				<slot />
			</div>
		{/if}

		{#if overlap === false && position === 'top'}
			<div class="triggerContainer">
				<slot name="trigger" {open} {close} {toggle} isOpen={$isOpen} />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.dropdown {
		@import '../../scss/components/dropdown';
	}
</style>
