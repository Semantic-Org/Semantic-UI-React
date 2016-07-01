const config = require('./production')

// Enable source-maps in staging
config.compiler_devtool = 'source-map'

module.exports = config
