import gutil from 'gulp-util'
import _ from 'lodash'
import path from 'path'
import through from 'through2'

import config from '../../config'
import { parseDocExample, parseDocSection } from './util'

const examplesPath = `${config.paths.docsSrc()}/Examples/`

const normalizeResult = result => JSON.stringify(_.mapValues(
  result,
  sections => _.map(
    _.sortBy(sections, 'position'),
    ({ examples, name }) => ({ examples, name }),
  ),
), null, 2)

export default (filename) => {
  const defaultFilename = 'menuInfo.json'
  const result = {}
  const pluginName = 'gulp-menugen'
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
      const relativePath = file.path.replace(examplesPath, '')
      const [, component, section] = _.split(relativePath, '/')

      if (section === 'index.js') {
        result[component] = parseDocExample(file.contents)
        cb()
        return
      }

      result[component][section] = {
        ...result[component][section],
        ...parseDocSection(file.contents),
      }
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
    finalFile.contents = new Buffer(normalizeResult(result))
    this.push(finalFile)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
