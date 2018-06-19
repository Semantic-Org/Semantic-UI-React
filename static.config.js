import config from './config'
import Document from './docs/src/Document'

const { paths } = config

export default {
  Document,
  getSiteData: async () => ({
    title: 'Semantic UI React',
    versions: {
      sui: require('semantic-ui-css/package.json').version,
      suir: require('./package.json').version,
    },
  }),
  getRoutes: async () => [
    {
      path: '/',
      redirect: '/introduction',
    },
    {
      path: '/introduction',
      component: 'docs/src/views/Introduction',
    },
    {
      path: '/layouts',
      component: 'docs/src/views/Layouts',
    },
    {
      path: '/theming',
      component: 'docs/src/views/Theming',
    },
    {
      path: '/usage',
      component: 'docs/src/views/Usage',
    },
    /* <LayoutsLayout exact path='/layouts/:name' component={LayoutsRoot} sidebar /> */
  ],
  paths: {
    src: 'docs/src',
  },
  webpack: webpackConfig => ({
    ...webpackConfig,
    resolve: {
      modules: [...webpackConfig.resolve.modules, paths.base(), 'node_modules'],
      alias: {
        'semantic-ui-react': paths.src('index.js'),
      },
    },
  }),
}
