<script setup lang='ts'>
const { theme } = useTheme()
</script>

<template>
  <WdConfigProvider :theme="theme">
    <slot />
  </WdConfigProvider>
</template>

<style scoped lang='less'>

</style>
