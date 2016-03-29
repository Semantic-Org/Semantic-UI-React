import _ from 'lodash'
import path from 'path'

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).*\.js$/
)

const componentInfo = _.map(componentCtx.keys(), key => {
  const Component = componentCtx(key).default
  const { _meta, prototype } = Component

  const constructorName = prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const subComponentName = _meta.parent ? _meta.name.replace(_meta.parent, '') : null
  // HeaderH1 => sd-header-h1
  const sdClass = 'sd-' + constructorName
    .replace('_', '')                 // remove underscore
    .replace(/(?!^)([A-Z])/g, '-$1')  // prefix capitals with hyphen
    .toLowerCase()                    // lowercase

  return {
    _meta,
    constructorName,
    sdClass,
    subComponentName,
    Component,
    filePath,
    filename,
    filenameWithoutExt,
  }
})

export default componentInfo
