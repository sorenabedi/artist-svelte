<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, RtlProp } from '../../types/components/props';
	import clsx from 'clsx';

	import rtlHook from '../../utilities/hook/rtl';
	import componentRtlSetup from '../../utilities/hook/rtl/internal-component-rtl';
	const testID = process.env.NODE_ENV === 'test' ? 'Avatar' : /* istanbul ignore next */ undefined;

	export let color: ColorProp = 'default';
	export let bordered = false;
	export let indicator = false;
	export let text: false | string = false;
	//TODO: implementing Avatar Variants
	// export let variant: VariantProp = 'fill';
	export let image: string | undefined = undefined;
	export let alt: string | undefined = undefined;
	export let useAction: useAction = () => ({});
	export let rtl: RtlProp = undefined;
	let className: string | undefined = undefined;
	export { className as class };
	const { isEnabled } = rtlHook;
</script>

<div
	data-testid={testID}
	class={clsx('avatarContainer', color, className)}
	class:rtl={componentRtlSetup(rtl, $isEnabled)}
	class:bordered
	on:change
	on:click
	on:dblclick
	on:mouseenter
	on:mouseleave
	on:mouseover
	on:focus
	use:useAction
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
		@import '../../scss/components/avatar';
	}
</style>
