import { symbols } from 'ansi-colors'

// 实现map方法
Array.prototype.selfMap = function(fn, context) {
  if (typeof fn !== 'function') {
    throw 'fn must be a function'
  }
  // 将类数组等转化成数组
  const arr = Array.prototype.slice.call(this)
  const temp = []
  if (arr && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      temp.push(fn.call(context, arr[i], i, arr))
    }
  }
  return temp
}
const list = new Array(1, 2, 3)
const temp = list.selfMap(function(element, index) {
  return index
})

// reduce实现map
Array.prototype.selfMap2 = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  return arr.reduce((cur, next, index) => {
    return [...cur, fn.call(context, next, index, arr)]
  }, [])
}

// 实现filter方法
Array.prototype.selfFilter = function(fn, context) {
  if (typeof fn !== 'function') {
    throw 'fn must be a function'
  }
  // 将类数组等转化成数组
  const arr = Array.prototype.slice.call(this)
  const temp = []
  if (arr && Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (fn.call(context, arr[i], i, arr)) {
        temp.push(arr[i])
      }
    }
  }
  return temp
}
const filterList = new Array(1, 2, 3)
filterList.selfFilter(item => item > 1)

// 实现some方法
Array.prototype.selfSome = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  if (!arr.length) return false
  for (let i = 0; i < arr.length; i++) {
    const flag = fn.call(context, arr[i], i, arr)
    if (flag) return true
  }
  return false
}

// 实现every方法
Array.prototype.selfEvery = function(fn, context) {
  const arr = Array.prototype.slice.call(this)
  if (!arr.length) return false
  for (let i = 0; i < arr.length; i++) {
    // 判断稀疏数组
    if (!arr.hasOwnProperty(i)) continue
    const flag = fn.call(context, arr[i], i, arr)
    if (!flag) return false
  }
  return true
}

// 实现call方法
Function.prototype.selfCall = function(context, ...args) {
  const func = this
  if (typeof func !== 'function') {
    throw 'func must be a function'
  }
  const ctx = context || window
  const caller = Symbol('caller')
  ctx[caller] = func
  const result = ctx[caller](...args)
  delete ctx[caller]
}

// 实现instanceof
const selfInstanceOf = (left, right) => {
  if (left === null || typeof left !== 'object') return false
  let proto = Object.getPrototypeOf(left)
  while (true) {
    if (proto === null) return false
    if (proto === right.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
}
