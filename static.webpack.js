import webpack from 'webpack'
import config from './config'

export default (webpackConfig, { defaultLoaders, stage }) => ({
  ...webpackConfig,
  devtool: config.compiler_devtool,
  externals:
    stage === 'node'
      ? webpackConfig.externals
      : {
        'anchor-js': 'AnchorJS',
        '@babel/standalone': 'Babel',
        faker: 'faker',
        'prop-types': 'PropTypes',
        react: 'React',
        'react-dom': 'ReactDOM',
        'react-dom/server': 'ReactDOMServer',
      },
  entry:
    stage === 'prod'
      ? {
        main: config.paths.docsSrc('index.js'),
        vendor: config.paths.src('index.js'),
      }
      : webpackConfig.entry,
  module: {
    ...webpackConfig.module,
    noParse: [/\.json$/, /anchor-js/, /@babel\/standalone/, /faker/],
    rules: [
      {
        ...defaultLoaders.jsLoader,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
          },
        },
      },
    ],
  },
  plugins: [
    stage === 'node' && new webpack.DefinePlugin({
      window: undefined,
    }),
    // Heads up!
    // An order there is important because react-static already uses CommonChunkPlugin, it will save your life!
    // https://github.com/webpack/webpack/issues/4638
    stage === 'prod' &&
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module => /node_modules/.test(module.resource),
    }),
    ...webpackConfig.plugins,
  ].filter(Boolean),
  resolve: {
    alias: {
      'semantic-ui-react': config.paths.src('index.js'),
    },
    // Heads up!
    // We need this to prefer own node_modules.
    modules: [config.paths.base(), config.paths.base('node_modules'), ...webpackConfig.resolve.modules],
  },
  resolveLoader: {
    // Heads up!
    // We need this to resolve our own babel-loader for Babel 7.
    modules: [config.paths.base('node_modules'), 'node_modules'],
  },
})
