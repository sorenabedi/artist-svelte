<script lang="ts">
	import Modal from '$lib/components/modal';
</script>

<Modal {...$$restProps}>
	<div slot="trigger" let:open>
		<button on:click={open}>Open Modal</button>
	</div>
	<div slot="header">
		<h1>First Modal header</h1>
	</div>
	<div slot="content">
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</p>
	</div>

	<div slot="footer" let:store={{ close }}>
		<button>continue</button>
		<button on:click={close}>Close Modal</button>
	</div>
</Modal>
