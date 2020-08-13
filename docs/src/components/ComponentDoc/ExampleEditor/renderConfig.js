import faker from 'faker'
import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as SUIR from 'semantic-ui-react'

import pkg from '../../../../../package.json'

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
  faker: {
    module: faker,
    required: false,
    version: pkg.devDependencies.faker,
  },
  lodash: {
    module: require('lodash'),
    required: false,
    version: pkg.dependencies.lodash,
  },
  'prop-types': {
    module: PropTypes,
    required: false,
    version: pkg.dependencies['prop-types'],
  },
  react: {
    module: React,
    version: pkg.peerDependencies.react,
    required: true,
  },
  'react-dom': {
    module: ReactDOM,
    version: pkg.peerDependencies['react-dom'],
    required: true,
  },
  'semantic-ui-react': {
    module: SUIR,
    version: pkg.version,
    required: true,
  },
}

export const resolver = (importPath, { displayName }) => {
  if (externals[importPath]) return externals[importPath].module

  throw new Error(
    [
      'An error in resolver(), please check that import is defined, details:',
      JSON.stringify({ displayName, importPath }),
    ].join('\n'),
  )
}
