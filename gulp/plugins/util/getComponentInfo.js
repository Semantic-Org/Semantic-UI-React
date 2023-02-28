import _ from 'lodash'
import path from 'path'
import { defaultHandlers, parse, resolver } from 'react-docgen'
import fs from 'fs'

import config from '../../../config'
import parseDefaultValue from './parseDefaultValue'
import parseDocblock from './parseDocblock'
import parserCustomHandler from './parserCustomHandler'
import parseType from './parseType'

const getComponentInfo = (filepath) => {
  const absPath = path.resolve(process.cwd(), filepath)

  const contents = fs.readFileSync(absPath).toString()
  const dir = path.dirname(absPath)
  const dirname = path.basename(dir)
  const filename = path.basename(absPath)
  const filenameWithoutExt = path.basename(absPath, path.extname(absPath))

  const componentName = path.parse(filename).name
  // singular form of the component's ../../ directory
  // "element" for "src/elements/Button/Button.js"
  const componentType = path.basename(path.dirname(dir)).replace(/s$/, '')

  // start with react-docgen info
  const components = parse(contents, resolver.findAllComponentDefinitions, [
    ...defaultHandlers,
    parserCustomHandler,
  ])

  if (!components.length) {
    throw new Error(`Could not find a component definition in "${filepath}".`)
  }

  const info = components.find((component) => component.displayName === componentName)

  if (!info) {
    throw new Error(
      [
        `Failed to find a component definition for "${componentName}" in "${filepath}".`,
        'Please ensure your module defines matching React component.',
      ].join(' '),
    )
  }

  // remove keys we don't use
  delete info.methods

  if (!info.displayName) {
    throw new Error(
      `Please check that static property "displayName" is defined on a component in "${filepath}".`,
    )
  }

  // add component type
  info.type = componentType

  // add parent/child info
  info.isParent = filenameWithoutExt === dirname
  info.isChild = !info.isParent
  info.parentDisplayName = info.isParent ? null : dirname
  // "Field" for "FormField" since it is accessed as "Form.Field" in the API
  info.subcomponentName = info.isParent
    ? null
    : info.displayName.replace(info.parentDisplayName, '')

  // "ListItem.js" is a subcomponent is the "List" directory
  const subcomponentRegExp = new RegExp(`^${dirname}\\w+\\.js$`)

  info.subcomponents = info.isParent
    ? fs
        .readdirSync(dir)
        .filter((file) => subcomponentRegExp.test(file))
        .map((file) => path.basename(file, path.extname(file)))
    : null

  // where this component should be exported in the api
  info.apiPath = info.isChild
    ? `${info.parentDisplayName}.${info.subcomponentName}`
    : info.displayName

  // class name for the component
  // example, the "button" in class="ui button"
  // name of the component, sub component, or plural parent for sub component groups
  info.componentClassName = (info.isChild
    ? info.subcomponentName.replace(/Group$/, `${info.parentDisplayName}s`)
    : info.displayName
  ).toLowerCase()

  // replace the component.description string with a parsed docblock object
  info.docblock = parseDocblock(info.description)
  delete info.description

  // check that examples are present
  info.examplesExist = false

  if (info.isParent) {
    info.examplesExist = fs.existsSync(
      config.paths.docsSrc(`examples/${componentType}s/${dirname}/index.js`),
    )
  }

  // file and path info
  info.repoPath = absPath
    .replace(`${process.cwd()}${path.sep}`, '')
    .replace(new RegExp(_.escapeRegExp(path.sep), 'g'), '/')
  info.filename = filename
  info.filenameWithoutExt = filenameWithoutExt

  // replace prop `description` strings with a parsed docblock object and updated `type`
  _.each(info.props, (propDef, propName) => {
    const { description, tags } = parseDocblock(propDef.description)
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
