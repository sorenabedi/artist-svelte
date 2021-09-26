<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';
	const testID = process.env.NODE_ENV === 'test' ? 'Badge' : undefined;

	export let color: ColorProp = 'default';
	export let fullWidth = false;
	export let variant: VariantProp = 'outline';
</script>

<span class={clsx(color, variant)} class:fullWidth data-testid={testID}>
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
