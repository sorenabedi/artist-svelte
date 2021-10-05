import { writable } from 'svelte/store';
import type { Writable } from 'svelte/store';

export default (
	initial: boolean
): {
	isEnabled: Writable<boolean>;
	enable: () => void;
	disable: () => void;
	toggle: () => void;
} => {
	const isEnabled = writable<boolean>(initial);
	const { set, update } = isEnabled;
	return {
		isEnabled,
		enable: () => set(true),
		disable: () => set(false),
		toggle: () => update((n) => !n)
	};
};
