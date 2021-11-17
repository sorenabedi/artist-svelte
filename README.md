# Artist for Svelte

## An opinionated and clean UI framework for **SvelteKit**

### ⚠️🚧👷‍♂️⛑️ please note that this package is still in early development stages and APIs might change in the future

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
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsorenabedi%2Fartist-svelte.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsorenabedi%2Fartist-svelte?ref=badge_shield)

<div align="center">

[Website](https://artist-ui.sorenart.net) | [Documentation](https://artist-ui.sorenart.net/docs)

</div>

## Installation

---

The easiest way to start with Artist UI is cloning our getting-started template via
[degit](https://www.npmjs.com/package/degit) utility

```bash
# create a new project in the current directory
npx degit sorenabedi/artist-svelte/examples/getting-started

# create a new project in my-app
npx degit sorenabedi/artist-svelte/examples/getting-started my-app
```

Once you've created a project and installed dependencies with `pnpm install` ( or `yarn install` or `npm` ), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

and rou are all set!

## Bootstrapping From Scratch

---

Bootstrapping a project with Artist UI and svelteKit can be done in Four simple steps:

- **Step 1** - Installing SvelteKit

  > If you already have a SvelteKit project, then skip to **Step 2**. For more information about this step, please refer to the official SvelteKit [Documentation](https://kit.svelte.dev/docs#introduction-getting-started)

  Initializing a fresh SvelteKit project :

  ```bash
  npm init svelte@next aui-svelte
  cd aui-svelte
  pnpm install
  pnpm run dev -- --open
  ```

- **Step 2** - Installing Artist UI

  Installing the Artist UI package with the required dependencies:

  ```bash
  # PNPM (recommended)
  pnpm add -D @sorens/artist-svelte clsx dotenv sass nanoid prismjs

  # YARN
  yarn add -D @sorens/artist-svelte clsx dotenv sass nanoid prismjs

  # NPM
  npm install @sorens/artist-svelte clsx dotenv sass nanoid prismjs --save-dev
  ```

- **Step 3** - SvelteKit Configuration

  > Since Artist UI intends to be compatible with Webpack, [dotenv](https://kit.svelte.dev/docs#introduction-getting-started) package is required for svelteKit's default bundler (ViteJs), as well as configuring the [svelte-preprocess](https://github.com/sveltejs/svelte-preprocess) to replace `process.env.*` and `process.env[*]` to prevent ViteJs from throwing errors.

  Create svelte.config.js file in root directory of your project (if not already exists) with the following structures.

  ```javascript
  / project_root/svelte.config.js
  import preprocess from 'svelte-preprocess';
  import dotEnv from 'dotenv';

  dotEnv.config();

  /** @type {import('@sveltejs/kit').Config} */
  const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({
  	sass: {},
  	replace: [
  		 [/process.env['NODE_ENV']/g, () => `"production"`],
  		 [/"production"/g, () => `"production"`],
  		 [/process.env['(w+)']/g, (_, match) => JSON.stringify(process.env[match])],
  		 [/process.env.(w+)/g, (_, match) => JSON.stringify(process.env[match])]
  	]
  }),

  kit: {
  	// hydrate the <div id="svelte"> element in src/app.html
  	target: '#svelte'
  }
  };

  export default config;
  ```

- **Step 4** - Importing Styles

  Create a `__layout.svelte` in `src/routes` folder (if not already exists) with a global style tag with **lang** attribute set to **scss**.

  ```html
  <!-- project_root/src/routes/__layout.svelte -->
  <slot />

  <style lang="scss" global>
  	/* Artist UI global styles (required) */
  	/* Normalize css styles in SCSS (optional) */
  	@import '../../node_modules/@sorens/artist-svelte/scss/GlobalStyles.scss';
  	@import '../../node_modules/@sorens/artist-svelte/scss/modules/normalize';

  	/* Any other global styles that you might need, goes here. e.g: */
  	html,
  	body {
  		margin: 0;
  		padding: 0;
  		font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
  			Arial, 'Noto Sans', 'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  			'Noto Color Emoji', Vazir;
  	}
  	html {
  		background-color: hsl(var(--bg-color));
  		color: hsl(var(--fg-color));
  		transition: color 0.3s, background-color 0.3s;
  	}
  	::-webkit-scrollbar {
  		width: 5px;
  		height: 5px;
  		display: block;
  		background: hsl(var(--bg-color));
  	}
  	::-webkit-scrollbar-thumb {
  		background: hsl(var(--fg-color));
  		border-radius: 5px;
  	}
  </style>
  ```

## Component Usage

---

All components are exported directly from package root scope, e.g:

```html
<script lang="ts">
	import { Checkbox, Button } from '@sorens/artist-svelte';
</script>

<button variant="fill" color="primary">Accept</button>
<Checkbox color="danger" on:change="()=>console.log('changed')">some text</Checkbox>
```

<!-- 3. **Static Build**
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
  ``` -->

## License

[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsorenabedi%2Fartist-svelte.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsorenabedi%2Fartist-svelte?ref=badge_large)
