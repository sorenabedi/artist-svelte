<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components';
	import type { useAction } from '../../types/global';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Title' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
</script>

<h4
	class={clsx(color, variant, 'title', className)}
	use:useAction
	data-testid={testID}
	{...$$restProps}
>
	<slot />
</h4>

<style lang="scss">
	.title {
		@import 'components/title';
	}
</style>
