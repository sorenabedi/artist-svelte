<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	import { slide } from 'svelte/transition';
	import { accordionContextInit, accordionItemLifeCycle, scrollIntoView } from './functions';
	const testID =
		process.env.NODE_ENV === 'test' ? 'AccordionItem' : /* istanbul ignore next */ undefined;

	export let id = `a-${nanoid(5)}`;
	export let title = 'Title';
	export let expanded = false;
	export let disabled = false;
	export let color: ColorProp = 'default';
	export let variant: VariantProp = 'outline';
	const accordionContext = accordionContextInit();
	const accordionItemAction = accordionItemLifeCycle(id, expanded, (value) => {
		expanded = value[id];
	});

	$: button_id = `ab-${id}`;
</script>

<div
	class={clsx(color, variant, 'accordionItem')}
	class:expanded
	use:accordionItemAction={accordionContext}
	data-accordion-item
	data-testid={testID}
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
	{...$$restProps}
>
	<button
		type="button"
		class="toggler"
		aria-expanded={expanded}
		aria-controls={id}
		aria-disabled={disabled}
		{disabled}
		id={button_id}
		on:click
		use:scrollIntoView={expanded}
		on:click={() => accordionContext && accordionContext.toggle({ id, expanded: !expanded })}
	>
		<span class="labelContainer">
			{#if $$slots.icon}
				<span class="icon">
					<slot name="icon" />
				</span>
			{/if}
			<span class="label">
				<span class="title">
					<slot name="title">{title}</slot>
				</span>
				<span class="description">
					<slot name="description">{title}</slot>
				</span>
			</span>
		</span>
		<span class="chevron" />
	</button>
	{#key expanded}
		<div
			class="content"
			role="region"
			{id}
			aria-labelledby={button_id}
			hidden={!expanded}
			in:slide={{ duration: 500 }}
			out:slide|local={{ duration: 500 }}
		>
			<slot />
		</div>
	{/key}
</div>

<style lang="scss">
	.accordionItem {
		@import 'components/accordionItem';
		@include accordion-fill;
		@include accordion-outline;
		@include accordion-outline-gradient;
	}
</style>
