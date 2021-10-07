<script lang="ts">
	import Modal from '$lib/components/modal';
	import Button from '$lib/components/button';
</script>

<Modal color="default">
	<div slot="trigger" let:open>
		<Button on:click={open}>Open default</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="primary" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open primary</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="secondary" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open secondary</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="success" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open success</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="danger" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open danger</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="warning" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open warning</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
<Modal color="info" overlayBlur>
	<div slot="trigger" let:open>
		<Button on:click={open}>Open info</Button>
	</div>
	<div slot="header">
		<h3>First Modal header</h3>
	</div>
	<div slot="content">
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
