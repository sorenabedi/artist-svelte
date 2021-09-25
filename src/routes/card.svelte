<script lang="ts">
	import { Card, Button } from '$lib';
</script>

<div style="display: flex;flex-flow: wrap;">
	<div style="flex-shrink: 0;width:300px">
		<Card variant="fill" color="primary">
			<svelte:fragment slot="title">درخواست ها</svelte:fragment>
			<svelte:fragment slot="notification">All rights reserved</svelte:fragment>
			<strong>سورن عابدی</strong> درخواست افزودن به ارتباطات شما را دارد
			<svelte:fragment slot="actions">
				<Button variant="fill" color="primary">قبول</Button>
				<Button variant="outline" color="default">رد</Button>
			</svelte:fragment>
		</Card>
	</div>
	<div style="flex-shrink: 0;width:300px;direction:ltr;">
		<Card variant="fill" color="primary">
			<svelte:fragment slot="title">some title</svelte:fragment>
			<svelte:fragment slot="notification">All rights reserved</svelte:fragment>
			<strong>Soren Abedi</strong> requested to follow you
			<svelte:fragment slot="actions">
				<Button rtl variant="fill" color="primary">Accept</Button>
				<Button variant="outline" color="default">X</Button>
			</svelte:fragment>
		</Card>
	</div>
</div>
