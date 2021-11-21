import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		replace: [
			[/process\.env\['NODE_ENV'\]/g, () => `import.meta.env.MODE`],
			[/process\.env\.NODE_ENV/g, () => `import.meta.env.MODE`],
			[/process\.env\['(\w+)'\]/g, (_, match) => JSON.stringify(process.env[match])],
			[/process\.env\.(\w+)/g, (_, match) => JSON.stringify(process.env[match])]
		]
	}),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte'
	}
};

export default config;
