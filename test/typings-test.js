const fs = require('fs')
const _ = require('lodash')
const path = require('path')

const config = require('../config')
const hasValidTypings = require('./specs/commonTests/hasValidTypings')

const files = fs.readdirSync(config.paths.docsSrc('componentInfo'))

_.forEach(files, (filename) => {
  describe(path.basename(filename, '.info.json'), () => {
    hasValidTypings(filename)
  })
})
