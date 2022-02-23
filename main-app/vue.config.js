const package = require('./package.json')
const port = 8003

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