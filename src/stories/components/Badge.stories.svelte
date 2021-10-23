<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Badge from '$lib/components/badge';
</script>

<Meta
	title="Components/Badge"
	component={Badge}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom Badge' },
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
		dir: {
			control: { type: 'select', options: ['ltr', 'rtl'] },
			defaultValue: 'ltr'
		},
		fullWidth: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	<Badge variant={'fill'} {...args}>{args.slot}</Badge>
	<Badge variant={'outline'} {...args}>{args.slot}</Badge>
	<Badge variant={'gradient'} {...args}>{args.slot}</Badge>
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
