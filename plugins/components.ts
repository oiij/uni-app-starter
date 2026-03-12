// https://github.com/antfu/unplugin-vue-components
import Components from '@uni-helper/vite-plugin-uni-components'
import { UniUIResolver, WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'
import { NutResolver } from 'nutui-uniapp'

export default Components({
  dirs: ['src/components'],
  extensions: ['vue'],
  deep: true,
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  resolvers: [
    NutResolver(),
    WotResolver(),
    UniUIResolver(),
  ],
})
