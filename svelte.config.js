import { resolve, basename } from 'path';
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/**
 *  @type {boolean}
 *  @param {string} filename
 */
const packageFilesFilter = (filename) => {
	switch (true) {
		case /\.(stories|test|spec)\./.test(filename):
		case /scss\/components\//.test(filename):
			return false;
		case /scss\/modules\//.test(filename):
			return true;
		case /^_/.test(basename(filename)):
			return false;
		case /\.(s?css|svelte|ts|js|json)/.test(filename):
			return true;
		default:
			return false;
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			includePaths: ['./src/lib/scss'],
			prependData: "$rtl-bundle: 'true';@import 'modules/default';"
		},
		replace: [['process.env.NODE_ENV', JSON.stringify(process.env.NODE_ENV)]]
	}),
	kit: {
		...(process.env.NODE_ENV === 'static' ? { adapter: staticAdapter() } : {}),
		appDir: 'internals',
		target: '#app',
		package: {
			dir: 'package',
			emitTypes: true,
			exports: packageFilesFilter,
			files: packageFilesFilter
		},
		vite: {
			resolve: {
				alias: {
					$lib: resolve('src/lib'),
					$types: resolve('src/lib/types'),
					$assets: resolve('src/assets'),
					'$scss/vars': resolve('src/lib/scss/variables.module.scss'),
					$scss: resolve('src/lib/scss'),
					$routes: resolve('src/routes')
				}
			},
			plugins: []
		}
	}
};

export default config;
