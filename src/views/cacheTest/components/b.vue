<template>
  <div>
    <div>这是b</div>
    <div>{{ count }}</div>
  </div>
</template>

<script>
export default {
  name: 'b',
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
