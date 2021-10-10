<script lang="ts">
	import Button from '$lib/components/button';
	import Paper from '$lib/components/paper';
</script>

<div style="display: flex;flex-flow: wrap;">
	<div style="flex-shrink: 0;width:300px">
		<Paper>
			<strong>سورن عابدی</strong> درخواست افزودن به ارتباطات شما را دارد

			<Button variant="fill" color="primary">قبول</Button>
			<Button variant="outline" color="default">رد</Button>
		</Paper>
	</div>
	<div style="flex-shrink: 0;width:300px;direction:ltr;">
		<Paper>
			<strong>Soren Abedi</strong> requested to follow you
			<Button rtl variant="fill" color="primary">Accept</Button>
			<Button variant="outline" color="default">X</Button>
		</Paper>
	</div>
</div>
