<script lang="ts">
	import { SvelteIcon, SassIcon, typeScriptIcon } from '$lib/svg';
	import { TextBlock, Link, Button, SvgParser } from '@sorens/artist-svelte';
</script>

<section>
	<TextBlock color="primary" elementType="h1">Artist UI</TextBlock>
	<TextBlock color="secondary" elementType="p">a clean UI framework for Sveltekit</TextBlock>
	<div class="primaryButtonContainer">
		<Button
			color="primary"
			variant="fill"
			target="_blank"
			rel="noopener"
			href="https://artist-ui.pages.dev/getting-started/installation"
		>
			Getting started
		</Button>
		<Button
			color="primary"
			target="_blank"
			rel="noopener"
			href="https://artist-ui.pages.dev/components"
		>
			Components
		</Button>
	</div>
	<div class="techs">
		<Link
			color="default"
			href="https://kit.svelte.dev"
			target="_blank"
			rel="noopener"
			TextBlock="sveltekit website"
		>
			<SvgParser data={SvelteIcon} size="3rem" />
			<TextBlock elementType="strong" color="default" muted uppercase>
				Created With SvelteKit
			</TextBlock>
		</Link>
		<Link
			color="default"
			href="https://www.typescriptlang.org"
			target="_blank"
			rel="noopener"
			TextBlock="typescript website"
		>
			<SvgParser data={typeScriptIcon} size="3rem" />
			<TextBlock elementType="strong" color="default" muted uppercase>TypeScript Support</TextBlock>
		</Link>
		<Link
			color="default"
			href="https://sass-lang.com"
			target="_blank"
			rel="noopener"
			TextBlock="sass-lang website"
		>
			<SvgParser data={SassIcon} size="3rem" />
			<TextBlock elementType="strong" color="default" muted uppercase>Styled with SCSS</TextBlock>
		</Link>
	</div>
</section>

<style lang="scss">
	section {
		text-align: center;
		margin-block: 3rem;
		padding: 2rem;
		line-height: 1.7;
	}

	.primaryButtonContainer {
		margin-block-start: 1.5rem;
		margin-block-end: 3rem;
	}
	.techs {
		text-align: center;
		width: 100%;
		:global {
			> a {
				margin-block: 1.5rem;
				margin-inline: 1.5rem;
				display: flex;
				justify-content: space-around;
				align-items: center;

				strong {
					display: block;
				}
			}
		}
	}
</style>
