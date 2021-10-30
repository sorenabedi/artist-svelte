<script lang="ts">
	import Sidemenu from '$lib/components/sidemenu';
	import Link from '$lib/components/link';
	import Accordion from '$lib/components/accordion';
	import AccordionItem from '$lib/components/accordionItem';
	import SvgParser from '$lib/utilities/svgParser/svg-parser.svelte';
	import more from '$lib/svg/icons/more';
	import close from '$lib/svg/icons/close';
	import booleanify from '$lib/utilities/helper/booleanify';
	import { browser } from '$app/env';
	let compact: boolean | 'expandOnFocus' = false;
	let expanded = true;
	let fixed = false;
	let overlay = true;
	const location = browser ? window.location.pathname : undefined;
</script>

<div style="display: flex;width:100%">
	<Sidemenu color="warning" overlayBlur {compact} {overlay} {fixed} bind:expanded let:isCompact>
		<Accordion>
			<AccordionItem simple compact={booleanify(isCompact)} color="inherit" title="Danger">
				<svelte:fragment slot="icon">
					<SvgParser data={more} />
				</svelte:fragment>
				Content danger
			</AccordionItem>
			<AccordionItem
				simple
				compact={booleanify(isCompact)}
				variant="outline"
				color="danger"
				title="Success"
				expanded={location?.startsWith('/sidemenu')}
			>
				<svelte:fragment slot="icon">
					<SvgParser data={close} />
				</svelte:fragment>
				<svelte:fragment slot="title">some item</svelte:fragment>
				<Accordion multiSelectable>
					<AccordionItem
						simple
						compact={booleanify(isCompact)}
						color="danger"
						title="Danger"
						expanded={location?.startsWith('/sidemenu')}
					>
						<svelte:fragment slot="icon">
							<SvgParser data={more} />
						</svelte:fragment>
						<Link color="primary" active={location?.startsWith('/sidemenu')} href="#!"
							>some link</Link
						>
					</AccordionItem>
					<AccordionItem
						simple
						compact={booleanify(isCompact)}
						variant="fill"
						color="primary"
						title="Success"
					>
						<svelte:fragment slot="icon">
							<SvgParser data={close} />
						</svelte:fragment>
						Content success
					</AccordionItem>
					<AccordionItem
						simple
						compact={booleanify(isCompact)}
						variant="gradient"
						color="primary"
						title="Success"
					>
						<svelte:fragment slot="icon">
							<SvgParser data={close} />
						</svelte:fragment>
						Content success
					</AccordionItem>
				</Accordion>
			</AccordionItem>
			<AccordionItem
				simple
				compact={booleanify(isCompact)}
				variant="gradient"
				color="primary"
				title="Success"
			>
				<svelte:fragment slot="icon">
					<SvgParser data={close} />
				</svelte:fragment>
				Content success
			</AccordionItem>
		</Accordion>
	</Sidemenu>
	<div style="min-height:300vh;width:100%;">
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt
		sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur
		adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur
		voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos
		corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae
		exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit
		amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere
		asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus
		neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit.
		Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur voluptate
		necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum!
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt
		sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur
		adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur
		voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos
		corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae
		exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit
		amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere
		asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus
		neque error, ad aperiam. Dolorum! Lorem ip
		<button on:click={() => (compact = !compact)}>compact : {compact}</button>
		<button on:click={() => (fixed = !fixed)}>fixed : {fixed}</button>
		<button on:click={() => (overlay = !overlay)}>overlay : {overlay}</button>
		<button on:click={() => (expanded = !expanded)}>expanded : {expanded}</button>
		sum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga
		facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus
		neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia,
		dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim
		quae exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit
		amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores
		tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis.
		Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus
		enim quae exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor
		sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores
		tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis.
		Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus
		enim quae exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor
		sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores
		tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis.
		Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing
		elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus
		enim quae exercitationem nulla, omnis doloribus neque error, ad aperiam. Dolorum! Lorem ipsum, dolor
		sit amet consectetur adipisicing elit. Quia, dignissimos corporis. Incidunt sint, fuga facere asperiores
		tenetur voluptate necessitatibus enim quae exercitationem nulla, omnis doloribus neque error, ad
		aperiam. Dolorum! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia, dignissimos corporis.
		Incidunt sint, fuga facere asperiores tenetur voluptate necessitatibus enim quae exercitationem nulla,
		omnis doloribus neque error, ad aperiam. Dolorum!
	</div>
</div>
