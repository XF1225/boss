module.exports = {
  publicPath: './',
  outputDir: 'dist',
  lintOnSave: true,
  assetsDir: 'static',
  pages: undefined,
  devServer: { // 环境配置
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    open: true, // 配置自动启动浏览器
    proxy: { // 配置多个代理(配置一个 proxy: 'http://localhost:4000' )
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {
          '^/api': '/data'
        },
        ws: true,
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    externals: {
      BMap: 'BMap'
    }
  }
}
