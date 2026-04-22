import type { ComponentResolver } from '@uni-helper/vite-plugin-uni-components'
// https://github.com/antfu/unplugin-vue-components
import Components, { kebabCase } from '@uni-helper/vite-plugin-uni-components'

export function WotResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve: (name: string) => {
      if (/^Wd[A-Z]/.test(name)) {
        const compName = kebabCase(name)
        return {
          name,
          from: `@wot-ui/ui/components/${compName}/${compName}.vue`,
        }
      }
    },
  }
}
export default Components({
  dirs: ['src/components'],
  extensions: ['vue'],
  deep: true,
  include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
  resolvers: [
    WotResolver(),
  ],
})
