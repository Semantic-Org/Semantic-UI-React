import gutil from 'gulp-util'
import _ from 'lodash'
import path from 'path'
import through from 'through2'
import Vinyl from 'vinyl'

// Heads up!
// This plugin is not universal, so it's okay to keep all existing sources as the state.
// https://github.com/Semantic-Org/Semantic-UI-React/issues/3095
const exampleSources = {}
const pluginName = 'gulp-example-source'

export default () => {
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
      const sourceName = _.split(file.path, path.sep).slice(-4).join('/').slice(0, -3)

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
      contents: Buffer.from(JSON.stringify(exampleSources, null, 2)),
    })

    this.push(file)
    cb()
  }

  return through.obj(bufferContents, endStream)
}
