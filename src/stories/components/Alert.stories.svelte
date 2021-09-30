<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Alert from '$lib/components/alert';
	import { SVGIcon } from '$lib/utilities';
</script>

<Meta
	title="Components/Alert"
	component={Alert}
	argTypes={{
		slot: {
			control: 'text',
			defaultValue:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquam, facere non dignissimos dolor eveniet fugiat cumque similique a enim alias laboriosam nulla tenetur voluptates placeat recusandae doloremque, eius ex.'
		},
		title: {
			control: 'text',
			defaultValue: 'Alert Title'
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
			control: { type: 'select', options: ['fill', 'outline', 'outline-gradient'] }
		},
		rtl: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	{#if args.SvgIcon}
		<Alert variant={'fill'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
			<svelte:fragment slot="SvgIcon"><SVGIcon data={args.SvgIcon} /></svelte:fragment>
		</Alert>
	{:else}
		<Alert variant={'fill'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
		</Alert>
	{/if}
	<br />
	{#if args.SvgIcon}
		<Alert variant={'outline'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
			<svelte:fragment slot="SvgIcon"><SVGIcon data={args.SvgIcon} /></svelte:fragment>
		</Alert>
	{:else}
		<Alert variant={'outline'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
		</Alert>
	{/if}
	<br />
	{#if args.SvgIcon}
		<Alert variant={'outline-gradient'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
			<svelte:fragment slot="SvgIcon"><SVGIcon data={args.SvgIcon} /></svelte:fragment>
		</Alert>
	{:else}
		<Alert variant={'outline-gradient'} {...args}>
			<svelte:fragment slot="title">{args.title}</svelte:fragment>{args.slot}
		</Alert>
	{/if}
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
