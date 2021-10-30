<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Sidemenu from '$lib/components/sidemenu';
	import Accordion from '$lib/components/accordion';
	import AccordionItem from '$lib/components/accordionItem';
	import booleanify from '$lib/utilities/helper/booleanify';
	import more from '$lib/svg/icons/more';
	import SvgParser from '$lib/utilities/svgParser/svg-parser.svelte';
	import Link from '$lib/components/link/Link.svelte';
	import close from '$lib/svg/icons/close';
</script>

<Meta
	title="Components/Sidemenu"
	component={Sidemenu}
	argTypes={{
		slot: { control: 'text', defaultValue: 'default slot' },
		color: {
			control: {
				type: 'select',
				options: [
					'inherit',
					'primary',
					'secondary',
					'warning',
					'danger',
					'success',
					'default',
					'info'
				]
			},
			defaultValue: 'inherit'
		},
		variant: {
			control: {
				type: 'radio',
				options: ['fill']
			},
			defaultValue: 'fill'
		},
		compact: {
			control: {
				type: 'radio',
				options: [true, false, 'expandOnFocus']
			},
			defaultValue: false
		},
		expanded: {
			control: { type: 'boolean' },
			defaultValue: true
		},
		fixed: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlay: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlayBlur: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		rtl: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		onClick: { action: 'clicked' },
		onChange: { action: 'changed' },
		onDblClick: { action: 'dblclicked' },
		onInput: { action: 'inputed' }
	}}
/>

<Template let:args>
	<p>
		some test
		<Sidemenu
			{...args}
			on:click={args.onClick}
			on:change={args.onChange}
			on:dblclick={args.onDblClick}
			on:input={args.onInput}
		>
			<Accordion>
				<AccordionItem simple compact={booleanify(args.compact)} color="inherit" title="Danger">
					<svelte:fragment slot="icon">
						<SvgParser data={more} />
					</svelte:fragment>
					Content danger
				</AccordionItem>
				<AccordionItem
					simple
					compact={booleanify(args.compact)}
					variant="outline"
					color="danger"
					title="Success"
				>
					<svelte:fragment slot="icon">
						<SvgParser data={close} />
					</svelte:fragment>
					<svelte:fragment slot="title">some item</svelte:fragment>
					<Accordion multiSelectable>
						<AccordionItem simple compact={booleanify(args.compact)} color="danger" title="Danger">
							<svelte:fragment slot="icon">
								<SvgParser data={more} />
							</svelte:fragment>
							<Link color="primary" href="#!">some link</Link>
						</AccordionItem>
						<AccordionItem
							simple
							compact={booleanify(args.compact)}
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
							compact={booleanify(args.compact)}
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
					compact={booleanify(args.compact)}
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
			{args.slot}
		</Sidemenu>
	</p>
</Template>

<Story
	name="Inherit"
	args={{
		color: 'inherit'
	}}
/>
<Story
	name="Default"
	args={{
		color: 'default'
	}}
/>
<Story
	name="Primary"
	args={{
		color: 'primary'
	}}
/>
<Story
	name="Secondary"
	args={{
		color: 'secondary'
	}}
/>

<Story
	name="Warning"
	args={{
		color: 'warning'
	}}
/>
<Story
	name="Danger"
	args={{
		color: 'danger'
	}}
/>
<Story
	name="Success"
	args={{
		color: 'success'
	}}
/>
<Story
	name="Info"
	args={{
		color: 'info'
	}}
/>
