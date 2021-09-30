<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Title' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
</script>

<h4 class={clsx(color, variant, 'title')} data-testid={testID}>
	<slot />
</h4>

<style lang="scss">
	.title {
		@import 'components/title';
	}
</style>
