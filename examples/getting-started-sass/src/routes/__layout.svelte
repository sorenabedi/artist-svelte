<script lang="ts">
</script>

<slot />

<style lang="scss" global>
	/* Artist UI global styles (required) */
	/* Normalize css styles in SCSS (optional) */
	@import '../../node_modules/@sorens/artist-svelte/scss/GlobalStyles';
	@import '../../node_modules/@sorens/artist-svelte/scss/modules/normalize';

	/* Any other global styles that you might need, goes here. e.g: */
	html,
	body {
		margin: 0;
		padding: 0;
		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
			Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji', Vazir;
	}
	html {
		background-color: hsl(var(--bg-color));
		color: hsl(var(--fg-color));
		transition: color 0.3s, background-color 0.3s;
	}
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		display: block;
		background: hsl(var(--bg-color));
	}
	::-webkit-scrollbar-thumb {
		background: hsl(var(--fg-color));
		border-radius: 5px;
	}
</style>
