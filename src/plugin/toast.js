const Toast = {}
Toast.install = function(Vue, options) {
    Vue.prototype.$msg = 'Hello World'
    Vue.mixin({
        created() {
            console.log('this is plugin created')
        }
    })
}

export default Toast