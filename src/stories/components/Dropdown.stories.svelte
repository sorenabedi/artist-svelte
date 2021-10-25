<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';

	import Dropdown from '$lib/components/dropdown';
	import Button from '$lib/components/button';
</script>

<Meta
	title="Components/Dropdown"
	component={Dropdown}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom Dropdown' },
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
			},
			defaultValue: 'inherit'
		},
		position: {
			control: {
				type: 'radio',
				options: ['top', 'bottom']
			},
			defaultValue: 'bottom'
		},
		shadow: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlap: {
			control: { type: 'boolean' }
		},
		center: {
			control: { type: 'boolean' },
			defaultValue: true
		},
		disableAutoClose: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		expanded: {
			control: { type: 'boolean' },
			defaultValue: false
		}
	}}
/>

<Template let:args>
	<Dropdown overlap {...args}>
		<svelte:fragment slot="trigger" let:toggle>
			<Button variant="fill" on:click={toggle}>first Dropdown</Button>
		</svelte:fragment>
		{args.slot}
	</Dropdown>
	<Dropdown {...args}>
		<svelte:fragment slot="trigger" let:toggle>
			<Button variant="fill" on:click={toggle}>second Dropdown</Button>
		</svelte:fragment>
		{args.slot}
	</Dropdown>
</Template>

<Story
	name="Inherit"
	args={{
		color: 'Inherit'
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
