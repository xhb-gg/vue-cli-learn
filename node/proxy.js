// function createArray(...ele) {
//   let handler = {
//     get(target, propKey, receiver) {
//       console.log('target', target, propKey)
//       let index = Number(propKey)
//       if (index < 0) {
//         propKey = String(target.length + index)
//       }
//       return Reflect.get(target, propKey, receiver)
//     }
//   }
//   let target = []
//   target.push(...ele)
//   return new Proxy(target, handler)
// }

// let arr = createArray('a', 'b', 'c')
// arr[0] = 1

// proxy 对象

// const handler = {
//   set(target, key, value, receiver) {
//     console.log('setting', key, value)
//     return Reflect.set(target, key, value, receiver)
//   }
// }

// let obj = new Proxy({}, handler)

// obj.name = 'xuhaibin'

// obj = { age: 25 }

// const arr = []

// const o = new Proxy(
//   {},
//   {
//     get(target, key, receiver) {
//       return function(args) {
//         console.log(7777, args)
//         arr.push(key)
//         return arr
//       }
//     }
//   }
// )

// o.name(o.age())

// proxy apply

// let target = function() {
//   return 'I am the target'
// }
// let handler = {
//   apply(target, ctx, args) {
//     console.log('target', target)
//     console.log('ctx', ctx)
//     console.log('args', args)
//     return Reflect.apply(...arguments)
//   }
// }
// let p = new Proxy(target, handler)

// console.log(p())

// var twice = {
//   apply(target, ctx, args) {
//     return Reflect.apply(...arguments) * 2
//   }
// }
// function sum(left, right) {
//   return left + right
// }
// var proxy = new Proxy(sum, twice)
// proxy(1, 2) // 6
// proxy.call(null, 5, 6) // 22
// proxy.apply(null, [7, 8]) // 30

// proxy construct

// let person = function(name, birthday) {}

// const p = new Proxy(person, {
//   construct(target, args, newTarget) {
//     console.log('target', target)
//     console.log('args', args)
//     console.log('newTarget', newTarget)
//     return { name: args[0], age: 2019 - args[1] }
//   }
// })

// console.log(88, new p('xu', 1994))

// proxy isExtensible
// var p = new Proxy(
//   { name: 'xu' },
//   {
//     isExtensible: function(target) {
//       console.log('target', target)
//       return Object.isExtensible(target)
//     }
//   }
// )

// console.log(Object.isExtensible(p))

// proxy ownKeys
// const proxy = new Proxy(
//   {},
//   {
//     ownKeys: function() {
//       return ['a', 'b']
//     }
//   }
// )
// // console.log(Object.getOwnPropertyNames(proxy))
// for (let key in proxy) {
//   console.log(key) // 没有任何输出
// }

// proxy this问题
const target = new Date('2015-01-01')
const handler = {
  get(target, prop) {
    if (prop === 'getDate') {
      console.log(788, Object.prototype.toString.call(target).slice(8, -1))
      return target.getDate.bind(target)
    }
    return Reflect.get(target, prop)
  }
}
const proxy = new Proxy(target, handler)

console.log(proxy.getDate()) // 1
