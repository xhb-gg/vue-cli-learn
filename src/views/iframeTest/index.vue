<template>
  <div>
    <iframe :src="iframeSrc" frameborder="0" ref="iframeRef"></iframe>
    <div>
      <el-input
        type="text"
        placeholder="请输入信息"
        v-model="inputMsg"
      ></el-input>
    </div>
    <el-button type="primary" size="small" @click="handlePostMessage"
      >iframe发送消息</el-button
    >
  </div>
</template>

<script>
export default {
  name: 'iframeTest',
  data() {
    return {
      iframeSrc: 'http://localhost:8081/#/',
      inputMsg: ''
    }
  },
  computed: {
    iframeRef() {
      return this.$refs.iframeRef.contentWindow
    }
  },
  mounted() {
    // const dom = new Proxy(
    //   {},
    //   {
    //     get(target, property) {
    //       return function(attrs = {}, ...children) {
    //         const el = document.createElement(property)
    //         for (let prop of Object.keys(attrs)) {
    //           el.setAttribute(prop, attrs[prop])
    //         }
    //         for (let child of children) {
    //           if (typeof child === 'string') {
    //             child = document.createTextNode(child)
    //           }
    //           el.appendChild(child)
    //         }
    //         return el
    //       }
    //     }
    //   }
    // )
    // const el = dom.div(
    //   { title: 'test' },
    //   'Hello, my name is ',
    //   dom.a({ href: '//example.com' }, 'Mark'),
    //     '. I like:',
    //     dom.ul(
    //       {},
    //       dom.li({}, 'The web'),
    //       dom.li({}, 'Food'),
    //       dom.li({}, "…actually that's it")
    //     )
    // )
    // document.body.appendChild(el)
    // const o = { name: 'xuhaibin' }
    // Object.defineProperty(o, 'name', {
    //   configurable: false,
    //   enumerable: true,
    //   writable: false
    // })
    // for (let key in o) {
    //   console.log('key', key)
    // }
    // const temp = Object.create(o)
    // console.log(Object.getPrototypeOf(temp) === o)
    // var a = { name: 'name' }
    // var b = { age: 25 }
    // Object.setPrototypeOf(a, b)
    // Object.preventExtensions(a)
    // b.grade = 'grade 3'
    // console.log('a', a.grade)
    // console.log('b', b)
    // const obj = {
    //   name: 'XX',
    //   age: 20,
    //   job: 'teacher',
    //   [Symbol.iterator]() {
    //     const _this = this
    //     const target = Object.keys(_this)
    //     let index = 0
    //     return {
    //       next() {
    //         if (index < target.length) {
    //           return {
    //             value: _this[target[index++]],
    //             done: false
    //           }
    //         } else {
    //           return {
    //             value: undefined,
    //             done: true
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  },
  methods: {
    handlePostMessage() {
      const vm = this
      this.iframeRef.postMessage(
        {
          message: vm.inputMsg
        },
        '*'
      )
    }
  }
}
</script>

<style lang="scss" scoped></style>
