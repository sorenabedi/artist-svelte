<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Paper from '$lib/components/paper';
</script>

<Meta
	title="Components/Paper"
	component={Paper}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom Paper' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		fullWidth: {
			control: { type: 'boolean' }
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	<Paper fullWidth icon={args.icon} {...args}>{args.slot}</Paper>
	<Paper icon={args.icon} {...args}>{args.slot}</Paper>
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
