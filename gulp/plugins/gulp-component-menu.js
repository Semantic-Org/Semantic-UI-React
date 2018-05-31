import Vinyl from 'vinyl'
import gutil from 'gulp-util'
import through from 'through2'

import getComponentInfo from './util/getComponentInfo'

const pluginName = 'gulp-component-menu'

export default () => {
  const result = []

  function bufferContents(file, enc, cb) {
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
    const file = new Vinyl({
      path: './componentMenu.json',
      contents: Buffer.from(JSON.stringify(result, null, 2)),
    })

    this.push(file)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
