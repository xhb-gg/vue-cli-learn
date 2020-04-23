const express = require('express')
const path = require('path')
const app = express()

const distPath = './dist'

console.log(path.join(__dirname, distPath))

// 指定启动服务器到哪个文件夹
app.use(express.static('./dist'))

// 监听端口
app.listen(1002, function() {
  console.log('app listening at http://localhost:1002')
})
