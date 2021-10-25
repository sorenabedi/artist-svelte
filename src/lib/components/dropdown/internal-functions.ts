import type { useAction } from '../../types/global';

export const DropdownInit =
	(close: () => void, disableAutoClose: boolean, isOpen: boolean): useAction =>
	(node: HTMLElement) => {
		const detectOutSideClick = (event: MouseEvent) => {
			if (disableAutoClose || !isOpen) return;
			let isClickInside = node.contains(event.target as Node);
			if (!isClickInside) {
				close();
			}
		};
		document.addEventListener('click', detectOutSideClick);
		return {
			destroy: () => document.removeEventListener('click', detectOutSideClick)
		};
	};
