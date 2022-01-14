# Vue 3 + i18n + Typescript + Vite + ESLint + Prettier


## Recommended Node.js and npm versions
node -v  -> v14.18.2
npm -v  -> 8.3.1

## Some useful npm (Node Package Manager) commands:
- Update npm: npm i npm@latest -g
- Clean npm chache: npm cache clean --force
- Check npm chache status: npm cache verify
- List globally installed node packages: npm list -g --depth=0
- List locally installed node packages: npm list --depth=0
- List all versions of an npm package: npm view <package> versions
- View information about the package: npm view <package>
- Show outdated npm packages: npm outdated
- Update package: npm update <package>
- Uninstall package: npm remove <package> or npm uninstall <package>


This template should help get you started developing with Vue 3 and Typescript in Vite.
The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Create stories with Typescript

You can write stories with JavaScript or Typescript alike as both your dev server and storybook server allow it. Start writing stories with [this introduction](https://storybook.js.org/docs/react/writing-stories/introduction)

## Add translations to locales files

Translations are ready to go with [vue-i18](https://vue-i18n.intlify.dev/)
Add your files to `/locales` and are you are set.

## ESLint

Change your config at `.eslintrc.js`

## Prettier

Change config at `.prettierrc`


## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.
