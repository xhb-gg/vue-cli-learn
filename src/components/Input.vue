<template>
  <div>
    {{value}}
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  watch: {
    value: {
      handler() {
        console.log('value', this.value)
      },
      immediate: true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>