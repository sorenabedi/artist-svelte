import replace from 'replace-in-file';

const options = {
	files: './package/components/**/*.svelte',
	from: /SCSSSTYLEBLOCK/g,
	to: 'lang="scss"'
};

try {
	const results = replace.sync(options);
	const changedFiles = results.filter((result) => result.hasChanged).map((result) => result.file);
	console.log('Replacement results:', changedFiles);
} catch (error) {
	console.error('Error occurred:', error);
}
