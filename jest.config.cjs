const { pathsToModuleNameMapper } = require('ts-jest/utils');
const { compilerOptions } = require('./tsconfig.json');

const paths = compilerOptions.paths ? compilerOptions.paths : {};

module.exports = {
	transform: {
		'.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',

		'^.+\\.(js|jsx)$': 'babel-jest',
		'^.+\\.svelte$': [
			'./node_modules/svelte-jester/dist/transformer.mjs',
			{
				preprocess: true
			}
		],
		'^.+\\.(ts|jsx)$': 'ts-jest'
	},
	moduleNameMapper: {
		...pathsToModuleNameMapper(paths, { prefix: '<rootDir>/' }),
		'^\\$scss/vars$': 'identity-obj-proxy',
		'^\\$lib(.*)$': '<rootDir>/src/lib$1',
		'^\\$types(.*)$': '<rootDir>/src/lib/types$1',
		'^\\$assets(.*)$': '<rootDir>/src/assets$1',
		'^\\$scss(.*)$': '<rootDir>/src/lib/scss$1',
		'^\\$routes(.*)$': '<rootDir>/src/routes$1',
		'^\\$app(.*)$': [
			'<rootDir>/.svelte-kit/dev/runtime/app$1',
			'<rootDir>/.svelte-kit/build/runtime/app$1'
		]
	},
	transformIgnorePatterns: ['/node_modules/'],
	extensionsToTreatAsEsm: ['.svelte', '.ts', '.tsx', '.scss', '.jsx'],
	moduleFileExtensions: ['js', 'jsx', 'svelte', 'ts', 'tsx'],
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	setupFiles: ['./jest.setup.ts'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.spec.json',
			useESM: true
		}
	},
	testEnvironment: 'jsdom'
};
