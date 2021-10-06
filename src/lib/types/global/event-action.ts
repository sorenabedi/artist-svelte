export type useAction = (
	node?: HTMLElement,
	parameters?: any
) => {
	update?: (parameters: any) => void;
	destroy?: () => void;
};
