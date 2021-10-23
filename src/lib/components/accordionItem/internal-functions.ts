import type { useAction } from '../../types/global';
import type { Subscriber, Writable } from 'svelte/store';
import { getContext } from 'svelte';
import isVisibleHook from '../../utilities/hook/isVisible';

interface accordionStates {
	[key: string]: boolean;
}
interface accordionContext {
	accordionStates: Writable<accordionStates>;
	add: (newItemState: { id: string; expanded?: boolean }) => void;
	remove: (newItemState: { id: string; expanded?: boolean }) => void;
	toggle: (newItemState: { id: string; expanded?: boolean }) => void;
}

export const scrollIntoView: useAction = (HtmlElement) => {
	/* istanbul ignore next */
	if (HtmlElement.ariaExpanded === 'true' && !isVisibleHook(HtmlElement)) {
		HtmlElement.scrollIntoView({
			behavior: 'smooth',
			block: 'center',
			inline: 'center'
		});
	}
	return {
		update: () => {
			/* istanbul ignore next */
			if (HtmlElement.ariaExpanded === 'true' && !isVisibleHook(HtmlElement)) {
				HtmlElement.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
			}
		}
	};
};

export const accordionContextInit = (): accordionContext =>
	getContext<accordionContext>('Accordion');

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
