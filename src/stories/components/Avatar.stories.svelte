<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Avatar, { AvatarStack } from '$lib/components/avatar';
</script>

<Meta
	title="Components/Avatar"
	component={Avatar}
	argTypes={{
		alt: { control: 'text', description: 'Image [Alt] attribute', defaultValue: 'avatar alt' },
		text: { control: 'text', defaultValue: '', description: 'Minimal Overlay text' },
		indicator: { control: 'boolean' },
		rtl: { control: 'boolean', defaultValue: false },
		bordered: { control: 'boolean', defaultValue: false },
		image: { control: 'text', defaultValue: '/images/avatar-1.png' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			}
		},
		onClick: { action: 'clicked' },
		onChange: { action: 'changed' },
		onDblClick: { action: 'dblclicked' },
		onInput: { action: 'inputed' }
	}}
/>

<Template let:args>
	<div style={args.rtl && 'direction:rtl;display:flex;flex-direction:row-reverse;'}>
		<AvatarStack>
			<Avatar
				color="default"
				indicator
				{...args}
				image="/images/avatar-2.png"
				on:click={args.onClick}
				on:change={args.onChange}
				on:dblclick={args.onDblClick}
			/>
			<Avatar
				color="danger"
				indicator
				{...args}
				image="/images/avatar-3.png"
				on:click={args.onClick}
				on:change={args.onChange}
				on:dblclick={args.onDblClick}
			/>
			<Avatar
				color="warning"
				indicator
				{...args}
				image="/images/avatar-5.png"
				on:click={args.onClick}
				on:change={args.onChange}
				on:dblclick={args.onDblClick}
			/>
			<Avatar
				color="primary"
				indicator
				{...args}
				text="33+"
				image="/images/avatar-4.png"
				on:click={args.onClick}
				on:change={args.onChange}
				on:dblclick={args.onDblClick}
			/>
		</AvatarStack>
		<Avatar
			color="default"
			indicator
			{...args}
			on:click={args.onClick}
			on:change={args.onChange}
			on:dblclick={args.onDblClick}
		/>
	</div>
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
<Story
	name="Info"
	args={{
		color: 'info'
	}}
/>
