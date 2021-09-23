<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/button';
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom button' },
		SVGIcon: { control: 'text' },
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
		circle: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		fullWidth: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		onClick: { action: 'clicked' }
	}}
/>

<Template let:args>
	<Button variant={'fill'} {...args} on:click={args.onClick}>{args.slot}</Button>
	<Button variant={'outline'} {...args} on:click={args.onClick}>{args.slot}</Button>
	<Button variant={'outline-gradient'} {...args} on:click={args.onClick}>{args.slot}</Button>
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
