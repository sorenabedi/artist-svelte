import type { useAction } from '$lib/types/global';

export const keydown =
	(close: () => void) =>
	(e: KeyboardEvent): void => {
		e.stopPropagation();
		/* istanbul ignore else */
		if (e.key === 'Escape') {
			close();
		}
	};
export const modalInit =
	(modalNodeList: HTMLElement[], close: () => void): useAction =>
	(node: HTMLElement) => {
		const returnFn = [];
		/* istanbul ignore else */
		if (document.body.style.overflow !== 'hidden') {
			const original = document.body.style.overflow;
			document.body.style.overflow = 'hidden';
			returnFn.push(() => {
				document.body.style.overflow = original;
			});
		}
		document.body.addEventListener('keydown', keydown(close));
		modalNodeList.push(node);
		returnFn.push(() => {
			node.removeEventListener('keydown', keydown(close));
		});
		return {
			destroy: () => returnFn.forEach((fn) => fn())
		};
	};
