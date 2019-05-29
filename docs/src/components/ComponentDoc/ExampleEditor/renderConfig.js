import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import * as SUIR from 'semantic-ui-react'

export const babelConfig = {
  presets: [['stage-1', { decoratorsLegacy: true }]],
}

export const externals = {
  faker,
  lodash: require('lodash'),
  react: React,
  'prop-types': PropTypes,
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
