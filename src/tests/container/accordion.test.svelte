<script lang="ts">
	import { SVGIcon } from '$lib';
	import Accordion, { AccordionItem } from '$lib/components/accordion';
	import more from '$lib/svg/icons/more';
	export let multiSelectable = false;
</script>

<Accordion {multiSelectable} {...$$restProps}>
	<AccordionItem {...$$restProps} title="acc-first">
		<svelte:fragment slot="icon">
			<SVGIcon data={more} />
		</svelte:fragment>
		Content success
	</AccordionItem>
	<AccordionItem {...$$restProps} title="acc-last">
		<svelte:fragment slot="icon">
			<SVGIcon data={more} />
		</svelte:fragment>
		Content success
	</AccordionItem>
</Accordion>
