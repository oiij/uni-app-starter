import { defineConfig } from '@uni-helper/uni'

export default defineConfig({
  // 平台配置
  platform: {
    // 默认平台，当不指定平台时使用此平台
    default: 'h5',
    // 平台别名，可以使用短名称代替完整平台名称
    alias: {
      'h5': ['w', 'h'],
      'mp-weixin': ['wx'],
    },
  },
  // 准备阶段配置，可以自定义hooks
  prepare: {
    // 安装依赖时的钩子
    install() {
      console.log('install')
    },
    // 构建时的钩子，接收平台参数
    build(platform: string) {
      console.log('build:', platform)
    },
    // 开发时的钩子，接收平台参数
    dev(platform: string) {
      console.log('dev:', platform)
    },
  },
  // 自动生成配置
  autoGenerate: {
    // 是否自动生成页面配置
    pages: true,
    manifest: true,
  },
})
