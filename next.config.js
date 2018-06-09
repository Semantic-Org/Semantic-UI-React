const { paths } = require('./config')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // Perform customizations to webpack config

    config.resolve = {
      modules: [paths.base(), 'node_modules'],
      alias: {
        'semantic-ui-react': paths.src('index.js'),
      },
    }

    // Important: return the modified config
    return config
  },
}
