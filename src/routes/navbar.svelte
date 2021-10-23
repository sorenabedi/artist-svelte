<script lang="ts">
	import Navbar from '$lib/components/navbar';
</script>

<div style="height: 200vh;width:100%;position: relative;">
	<!-- <Navbar sticky color="inherit" slideEffect={100} mergeEffect>inherit</Navbar> -->

	<Navbar sticky color="inherit" slideEffect={100} mergeEffect compactEffect>primary</Navbar>
	<Navbar color="primary" slideEffect={100} mergeEffect>primary</Navbar>

	<Navbar color="secondary" slideEffect={100} mergeEffect>secondary</Navbar>

	<Navbar color="default" slideEffect={100} mergeEffect>default</Navbar>

	<Navbar color="danger" slideEffect={100} mergeEffect>danger</Navbar>

	<Navbar color="success" slideEffect={100} mergeEffect>success</Navbar>

	<Navbar color="warning" slideEffect={100} mergeEffect>warning</Navbar>

	<Navbar color="info" slideEffect={100} mergeEffect>info</Navbar>
</div>
