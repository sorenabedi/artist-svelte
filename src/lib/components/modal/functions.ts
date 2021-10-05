export const keydown =
	(close: () => void) =>
	(e: KeyboardEvent): void => {
		e.stopPropagation();
		if (e.key === 'Escape') {
			close();
		}
	};
export const useAction =
	(modalList: HTMLElement[], close: () => void) =>
	(
		node: HTMLElement
	): {
		destroy: () => void;
	} => {
		const returnFn = [];
		if (document.body.style.overflow !== 'hidden') {
			const original = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			returnFn.push(() => {
				document.body.style.overflow = original;
			});
		}
		document.body.addEventListener('keydown', keydown(close));
		modalList.push(node);
		returnFn.push(() => {
			node.removeEventListener('keydown', keydown(close));
		});
		return {
			destroy: () => returnFn.forEach((fn) => fn())
		};
	};
