import gutil from 'gulp-util'
import _ from 'lodash'
import path from 'path'
import { defaultHandlers, parse } from 'react-docgen'
import through from 'through2'

import { parseDefaultValue, parseDocBlock, parserCustomHandler, parseType } from './util'

export default (filename) => {
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
      const parsed = parse(file.contents, null, [
        ...defaultHandlers,
        parserCustomHandler,
      ])

      // replace the component`description` string with a parsed doc block object
      parsed.docBlock = parseDocBlock(parsed.description)
      delete parsed.description

      // replace prop `description` strings with a parsed doc block object and updated `type`
      _.each(parsed.props, (propDef, propName) => {
        const { description, tags } = parseDocBlock(propDef.description)
        const { name, value } = parseType(propDef)

        parsed.props[propName] = {
          ...propDef,
          description,
          tags,
          value,
          defaultValue: parseDefaultValue(propDef),
          name: propName,
          type: name,
        }
      })
      parsed.props = _.sortBy(parsed.props, 'name')

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
