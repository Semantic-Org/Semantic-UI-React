import Vinyl from 'vinyl'
import gutil from 'gulp-util'
import through from 'through2'

import { getComponentInfo } from './util'

const pluginName = 'gulp-react-docgen'

export default () =>
  through.obj(function bufferContents(file, enc, cb) {
    if (file.isNull()) {
      cb(null, file)
      return
    }

    if (file.isStream()) {
      cb(new gutil.PluginError(pluginName, 'Streaming is not supported'))
      return
    }

    try {
      const contents = getComponentInfo(file.path)

      const infoFile = new Vinyl({
        path: `./${file.basename.replace(/js$/, 'info.json')}`,
        contents: Buffer.from(JSON.stringify(contents, null, 2)),
      })

      cb(null, infoFile)
    } catch (err) {
      const pluginError = new gutil.PluginError(pluginName, err)
      pluginError.message += `\nFile: ${file.path}.`
      this.emit('error', pluginError)
      // eslint-disable-next-line no-console
      console.log(err)
    }
  })
