import type {
	BlurParams,
	DrawParams,
	FadeParams,
	FlyParams,
	ScaleParams,
	CrossfadeParams,
	SlideParams,
	TransitionConfig
} from 'svelte/transition';

export type transitionConfig =
	| BlurParams
	| FadeParams
	| FlyParams
	| SlideParams
	| CrossfadeParams
	| ScaleParams
	| DrawParams;

export type transitionAction = (
	node: Element,
	transitionConfig: transitionConfig
) => TransitionConfig;
