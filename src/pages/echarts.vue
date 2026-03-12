<!-- eslint-disable no-console -->
<script setup lang="ts">
import UniEcharts from 'uni-echarts'
import 'echarts'

definePage({
  layout: false,
  style: {
    navigationStyle: 'default',
    navigationBarTitleText: 'ECharts',
  },
})

const options = ref({
  tooltip: {
    trigger: 'item',
  },
  legend: {
    top: '5%',
    left: 'center',
  },
  title: {
    text: ``,
    left: 'center',
  },
  series: [
    {
      name: ``,
      type: 'pie',
      top: 'center',
      radius: ['20%', '80%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2,
      },
      label: {
        show: true,
        position: 'outside',
        formatter: '{b}:{c}元\n{d}%',
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 30,
          fontWeight: 'bold',
        },
      },
      labelLine: {
        show: true,
      },
      data: [
        { value: 100, name: 'AAA' },
        { value: 200, name: 'BBB' },
        { value: 300, name: 'CCC' },
      ],
    },
  ],
})
</script>

<template>
  <UniEcharts custom-class="w-full h-100vh" :option="options" />
</template>

<style scoped lang="less">
</style>
