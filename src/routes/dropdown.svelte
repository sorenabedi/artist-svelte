<script lang="ts">
	import Button from '$lib/components/button/Button.svelte';
	import Dropdown from '$lib/components/dropdown';
</script>

<Dropdown color="inherit">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="default" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="default" expanded disableAutoClose>
	<div slot="trigger" let:isOpen let:toggle>
		<Button circle color="default" active={isOpen} variant="fill" on:click={toggle}>O</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="primary" expanded center>
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="primary" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="secondary">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="secondary" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="success">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="success" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="danger">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="danger" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="warning">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="warning" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>

<Dropdown color="info">
	<div slot="trigger" let:isOpen let:toggle>
		<Button color="info" active={isOpen} variant="fill" on:click={toggle}>Open default</Button>
	</div>
	<div>
		<span>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
			corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
			veritatis itaque nemo commodi.
		</span>
	</div>
</Dropdown>
