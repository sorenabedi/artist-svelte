<script lang="ts">
	export let data = '';

	export let size: string | undefined = undefined;
	export let width = '20px';
	export let height = '20px';

	export let color: string | undefined = undefined;
	export let stroke = 'currentColor';
	export let fill = 'currentColor';
	export let viewBox = extractViewBox(data);
	let elements: string;
	$: {
		if (size) {
			width = size;
			height = size;
		}
		if (color) {
			stroke = color;
			fill = color;
		}
		elements = data.replace(/<svg ([^>]*)>/, '').replace('</svg>', '');
		viewBox = extractViewBox(data);
	}

	function extractViewBox(svg: string) {
		const regex = /viewBox="([\d ]+)"/;
		const res = regex.exec(svg);
		if (!res) return '0 0 20 20'; // default value
		return res[1];
	}
</script>

<svg
	data-testid={process.env.NODE_ENV === 'test' ? 'SVGIcon' : undefined}
	xmlns="http://www.w3.org/2000/svg"
	{width}
	{height}
	{viewBox}
	{stroke}
	{fill}
	{...$$restProps}
>
	{@html elements}
</svg>
