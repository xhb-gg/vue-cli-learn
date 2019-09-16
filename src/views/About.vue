<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="handleClick">触发toast</el-button>
    <el-button type="primary" @click="handleDialog">触发dialog</el-button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    data() {
      return {
        name: 'xu'
      }
    },
    methods: {
      handleClick() {
        this.$toast({
          message: '这是测试',
          duration: 3000,
          onClose() {
            console.log('this is close')
          }
        })
      },
      handleDialog() {
        this.$prompt({
          message: '确定删除?',
          cancelButtonText: '取消',
          cancelCallback: () => {
            // console.log(4444, this.name)
            this.$message('这是提示')
          },
          confirmCallback: () => {
            this.$message('这是成功')
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>