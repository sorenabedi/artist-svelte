<nav>
	<a href="/">Home</a>
	<a href="/button">button</a>
	<a href="/alert">alert</a>
	<a href="/card">card</a>
	<a href="/checkbox">checkbox</a>
	<a href="/switch">switch</a>
	<a href="/avatar">avatar</a>
	<a href="/radio">radio</a>
	<a href="/input">input</a>
	<a href="/modal">modal</a>
</nav>
<slot />

<style lang="scss" global>
	@import 'GlobalStyles.scss';
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
	html,
	body {
		margin: 0;
		padding: 0;
		background: $white-bg;
		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
			Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
			'Segoe UI Symbol', 'Noto Color Emoji', Vazir;
		// direction: rtl;
	}
</style>
