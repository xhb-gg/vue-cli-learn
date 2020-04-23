<template>
  <div>
    <div>这是c</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'c',
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
