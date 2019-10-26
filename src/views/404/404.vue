
<template>
  <div class="page-404-vue error-page">
    <div class="background-image"></div>
    <!-- <p>您访问的页面不存在~~</p> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {}
  },
  computed: {}
}
</script>

<style lang='scss'>
.page-404-vue {
  .background-image {
    height: 100vh;
    background: url('./images/404.png') no-repeat center;
  }
}
</style>
