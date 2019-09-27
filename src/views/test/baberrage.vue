<template>
  <div>
    <barrage ref="barrage" class="barrage" :channels="channels" :barrage-list="barrageList" :speed="speed" :loop="loop" :background="background" />
  </div>
</template>

<script>
import Barrage from 'vue-barrage'

export default {
  components: { Barrage },
  data() {
    return {
      barrageList: [],
      speed: 5,
      loop: true,
      background: 'rgba(0, 0, 0, 0.38)',
      channels: 3,
    }
  },
  mounted() {
    this.barrageList = [
      {
        content: '试数据测试数测试数据数测试数据1试数据测试数测试数据数测试数据1试数据测试数测试数据数测试数据1试数据测试数测试数据数测试数据1',
        color: 'red'
      }
    ]
  }
}
</script>

<style lang="scss" scoped>
</style>