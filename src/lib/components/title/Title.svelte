<script lang="ts">
	import type { ColorProp, VariantProp } from '$types/components/props';
	import clsx from 'clsx';

	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
</script>

<h4 class={clsx(color, variant, 'title')}><slot /></h4>

<style lang="scss">
	.title {
		@import 'modules/components/title';
	}
</style>
