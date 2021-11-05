<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import TextBlock from '$lib/components/textBlock';
</script>

<Meta
	title="Components/TextBlock"
	component={TextBlock}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom TextBlock' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		elementType: {
			control: {
				type: 'radio',
				options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'i', 'em', 'strong', 'p']
			}
		},
		textStyle: {
			control: {
				type: 'radio',
				options: ['uppercase', 'lowercase', 'capitalize', undefined]
			}
		},

		muted: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		truncate: {
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
	<TextBlock
		{...args}
		on:click={args.onClick}
		on:change={args.onChange}
		on:dblclick={args.onDblClick}
		on:input={args.onInput}
	>
		{args.slot}
	</TextBlock>
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
