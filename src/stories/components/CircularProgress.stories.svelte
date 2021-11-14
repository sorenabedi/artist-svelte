<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import CircularProgress from '$lib/components/circularProgress';
</script>

<Meta
	title="Components/CircularProgress"
	component={CircularProgress}
	argTypes={{
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		size: { control: 'text', defaultValue: '6em' },
		percentage: {
			control: { type: 'number' }
		},
		showPercentage: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		noSpin: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		desimalPoint: {
			control: { type: 'number' }
		},
		onClick: { action: 'clicked' },
		onChange: { action: 'changed' },
		onDblClick: { action: 'dblclicked' },
		onInput: { action: 'inputed' }
	}}
/>

<Template let:args>
	<CircularProgress
		{...args}
		on:click={args.onClick}
		on:change={args.onChange}
		on:dblclick={args.onDblClick}
		on:input={args.onInput}
	/>
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
