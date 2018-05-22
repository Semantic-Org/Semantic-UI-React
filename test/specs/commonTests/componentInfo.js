import path from 'path'

import helpers from './commonHelpers'

const componentCtx = require.context(
  '../../../src/',
  true,
  /(addons|behaviors|collections|elements|modules|views).\w+.(?!index)\w+\.js/,
)

const docsCtx = require.context('../../../src/', true, /\.docs\.json$/)

const componentInfo = componentCtx.keys().map((key) => {
  const Component = componentCtx(key).default
  const docPath = key.replace(/js$/, 'docs.json')
  const doc = docsCtx(docPath)

  const { throwError } = helpers('componentInfo', Component)
  const componentType = typeof Component

  if (componentType !== 'function') {
    throwError(
      [
        `${key} is not properly exported.`,
        `Components should export a class or function, got: ${componentType}.`,
      ].join(' '),
    )
  }

  const constructorName = Component.prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const name = doc.displayName
  const parent = doc.parent
  const subcomponentName = doc.subcomponentName

  // name of the component, sub component, or plural parent for sub component groups
  // example, the "button" in class="ui button"
  const componentClassName = (doc.isChild
    ? subcomponentName.replace(/Group$/, `${doc.parent}s`)
    : name
  ).toLowerCase()

  return {
    Component,
    constructorName,
    componentClassName,
    name,
    parent,
    subcomponentName,
    filePath,
    filename,
    filenameWithoutExt,
  }
})

export default componentInfo
