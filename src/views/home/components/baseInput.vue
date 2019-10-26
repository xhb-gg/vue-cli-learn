<template>
  <div>
    <input :value="value" type="text" v-on="inputListeners" />
  </div>
</template>

<script>
export default {
  name: 'baseInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  computed: {
    inputListeners() {
      return Object.assign(
        {},
        {
          input: this.handleInputChange
        }
      )
    }
  },
  methods: {
    handleInputChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>