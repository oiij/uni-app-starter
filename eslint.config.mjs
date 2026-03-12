import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  vue: {
    componentNameCasing: 'PascalCase',
    // ignores: ['scroll-view', 'vertical-drag-gesture-handler', 'pan-gesture-handler'],
  },
  rules: {
    'ts/consistent-type-definitions': ['error', 'type'],
    'e18e/ban-dependencies': ['off'],
    'e18e/prefer-static-regex': ['off'],
  },
  ignores: [
    'src/manifest.json',
    'src/pages.json',
    '**/uni_modules',
  ],
})
