import { task, watch, series } from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import config from '../../config'

const g = loadPlugins()
const { log } = g.util

task('watch', (cb) => {
  const handleChange = (e) => log(`File ${e.path} was ${e.type}, running tasks...`)

  // rebuild doc info
  watch(`${config.paths.src()}/**/*.js`, series('generate-docs-json'))
    .on('change', handleChange)

  // rebuild images
  watch(`${config.paths.src()}/**/*.{png,jpg,gif}`, series('docs-images'))
    .on('change', handleChange)
  cb()
})
