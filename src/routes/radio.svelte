<script lang="ts">
	import { Radio } from '$lib';
</script>

<Radio color="primary" shadow>some text</Radio>
<Radio color="secondary">some text</Radio>
<Radio color="danger" on:change={(e) => console.log(e.target)}>some text</Radio>
<Radio color="default" shadow>some text</Radio>
<Radio color="info">some text</Radio>
<Radio color="success" checked>some text</Radio>
<Radio color="warning">some text</Radio>
