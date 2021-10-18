interface ImportMetaEnv extends Readonly<Record<string, string>> {
	readonly VITE_RTL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
