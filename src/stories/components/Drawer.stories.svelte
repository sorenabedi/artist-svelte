<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Drawer from '$lib/components/drawer';
	import { Accordion, AccordionItem, Button, SVGIcon } from '$lib';
	import more from '$lib/svg/icons/more';
</script>

<Meta
	title="Components/Drawer"
	component={Drawer}
	argTypes={{
		slot: {
			control: 'text',
			defaultValue:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam, facere non dignissimos dolor eveniet fugiat cumque similique a enim alias laboriosam nulla tenetur voluptates placeat recusandae doloremque, eius ex.'
		},
		title: {
			control: 'text',
			defaultValue: 'Drawer Title'
		},
		color: {
			control: {
				type: 'select',
				options: [
					'primary',
					'secondary',
					'warning',
					'danger',
					'success',
					'default',
					'info',
					'inherit'
				]
			},
			defaultValue: 'default'
		},
		variant: {
			control: { type: 'select', options: ['fill', 'outline'] }
		},
		from: {
			control: { type: 'select', options: ['top', 'right', 'bottom', 'left'] }
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlayBlur: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlay: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		fullWidth: {
			control: { type: 'boolean' }
		},
		expanded: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	<Drawer let:toggle {...args}>
		{args.slot}

		<div slot="trigger">
			<Button on:click={toggle}>Open drawer</Button>
		</div>
		<div slot="header">
			<h1>header</h1>
		</div>

		<Accordion>
			<AccordionItem color="default" title="Default">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content default
			</AccordionItem>
			<AccordionItem variant="outline" color="primary" title="Primary">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
			</AccordionItem>
			<AccordionItem color="secondary" title="Secondary">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content secondary
			</AccordionItem>
			<AccordionItem color="warning" title="Warning">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content warning
			</AccordionItem>
			<AccordionItem color="danger" title="Danger">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content danger
			</AccordionItem>
			<AccordionItem color="success" title="Success">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content success
			</AccordionItem>
			<AccordionItem color="info" title="Info">
				<svelte:fragment slot="icon">
					<SVGIcon data={more} />
				</svelte:fragment>
				Content info
			</AccordionItem>
		</Accordion>
	</Drawer>
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
