const util = require('util')
const http = require('http')
const fs = require('fs')
const zlib = require('zlib')
const path = require('path')
const readAsync = util.promisify(fs.readFile)

// const promise = readAsync(path.join(__dirname, 'test.txt'))

// promise.then(resp => {
//   console.log('resp', resp.toString())
// })

// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, {
//       'content-encoding': 'gzip'
//     })
//     fs.createReadStream(`${__dirname}/index.html`)
//       .pipe(zlib.createGzip())
//       .pipe(resp)
//   })
//   .listen(3000)

let readStream = fs.createReadStream(`${__dirname}/test.txt`)
let content = ''

readStream.setEncoding('utf8')

readStream.on('data', chunk => {
  console.log(777, chunk)
  content += chunk
})

readStream.on('end', chunk => {
  console.log('文件内容是:' + content)
})
