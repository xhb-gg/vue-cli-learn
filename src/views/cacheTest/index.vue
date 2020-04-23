<template>
  <div>
    <el-tabs v-model="componentName">
      <el-tab-pane
        :label="tab.label"
        :name="tab.value"
        v-for="(tab, index) in tabList"
        :key="index"
      >
        <!-- <keep-alive> -->
        <component :is="componentName"></component>
        <!-- </keep-alive> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import componentA from './components/a'
import componentB from './components/b'
import componentC from './components/c'

export default {
  name: 'cacheTest',
  components: { componentA, componentB, componentC },
  data() {
    return {
      componentName: 'component-a',
      tabList: [
        {
          label: '组件A',
          value: 'component-a'
        },
        {
          label: '组件B',
          value: 'component-b'
        },
        {
          label: '组件C',
          value: 'component-c'
        }
      ]
    }
  },
  watch: {
    componentName() {
      console.log('componentName', this.componentName)
    }
  }
}
</script>

<style lang="scss" scoped></style>
