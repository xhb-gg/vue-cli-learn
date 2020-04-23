export default class CustomizeEvent {
  constructor() {
    this._events = {}
    /**
     * 含义
     * new.target
     * 一般用在构造函数之中，返回new命令作用于的那个构造函数。如果构造函数不是通过new命令调用的，new.target会返回undefined，因此这个属性可以用来确定构造函数是怎么调用的
     */
    // console.log('new.target', new.target)
  }

  $on(eventName, callback) {
    if (!this._events[eventName]) {
      this._events[eventName] = []
    }
    this._events[eventName].push(callback)
  }

  $off(eventName, callback) {
    const targetEvent = this._events[eventName]
    if (!targetEvent) {
      throw `${eventName} event not existed`
    }
    if (callback && typeof callback === 'function') {
      targetEvent.forEach((cb, index) => {
        if (cb === callback) {
          targetEvent.splice(index, 1)
        }
      })
    } else {
      this._events[eventName] = []
    }
  }

  $once(eventName, callback) {
    const that = this
    const on = function() {
      that.$off(eventName)
      callback.apply(this, arguments)
    }
    that.$on(eventName, on)
  }

  $emit(eventName) {
    const targetEvent = this._events[eventName]
    if (!targetEvent) return
    const args = Array.from(
      Array.prototype.splice.call(arguments, 1, arguments.length - 1)
    )
    const cbs = Array.isArray(targetEvent) ? targetEvent : [targetEvent]
    cbs.forEach(callback => {
      callback.apply(null, args)
    })
  }

  // 返回某个事件的监听器数量
  listenerCount(eventName) {
    const target = this._events[eventName]
    return target && Array.isArray(target) ? target.length : 0
  }
}
