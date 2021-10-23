<h1> Artist for Svelte</h1>
<h2> An SSR optimized UI framework for <strong>SvelteKit</strong></h2>

### ⚠️🚧👷‍♂️⛑️ please note that this package is still in early development stages and APIs might or even will change in the future

---

[![license](https://img.shields.io/badge/license-GPLv3-blue)](https://github.com/sorenabedi/artist-svelte/blob/master/LICENSE)
[![npm latest package](https://img.shields.io/npm/v/@sorens/artist-svelte.svg)](https://www.npmjs.com/package/@sorens/artist-svelte)
[![npm downloads](https://img.shields.io/npm/dm/@sorens/artist-svelte.svg)](https://www.npmjs.com/package/@sorens/artist-svelte)
[![npm bundle size](https://badgen.net/bundlephobia/minzip/@sorens/artist-svelte@latest)](https://bundlephobia.com/package/@sorens/artist-svelte@latest)
[![Code Inspector Code Quality](https://www.code-inspector.com/project/29172/score/svg)](https://frontend.code-inspector.com/public/project/29172/artist-svelte/dashboard)
[![Code Inspector Code Grade](https://www.code-inspector.com/project/29172/status/svg)](https://frontend.code-inspector.com/public/project/29172/artist-svelte/dashboard)
[![Maintainability](https://api.codeclimate.com/v1/badges/7f211dc31ea8b17c4168/maintainability)](https://codeclimate.com/github/sorenabedi/artist-svelte/maintainability)
[![codecov](https://codecov.io/gh/sorenabedi/artist-svelte/branch/master/graph/badge.svg?token=R3V5FlaqWs)](https://codecov.io/gh/sorenabedi/artist-svelte)
[![Testing code structures](https://github.com/sorenabedi/artist-svelte/actions/workflows/CI.yml/badge.svg?branch=master)](https://github.com/sorenabedi/artist-svelte/actions/workflows/CI.yml)
[![publishing to NPM](https://github.com/sorenabedi/artist-svelte/actions/workflows/publish.yml/badge.svg)](https://github.com/sorenabedi/artist-svelte/actions/workflows/publish.yml)

---

### Installation

1. install package
   - using [PNPM package manager](https://pnpm.io/installation) is **recommended**

```bash
// PNPM
pnpm i -D @sorens/artist-svelte clsx sass nanoid

// YARN
yarn add -D @sorens/artist-svelte clsx sass nanoid

// NPM
npm install @sorens/artist-svelte clsx sass nanoid --save-dev
```

2. **SASS/SCSS** preprocessor setup<br/>
   artist framework leverages the power of `scss` for building lightweight and robust styles, auto generating font colors from theme colors with sufficient contrast and lightness for better a11y-accessability.

   - create [svelte.config.js](https://kit.svelte.dev/docs#configuration) file in root directory of your project, if not already exists.
   - make sure svelte-preprocess is configured e.g:

     ```js
     import preprocess from 'svelte-preprocess';

     const config = {
     	// Consult https://github.com/sveltejs/svelte-preprocess
     	// for more information about preprocessors
     	preprocess: preprocess({
     		scss: {}
     	})
     	// Other config params
     };
     ```

   - for using default artist theme palette, you have to import `@sorens/artist-svelte/scss/GlobalStyles.scss` in layouts of your project. e.g:

     ```html
     // example with default layout along with other global styles in `src/routes/__layout.svelte`

     <style lang="scss" global>
     	@import '@sorens/artist-svelte/scss/GlobalStyles.scss';
     	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600&display=swap');
     	html,
     	body {
     		margin: 0;
     		padding: 0;
     		background: var(--bg-color);
     		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
     			Arial;
     		* {
     			box-sizing: border-box;
     		}
     	}
     </style>
     <slot />
     ```

3. **Static Build**
   for having a static build (for deploying to serverless, gh-pages, etc.) setup.

   ⚠️ using **Artist-svelte** with regular svelteJs (not svelteKit) is **heavily discouraged**

   - install [@sveltejs/adapter-static](https://www.npmjs.com/package/@sveltejs/adapter-static/v/next) package

     ```bash
     // Make sure to install version @^1.0.0-next.19

     // PNPM
     pnpm i -D @sveltejs/adapter-static@next

     // YARN
     yarn add -D @sveltejs/adapter-static@next

     // NPM
     npm install  @sveltejs/adapter-static@next --save-dev
     ```

   - add the install adaptor to `svelte.config.js`

     ```js
     import preprocess from 'svelte-preprocess';
     import staticAdapter from '@sveltejs/adapter-static';

     const config = {
     	// Consult https://github.com/sveltejs/svelte-preprocess
     	// for more information about preprocessors
     	preprocess: preprocess({
     		scss: {}
     	}),
     	kit: {
     		adapter: staticAdapter()
     		// Other kit config params
     	}
     	// Other config params
     };
     ```

### Component Usage

**artist** is fully typed and natively supports `typescript` so, simply add components

```html
<script lang="ts">
	import { Checkbox, Button } from '@sorens/artist-svelte';
</script>

<button rtl variant="fill" color="primary">Accept</button>
<Checkbox color="danger" on:change="()=>console.log('changed')">some text</Checkbox>
```

### SCSS @mixins and @functions Usage

still in early stages ...

### theming Usage

still in early stages ...

### SVG Icons Usage

still in early stages ...
