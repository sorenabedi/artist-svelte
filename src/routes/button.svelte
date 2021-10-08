<script lang="ts">
	import Button from '$lib/components/button';
</script>

<Button variant="outline-gradient" color="primary">some text</Button>
<Button variant="outline-gradient" color="secondary">some text</Button>
<Button variant="outline-gradient" color="danger" on:change={(e) => console.log(e.target)}
	>some text</Button
>
<Button variant="outline-gradient" color="default">some text</Button>
<Button variant="outline-gradient" color="info">some text</Button>
<Button variant="outline-gradient" color="success">some text</Button>
<Button variant="outline-gradient" color="warning">some text</Button>

<Button variant="outline" color="primary">some text</Button>
<Button variant="outline" color="secondary">some text</Button>
<Button variant="outline" color="danger" on:change={(e) => console.log(e.target)}>some text</Button>
<Button variant="outline" color="default">some text</Button>
<Button variant="outline" color="info">some text</Button>
<Button variant="outline" color="success">some text</Button>
<Button variant="outline" color="warning">some text</Button>

<Button variant="fill" color="primary">some text</Button>
<Button variant="fill" color="secondary">some text</Button>
<Button variant="fill" color="danger" on:change={(e) => console.log(e.target)}>some text</Button>
<Button variant="fill" color="default">some text</Button>
<Button variant="fill" color="info">some text</Button>
<Button variant="fill" color="success">some text</Button>
<Button variant="fill" color="warning">some text</Button>
