import { resolve, basename } from 'path';
import preprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';
import dotEnv from 'dotenv';

dotEnv.config();

const packageExports = (filename) => {
	switch (true) {
		case /\.(stories|test|spec)\./.test(filename):
		case /scss\/components\//.test(filename):
			return true;
		case /scss\/modules\//.test(filename):
			return true;
		case /^internal-/.test(basename(filename)):
			return false;
		case /^_/.test(basename(filename)):
			return false;
		case /\.(s?css|ts|js|json)/.test(filename):
			return true;
		default:
			return false;
	}
};

const packageFiles = (filename) => {
	switch (true) {
		case /\.(stories|test|spec)\./.test(filename):
		case /scss\/components\//.test(filename):
			return true;
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

const handleEnvVariables = () => {
	switch (true) {
		case ['test', 'development'].includes(process.env['NODE_ENV']):
			return [["process.env['NODE_ENV']", JSON.stringify(process.env['NODE_ENV'])]];
		case ['pkg'].includes(process.env['NODE_ENV']):
			return [
				//
				[/lang="scss"/g, 'SCSSSTYLEBLOCK']
			];

		default:
			return [
				["process.env['NODE_ENV']", JSON.stringify(process.env['NODE_ENV'])],
				[/process\.env\.(\w+)/g, (_, prop) => JSON.stringify(process.env[prop])],
				[/data-testid={testID}/g, ''],
				[/const testID.*/g, '']
			];
	}
};
const SassOptions = () => {
	switch (true) {
		// case ['pkg'].includes(process.env['NODE_ENV']):
		// 	return true;

		default:
			return {
				includePaths: ['./src/theme'],
				prependData: `@import 'theme.scss';`
			};
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess({
		scss: SassOptions(),
		replace: [...handleEnvVariables()]
	}),
	kit: {
		...(process.env.NODE_ENV === 'static' ? { adapter: staticAdapter() } : {}),
		appDir: 'internals',
		target: '#app',
		package: {
			dir: 'package',
			emitTypes: true,
			exports: packageExports,
			files: packageFiles
		},
		vite: {
			resolve: {
				alias: {
					$lib: resolve('src/lib'),
					$types: resolve('src/lib/types'),
					$assets: resolve('src/assets'),
					'$scss/vars': resolve('src/lib/scss/variables.module.scss'),
					$scss: resolve('src/lib/scss'),
					$theme: resolve('src/theme.scss'),
					$routes: resolve('src/routes')
				}
			},
			plugins: []
		}
	}
};

export default config;
