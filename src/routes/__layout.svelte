<script lang="ts">
	import { browser } from '$app/env';
	let darkMode = false;
	$: if (browser) document.documentElement.classList.toggle('dark', darkMode);
</script>

<button
	on:click={() => {
		darkMode = !darkMode;
	}}
>
	dark mode toggle
</button>

<nav>
	<a href="/">Home</a>
	<a href="/button">button</a>
	<a href="/alert">alert</a>
	<a href="/card">card</a>
	<a href="/paper">paper</a>
	<a href="/checkbox">checkbox</a>
	<a href="/switch">switch</a>
	<a href="/avatar">avatar</a>
	<a href="/radio">radio</a>
	<a href="/input">input</a>
	<a href="/modal">modal</a>
	<a href="/accordion">accordion</a>
	<a href="/drawer">drawer</a>
</nav>
<slot />

<style lang="scss" global>
	@import 'GlobalStyles.scss';
	@import 'modules/normalize';
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
	html,
	body {
		margin: 0;
		padding: 0;
		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
			Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji', Vazir;
		// direction: rtl;
	}
	html {
		background-color: hsl(var(--bg-color));
		color: hsl(var(--bg-color));
	}
	::-webkit-scrollbar {
		width: 5px;
		height: 5px;
		display: block;
		background: white;
	}
	::-webkit-scrollbar-thumb {
		background: black;
		border-radius: 5px;
	}
</style>
