<script lang="ts">
	import { SVGIcon } from '$lib';
	import Accordion, { AccordionItem } from '$lib/components/accordion';
	import Drawer from '$lib/components/drawer';
	import Button from '$lib/components/button';
	import more from '$lib/svg/icons/more';
</script>

<Drawer let:toggle {...$$restProps}>
	<div slot="trigger">
		<Button on:click={toggle}>Open drawer</Button>
	</div>
	<div slot="header">
		<h1>header</h1>
	</div>

	<Accordion>
		<AccordionItem title="acc-first">Content success</AccordionItem>
		<AccordionItem title="acc-last">Content success</AccordionItem>
	</Accordion>
</Drawer>
