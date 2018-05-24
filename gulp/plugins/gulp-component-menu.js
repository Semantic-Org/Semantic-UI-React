import gutil from 'gulp-util'
import path from 'path'
import through from 'through2'

import getComponentInfo from './util/getComponentInfo'

export default (filename) => {
  const defaultFilename = 'componentMenu.json'
  const result = []
  const pluginName = 'gulp-component-menu'
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
      const info = getComponentInfo(file.path)

      if (info.isParent) {
        result.push({
          displayName: info.displayName,
          type: info.type,
        })
      }
      cb()
    } catch (err) {
      const pluginError = new gutil.PluginError(pluginName, err)
      pluginError.message += `\nFile: ${file.path}.`
      this.emit('error', pluginError)
      // eslint-disable-next-line no-console
      console.log(err)
    }
  }

  function endStream(cb) {
    finalFile = latestFile.clone({ contents: false })
    finalFile.path = path.join(latestFile.base, filename || defaultFilename)
    finalFile.contents = new Buffer(JSON.stringify(result, null, 2))
    this.push(finalFile)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
