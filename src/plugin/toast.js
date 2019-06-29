const Toast = {}
Toast.install = function(Vue, options) {
  Vue.prototype.$msg = 'Hello World'
}

export default Toast
