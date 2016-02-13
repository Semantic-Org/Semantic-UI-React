/* eslint-disable */
import path from 'path'

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).*\.js$/
)

const componentInfo = _.map(componentCtx.keys(), key => {
  const Component = componentCtx(key)
  const constructorName = Component.prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const _meta = Component._meta

  const info = {
    _meta,
    constructorName,
    Component,
    filePath,
    filename,
    filenameWithoutExt,
  }

  console.log(info)

  return info
})

export default componentInfo
