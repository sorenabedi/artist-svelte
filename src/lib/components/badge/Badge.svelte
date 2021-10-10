<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Badge' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let fullWidth = false;
	export let variant: VariantProp = 'outline';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<span
	class={clsx(color, variant, className)}
	class:fullWidth
	data-testid={testID}
	use:useAction
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
>
	<slot />
</span>

<style lang="scss">
	span {
		@import 'components/badge';
		@include badge-outline;
		@include badge-fill;
		@include badge-gradient;
	}
</style>
