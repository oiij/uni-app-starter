# UnoCSS Conventions

## Styling Rules

- **Size**: prefer preset utilities (`w-10`, `h-10`). When no preset matches, use `size-10px` — never `size-[10px]`
- **Colors**: prefer theme/preset colors (`bg-primary`, `text-gray-5`). When no preset matches, use `bg-#333` — never `bg-[#333]`
- **Duplicate classes**: extract repeated class sets into `@apply` in `<style>` blocks (transformer-directives enabled)

## oiijPreset Shortcuts

Use these instead of raw utilities:

| Shortcut | Expands to |
|----------|------------|
| `wh-full` | `w-full h-full` |
| `flex-center` | `flex justify-center items-center` |
| `flex-col` | `flex flex-col` |
| `flex-col-center` | `flex-col flex-center` |
| `flex-col-stretch` | `flex-col items-stretch` |
| `flex-x-center` | `flex justify-center` |
| `flex-y-center` | `flex items-center` |
| `i-flex-center` | `inline-flex justify-center items-center` |
| `i-flex-x-center` | `inline-flex justify-center` |
| `i-flex-y-center` | `inline-flex items-center` |
| `i-flex-col` | `inline-flex flex-col` |
| `i-flex-col-stretch` | `i-flex-col items-stretch` |
| `flex-1-hidden` | `flex-1 overflow-hidden` |
| `absolute-lt` | `absolute left-0 top-0` |
| `absolute-lb` | `absolute left-0 bottom-0` |
| `absolute-rt` | `absolute right-0 top-0` |
| `absolute-rb` | `absolute right-0 bottom-0` |
| `absolute-tl` | `absolute-lt` |
| `absolute-tr` | `absolute-rt` |
| `absolute-bl` | `absolute-lb` |
| `absolute-br` | `absolute-rb` |
| `absolute-center` | `absolute-lt flex-center wh-full` |
| `absolute-full` | `absolute inset-0` |
| `fixed-lt` | `fixed left-0 top-0` |
| `fixed-lb` | `fixed left-0 bottom-0` |
| `fixed-rt` | `fixed right-0 top-0` |
| `fixed-rb` | `fixed right-0 bottom-0` |
| `fixed-tl` | `fixed-lt` |
| `fixed-tr` | `fixed-rt` |
| `fixed-bl` | `fixed-lb` |
| `fixed-br` | `fixed-rb` |
| `fixed-center` | `fixed-lt flex-center wh-full` |
| `fixed-full` | `fixed inset-0` |
| `transition-base` | `transition-all duration-300 ease-in-out` |
| `line-clamp-{n}` | line-clamp rule (custom) |
