<script lang="ts">
	import Dropdown from '$lib/components/dropdown';
</script>

<button data-testid="outside-component" />
<Dropdown {...$$restProps}>
	<div slot="trigger" let:isOpen let:toggle let:open let:close>
		<button class:isOpen on:click={toggle} data-testid="Dropdown-toggle" />
		<button class:isOpen on:click={open} data-testid="Dropdown-open" />
		<button class:isOpen on:click={close} data-testid="Dropdown-close" />
	</div>
	<div data-testid="Dropdown-content">
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, magni earum ut ex totam
		corporis unde incidunt deserunt, dolorem voluptatum libero quia. Maiores, provident error vel
		veritatis itaque nemo commodi.
	</div>
</Dropdown>
