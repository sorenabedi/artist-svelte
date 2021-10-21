<script lang="ts">
	import { rtlHook } from '$lib/utilities/hook';
	const { isEnabled, set, toggle } = rtlHook;
</script>

<span data-testid="Status">
	{$isEnabled ? 'rtl' : 'ltr'}
</span>

<button data-testid="Toggle" on:click={toggle} />
<button data-testid="SetLTR" on:click={() => set('ltr')} />
<button data-testid="SetRTL" on:click={() => set('rtl')} />
