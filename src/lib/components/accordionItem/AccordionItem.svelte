<script lang="ts">
	import type { ColorProp, VariantProp } from '../../types/components';
	import clsx from 'clsx';
	import { nanoid } from 'nanoid';
	import { slide } from 'svelte/transition';
	import {
		accordionContextInit,
		accordionItemLifeCycle,
		scrollIntoView
	} from './internal-functions';
	import SvgParser from '../../utilities/svgParser';
	import chevronDown from '../../svg/icons/chevron-down';
	const testID =
		process.env.NODE_ENV === 'test' ? 'AccordionItem' : /* istanbul ignore next */ undefined;

	export let id = `a-${nanoid(5)}`;
	export let expanded = false;
	export let compact = false;
	export let simple = false;
	export let disabled = false;
	export let color: ColorProp | 'inherit' = 'inherit';
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
	class:compact
	class:simple
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
					<slot name="title" />
				</span>
				<span class="description">
					<slot name="description" />
				</span>
			</span>
		</span>
		<span class="chevron">
			<SvgParser data={chevronDown} />
		</span>
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
		@import '../../scss/components/accordionItem';
	}
</style>
