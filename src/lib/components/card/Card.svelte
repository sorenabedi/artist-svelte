<script lang="ts">
	import clsx from 'clsx';

	import type { ColorProp, VariantProp } from '../../types/components/props';
	import Badge from '../badge';
	import Title from '../title';

	export let color: ColorProp = 'primary';
	export let rtl = false;
	export let variant: VariantProp = 'outline';
</script>

<div class="cardContainer">
	{#if $$slots.title}
		<div class:rtl class={clsx('cardHeader')}>o
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
			<div class={clsx('cardActions', ' unBalanced')}>
				<slot name="actions" />
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.cardContainer {
		@import 'components/card';
	}
</style>
