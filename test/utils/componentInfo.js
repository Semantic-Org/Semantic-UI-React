/* eslint-disable */
import path from 'path'

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).*\.js$/
)

const componentInfo = _.map(componentCtx.keys(), key => {
  const func = componentCtx(key)
  const className = func.prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const _meta = func._meta

  const info = {
    _meta,
    className,
    filePath,
    filename,
    filenameWithoutExt,
    func,
  }

  console.log(info)

  return info
})

export default componentInfo
