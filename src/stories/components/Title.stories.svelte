<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Title from '$lib/components/title';
</script>

<Meta
	title="Components/Title"
	component={Title}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom Title' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		headingType: {
			control: {
				type: 'radio',
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'i', 'em', 'strong']
			}
		},

		muted: {
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
	<Title
		{...args}
		on:click={args.onClick}
		on:change={args.onChange}
		on:dblclick={args.onDblClick}
		on:input={args.onInput}
	>
		{args.slot}
	</Title>
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
