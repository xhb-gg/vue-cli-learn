// const Toast = {}
// Toast.install = function(Vue, options) {
//   // Vue.prototype.$msg = 'Hello World'
//   // 创建构造器
// let Profile = Vue.component('Xtoast', {
//   template: '<p>{{firstName}} {{lastName}} aka {{alias}}</p>',
//   data: function () {
//     return {
//       firstName: 'Walter',
//       lastName: 'White',
//       alias: 'Heisenberg'
//     }
//   }
// })
// // 创建 Profile 实例，并挂载到一个元素上。
// // const instance = new Profile()
// // document.body.appendChild(instance.$mount().$el)
// }

// export default Toast

import Vue from "vue"; // 引入 Vue 是因为要用到 Vue.extend() 这个方法
import dialogCustom from "./dialogCustom.vue"; // 引入刚才的 dialog 组件

let DialogConstructor = Vue.extend(dialogCustom);
let instance;

const dialog = function(options = {}) {
//   console.log('dialogoptions', options)
  options.dialogVisible = true
  instance = new DialogConstructor({
    data: options
  }).$mount(); // 渲染组件
  document.body.appendChild(instance.$el); // 挂载到 body 下
  return instance
};

export default dialog;

