import type { useAction } from '../../types/global';

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
		document.body.addEventListener('keydown', keydown(close));
		modalNodeList.push(node);
		returnFn.push(() => {
			node.removeEventListener('keydown', keydown(close));
		});
		return {
			destroy: () => returnFn.forEach((fn) => fn())
		};
	};
