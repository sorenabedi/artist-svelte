// @ts-expect-error add support for webpack browser detection
const browser = process.browser || true;
const dev = process.env['NODE_ENV'] === 'development' || !!import.meta.env?.DEV;
const mode = process.env['NODE_ENV'] || 'test';
const amp = false;

export { amp, browser, dev, mode };
