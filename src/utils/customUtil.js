const customUtils = {
  // 函数防抖
  debounce(idle, action) {
    var last
    return function() {
      var ctx = this,
        args = arguments
      clearTimeout(last)
      last = setTimeout(function() {
        action.apply(ctx, args)
      }, idle)
    }
  },
  // 函数节流
  throttle: function(action, delay) {
    var last = 0
    return function() {
      var now = +new Date()
      if (now - last > delay) {
        action.apply(this, arguments)
        last = now
      }
    }
  }
}

export default customUtils
