<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Checkbox from '$lib/components/checkbox';
</script>

<Meta
	title="Components/Checkbox"
	component={Checkbox}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom checkbox' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		rtl: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		checked: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		required: {
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
	<Checkbox
		{...args}
		on:click={args.onClick}
		on:change={args.onChange}
		on:dblclick={args.onDblClick}
		on:input={args.onInput}
	>
		{args.slot}
	</Checkbox>
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
