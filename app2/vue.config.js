const package = require('./package.json')
const port = 8002

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