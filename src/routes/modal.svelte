<script lang="ts">
	import Modal from '$lib/components/modal';
	import Button from '$lib/components/button';
</script>

<Modal color="danger">
	<div slot="trigger" let:open>
		<Button on:click={open}>Open Modal</Button>
	</div>
	<div slot="header">
		<h1>First Modal header</h1>
	</div>
	<div slot="content">
		<!-- Modal within a Modal -->
		<Modal color="primary" overlayBlur noCloseBtn>
			<div slot="trigger" let:open>
				<Button on:click={open}>Open Second Modal</Button>
			</div>
			<div slot="header">
				<h1>Second Modal</h1>
			</div>
			<div slot="content">
				<p>Lorem ipsum dolor sit</p>
			</div>
			<div slot="footer" let:store={{ close }}>
				<Button on:click={close} color="danger">Close</Button>
			</div>
		</Modal>

		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</p>
	</div>

	<div slot="footer" let:store={{ close }}>
		<Button on:click={() => alert('success')} color="primary" variant="fill">continue</Button>
		<Button on:click={close} color="danger">Close First Modal</Button>
	</div>
</Modal>
