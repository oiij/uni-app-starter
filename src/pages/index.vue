<script setup lang="ts">
import { useNotify as useWdNotify, useToast as useWdToast } from '@wot-ui/ui'

definePage({
  type: 'home',
  style: {
    navigationStyle: 'custom',
  },
})
const wdToast = useWdToast()
const wdNotify = useWdNotify()
</script>

<template>
  <WdNavbar safe-area-inset-top title="WotDesignUni" />
  <WdToast />
  <WdNotify />
  <div class="flex-col gap-[10px] p-[10px]">
    <WdCellGroup title="WotDesignUI" border>
      <WdCell title="wdToast" clickable @click="() => wdToast.show('WotDesign Toast')" />
      <WdCell title="wdNotify" clickable @click="() => wdNotify.showNotify({ message: 'WotDesign Notify', position: 'bottom' })" />
    </WdCellGroup>
    <WdButton>WotDesign Button</WdButton>
    <WdCalendar type="daterange" />
  </div>
</template>

<style scoped lang="less">

</style>
