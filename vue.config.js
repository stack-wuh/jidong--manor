var path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  devServer: {
    open: false,
    host: '0.0.0.0',
    port: 19020
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@@', resolve('src'))
      .set('@a', resolve('src/assets'))
      .set('@s', resolve('static'))
      .set('@c', resolve('src/components'))
      .set('@v', resolve('src/views'))
      .set('@u', resolve('src/utils'))
      .set('~~', resolve('src/assets/images'))
      .set('style', resolve('src/assets/styles'))
  }
}