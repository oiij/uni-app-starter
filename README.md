# uni-app-starter

基于 Vue 3 + Vite + TypeScript 的 uni-app 跨平台项目模板。

## 技术栈

- **框架**: Vue 3 (Composition API + `<script setup>`)
- **构建工具**: Vite 5
- **语言**: TypeScript
- **状态管理**: Pinia
- **CSS 引擎**: UnoCSS (原子化 CSS)
- **UI 组件库**: WotDesign UI v2
- **包管理器**: pnpm

## 支持平台

- H5 (Web)
- 微信小程序
- 支付宝小程序
- 百度小程序
- 字节小程序
- QQ 小程序
- HarmonyOS
- 原生 App (Android/iOS)

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动 H5 开发服务器
pnpm dev

# 启动微信小程序开发服务器
pnpm dev:wx

# 生产构建
pnpm build

# 代码检查
pnpm lint

# 自动修复
pnpm lint:fix

# 运行测试
pnpm test
```

## 项目结构

```
uni-app-starter/
├── src/
│   ├── components/        # 公共组件
│   ├── composables/       # 组合式函数 (自动导入)
│   ├── layouts/           # 布局组件
│   ├── modules/           # 模块注册 (Pinia, Router)
│   ├── pages/             # 页面文件 (文件路由)
│   ├── stores/            # Pinia 状态仓库
│   ├── utils/             # 工具函数
│   ├── theme.json         # 主题变量
│   └── main.ts            # 入口文件
├── plugins/               # Vite 插件配置
├── .agents/               # AI 代理规则与技能
├── vite.config.ts         # Vite 配置
├── uno.config.ts          # UnoCSS 配置
├── pages.config.ts        # 页面配置 (tabBar, 全局样式)
└── manifest.config.ts     # uni-app 清单配置
```

## 核心特性

### 零导入开发

Vue API、VueUse、Pinia、uni-app API、composables 和 stores 均自动导入，无需手动 import。

### 文件路由

页面文件自动注册为路由，通过 `definePage()` 定义页面元数据。

### 暗黑模式

完整的主题系统，支持自动/亮色/暗色模式切换，适配系统主题。

### 原子化 CSS

UnoCSS 提供原子化样式支持，PostCSS 自动将 `px` 转换为 `rpx`。

### 状态持久化

Pinia 状态自动持久化到 uni-app 存储，跨平台兼容。

### ECharts 图表

集成 ECharts 6 + uni-echarts，支持跨平台图表渲染。

## 开发规范

### 代码规范

- 使用 ESLint (antfu 配置) 进行代码检查
- TypeScript 严格模式
- 提交信息使用 czg 规范 (中英文 + emoji)

### 样式规范

- 在 CSS 中使用 `px` 单位，PostCSS 自动转换为 `rpx`
- 优先使用 UnoCSS 原子类
- 自定义样式使用 `<style scoped lang="less">` 或 `<style scoped lang="scss">`

### 提交规范

```bash
# 交互式提交
pnpm cz

# 完整提交流程 (拉取 + 暂存 + 提交 + 推送)
pnpm commit
```

## 环境变量

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `VITE_DEV_PORT` | 开发服务器端口 | 5678 |
| `VITE_DEV_PROXY` | API 代理地址 | - |

## 许可证

MIT
