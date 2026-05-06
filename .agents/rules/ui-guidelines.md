# UI Guidelines

## Component Library

This project uses **wot-ui v2** (`@wot-ui/ui`) as the primary component library. All `Wd*` components are auto-imported — use them directly in templates without manual imports.

## Component Usage

```vue
<WdButton type="primary">Submit</WdButton>
<WdCell title="Label" value="Value" />
<WdCellGroup title="Section" border>
  <WdCell title="Item 1" />
</WdCellGroup>
<WdNavbar title="Page Title" />
<WdToast />
<WdNotify />
<WdTag round>Tag</WdTag>
```

## Composables from wot-ui

```ts
const toast = useToast()
const notify = useNotify()
toast.show('Message')
notify.showNotify({ message: 'Message', position: 'bottom' })
```

## Styling Rules

- **Atomic CSS**: Use UnoCSS utilities in templates — prefer utility classes over custom CSS
- **Px to Rpx**: PostCSS automatically converts `px` to `rpx` (×2). Write in `px`; do not manually use `rpx`
- **Scoped Styles**: Use `<style scoped lang="less">` or `<style scoped lang="scss">` when custom CSS is needed
- **Shortcuts**: Prefer oiij preset shortcuts (see `unocss.md` for full list):
  - `flex-center` instead of `flex justify-center items-center`
  - `wh-full` instead of `w-full h-full`
  - `flex-col` instead of `flex flex-col`
- **Colors**: Use theme tokens (`bg-primary`, `text-gray-5`) or shorthand hex (`bg-#333`), never bracket syntax (`bg-[#333]`)

## Page Structure

```vue
<script setup lang="ts">
definePage({
  type: 'home',       // optional page type
  style: {
    navigationStyle: 'custom',  // or 'default'
  },
})
</script>

<template>
  <!-- Custom navbar when navigationStyle: 'custom' -->
  <WdNavbar safe-area-inset-top title="Page Title" />
  <!-- Page content -->
  <div class="flex-col gap-3 p-3">
    ...
  </div>
</template>
```

## Layouts

- Use `vite-plugin-uni-layouts` for shared page layouts
- Layout files are in `src/layouts/`

## Icons

Use `unplugin-icons` with Remix Icon (`@iconify-json/ri`):

```vue
<template>
  <i-ri-home-line />
  <i-ri-arrow-right-s-line />
</template>
```

## Accessibility & Platform

- Use `safe-area-inset-top` / `safe-area-inset-bottom` on navbar/tabbar for notch devices
- Respect platform differences with `UniPlatformModifier` plugin when needed
