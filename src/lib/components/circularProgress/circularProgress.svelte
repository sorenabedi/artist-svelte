<script lang="ts">
	import type { ColorProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	export let size: string = '1em';
	export let color: ColorProp = 'default';
	export let percentage: number | false = false;
	export let showPercentage = false;
	export let noSpin = false;
	export let desimalPoint = 1;
	export let useAction: useAction<SVGElement> = () => ({});
	let className: string | undefined = undefined;
	export { className as class };

	const testID =
		process.env.NODE_ENV === 'test' ? 'CircularProgress' : /* istanbul ignore next */ undefined;

	const animatedPercentage = tweened(percentage, {
		duration: 400,
		easing: cubicInOut
	});
	$: {
		if (percentage !== false) animatedPercentage.set(percentage);
	}
</script>

<svg
	class={clsx(color, 'circularProgress', className)}
	class:spin={!noSpin}
	class:loading={percentage === false}
	class:percentage={percentage !== false}
	width={size}
	height={size}
	viewBox="0 0 66 66"
	xmlns="http://www.w3.org/2000/svg"
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
	use:useAction
	data-testid={testID}
	{...$$restProps}
>
	<circle
		fill="none"
		stroke-width="6"
		stroke-dasharray={$animatedPercentage !== false &&
			`${(Math.round($animatedPercentage) * 2 * 30 * Math.PI) / 100} 999`}
		stroke-linecap="round"
		stroke="currentColor"
		cx="33"
		cy="33"
		r="30"
	/>
	{#if $animatedPercentage !== false && showPercentage}
		<text x="50%" y="50%" fill="currentColor" dominant-baseline="middle" text-anchor="middle">
			{Math.round($animatedPercentage * Math.pow(10, desimalPoint)) / Math.pow(10, desimalPoint)}%
		</text>
	{/if}
</svg>

<style lang="scss">
	.circularProgress {
		@import '../../scss/components/circularProgress';
	}
</style>
