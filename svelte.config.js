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
				include: ['**/*.js', '**/*.ts', '**/*.svelte', 'src/lib/scss/modules/default'],
				exclude: ['**/_*', '**/*.stories.svelte']
			},
			files: {
				include: ['**', 'src/lib/scss/modules/**'],
				exclude: [
					'**/_*.svelte',
					'**/_*.js',
					'**/_*.ts',
					'**/scss/components/**',
					'**/*.stories.svelte'
				]
			}
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
