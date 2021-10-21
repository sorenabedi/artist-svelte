export type unknownFunction = (...args: unknown[]) => unknown;
export type voidFunction<Input = unknown> = (...args: Input[]) => void;

export interface DebouncedFunction<originalFunction extends unknownFunction> {
	(this: ThisParameterType<originalFunction>, ...args: Parameters<originalFunction>): Promise<
		ReturnType<originalFunction>
	>;
	cancel: (reason?: unknown) => void;
}
