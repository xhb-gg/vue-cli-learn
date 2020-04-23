<template>
  <div>
    <!-- <div class="flex-container">
      <div class="flex-container__left">左边</div>
      <div class="flex-container__middle">中间</div>
      <div class="flex-container__right">右边</div>
    </div> -->
    <!-- <div class="img-container">
      <img src="./images/bg.png" alt="" class="bg-img" />
      <img src="./images/pic.jpg" alt="" class="above-img" />
    </div> -->
    <!-- <div class="masked"></div> -->
    <div class="main">
      <img src="./images/pic.jpg" alt="" class="img-2" />
      <img src="./images/bg.png" alt="" class="img-1" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'mapTest',
  async mounted() {
    /**
     *基础用法
      const m = new Map()
      const o = { name: 'xu' }
      m.set(o, 'content')
      // m.delete(o)
      console.log('m', m.has(o))
     */
    const m = new Map([['name', 'xu'], ['age', 25]])
    const sys = Symbol('company')
    m.set(['5'], 5)
    m.set(['5'], 5)
    m.set(sys, 'stdag')
    const methodName = 'sayName'
    // class 测试
    class Person {
      company = 'stdag'
      constructor(name) {
        this.name = name
      }
      get age() {
        return 25
      }
      set age(value) {
        console.log('age is ' + value)
      }
      [methodName]() {
        console.log(`your name is ${this.name}`)
      }
    }
    const p = new Person('xu')
    // console.log('name', p.hasOwnProperty('name')) // true
    // console.log('age', p.hasOwnProperty('age')) // false
    // console.log('person.prototype', Person.prototype.hasOwnProperty('age')) // true
    // console.log('method name is variable', p[methodName]())
    const desc = Object.getOwnPropertyDescriptor(Person.prototype, 'age')
    // console.log('descriptor', desc)

    // class iteratorClass {
    //   constructor(...args) {
    //     this.args = args
    //   }
    //   *[Symbol.iterator]() {
    //     for (let arg of this.args) {
    //       yield arg + 'xix'
    //     }
    //   }
    // }
    // for (let name of new iteratorClass('xu', 'hai', 'bin')) {
    //   console.log('name', name)
    // }
    class Student extends Person {
      constructor(name, grade) {
        super(name)
        this.grade = grade
      }
    }
    const s = new Student('xiaoxu', 'grade 3')

    setTimeout(() => {
      console.log(4)
    }, 0)
    const promise = new Promise(async resolve => {
      const resp = await Promise.resolve(5)
      console.log('resp', resp)
      resolve(3)
      console.log(1)
    })
    const resp = await promise
    console.log(resp)
    console.log(2)

    // result 5 1 3 2 4
  }
}
</script>

<style lang="scss" scoped>
.flex-container {
  display: flex;
  height: 50vh;
  color: white;
  .flex-container__left {
    background-color: red;
    flex-basis: 350px;
  }
  .flex-container__middle {
    background-color: blue;
    // flex: flex-grow flex-shrink flex-basis
    flex: 1 0 auto;
  }
  .flex-container__right {
    background-color: green;
    flex-basis: 350px;
  }
}
.img-container {
  margin-top: 25px;
  position: relative;
  width: 50vw;
  height: 12vh;
  .bg-img {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    // background: transparent;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
  .above-img {
    // display: none;
    width: 100%;
    height: 12vh;
    object-fit: cover;
  }
}
.masked {
  height: 12vh;
  width: 50vw;
  background: url('./images/bg.png') no-repeat;
  background-size: 100% 100%;
  -webkit-mask: url('https://github.githubassets.com/pinned-octocat.svg');
  mask: url('https://github.githubassets.com/pinned-octocat.svg');
}
.main {
  position: relative;
  width: 50vw;
  height: 12vh;
  .img-1 {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .img-2 {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background: white;
    top: 0;
    left: 0;
    mix-blend-mode: screen;
  }
}
</style>
