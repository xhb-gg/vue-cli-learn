export default class AddDom {
  constructor(dom, parent) {
    this.parent = document.querySelector(`#${parent}`)
    this.dom = document.createElement(dom)
    this.dom.innerHTML = '测试'
  }

  init() {
    this.parent.appendChild(this.dom)
  }

  destroy() {
    this.parent.removeChild(this.dom)
  }
}
