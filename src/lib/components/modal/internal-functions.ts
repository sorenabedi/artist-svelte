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
		const closeOnEsc = (event: KeyboardEvent) => keydown(close)(event);
		document.body.addEventListener('keydown', closeOnEsc);
		modalNodeList.push(node);
		returnFn.push(() => {
			document.body.removeEventListener('keydown', closeOnEsc);
		});
		return {
			destroy: () => returnFn.forEach((fn) => fn())
		};
	};
