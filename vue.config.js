const path = require('path')
const webpack = require('webpack')
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
// const vConsolePlugin = require('vconsole-webpack-plugin') // 引入 移动端模拟开发者工具 插件 （另：https://github.com/liriliri/eruda）
// const CompressionPlugin = require('compression-webpack-plugin') //Gzip
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// .BundleAnalyzerPlugin //Webpack包文件分析器
const baseUrl = process.env.NODE_ENV === 'production' ? '/static/' : '/' //font scss资源路径 不同环境切换控制

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  //基本路径
  //baseUrl: './',//vue-cli3.3以下版本使用
  publicPath: '/', //vue-cli3.3+新版本使用
  //输出文件目录
  outputDir: 'dist',
  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  //是否使用包含运行时编译器的 Vue 构建版本
  runtimeCompiler: true,
  // 更换浏览器导航图标
  pwa: {
    iconPaths: {
      favicon32: 'favicon.ico',
      favicon16: 'favicon.ico',
      appleTouchIcon: 'favicon.ico',
      maskIcon: 'favicon.ico',
      msTileImage: 'favicon.ico'
    }
  },
  // webpack配置
  //对内部的 webpack 配置进行更细粒度的修改 https://github.com/neutrinojs/webpack-chain see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('static', resolve('static'))
    // 这里是对环境的配置，不同环境对应不同的BASE_API，以便axios的请求地址不同
    config.plugin('define').tap(args => {
      const argv = process.argv
      const baseApi =
        args[0]['process.env'].NODE_ENV !== '"development"'
          ? "'/vueLearnApi'"
          : "'/api'"
      const mode = argv[argv.indexOf('--project-mode') + 1]
      args[0]['process.env'].MODE = `"${mode}"`
      args[0]['process.env'].BASE_API = baseApi
      return args
    })
  },
  configureWebpack: {
    plugins: [
      new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require('./public/vendor/vendor-manifest.json')
      }),
      new AddAssetHtmlPlugin({
        // dll文件位置
        filepath: path.resolve(__dirname, './public/vendor/*.js'),
        // dll 引用路径
        publicPath: './vendor',
        // dll最终输出的目录
        outputPath: './vendor'
      })
    ]
  },
  devServer: {
    port: 3000
    // proxy: {
    //   // proxy all requests starting with /api to jsonplaceholder
    //   '/api': {
    //     target: 'http://10.221.230.190:8000', //http://10.221.230.190:6666
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/api': ''
    //     }
    //   }
    // }
  }
}
