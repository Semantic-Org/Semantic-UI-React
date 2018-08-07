import Vinyl from 'vinyl'
import gutil from 'gulp-util'
import _ from 'lodash'
import path from 'path'
import through from 'through2'

const pluginName = 'gulp-example-source'

export default () => {
  const exampleSources = {}

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
      const sourceName = _
        .split(file.path, path.sep)
        .slice(-4)
        .join('/')
        .slice(0, -3)

      exampleSources[sourceName] = file.contents.toString()
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
      path: './exampleSources.json',
    })
    let existingSources = {}

    if (file.contents) {
      existingSources = JSON.parse(file.contents.toString())
    }

    file.contents = Buffer.from(JSON.stringify({ ...existingSources, ...exampleSources }, null, 2))
    this.push(file)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
