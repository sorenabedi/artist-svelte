<script lang="ts">
	import type { useAction } from '../../types/global';
	import type { ColorProp, VariantProp } from '../../types/components/props';
	import type { scrollHook } from '../../types/hook';
	import clsx from 'clsx';
	import ScrollHook from '../../utilities/hook/scroll';
	import { compactEffectAction, mergeEffectAction, slideEffectAction } from './internal-functions';

	const testID =
		process.env['NODE_ENV'] === 'test' ? 'Navbar' : /* istanbul ignore next */ undefined;

	export let color: ColorProp | 'inherit' = 'inherit';
	export let variant: Exclude<VariantProp, 'gradient'> = 'fill';
	export let shadow = false;
	export let sticky: boolean | 'fixed' = false;
	export let compactEffect = false;
	export let mergeEffect: boolean | 'initial' = false;
	export let slideEffect: boolean | number = false;
	export let rounded: boolean = true;
	export let fullWidth = false;
	export let useAction: useAction = () => ({});
	let className: string | undefined = undefined;
	export { className as class };
	const { scrollPosition } =
		typeof slideEffect === 'boolean' ? ScrollHook() : ScrollHook(slideEffect);

	const stickyAction: useAction = (navbar) => {
		if (!sticky) return; /* istanbul ignore next */
		const { destroyCompactEffect, initCompactEffect, updateCompactEffect } =
			compactEffect && compactEffectAction(navbar);
		/* istanbul ignore next */
		if (typeof initCompactEffect === 'function') initCompactEffect();
		return {
			update: /* istanbul ignore next */ (scrollPosition: scrollHook) => {
				if (typeof updateCompactEffect === 'function') updateCompactEffect(scrollPosition);
				if (slideEffect) slideEffectAction(navbar, scrollPosition);
				if (mergeEffect === true) mergeEffectAction(navbar);
			},
			destroy: /* istanbul ignore next */ () =>
				typeof destroyCompactEffect === 'function' ? destroyCompactEffect() : null
		};
	};
</script>

<!--
  @component

  Navbar component
-->
<div
	class={clsx(
		color,
		variant,
		'navbar',
		sticky,
		rounded,
		mergeEffect === 'initial' && 'mergeToTop',
		className
	)}
	class:sticky
	class:rounded
	class:shadow
	class:fullWidth
	data-testid={testID}
	on:click
	on:focus
	on:dblclick
	on:mouseover
	on:mouseleave
	use:useAction
	use:stickyAction={$scrollPosition}
>
	<div class="content">
		<slot />
	</div>
</div>

<style lang="scss">
	.navbar {
		@import '../../scss/components/navbar';
	}
</style>
