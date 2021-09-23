export type OnClickEvent = MouseEvent & {
	currentTarget: EventTarget & HTMLButtonElement;
};
export type OnClickFunc<eventType = OnClickEvent, T = void> = (event: eventType) => T;
