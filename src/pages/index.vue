<script setup lang="ts">
import { useNotify as useNutNotify, useToast as useNutToast } from 'nutui-uniapp/composables'
import { useMessage as useWdMessage, useNotify as useWdNotify, useToast as useWdToast } from 'wot-design-uni'

definePage({
  type: 'home',
  style: {
    navigationStyle: 'custom',
  },
})
const router = useRouter()
const wdToast = useWdToast()
const wdNotify = useWdNotify()
const wdMessage = useWdMessage()

const nutToast = useNutToast()
const nutNotify = useNutNotify()
function navigationToSubPage() {
  router.push('/pages/sub-page/index')
}
</script>

<template>
  <WdNavbar safe-area-inset-top title="WotDesignUni" />
  <div class="flex-col gap-[10px] p-[10px]">
    <WdCellGroup title="WotDesignUI" border>
      <WdCell title="wdToast" clickable @click="() => wdToast.show('WotDesign Toast')" />
      <WdCell title="wdNotify" clickable @click="() => wdNotify.showNotify({ message: 'WotDesign Notify', position: 'bottom' })" />
      <WdCell title="Message" clickable @click="() => wdMessage.alert('WotDesign Message')" />
    </WdCellGroup>
    <NutCellGroup title="NutUI">
      <NutCell title="wdToast" clickable @click="() => nutToast.text('NutUI Toast')" />
      <NutCell title="wdNotify" clickable @click="() => nutNotify.success('NutUI Notify', { position: 'bottom' })" />
      <NutCell title="SubPage" clickable @click="() => navigationToSubPage()" />
    </NutCellGroup>
  </div>
</template>

<style scoped lang="less">

</style>
