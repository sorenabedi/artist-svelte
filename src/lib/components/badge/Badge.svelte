<script lang="ts">
	import type { ColorProp, VariantProp } from '$types/components/props';
	import clsx from 'clsx';

	export let color: ColorProp = 'default';
	export let fullWidth = false;
	export let variant: VariantProp = 'outline';
</script>

<span class={clsx(color, variant, fullWidth && 'full-width')}><slot /></span>

<style lang="scss">
	span {
		@import 'modules/components/badge';
		@include badge-outline;
		@include badge-fill;
		@include badge-gradient;
	}
</style>
