<script context="module" lang="ts">
	import Prism from 'prismjs';
</script>

<script lang="ts">
	import clsx from 'clsx';
	import type { useAction } from '../../types/global';
	import { browser } from '$app/env';
	import { onMount } from 'svelte';

	const testID =
		process.env.NODE_ENV === 'test' ? 'PrismParser' : /* istanbul ignore next */ undefined;
	export let data = '';
	export let language: string = 'markup';
	export let inline = false;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	let parsedData: string;
	$: {
		parsedData = Prism?.highlight(data, Prism.languages[language], language);
	}
	onMount(() => {
		if (browser && Prism) Prism.highlightAll();
	});
</script>

{#if inline}
	<code
		class={clsx(`language-${language}`, className)}
		use:useAction
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		data-testid={testID}
		{...$$restProps}
	>
		{@html parsedData}
	</code>
{:else}
	<pre
		class={clsx(`language-${language}`, className)}
		use:useAction
		on:click
		on:dblclick
		on:mouseenter
		on:mouseleave
		on:mouseover
		on:focus
		data-testid={testID}
		{...$$restProps}>
	<code class={clsx(`language-${language}`)}>
		{@html parsedData}
	</code>
</pre>
{/if}
