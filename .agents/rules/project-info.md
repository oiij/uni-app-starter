# Project Info

## Overview

**uni-app-starter** is a Vue 3 starter template for building cross-platform applications with uni-app. It targets H5, WeChat Mini Program, and HarmonyOS from a single codebase.

- **Author**: Eiog
- **License**: MIT
- **Package Manager**: pnpm (enforced via `preinstall` hook)

## Directory Structure

```
├── src/
│   ├── components/          # Auto-imported Vue components
│   ├── composables/         # Shared Vue composables (auto-imported)
│   ├── layouts/             # Page layouts (uni-helper layouts)
│   ├── modules/             # App module registration (pinia, router)
│   ├── pages/               # File-based routing pages
│   │   ├── index.vue        # Home (tabBar)
│   │   ├── echarts.vue      # ECharts demo (tabBar)
│   │   └── setting.vue      # Settings (tabBar)
│   ├── stores/              # Pinia stores (auto-imported)
│   ├── static/              # Static assets
│   └── utils/               # Utility functions
├── plugins/                 # Vite plugin configs (auto-import, components)
├── .agents/rules/           # Agent coding rules
└── .agents/skills/          # Agent skills
```

## Key Conventions

- **Language**: TypeScript throughout, `type` keyword for type definitions (`type` not `interface`)
- **Script Style**: `<script setup lang="ts">` in all Vue SFCs
- **Path Alias**: `~/` maps to `src/`
- **Auto-imports**: Vue, VueUse, Pinia, uni-app APIs, composables, and stores are auto-imported — no manual import needed
- **Component Auto-resolution**: Components in `src/components/` and `Wd*` (wot-ui) are auto-resolved
- **File-based Routing**: Pages in `src/pages/` are auto-registered via `vite-plugin-uni-pages`
- **TabBar Pages**: `index`, `echarts`, `setting`

## Scripts

| Command | Purpose |
|---------|---------|
| `pnpm dev` | Start dev server |
| `pnpm dev:wx` | Start WeChat Mini Program dev |
| `pnpm build` | Production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Auto-fix lint issues |
| `pnpm test` | Run Vitest |
| `pnpm cz` | Commit with czg |
