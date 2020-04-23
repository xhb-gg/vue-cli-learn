<template>
  <div>
    <input :value="value" type="text" v-on="inputListeners" />
    <div>
      <el-button type="primary" size="mini" @click="handleClick"
        >测试</el-button
      >
    </div>
  </div>
</template>

<script>
import customizeEvent from '@/utils/customizeEvent'

export default {
  name: 'baseInput',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name: ''
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
  created() {
    this.event = new customizeEvent()
    function test() {
      console.log('haha')
    }
    this.event.$on('enter', (name, age) => {
      console.log(`${name} enter`)
    })
    this.event.$on('enter', test)
    this.event.$off('enter', test)
    this.event.$once('testOnce', (name, age) => {
      console.log('testOnce', name, age)
    })
  },
  mounted() {
    function Person(name) {
      this.name = name
    }
    Person.prototype.sayName = function() {
      console.log('name is: ' + this.name)
    }
    function student(name) {
      Person.call(this, name)
    }
    student.prototype = Object.create(Person.prototype) // student.prototype.constructor === Person  构造器指向Person
    // Object.setPrototypeOf(student.prototype, Person.prototype) // // student.prototype.constructor === student  构造器没变
    const student1 = new student('xuhaibin')
    console.log('flag', student.prototype.constructor === Person) // true
    this.event.$emit('enter', 'xuhaibin', 25)
    this.event.$emit('enter', 'xu', 25)
  },
  beforeDestroy() {
    this.event = null
  },
  methods: {
    handleInputChange(event) {
      this.$emit('input', event.target.value)
    },
    handleClick() {
      const names = ['xu', 'hai', 'bin']
      names.forEach(item => {
        this.event.$emit('testOnce', item, 25)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
