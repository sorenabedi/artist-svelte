# Artist UI (svelte) getting started template

## Usage

1. clone this template via [`degit`](https://www.npmjs.com/package/degit)

   ```bash
   # create a new project in the current directory
   npx degit sorenabedi/artist-svelte/examples/getting-started

   # create a new project in my-app
   npx degit sorenabedi/artist-svelte/examples/getting-started my-app
   ```

2. install project dependencies

   ```bash
   // PNPM (recommended)
   pnpm install

   // YARN
   yarn install

   // NPM
   npm install
   ```

## Developing

Once you've created a project and installed dependencies with `pnpm install` (or `yarn install` or `npm`), start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
pnpm run build
```

> You can preview the built app with `pnpm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
