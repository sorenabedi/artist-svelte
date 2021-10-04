<script context="module" lang="ts">
	// for passing focus on to the next Modal in the queue.
	// A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)
	const modalList: HTMLElement[] = [];
</script>

<script lang="ts">
	import clsx from 'clsx';
	import { fly, fade, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import booleanStore from '../../store/booleanStore';
	import { useAction } from './functions';
	import SVGIcon from '../../utilities/svg-icon.svelte';
	import CloseSVG from '../../svg/icons/close';
	import type { ColorProp } from '$lib/types/components';
	const testID = process.env.NODE_ENV === 'test' ? 'Modal' : /* istanbul ignore next */ undefined;

	export let overlayClose = true;
	export let overlayBlur = false;
	export let noCloseBtn = false;
	export let color: ColorProp = 'default';

	const modalAction = useAction(modalList);
	const store = booleanStore(false);
	const { isOpen, open, close } = store;
</script>

<slot name="trigger" {open} />
{#if $isOpen}
	<div class={clsx('modal', color)} use:modalAction tabindex="0" data-testid={testID}>
		<div
			class="backdrop"
			class:overlayBlur
			on:click={() => overlayClose && close()}
			transition:fade={{ duration: 300 }}
		/>

		<div
			class="content-wrapper"
			in:scale={{ duration: 300, easing: (time) => cubicOut(time * 1) }}
			out:fly={{ y: 100, duration: 300 }}
		>
			{#if !noCloseBtn}
				<div class="danger close">
					<button on:click={close}>
						<SVGIcon data={CloseSVG} />
					</button>
				</div>
			{/if}
			<div class="header">
				<slot name="header" {store} />
			</div>

			<div class="content">
				<slot name="content" {store} />
			</div>

			<slot name="footer" {store} />
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		@import 'components/modal';
	}
</style>
