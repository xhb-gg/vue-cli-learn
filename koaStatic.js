const Koa = require('koa')
const static = require('koa-static')
const path = require('path')

const app = new Koa()

const distPath = './dist'

app.use(static(path.join(__dirname, distPath)))

app.listen(1002, () => {
  console.log('app listening at http://localhost:1002')
})
