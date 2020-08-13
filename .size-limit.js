module.exports = require('glob')
  .sync('bundle-size/dist/*.size.js', {
    cwd: __dirname,
  })
  .map((file) => ({ path: file, gzip: false }))
