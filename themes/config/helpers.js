const fs = require('fs')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin') // webpack 4
const path = require('path')

// Make sure any symlinks in the project folder are resolved:
// https://github.com/facebook/create-react-app/issues/637
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

const getStyleLoaders = () => [
  // {
  //   loader: MiniCssExtractPlugin.loader, // webpack 4
  // },
  {
    loader: require.resolve('css-loader'),
    options: { importLoaders: 1 },
  },
  {
    // Options for PostCSS as we reference these options twice
    // Adds vendor prefixing based on your specified browser support in
    // package.json
    loader: require.resolve('postcss-loader'),
    options: {
      // Necessary for external CSS imports to work
      // https://github.com/facebook/create-react-app/issues/2677
      ident: 'postcss',
      plugins: () => [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
      ],
    },
  },
  {
    loader: require.resolve('less-loader'),
  },
]

const themesRelativePaths = {
  themesSrc: 'themes/src',
  themesDist: 'themes/dist',
}

const getThemes = () =>
  fs.readdirSync(resolveApp(`${themesRelativePaths.themesSrc}/themes`)).filter((item) => {
    const itemPath = resolveApp(`${themesRelativePaths.themesSrc}/themes/${item}`)
    if (fs.lstatSync(itemPath).isDirectory()) {
      if (fs.readdirSync(itemPath).includes('theme.less')) {
        return true
      }
    }
    return false
  })

module.exports = {
  themesRelativePaths,
  resolveApp,
  getStyleLoaders,
  getThemes,
}
