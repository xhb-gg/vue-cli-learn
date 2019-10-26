export const simpleObserver = () => {
  // 观察者模式（发布-订阅模式）
  class Dep {
    // 主题对象
    constructor() {
      this.subs = []
    }
    notify() {
      this.subs.forEach(sub => {
        sub.update()
      })
    }
  }
  // 订阅者
  class Sub {
    constructor(value) {
      console.log('value', value)
      this.value = value
    }
    update() {
      this.value = this.value * this.value
      console.log('value', this.value)
    }
  }
  let dep = new Dep()
  Array.prototype.push.call(dep.subs, new Sub(1), new Sub(2), new Sub(3))
  // 发布者
  let publisher = {
    publish() {
      dep.notify()
    }
  }
  publisher.publish()
}

/**
 * 检测数组某个元素出现次数
 * @param {Array, String|Number|Boolean}
 * @return { Number }
 */
export const countOccurrences = (arr, val) =>
  arr.reduce((cur, next) => (next === val ? cur + 1 : cur), 0)

/**
 * 两数组的交集
 * @param {Array, Array}
 * @return { Array }
 */
export const intersection = (arr1, arr2) => {
  const temp = new Set(arr2)
  return arr1.filter(x => temp.has(x))
}

// 手动实现instanceof功能
export const selfInstanceOf = (left, right) => {
  if (left === null || typeof left !== 'object') return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
