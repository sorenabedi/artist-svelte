module.exports = {
	useTabs: true,
	singleQuote: true,
	trailingComma: 'none',
	printWidth: 100,
	svelteSortOrder: 'options-styles-scripts-markup',
	svelteStrictMode: true,
	svelteBracketNewLine: false,
	svelteAllowShorthand: false,
	svelteIndentScriptAndStyle: true,
	tabWidth: 2,
	semi: true,
	plugins: [require('prettier-plugin-svelte')],
	overrides: [
		{
			files: '**/*.svx',
			options: { parser: 'markdown' }
		},
		{
			files: '**/*.ts',
			options: { parser: 'typescript' }
		},
		{
			files: '**/CHANGELOG.md',
			options: {
				requirePragma: true
			}
		}
	]
};
