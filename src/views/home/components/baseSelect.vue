<template>
  <div>
    <div class="custom-select">
      <div class="custom-select-value" @click="toggleMenu">{{fileterValue}}</div>
      <el-collapse-transition>
        <ul v-show="showMenu" class="custom-select-list">
          <li
            class="custom-select-list-item"
            v-for="(tag, index) in selectList"
            :key="index"
            @click="handleItemChange(tag.value)"
          >{{tag.label}}</li>
        </ul>
      </el-collapse-transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'baseSelect',
  props: {
    value: {
      type: String,
      default: ''
    },
    selectList: {
      type: Array,
      default: () => []
    }
  },
  model: {
    event: 'handleValueChange'
  },
  data() {
    return {
      showMenu: false
    }
  },
  computed: {
    fileterValue() {
      return (
        this.value &&
        this.selectList.filter(item => item.value === this.value)[0].label
      )
    }
  },
  mounted() {
    /**
     * call,apply 实现继承
     * 缺点：不能读取Person的原型
     */
    function Person(name) {
      this.name = name
      this.sayName = function() {
        console.log(this.name)
      }
    }
    Person.prototype.logName = function() {
      console.log('log', this.name)
    }
    function Student(name) {
      Person.call(this, name)
    }

    let teacher = new Student('wang')
    console.log(111, typeof teacher.logName)
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    handleItemChange(value) {
      this.toggleMenu()
      this.$emit('handleValueChange', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  .custom-select-value {
    height: 30px;
    line-height: 30px;
    border: 1px solid #dcdfe6;
    min-width: 150px;
  }
  .custom-select-list {
    position: relative;
    // &::before {
    //   content: 'xixi';
    // }
    .custom-select-list-item {
    }
  }
}
</style>