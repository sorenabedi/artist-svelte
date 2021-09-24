<script lang="ts">
	import Btn from '$lib/components/button';
	import { Card } from '$lib';
	export let name: string;
</script>

<h1>Welcome to SvelteKit {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div style="display: flex;flex-flow: wrap;">
	<div style="flex-shrink: 0;width:300px">
		<Card variant="fill" color="primary">
			<svelte:fragment slot="title">درخواست ها</svelte:fragment>
			<svelte:fragment slot="notification">All rights reserved</svelte:fragment>
			<strong>سورن عابدی</strong> درخواست افزودن به ارتباطات شما را دارد
			<svelte:fragment slot="actions">
				<Btn variant="fill" color="primary">قبول</Btn>
				<Btn variant="outline" color="default">رد</Btn>
			</svelte:fragment>
		</Card>
	</div>
	<div style="flex-shrink: 0;width:300px;direction:ltr;">
		<Card variant="fill" color="primary">
			<svelte:fragment slot="title">some title</svelte:fragment>
			<svelte:fragment slot="notification">All rights reserved</svelte:fragment>
			<strong>Soren Abedi</strong> requested to follow you
			<svelte:fragment slot="actions">
				<Btn variant="fill" color="primary">Accept</Btn>
				<Btn variant="outline" color="default">X</Btn>
			</svelte:fragment>
		</Card>
	</div>
</div>

<Btn circle variant="fill" color="primary">قبول</Btn>
