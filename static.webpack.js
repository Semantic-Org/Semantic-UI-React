import path from 'path'
import webpack from 'webpack'

import config from './config'

export default (webpackConfig, { stage }) => ({
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
        lib: config.paths.src('index.js'),
        main: config.paths.docsSrc('index.js'),
      }
      : webpackConfig.entry,
  module: {
    ...webpackConfig.module,
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
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
    new webpack.DefinePlugin({
      __PATH_SEP__: JSON.stringify(path.sep),
    }),
    // Heads up!
    // An order there is important because react-static already uses CommonChunkPlugin.
    // https://github.com/webpack/webpack/issues/4638
    stage === 'prod' &&
      new webpack.optimize.CommonsChunkPlugin({
        name: 'lib',
        minChunks: Infinity,
      }),
    ...webpackConfig.plugins,
  ].filter(Boolean),
  resolve: {
    alias: {
      'semantic-ui-react': config.paths.src('index.js'),
    },
    // Heads up!
    // We need this to prefer own node_modules instead of react-static's.
    modules: [
      config.paths.base(),
      config.paths.base('node_modules'),
      ...webpackConfig.resolve.modules,
    ],
  },
  resolveLoader: {
    // Heads up!
    // We need this to resolve our own babel-loader for Babel 7. Can be safely removed when
    // react-static will use Babel 7.
    modules: [config.paths.base('node_modules'), 'node_modules'],
  },
})
