<script lang="ts">
	import { Radio } from '$lib';
</script>

<Radio name="test2" color="primary">some text</Radio>
<Radio name="test2" color="secondary">some text</Radio>
<Radio name="test2" color="danger" on:change={(e) => console.log(e.target)}>some text</Radio>
<Radio name="test2" color="default">some text</Radio>
<Radio name="test2" color="info">some text</Radio>
<Radio name="test2" color="success" checked>some text</Radio>
<Radio name="test2" color="warning">some text</Radio>

<br />

<Radio shadow name="test1" color="primary">some text</Radio>
<Radio shadow name="test1" color="secondary">some text</Radio>
<Radio shadow name="test1" color="danger" on:change={(e) => console.log(e.target)}>some text</Radio>
<Radio shadow name="test1" color="default">some text</Radio>
<Radio shadow name="test1" color="info">some text</Radio>
<Radio shadow name="test1" color="success" checked>some text</Radio>
<Radio shadow name="test1" color="warning">some text</Radio>
