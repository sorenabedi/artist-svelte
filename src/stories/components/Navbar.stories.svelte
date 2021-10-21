<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Navbar from '$lib/components/navbar';
</script>

<Meta
	title="Components/Navbar"
	component={Navbar}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom Navbar' },
		color: {
			control: {
				type: 'select',
				options: [
					'inherit',
					'primary',
					'secondary',
					'warning',
					'danger',
					'success',
					'default',
					'info'
				]
			}
		},
		variant: {
			control: { type: 'select', options: ['fill', 'outline'] }
		},
		fullWidth: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		sticky: {
			control: { type: 'select', options: ['fixed', true, false] }
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		rounded: {
			control: { type: 'boolean' },
			defaultValue: true
		},
		mergeEffect: {
			control: { type: 'select', options: ['initial', true, false] }
		},
		slideEffect: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		compactEffect: {
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
	<div style="display:block;width:100%;height:200px;overflow-y:auto">
		<div style="display:block;width:100%;height:350px;position:relative">
			<Navbar variant="fill" {...args} on:click={args.onClick}>
				{@html args.slot}
			</Navbar>
		</div>
	</div>
</Template>

<Story
	name="Inherit"
	args={{
		color: 'inherit'
	}}
/>
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
