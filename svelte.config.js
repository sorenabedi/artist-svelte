import { resolve } from 'path';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: {
			includePaths: ['./src/lib/scss'],
			prependData: "@import 'modules/default';"
		}
	}),
	kit: {
		target: '#app',
		package: {
			dir: 'package',
			emitTypes: true,
			exports: {
				include: ['**'],
				exclude: ['**/_*', '**/*.stories.svelte']
			},
			files: {
				include: ['**'],
				exclude: ['**/_*', '**/*.stories.svelte']
			}
		},
		vite: {
			resolve: {
				alias: {
					$lib: resolve('src/lib'),
					$types: resolve('src/types'),
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
