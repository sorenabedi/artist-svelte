<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Input from '$lib/components/input';
</script>

<Meta
	title="Components/Input"
	component={Input}
	argTypes={{
		id: { control: 'text', defaultValue: 'iput-id-1' },
		slot: { control: 'text', defaultValue: 'custom Input' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		variant: {
			control: { type: 'select', options: ['fill', 'outline'] }
		},
		type: {
			control: {
				type: 'select',
				options: [
					'text',
					'number',
					'password',
					'date',
					'time',
					'search',
					'email',
					'hidden',
					'month',
					'tel',
					'url',
					'week',
					'datetime',
					'datetime-local'
				]
			}
		},
		rtl: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		fullWidth: {
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
	<Input variant={'fill'} {...args}>{args.slot}</Input>
	<Input variant={'outline'} {...args}>{args.slot}</Input>
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
