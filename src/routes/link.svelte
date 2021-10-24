<script lang="ts">
	import Link from '$lib/components/link';
</script>

<Link href="#!" color="primary">some text</Link>
<Link href="#!" color="secondary">some text</Link>
<Link href="#!" color="danger" on:change={(e) => console.log(e.target)}>some text</Link>
<Link href="#!" color="default">some text</Link>
<Link href="#!" color="info">some text</Link>
<Link href="#!" color="success" fullWidth>some text</Link>
<Link href="#!" color="warning">some text</Link>
<Link href="#!" active color="warning">some text</Link>
