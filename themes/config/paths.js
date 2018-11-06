const { resolveApp, themesRelativePaths } = require('./helpers')

// config after eject
module.exports = {
  themesSrc: resolveApp(themesRelativePaths.themesSrc),
  themesIndex: resolveApp(`${themesRelativePaths.themesSrc}/semantic.less`),
  themesDist: resolveApp(themesRelativePaths.themesDist),
}
