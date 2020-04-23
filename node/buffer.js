// const buf = Buffer.from('xuhaibin', 'utf8')

function Person(name) {
  this.name = name
}

Person.prototype.sayName = function() {
  console.log('name is ' + this.name)
}

const p = new Person('xu')

const o = Object.create(p)

console.log(Object.getPrototypeOf(o))
