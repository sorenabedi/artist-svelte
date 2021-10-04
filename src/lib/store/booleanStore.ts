import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export default (
	initial: boolean
): {
	isOpen: Writable<boolean>;
	open: () => void;
	close: () => void;
	toggle: () => void;
} => {
	const isOpen = writable<boolean>(initial);
	const { set, update } = isOpen;
	return {
		isOpen,
		open: () => set(true),
		close: () => set(false),
		toggle: () => update((n) => !n)
	};
};
