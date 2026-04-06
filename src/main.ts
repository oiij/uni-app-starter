import { createSSRApp } from 'vue'
import App from './App.vue'
import { useModules } from './modules'
import 'uno.css'

import '@unocss-applet/reset/uni-app/tailwind-compat.css'

import 'nutui-uniapp/styles/index.scss'

import '@tdesign/uniapp/common/style/theme/index.css'

export function createApp() {
  const app = createSSRApp(App)
  useModules(app)

  return {
    app,
  }
}
