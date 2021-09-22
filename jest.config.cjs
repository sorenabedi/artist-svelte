const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',

		'^.+\\.js$': 'babel-jest',
		'^.+\\.svelte$': [
			'./node_modules/svelte-jester/dist/transformer.mjs',
			{
				preprocess: true
			}
		],
		'^.+\\.ts$': 'ts-jest'
	},
	moduleNameMapper: {
		...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
		'^\\$scss/vars$': 'identity-obj-proxy',
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$app(.*)$': [
			'<rootDir>/.svelte-kit/dev/runtime/app$1',
			'<rootDir>/.svelte-kit/build/runtime/app$1'
		]
	},
	transformIgnorePatterns: ['/node_modules/'],
	extensionsToTreatAsEsm: ['.svelte', '.ts', '.scss'],
	moduleFileExtensions: ['js', 'svelte', 'ts'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
			useESM: true
		}
	},
	testEnvironment: 'jsdom'
};
