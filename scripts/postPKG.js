import replace from 'replace-in-file';
import * as path from 'path';
import * as fs from 'fs';
import sass from 'sass';

// const options = {
// 	files: './package/components/**/*.svelte',
// 	from: /SCSSSTYLEBLOCK/g,
// 	to: 'lang="scss"'
// };

// try {
// 	const results = replace.sync(options);
// 	const changedFiles = results.filter((result) => result.hasChanged).map((result) => result.file);
// 	console.log('Replacement results:', changedFiles);
// } catch (error) {
// 	console.error('Error occurred:', error);
// }

const GlobalStylesSCSSFile = path.join('./package/scss/GlobalStyles.scss').toString();
const GlobalStylesCSSFile = path.join('./package/css/GlobalStyles.css').toString();
const NormalizeSCSSFile = path.join('./package/scss/modules/_normalize.scss').toString();
const NormalizeCSSFile = path.join('./package/css/Normalize.css').toString();

if (!fs.existsSync('./package/css')) {
	fs.mkdirSync('./package/css');
}

const sassCompilerOptions = {
	sourceMap: false,
	outputStyle: 'compressed'
};

sass.render(
	{
		...sassCompilerOptions,
		file: GlobalStylesSCSSFile,
		outFile: GlobalStylesCSSFile
	},
	(error, result) => {
		if (!error) {
			fs.writeFileSync(
				GlobalStylesCSSFile,
				result.css.toString().replace(/:global /g, ''),
				function (err) {
					if (err) console.log(`Error appeared while writing file "css/GlobalStyles.css".`);
				}
			);
			console.log(`SASS Compiler: GlobalStyles.scss converted successfully.`);
		} else {
			console.log(error.formatted);
			console.log(
				`Error appeared in "${error.file}" !\nline: ${error.line}, column: ${error.column}\n${error.status}`
			);
		}
	}
);
sass.render(
	{
		...sassCompilerOptions,
		file: NormalizeSCSSFile,
		outFile: NormalizeCSSFile
	},
	(error, result) => {
		if (!error) {
			fs.writeFileSync(NormalizeCSSFile, result.css, function (err) {
				if (err) console.log(`Error appeared while writing file "css/Normalize.css".`);
			});
			console.log(`SASS Compiler: _normalize.scss converted successfully.`);
		} else {
			console.log(error.formatted);
			console.log(
				`Error appeared in "${error.file}" !\nline: ${error.line}, column: ${error.column}\n${error.status}`
			);
		}
	}
);
