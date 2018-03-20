import { dest, src, task } from 'gulp'
import rename from 'gulp-rename'
import through from 'through2'

import config from '../../config'
import { createJsIcons, parseCssIcons } from '../plugins/util'

const { paths } = config
const cssPath = paths.base('node_modules', 'semantic-ui-css', 'components', 'icon.css')

task('build:icons', () => src(cssPath)
  .pipe(through.obj((file, enc, cb) => {
    const icons = parseCssIcons(file.contents)
    const code = createJsIcons(icons)

    file.contents = new Buffer(code) // eslint-disable-line no-param-reassign
    cb(null, file)
  }))
  .pipe(rename('icons.js'))
  .pipe(dest(paths.docsDist())))
