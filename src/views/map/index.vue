<template>
    <div>
        <leaflet-map></leaflet-map>
    </div>
</template>

<script>
import leafletMap from './components/leafletMap'

export default {
  name: 'mapCustom',
  components: { leafletMap },
  mounted() {
    const o = {}
    const proxy = new Proxy(o, {
      get(target, key, receiver) {
        console.log('o getter', key)
        return Reflect.get(target, key, receiver)
      },
      set(target, key, value, receiver) {
        console.log('o setter', key)
        return Reflect.set(target, key, value, receiver)
      }
    })
    // Object.assing 会触发被赋值对象的setter 和 getter
    Object.assign(proxy, { age: 25 }, { name: 'xuhaibin' })
    console.log(411, o)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
</style>