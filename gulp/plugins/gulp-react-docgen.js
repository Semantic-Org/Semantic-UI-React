const gutil = require('gulp-util')
const _ = require('lodash')
const path = require('path')
const docgen = require('react-docgen')
const through = require('through2')

const { parseDocBlock, parseType } = require('./util')

module.exports = (filename) => {
  const defaultFilename = 'docgenInfo.json'
  const result = {}
  const pluginName = 'gulp-react-docgen'
  let finalFile
  let latestFile

  function bufferContents(file, enc, cb) {
    latestFile = file

    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pluginName, 'Streaming is not supported'))
      return
    }

    try {
      const relativePath = file.path.replace(`${process.cwd()}/`, '')
      const parsed = docgen.parse(file.contents)

      // replace the component`description` string with a parsed doc block object
      parsed.docBlock = parseDocBlock(parsed.description)
      delete parsed.description

      // replace prop `description` strings with a parsed doc block object and updated `type`
      _.each(parsed.props, (propDef, propName) => {
        parsed.props[propName].docBlock = parseDocBlock(propDef.description)
        parsed.props[propName].type = parseType(propDef)

        delete parsed.props[propName].description
      })

      result[relativePath] = parsed

      cb()
    } catch (err) {
      const pluginError = new gutil.PluginError(pluginName, err)
      pluginError.message += `\nFile: ${file.path}.`
      this.emit('error', pluginError)
    }
  }

  function endStream(cb) {
    finalFile = latestFile.clone({ contents: false })
    finalFile.path = path.join(latestFile.base, (filename || defaultFilename))
    finalFile.contents = new Buffer(JSON.stringify(result, null, 2))
    this.push(finalFile)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
