import _ from 'lodash'
import path from 'path'
import { defaultHandlers, parse } from 'react-docgen'
import fs from 'fs'

import { parseDefaultValue, parseDocBlock, parserCustomHandler, parseType } from './'

const getComponentInfo = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)

  const contents = fs.readFileSync(absPath).toString()
  const dir = path.dirname(absPath)
  const dirname = path.basename(dir)
  const filename = path.basename(absPath)
  const filenameWithoutExt = path.basename(absPath, path.extname(absPath))

  // singular form of the component's ../../ directory
  // "element" for "src/elements/Button/Button.js"
  const componentType = path.basename(path.dirname(dir)).replace(/s$/, '')

  // start with react-docgen info
  const info = parse(contents, null, [...defaultHandlers, parserCustomHandler])

  // remove keys we don't use
  delete info.methods

  // add exported Component info
  const Component = require(absPath).default
  info.constructorName = _.get(Component, 'prototype.constructor.name', null)

  // add component type
  info.type = componentType

  // add parent/child info
  const isParent = filenameWithoutExt === dirname
  info.isParent = isParent
  info.isChild = !isParent
  info.parent = isParent ? null : dirname
  // "Field" for "FormField" since it is accessed as "Form.Field" in the API
  info.subcomponentName = info.isParent ? null : info.displayName.replace(info.parent, '')

  // where this component should be exported in the api
  info.apiPath = info.isChild ? `${info.parent}.${info.subcomponentName}` : null

  // class name for the component
  // example, the "button" in class="ui button"
  // name of the component, sub component, or plural parent for sub component groups
  info.componentClassName = (info.isChild
    ? info.subcomponentName.replace(/Group$/, `${info.parent}s`)
    : info.displayName
  ).toLowerCase()

  // replace the component.description string with a parsed docblock object
  info.dockblock = parseDocBlock(info.description)
  delete info.description

  // file and path info
  info.absPath = absPath
  info.repoPath = absPath
    .replace(`${process.cwd()}${path.sep}`, '')
    .replace(new RegExp(_.escapeRegExp(path.sep), 'g'), '/')
  info.filename = filename
  info.filenameWithoutExt = filenameWithoutExt

  // replace prop `description` strings with a parsed docblock object and updated `type`
  _.each(info.props, (propDef, propName) => {
    const { description, tags } = parseDocBlock(propDef.description)
    const { name, value } = parseType(propName, propDef)

    info.props[propName] = {
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
  info.props = _.sortBy(info.props, 'name')

  return info
}

export default getComponentInfo
