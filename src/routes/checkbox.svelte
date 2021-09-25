<script lang="ts">
	import { Checkbox } from '$lib';
</script>

<Checkbox color="primary" shadow>some text</Checkbox>
<Checkbox color="secondary">some text</Checkbox>
<Checkbox color="danger" on:change={(e) => console.log(e.target)}>some text</Checkbox>
<Checkbox color="default">some text</Checkbox>
<Checkbox color="info">some text</Checkbox>
<Checkbox color="success" checked>some text</Checkbox>
<Checkbox color="warning">some text</Checkbox>
