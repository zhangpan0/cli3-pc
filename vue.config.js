'use strict'
const path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

const address = require('address')

const externals = {
  vue: 'Vue',
  'vue-router': 'VueRouter',
  vuex: 'Vuex',
  vant: 'vant',
  axios: 'axios'
}

module.exports = {
  publicPath: process.env.NODE_ENV === 'development' ? './' : '/', // 需要区分生产环境和开发环境，不然build会报错
  outputDir: 'dist',
  assetsDir: 'static',
  // lintOnSave: process.env.NODE_ENV === 'development',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    host: address.ip(),
    port: 8887,
    open: false,
    overlay: {
      warnings: false,
      errors: true
    }
  },

  configureWebpack: {
    // 警告 webpack 的性能提示
    performance: {
      hints: 'warning', // 枚举
      // 入口起点的最大体积,整数类型（以字节为单位）
      maxEntrypointSize: 50000000,
      // 生成文件的最大体积,整数类型（以字节为单位）
      maxAssetSize: 30000000,
      // 只给出 js 文件的性能提示, 提供资源文件名的断言函数
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith('.js') || assetFilename.endsWith('.css')
      }
    }
  },
  chainWebpack (config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test
    // alias
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('views', resolve('src/views'))
      .set('components', resolve('src/components'))
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {

      }
      if (process.env.NODE_ENV === 'development') {

      }
      return args
    })

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config.when(process.env.NODE_ENV === 'development', config => config.devtool('cheap-source-map'))
    config.when(process.env.NODE_ENV !== 'development', config => {
      config.plugin('ScriptExtHtmlWebpackPlugin')
        .after('html')
        .use('script-ext-html-webpack-plugin', [
          {
            // `runtime` must same as runtimeChunk name. default is `runtime`
            inline: /runtime\..*\.js$/
          }
        ])
        .end()
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          libs: {
            name: 'chunk-libs',
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
            chunks: 'initial' // only package third parties that are initially dependent
          },
          // elementUI: {
          //   name: 'chunk-elementUI', // split elementUI into a single package
          //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
          //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
          // },
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'), // can customize your rules
            minChunks: 3, //  minimum common number
            priority: 5,
            reuseExistingChunk: true
          }
        }
      })
      config.optimization.runtimeChunk('single')
    })
  }
}
