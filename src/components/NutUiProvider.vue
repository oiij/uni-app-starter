<script setup lang='ts'>
const { theme } = useTheme()
</script>

<template>
  <NutConfigProvider :theme="theme">
    <NutToast />
    <NutNotify />
    <slot />
  </NutConfigProvider>
</template>

<style scoped lang='less'>

</style>
