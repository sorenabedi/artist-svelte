export const keydown = (e: KeyboardEvent):void => {
	e.stopPropagation();
	if (e.key === 'Escape') {
		close();
	}
};
export const useAction = (modalList: HTMLElement[]) => (node: HTMLElement) :{
    destroy: () => void;
}=> {
	const returnFn = [];
	if (document.body.style.overflow !== 'hidden') {
		const original = document.body.style.overflow;
		document.body.style.overflow = 'hidden';
		returnFn.push(() => {
			document.body.style.overflow = original;
		});
	}
	node.addEventListener('keydown', keydown);
	modalList.push(node);
	returnFn.push(() => {
		node.removeEventListener('keydown', keydown);
	});
	return {
		destroy: () => returnFn.forEach((fn) => fn())
	};
};
