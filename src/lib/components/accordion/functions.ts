import type { useAction } from '$lib/types/global';
import type { Subscriber, Writable } from 'svelte/store';
import { getContext, setContext } from 'svelte';
import { writable } from 'svelte/store';

interface accordionStates {
	[key: string]: boolean;
}

export const accordionStates = writable<accordionStates>({});
export const setupAccordionContext = (multiSelectable: boolean) =>
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

export const scrollIntoView: useAction = (HtmlElement) => {
	return {
		update: () => {
			/* istanbul ignore next */
			if (HtmlElement.getBoundingClientRect().top < 0) {
				HtmlElement.scrollIntoView();
			}
		}
	};
};

export const accordionContextInit = () =>
	getContext<{
		accordionStates: Writable<{
			[key: string]: boolean;
		}>;
		add: (newItemState: { id: string; expanded?: boolean }) => void;
		remove: (newItemState: { id: string; expanded?: boolean }) => void;
		toggle: (newItemState: { id: string; expanded?: boolean }) => void;
	}>('Accordion');

export const accordionItemLifeCycle =
	(
		id: string,
		expanded: boolean,
		storeSubscribe: Subscriber<{ [key: string]: boolean }>
	): useAction =>
	(_, accordionContext: ReturnType<typeof accordionContextInit>) => {
		accordionContext.add({ id, expanded });
		const unsubscribe = accordionContext.accordionStates.subscribe(storeSubscribe);
		return {
			destroy: () => {
				if (accordionContext) accordionContext.remove({ id });
				unsubscribe();
			}
		};
	};
