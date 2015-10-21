import friendlyFormatter from 'eslint-friendly-formatter';
import paths from './paths';
import webpack from 'webpack';

/**
 * This config builds the distribution version of stardust.
 * @type {{}}
 */
export default {
  entry: {
    stardust: `${paths.src}/index.js`,
    dependencies: [
      'bluebird',
      'classnames',
      'faker',
      'jquery',
      'lodash',
      'radium',
      'react',
      'react-router',
      'react-highlight',
    ]
  },
  output: {
    path: paths.dist,
    filename: '[name].js',
    library: 'stardust',
    libraryTarget: 'umd',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel', 'eslint'],
        exclude: paths.node_modules
      },
      {
        test: /\.json$/,
        loaders: ['json'],
        exclude: paths.node_modules
      }
    ]
  },
  eslint: {
    formatter: friendlyFormatter,
  },
  devTool: 'source-map',
  resolve: {
    root: paths.root,
    modulesDirectories: [
      'node_modules',
      '.',
    ],
    alias: {
      stardust: `${paths.src}/index.js`,
    },
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin('dependencies', 'dependencies.js')
  ]
};
