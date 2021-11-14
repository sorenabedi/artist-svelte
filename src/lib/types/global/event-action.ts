export type useAction<T = HTMLElement> = (
	node?: T,
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	parameters?: any
) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	update?: (parameters: any) => void;
	destroy?: () => void;
};
