<script lang="ts">
	import { accordionWrapperInit } from './functions';
	const testID =
		process.env.NODE_ENV === 'test' ? 'Accordion' : /* istanbul ignore next */ undefined;

	export let multiSelectable = false;
	accordionWrapperInit(multiSelectable);
</script>

<div class="accordion" data-accordion data-testid={testID} {...$$restProps}>
	<slot />
</div>

<style lang="scss">
	.accordion {
		@import 'components/accordion';
	}
</style>
