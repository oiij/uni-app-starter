<script setup lang="ts">
const { isDark } = useTheme()
</script>

<template>
  <div :class="isDark ? 'dark' : 'light'">
    <WdUiProvider>
      <NutUiProvider>
        <slot />
      </NutUiProvider>
    </WdUiProvider>
  </div>
</template>

<style scoped lang="less"></style>
