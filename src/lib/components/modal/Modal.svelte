<script context="module" lang="ts">
	// for passing focus on to the next Modal in the queue.
	// A module context level object is shared among all its component instances. [Read More Here](https://svelte.dev/tutorial/sharing-code)
	const modalNodeList: HTMLElement[] = [];
</script>

<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	import { fly, scale } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';
	import booleanStore from '../../store/boolean';
	import { modalInit } from './internal-functions';
	import SvgParser from '../../utilities/svgParser';
	import closeIcon from '../../svg/close-icon';
	import Backdrop from '../backdrop';
	const testID = process.env.NODE_ENV === 'test' ? 'Modal' : /* istanbul ignore next */ undefined;

	export let overlayClose = true;
	export let overlayBlur = false;
	export let fullScreen = false;
	export let noCloseBtn = false;
	export let color: ColorProp = 'default';
	export let overlayColor: ColorProp = color;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };

	const { isEnabled: isOpen, enable: open, disable: close } = booleanStore(false);
	const store = { isOpen, open, close };
	const initAction = modalInit(modalNodeList, close);
</script>

<slot name="trigger" {open} />

<svelte:head>
	{#if $isOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
</svelte:head>

{#if $isOpen}
	<div
		class={clsx('modal', color, className)}
		use:initAction
		use:useAction
		tabindex="0"
		data-testid={testID}
		{...$$restProps}
	>
		<Backdrop color={overlayColor} {overlayBlur} on:click={() => overlayClose && close()} />
		<div
			class="modalContainer"
			class:fullScreen
			in:scale={{ duration: 300, easing: (time) => cubicOut(time * 1) }}
			out:fly={{ y: 100, duration: 300 }}
		>
			{#if !noCloseBtn}
				<div class="danger close">
					<button on:click={close}>
						<SvgParser data={closeIcon} />
					</button>
				</div>
			{/if}
			<div class="contentWrapper">
				<div class="header">
					<slot name="header" {store} />
				</div>

				<div class="content">
					<slot name="content" {store} />
				</div>
				<div class="footer">
					<slot name="footer" {store} />
				</div>
			</div>
		</div>
	</div>
{/if}

<style lang="scss">
	.modal {
		@import '../../scss/components/modal';
	}
</style>
