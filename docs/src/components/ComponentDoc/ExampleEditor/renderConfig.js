import * as docsComponents from '@stardust-ui/docs-components'
import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as SUIR from 'semantic-ui-react'

const isIE11 =
  typeof window !== 'undefined' && !!window.MSInputMethodContext && !!document.documentMode

export const babelConfig = {
  plugins: [
    'proposal-class-properties',
    'proposal-object-rest-spread',
    isIE11 && 'transform-classes',
  ].filter(Boolean),
  presets: [isIE11 ? ['es2015'] : ['stage-1', { decoratorsLegacy: true }]],
}

export const externals = {
  '@stardust-ui/docs-components': docsComponents,
  faker,
  lodash: require('lodash'),
  'prop-types': PropTypes,
  react: React,
  'react-dom': ReactDOM,
  'semantic-ui-react': SUIR,
}

export const resolver = (importPath, { displayName }) => {
  if (externals[importPath]) return externals[importPath]

  throw new Error(
    [
      'An error in resolver(), please check that import is defined, details:',
      JSON.stringify({ displayName, importPath }),
    ].join('\n'),
  )
}
