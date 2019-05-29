const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')

const config = require('./config')
const pkg = require('./package.json')

const { paths } = config

const webpackUMDConfig = {
  target: 'web',
  devtool: false,
  entry: {
    [pkg.name]: paths.src('umd.js'),
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  mode: 'production',
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'semanticUIReact',
    path: paths.dist('umd'),
    publicPath: '/',
    pathinfo: true,
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {
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
  performance: {
    maxEntrypointSize: 750000,
    maxAssetSize: 750000,
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
        },
      }),
    ],
  },
}

module.exports = webpackUMDConfig
