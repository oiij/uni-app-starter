<script setup lang="ts">
definePage({
  style: {
    navigationBarTitleText: '设置',
    navigationStyle: 'default',
  },
})
const { colorModeOptions, colorMode, setColorMode } = useTheme()
function onThemeChange(v: any) {
  setColorMode(v.detail.value)
}
</script>

<template>
  <div class="w-full flex-col gap-[10px] p-[10px]">
    <div class="w-full flex-col gap-[10px] rounded-md bg-black/10 p-[10px]">
      <div>主题</div>
      <radio-group class="w-full flex-y-center gap-[10px]" @change="onThemeChange">
        <label v-for="item in colorModeOptions" :key="item.value">
          <radio :value="item.value" :checked="colorMode === item.value" />
          {{ item.label }}
        </label>
      </radio-group>
    </div>
  </div>
</template>
