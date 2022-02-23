const package = require('./package.json')
const port = 8001

module.exports = {
  publicPath: `//localhost:${port}`,
  devServer: {
    port
  },
  configureWebpack: {
    output: {
      library: package.name,
      libraryTarget: 'umd'
    }
  }
}