<template>
  <div></div>
</template>

<script>
export default {
  name: 'setTest',
  mounted() {
    // set的使用,接收具有遍历器的数据类型
    // 去重并将自身*2
    const arr = [1, 2, 3, 4, 5, 4, 3, 2, 1]
    // 方法一
    const result = new Set([...new Set(arr)].map(item => item * 2))
    // 方法二
    const result2 = new Set()
    new Set(arr).forEach(item => result2.add(item * 2))
    // 判断是否有遍历器
    console.log(typeof result2[Symbol.iterator] === 'function')
    // 查找字符串出现次数最多的字符并计算次数
    const str = ' xuhaibin xuhaibin '
    const countStr = str => {
      if (typeof str !== 'string') throw `param must be a string`
      let arr = [...str]
      return arr.reduce((cur, next) => {
        if (!next.trim()) return cur
        cur[next] !== undefined ? cur[next]++ : (cur[next] = 1)
        return cur
      }, {})
    }
    const strObj = countStr(str)
    let max = 0
    let flagKey = ''
    for (let key in strObj) {
      if (strObj[key] > max) {
        max = strObj[key]
        flagKey = key
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>