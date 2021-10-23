<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
	import Button from '$lib/components/button';
	import { SvgParser } from '$lib/utilities';
</script>

<Meta
	title="Components/Button"
	component={Button}
	argTypes={{
		slot: { control: 'text', defaultValue: 'custom button' },
		href: { control: 'text' },
		SvgIcon: { control: 'text' },
		color: {
			control: {
				type: 'select',
				options: ['primary', 'secondary', 'warning', 'danger', 'success', 'default', 'info']
			},
			defaultValue: 'default'
		},
		variant: {
			control: { type: 'select', options: ['fill', 'outline', 'gradient'] }
		},
		rtl: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		circle: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		fullWidth: {
			control: { type: 'boolean' },
			defaultValue: false
		},
		onClick: { action: 'clicked' }
	}}
/>

<Template let:args>
	{#if args.SvgIcon}
		<Button variant={'fill'} {...args} on:click={args.onClick}>
			<svelte:fragment slot="SvgIcon"><SvgParser data={args.SvgIcon} /></svelte:fragment>
			{args.slot}
		</Button>
	{:else}
		<Button variant={'fill'} {...args} on:click={args.onClick}>
			{args.slot}
		</Button>
	{/if}
	{#if args.SvgIcon}
		<Button variant={'outline'} {...args} on:click={args.onClick}>
			<svelte:fragment slot="SvgIcon"><SvgParser data={args.SvgIcon} /></svelte:fragment>
			{args.slot}
		</Button>
	{:else}
		<Button variant={'outline'} {...args} on:click={args.onClick}>
			{args.slot}
		</Button>
	{/if}
	{#if args.SvgIcon}
		<Button variant={'gradient'} {...args} on:click={args.onClick}>
			<svelte:fragment slot="SvgIcon"><SvgParser data={args.SvgIcon} /></svelte:fragment>
			{args.slot}
		</Button>
	{:else}
		<Button variant={'gradient'} {...args} on:click={args.onClick}>
			{args.slot}
		</Button>
	{/if}
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
