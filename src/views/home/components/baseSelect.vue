<template>
  <div>
    <div class="custom-select">
      <div class="custom-select-value" @click="toggleMenu">
        {{ fileterValue }}
      </div>
      <transition name="dropdown">
        <ul v-if="showMenu" class="custom-select-list">
          <li
            class="custom-select-list-item"
            v-for="(tag, index) in selectList"
            :key="index"
            @click="handleItemChange(tag.value)"
          >
            {{ tag.label }}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

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
    ...mapState({
      name1: state => state.user.name
    }),
    fileterValue() {
      return (
        this.value &&
        this.selectList.filter(item => item.value === this.value)[0].label
      )
    }
  },
  async mounted() {
    /**
     * call,apply 实现继承
     * 缺点：不能读取Person的原型
     * 使用Student.prototype = Object.create(Person.prototype) 可消除该缺点
     * 但是这样做会导致Student.prototype.constructor = Person
     * 使用Object.setPrototypeOf(Student.prototype, Person.prototype)则可以很完美实现继承
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
    Student.prototype = Object.create(Person.prototype)
    Student.prototype.constructor = Student
    let student = new Student('wang')
  },
  methods: {
    ...mapActions(['testAction']),
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
.dropdown-enter {
  opacity: 0;
  transform: scale(1.5);
}
</style>
