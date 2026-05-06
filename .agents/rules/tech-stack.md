# Tech Stack

## Core

| Technology | Version | Purpose |
|------------|---------|---------|
| Vue | 3.4.21 | UI framework (Composition API + `<script setup>`) |
| TypeScript | ^6.0.3 | Type system |
| Vite | 5.2.8 | Build tool |
| Pinia | 3.0.4 | State management |

## uni-app Ecosystem

| Package | Purpose |
|---------|---------|
| `@dcloudio/uni-app` | Core uni-app framework |
| `@uni-helper/unh` | Enhanced dev/build CLI |
| `vite-plugin-uni-pages` | File-based routing |
| `vite-plugin-uni-layouts` | Layout system |
| `vite-plugin-uni-manifest` | Manifest config |
| `vite-plugin-uni-components` | Component auto-import |
| `vite-plugin-uni-platform-modifier` | Platform conditional code |
| `vite-plugin-uni-polyfill` | Platform polyfills |

## UI & Styling

| Package | Purpose |
|---------|---------|
| `@wot-ui/ui` | WotDesign UI component library (wot-ui v2) |
| `@wot-ui/router` | wot-ui router integration |
| `unocss` | Atomic CSS engine |
| `@uni-helper/unocss-preset-uni` | uni-app UnoCSS preset |
| `@oiij/unocss-preset` | Custom shortcuts (flex-center, etc.) |
| `@wot-ui/unocss-preset` | wot-ui UnoCSS preset |
| `postcss-pxtorpx-pro` | px → rpx conversion |
| `less` / `sass` | CSS preprocessors |

## Data & Network

| Package | Purpose |
|---------|---------|
| `@uni-helper/axios-adapter` | Axios adapter for uni-app |
| `echarts` / `uni-echarts` | Charts |
| `pinia-plugin-persistedstate` | Store persistence |

## Utilities

| Package | Purpose |
|---------|---------|
| `@vueuse/core` | Vue composition utilities |
| `vue-hooks-plus` | Additional Vue hooks |
| `vue-i18n` | Internationalization |
| `@uni-helper/uni-use` | uni-app composition utilities |

## Dev Tooling

| Package | Purpose |
|---------|---------|
| `@antfu/eslint-config` | ESLint config (antfu preset) |
| `unocss/eslint-config` | UnoCSS lint rules |
| `eslint-plugin-format` | Auto-format on lint |
| `vitest` / `@vitest/ui` | Unit testing |
| `vue-tsc` | Vue TypeScript checking |
| `simple-git-hooks` + `lint-staged` | Pre-commit hooks |
| `czg` + `cz-git` + `commitlint` | Commit conventions |
| `taze` | Dependency updates |
| `unplugin-auto-import` | API auto-import |
| `unplugin-icons` | Icon auto-import (`@iconify-json/ri`) |
