<script lang="ts">
	import { isVisibleHook } from '$lib/utilities/hook';
	let visibleStatus: boolean | undefined = undefined;
	let hiddenStatus: boolean | undefined = undefined;
	const check = () => {
		const visibleElement = document.querySelector('[data-testid="Visible"]') as HTMLElement;
		const hiddenElement = document.querySelector('[data-testid="Hidden"]') as HTMLElement;
		visibleStatus = isVisibleHook(visibleElement);
		hiddenStatus = isVisibleHook(hiddenElement);
	};
</script>

<button data-testid="initCheck" on:click={check} />
<div data-testid="Visible">{visibleStatus}</div>
<div style="display: block;height: 150vh" />

<div data-testid="Hidden">{hiddenStatus}</div>
