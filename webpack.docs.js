const config = require('./config')
const { paths } = config

const getWebpackConfig = require('./get-webpack-config')

module.exports = getWebpackConfig({
  buildTarget: 'app',
  outputPath: paths.docsDist(),
})
