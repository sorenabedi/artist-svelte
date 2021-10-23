<script lang="ts">
	import { SvgParser } from '$lib/utilities';
	import Accordion from '$lib/components/accordion';
	import AccordionItem from '$lib/components/accordionItem';
	import more from '$lib/svg/icons/more';
	export let multiSelectable = false;
</script>

<Accordion {multiSelectable} {...$$restProps}>
	<AccordionItem {...$$restProps} title="acc-first">
		<svelte:fragment slot="icon">
			<SvgParser data={more} />
		</svelte:fragment>
		Content success
	</AccordionItem>
	<AccordionItem {...$$restProps} title="acc-last">
		<svelte:fragment slot="icon">
			<SvgParser data={more} />
		</svelte:fragment>
		Content success
	</AccordionItem>
</Accordion>
