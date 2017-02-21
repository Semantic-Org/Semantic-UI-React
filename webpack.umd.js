const config = require('./config')
const getWebpackConfig = require('./get-webpack-config')

const { paths } = config

module.exports = getWebpackConfig({
  buildTarget: 'library',
  outputPath: paths.dist('umd'),
})
