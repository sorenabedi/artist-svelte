<script lang="ts">
	import { SvgParser } from '$lib/utilities';
	import Accordion from '$lib/components/accordion';
	import AccordionItem from '$lib/components/accordionItem';
	import moreIcon from '$lib/svg/more-icon';
	export let multiSelectable = false;
</script>

<Accordion {multiSelectable} {...$$restProps}>
	<AccordionItem {...$$restProps} title="acc-first">
		<svelte:fragment slot="icon">
			<SvgParser data={moreIcon} />
		</svelte:fragment>
		Content success
	</AccordionItem>
	<AccordionItem {...$$restProps} title="acc-last">
		<svelte:fragment slot="icon">
			<SvgParser data={moreIcon} />
		</svelte:fragment>
		Content success
	</AccordionItem>
</Accordion>
