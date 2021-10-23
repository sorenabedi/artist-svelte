<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Accordion from '$lib/components/accordion';
	import AccordionItem from '$lib/components/accordionItem';
	import { SvgParser } from '$lib/utilities';
</script>

<Meta
	title="Components/Accordion"
	component={Accordion}
	argTypes={{
		slot: {
			control: 'text',
			defaultValue:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam, facere non dignissimos dolor eveniet fugiat cumque similique a enim alias laboriosam nulla tenetur voluptates placeat recusandae doloremque, eius ex.'
		},
		title: {
			control: 'text',
			defaultValue: 'Accordion Title'
		},
		SvgIcon: {
			control: 'text'
		},
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		variant: {
			control: { type: 'select', options: ['fill', 'outline', 'gradient'] }
		},
		multiSelectable: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	<Accordion multiSelectable={args.multiSelectable}>
		{#if args.SvgIcon}
			<AccordionItem variant="fill" color="success" title="Success" {...args}>
				<svelte:fragment slot="icon">
					<SvgParser data={args.SvgIcon} />
				</svelte:fragment>
				{args.slot}
			</AccordionItem>
			<AccordionItem variant="outline" color="success" title="Success" {...args}>
				<svelte:fragment slot="icon">
					<SvgParser data={args.SvgIcon} />
				</svelte:fragment>
				{args.slot}
			</AccordionItem>
			<AccordionItem variant="gradient" color="success" title="Success" {...args}>
				<svelte:fragment slot="icon">
					<SvgParser data={args.SvgIcon} />
				</svelte:fragment>
				{args.slot}
			</AccordionItem>
		{:else}
			<AccordionItem variant="fill" color="success" title="Success" {...args}>
				{args.slot}
			</AccordionItem>
			<AccordionItem variant="outline" color="success" title="Success" {...args}>
				{args.slot}
			</AccordionItem>
			<AccordionItem variant="gradient" color="success" title="Success" {...args}>
				{args.slot}
			</AccordionItem>
		{/if}
	</Accordion>
</Template>

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
