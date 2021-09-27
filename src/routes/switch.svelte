<script lang="ts">
	import { Switch } from '$lib';
</script>

<Switch color="default" checked={true}>
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="primary">
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="secondary">
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="success">
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="danger" disabled>
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="warning">
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
<Switch color="info">
	<svelte:fragment slot="on">ON</svelte:fragment>
	<svelte:fragment slot="off">OFF</svelte:fragment>
</Switch>
