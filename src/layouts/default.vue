<script setup lang="ts">
const { isDark } = useTheme()
</script>

<template>
  <div :class="isDark ? 'dark' : 'light'">
    <WdUiProvider>
      <slot />
    </WdUiProvider>
  </div>
</template>

<style scoped lang="less"></style>
