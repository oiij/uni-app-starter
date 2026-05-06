import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  formatters: true,
  vue: {
    overrides: {
      'vue/component-name-in-template-casing': ['error', 'PascalCase', {
        registeredComponentsOnly: false,
      }],
    },
  },
  rules: {
    'ts/consistent-type-definitions': ['error', 'type'],
    'e18e/ban-dependencies': ['off'],
    'e18e/prefer-static-regex': ['off'],
  },
  ignores: [
    '.agents',
  ],
})
