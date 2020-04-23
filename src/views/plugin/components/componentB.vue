<template>
  <div>
    <div>组件b</div>
    <p>{{count}}</p>
    <el-button type="primary" size="small" @click="handleAdd">增加</el-button>
  </div>
</template>

<script>
export default {
  name: 'componentB',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleAdd() {
      this.count++
    }
  }
}
</script>

<style lang="scss" scoped>
</style>