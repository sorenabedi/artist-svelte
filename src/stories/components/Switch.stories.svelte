<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Switch from '$lib/components/switch';
</script>

<Meta
	title="Components/Switch"
	component={Switch}
	argTypes={{
		slotOff: { control: 'text', defaultValue: 'Off slot' },
		slotOn: { control: 'text', defaultValue: 'On slot' },
		slot: { control: 'text', defaultValue: 'default slot' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		checked: {
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
	<p>
		some test
		<Switch
			{...args}
			on:click={args.onClick}
			on:change={args.onChange}
			on:dblclick={args.onDblClick}
			on:input={args.onInput}
		>
			<svelte:fragment slot="on">{args.slotOn}</svelte:fragment>
			<svelte:fragment slot="off">{args.slotOff}</svelte:fragment>
			{args.slot}
		</Switch>
	</p>
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
