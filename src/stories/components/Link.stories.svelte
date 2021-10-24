<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Link from '$lib/components/link';
</script>

<Meta
	title="Components/Link"
	component={Link}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom link' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		rel: {
			control: {
				type: 'radio',
				options: ['external', 'nofollow', 'noopener', 'noreferrer', 'opener']
			}
		},
		target: {
			control: {
				type: 'radio',
				options: ['_self', '_blank', '_parent', '_top']
			},
			defaultValue: '_parent'
		},
		active: {
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
	<Link
		{...args}
		on:click={args.onClick}
		on:change={args.onChange}
		on:dblclick={args.onDblClick}
		on:input={args.onInput}
	>
		{args.slot}
	</Link>
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
