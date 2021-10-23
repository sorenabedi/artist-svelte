import { setContext } from 'svelte';
import { writable } from 'svelte/store';

interface accordionStates {
	[key: string]: boolean;
}

export const accordionStates = writable<accordionStates>({});
export const setupAccordionContext = (multiSelectable: boolean): void =>
	setContext('Accordion', {
		accordionStates,
		add: (newItemState: { id: string; expanded?: boolean }) => {
			accordionStates.update((allItemStates) => ({
				...allItemStates,
				[newItemState.id]: newItemState.expanded
			}));
		},
		remove: (newItemState: { id: string; expanded?: boolean }) => {
			accordionStates.update((allItemStates) => {
				const allStates = { ...allItemStates };
				delete allStates[newItemState.id];
				return allStates;
			});
		},
		toggle: (newItemState: { id: string; expanded?: boolean }) => {
			accordionStates.update((allItemStates) => {
				if (!multiSelectable) {
					Object.keys(allItemStates).forEach((id) => (allItemStates[id] = false));
				}
				return { ...allItemStates, [newItemState.id]: newItemState.expanded };
			});
		}
	});
export const accordionWrapperInit = (multiSelectable: boolean): void => {
	setupAccordionContext(multiSelectable);
};
