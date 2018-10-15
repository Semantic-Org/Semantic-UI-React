import gutil from 'gulp-util'
import through from 'through2'
import Vinyl from 'vinyl'

import { generateComponentIndex } from './util'

const pluginName = 'gulp-component-info'

export default () => {
  const files = {}

  return through.obj(
    (file, enc, cb) => {
      if (file.isNull()) {
        cb(null, file)
        return
      }

      if (file.isStream()) {
        cb(new gutil.PluginError(pluginName, 'Streaming is not supported'))
        return
      }

      files[file.basename] = JSON.parse(file.contents)
      cb(null, file)
    },
    (cb) => {
      const indexFile = new Vinyl({
        path: './index.js',
        contents: Buffer.from(generateComponentIndex(files)),
      })

      cb(null, indexFile)
    },
  )
}
