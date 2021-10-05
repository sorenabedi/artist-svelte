<script lang="ts">
	import clsx from 'clsx';
	import type { ColorProp } from '../../types/components/props';
	const testID = process.env.NODE_ENV === 'test' ? 'Avatar' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let bordered = false;
	export let indicator = false;
	export let rtl = false;
	export let text: false | string = false;
	//TODO: implementing Avatar Variants
	// export let variant: VariantProp = 'fill';
	export let image: string | undefined = undefined;
	export let alt: string | undefined = undefined;
</script>

<div
	data-testid={testID}
	class={clsx('avatarContainer', color)}
	class:rtl
	class:bordered
	on:change
	on:click
	on:dblclick
>
	<div class="avatar">
		{#if image}
			<img src={image} alt={alt && `avatar - ${alt}`} />
		{/if}
		{#if indicator}
			<span class="indicator" />
		{/if}
		{#if text}
			<div class="textContainer">
				<span class="textBackdrop">
					<span>{text}</span>
				</span>
			</div>
		{/if}
	</div>
</div>

<style lang="scss">
	.avatarContainer {
		@import 'components/avatar';
	}
</style>
