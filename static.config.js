import config from './config'
import getRoutes from './static.routes'
import Document from './docs/src/Document'

export default {
  Document,
  getSiteData: async () => ({
    title: 'Semantic UI React',
    versions: {
      sui: require('semantic-ui-css/package.json').version,
      suir: require('./package.json').version,
    },
  }),
  getRoutes,
  paths: {
    src: 'docs/src',
  },
  webpack: webpackConfig => ({
    ...webpackConfig,
    resolve: {
      modules: [...webpackConfig.resolve.modules, config.paths.base(), 'node_modules'],
      alias: {
        'semantic-ui-react': config.paths.src('index.js'),
      },
    },
  }),
}
