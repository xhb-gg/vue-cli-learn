<template>
  <div class="about">
    <h1>This is an about page</h1>
    <el-button @click="handleClick">触发toast</el-button>
  </div>
</template>

<script>
  export default {
    name: 'about',
    methods: {
      handleClick() {
        this.$toast({
          message: '这是测试',
          duration: 3000,
          onClose() {
            console.log('this is close')
          }
        })
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>