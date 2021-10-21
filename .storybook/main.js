const sveltePreprocess = require('svelte-preprocess');
const resolve = require('path').resolve;
const dotEnv = require('dotenv');
dotEnv.config();
module.exports = {
	stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-actions',
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-a11y',
		'@storybook/addon-svelte-csf'
	],
	svelteOptions: {
		// preprocess: require('../svelte.config.js').preprocess
	},

	webpackFinal: async (config) => {
		config.resolve.alias = {
			...config.resolve.alias,
			$types: resolve('src/lib/types'),
			$app: resolve('src/tests/app'),
			$lib: resolve('src/lib'),
			'$sb.scss': resolve('.storybook/storybook.scss'),
			$sb: resolve('src/stories'),
			$assets: resolve('src/assets'),
			'$scss/vars': resolve('src/lib/scss/variables.module.scss'),
			$scss: resolve('src/lib/scss'),
			$routes: resolve('src/routes')
		};
		const svelteLoader = config.module.rules.find(
			(r) => r.loader && r.loader.includes('svelte-loader')
		);
		config.module.rules.push(
			{
				test: /\.scss$/,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true,
							url: false
						}
					},
					{ loader: 'sass-loader' }
				]
			},
			{
				test: /env\.ts$/,
				loader: 'string-replace-loader',
				options: {
					multiple: [
						{
							search: 'import.meta.env',
							replace: 'process.env'
						}
					]
				}
			}
		);
		svelteLoader.options = {
			...svelteLoader.options,
			preprocess: sveltePreprocess({
				scss: {
					includePaths: ['./src/lib/scss'],
					prependData: "@import 'modules/default';"
				}
			})
		};

		return config;
	}
};
