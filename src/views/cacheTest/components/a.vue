<template>
  <div>
    <div>这是a</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'a',
  data() {
    return {
      count: 0
    }
  },
  mounted() {
    this.count++
  }
}
</script>

<style lang="scss" scoped></style>
