const http = require('http')
const fs = require('fs')

// const customReadFile = () => {
//   return new Promise((resolve, reject) => {
//     fs.readFile('./public/index.html', function(err, data) {
//       if (err) {
//         reject(err)
//       }
//       resolve(data)
//     })
//   })
// }

// http
//   .createServer(async (req, resp) => {
//     const data = await customReadFile()
//     resp.writeHead(200, { 'Content-Type': 'text/html' })
//     resp.write(data)
//     return resp.end()
//   })
//   .listen(5000)

/**
 * fs.appendFile 将内容加到后面，如果文件不存在则创建
 */
// fs.appendFile('test.txt', 'hello node', function(err) {
//   if (err) throw err
//   console.log('file create successfully')
// })

fs.readFile('test.txt', function(err, data) {
  if (err) throw err
  console.log(Object.prototype.toString.call(data))
  console.log(999, data)
  var dataString = ''
  for (var i = 0; i < data.length; i++) {
    console.log('item', data[i])
    dataString += String.fromCharCode(data[i])
  }
  console.log(444, dataString)
})
