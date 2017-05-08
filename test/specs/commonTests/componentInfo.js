import _ from 'lodash'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { META } from 'src/lib'
import helpers from './commonHelpers'

const componentCtx = require.context(
  '../../../src/',
  true,
  /(addons|collections|elements|modules|views).\w+.(?!index)\w+.js/
)

const componentInfo = componentCtx.keys().map(key => {
  const Component = componentCtx(key).default
  const componentType = typeof Component
  const { throwError } = helpers('componentInfo', Component)

  if (componentType !== 'function') {
    throwError([
      `${key} is not properly exported.`,
      `Components should export a class or function, got: ${componentType}.`,
    ].join(' '))
  }

  const { _meta, prototype } = Component

  if (!_meta) {
    throwError([
      'Component is missing a static _meta object property. This should help identify it:',
      `Rendered:\n${ReactDOMServer.renderToStaticMarkup(<Component />)}`,
    ].join('\n'))
  }

  const constructorName = prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const subComponentName = _.has(_meta, 'parent') && _.has(_meta, 'name')
    ? _meta.name.replace(_meta.parent, '')
    : null

  // name of the component, sub component, or plural parent for sub component groups
  const componentClassName = (
    META.isChild(Component)
      ? subComponentName.replace(/Group$/, `${_meta.parent}s`)
      : _meta.name
  ).toLowerCase()

  return {
    _meta,
    Component,
    constructorName,
    componentClassName,
    subComponentName,
    filePath,
    filename,
    filenameWithoutExt,
  }
})

export default componentInfo
