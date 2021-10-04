<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Modal from '$lib/components/modal';
	import Button from '$lib/components/button';
</script>

<Meta
	title="Components/Modal"
	component={Modal}
	argTypes={{
		slotContent: { control: 'text', defaultValue: 'custom content' },
		slotHeader: { control: 'text', defaultValue: '<h1>custom Header</h1>' },
		trigger: { control: 'text', defaultValue: 'custom trigger' },
		slotFooter: { control: 'text', defaultValue: 'content on the Footer section' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		noCloseBtn: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlayBlur: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		overlayClose: {
			control: { type: 'boolean' },
			defaultValue: true
		}
	}}
/>

<Template let:args>
	<Modal {...args}>
		<div slot="trigger" let:open>
			{@html args.trigger}
			<Button on:click={open}>open modal</Button>
		</div>
		<div slot="header">
			{@html args.slotHeader}
		</div>
		<div slot="content">
			{@html args.slotContent}
		</div>

		<div slot="footer">
			{@html args.slotFooter}
		</div>
	</Modal>
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
