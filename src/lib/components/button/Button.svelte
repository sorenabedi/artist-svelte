<script lang="ts">
	import type { OnClickFunc } from '../../types/global';
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../../utilities/svg-icon.svelte';

	export let rtl = false;
	export let circle = false;
	export let SVGIcon = undefined;
	export let fullWidth = false;
	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';

	const dispatch = createEventDispatcher();
	const onClick: OnClickFunc = (event) => {
		dispatch('click', event);
	};
</script>

<button
	class={clsx(color, rtl && 'rtl', variant, fullWidth && 'full-width', circle && 'circle')}
	on:click={onClick}
>
	{#if SVGIcon}
		<span class="icon"><Icon data={SVGIcon} /></span>
		<span><slot /></span>
	{:else}
		<span>
			<slot />
		</span>
	{/if}
</button>

<style lang="scss">
	button {
		@import 'components/button';
		@include button-outline;
		@include button-fill;
		@include button-gradient;
	}
</style>
