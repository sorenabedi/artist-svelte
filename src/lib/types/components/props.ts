export type ColorProp =
	| 'primary'
	| 'secondary'
	| 'warning'
	| 'danger'
	| 'success'
	| 'info'
	| 'default';

export type VariantProp = 'gradient' | 'outline' | 'fill';
export type RtlProp = boolean | undefined;

export type InputTypeProp =
	| 'color'
	| 'date'
	| 'datetime-local'
	| 'email'
	| 'hidden'
	| 'month'
	| 'number'
	| 'password'
	| 'search'
	| 'tel'
	| 'text'
	| 'time'
	| 'url'
	| 'week';

export type AnchorRelProp = 'external' | 'nofollow' | 'noopener' | 'noreferrer' | 'opener';
export type AnchorTargetProp = '_self' | '_blank' | '_parent' | '_top';
export type PositionProp = 'left' | 'right' | 'top' | 'bottom';
