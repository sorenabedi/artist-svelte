<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import clsx from 'clsx';

	export let color: ColorProp = 'default';
	export let fullWidth = false;
	export let variant: VariantProp = 'outline';
</script>

<span class={clsx(color, variant)} class:fullWidth><slot /></span>

<style lang="scss">
	span {
		@import 'components/badge';
		@include badge-outline;
		@include badge-fill;
		@include badge-gradient;
	}
</style>
