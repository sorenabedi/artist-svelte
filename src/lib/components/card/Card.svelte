<script lang="ts">
	import type { ColorProp, VariantProp } from '$types/components/props';
	import clsx from 'clsx';
	import Badge from '$lib/components/badge';
	import Title from '$lib/components/title';

	export let color: ColorProp = 'primary';
	export let rtl = false;
	export let variant: VariantProp = 'outline';
</script>

<div class={clsx('cardContainer')}>
	{#if $$slots.title}
		<div class={clsx(rtl && 'rtl', 'cardHeader')}>
			<Title {color} {variant}><slot name="title" /></Title>
			{#if $$slots.notification}
				<Badge {color} {variant}><slot name="notification" /></Badge>
			{/if}
		</div>
	{/if}
	<div class="card">
		<div class="cardContent">
			<slot />
		</div>

		{#if $$slots.actions}
			<div class={clsx('cardActions', 'unBalanced')}>
				<slot name="actions" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.cardContainer {
		@import 'modules/components/card';
	}
</style>
