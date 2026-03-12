// https://github.com/antfu/unplugin-auto-import
import AutoImport from 'unplugin-auto-import/vite'

export default AutoImport({
  /* options */
  include: [/\.[tj]sx?$/, /\.vue$/, /\.vue\?vue/,
  ],
  exclude: [/[\\/]node_modules[\\/]/, /[\\/]packages[\\/]/, /[\\/]\.git[\\/]/],
  imports: [
    'vue',
    '@vueuse/core',
    'uni-app',
    'pinia',
    'vue-i18n',
    { from: 'await-to-js', imports: ['to'] },
    {
      from: 'uni-mini-router',
      imports: ['createRouter', 'useRouter', 'useRoute'],
    },
  ],
  dirs: ['src/composables', 'src/stores'],
  dtsMode: 'overwrite',
  vueTemplate: true,
  resolvers: [],
})
