import gutil from 'gulp-util'
import _ from 'lodash'
import path from 'path'
import { defaultHandlers, parse } from 'react-docgen'
import through from 'through2'

import { parseDefaultValue, parseDocBlock, parserCustomHandler, parseType } from './util'

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
      const { name: componentName, dir } = path.parse(file.path)

      const componentDirname = path.basename(dir)
      // singular form of the component's ../../ directory
      const componentType = path.basename(path.dirname(dir)).replace(/s$/, '')

      const docs = parse(file.contents, null, [...defaultHandlers, parserCustomHandler])

      // add component type
      docs.type = componentType

      // add parent/child component info
      const isParent = componentName === componentDirname
      docs.isParent = isParent
      docs.isChild = !isParent
      docs.parent = isParent ? null : componentDirname
      docs.subcomponentName = docs.isParent ? null : componentName.replace(docs.parent, '')

      // replace the component.description string with a parsed doc block object
      docs.dockblock = parseDocBlock(docs.description)
      delete docs.description

      // add the filepath in the repo
      docs.path = file.path
        .replace(`${process.cwd()}${path.sep}`, '')
        .replace(new RegExp(_.escapeRegExp(path.sep), 'g'), '/')

      // replace prop `description` strings with a parsed doc block object and updated `type`
      _.each(docs.props, (propDef, propName) => {
        const { description, tags } = parseDocBlock(propDef.description)
        const { name, value } = parseType(propName, propDef)

        docs.props[propName] = {
          ...propDef,
          description,
          tags,
          value,
          defaultValue: parseDefaultValue(propDef),
          name: propName,
          type: name,
        }
      })

      // sort props
      docs.props = _.sortBy(docs.props, 'name')

      // remove keys we don't use
      delete docs.methods

      const docsFile = file.clone({ content: false })
      docsFile.path = file.path.replace(/js$/, 'docs.json')
      docsFile.contents = new Buffer(JSON.stringify(docs, null, 2))

      cb(null, docsFile)
    } catch (err) {
      gutil.log(gutil.colors.gray(err))
      const pluginError = new gutil.PluginError(pluginName, err)
      pluginError.message += `\nFile: ${file.path}.`
      this.emit('error', pluginError)
    }
  })
