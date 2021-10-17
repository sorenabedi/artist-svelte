<script lang="ts">
	import { isVisible } from '$lib/utilities/hook';
	import { onMount } from 'svelte';
	let visibleStatus: boolean | undefined = undefined;
	let hiddenStatus: boolean | undefined = undefined;
	const check = () => {
		const visibleElement = document.querySelector('[data-testid="Visible"]') as HTMLElement;
		const hiddenElement = document.querySelector('[data-testid="Hidden"]') as HTMLElement;
		visibleStatus = isVisible(visibleElement);
		hiddenStatus = isVisible(hiddenElement);
	};
</script>

<button data-testid="initCheck" on:click={check} />
<div data-testid="Visible">{visibleStatus}</div>
<div style="display: block;height: 150vh" />

<div data-testid="Hidden">{hiddenStatus}</div>
