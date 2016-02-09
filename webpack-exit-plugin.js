/**
 * Simple plugin to cause Webpack to exit with code 1 when there are compilation errors.
 * Without this, when lint/tests fail, Webpack will exit code 0 (success) and CI is hosed.
 */
function failOnError() {
  this.plugin('done', (stats) => {
    if (stats.compilation.errors && stats.compilation.errors.length) {
      stats.compilation.errors.forEach((err) => {
        /* eslint-disable no-console */
        console.log(err.toString())
        /* eslint-enable no-console */
      })
      process.exit(1)
    }
  })
}

module.exports = failOnError
