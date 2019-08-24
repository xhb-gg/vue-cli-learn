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
        this.$toast()
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>