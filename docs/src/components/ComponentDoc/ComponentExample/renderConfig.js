import faker from 'faker'
import React from 'react'
import PropTypes from 'prop-types'
import * as SUIR from 'semantic-ui-react'

export const babelConfig = {
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 4 versions', 'not dead'],
        },
      },
    ],
    ['stage-1', { decoratorsLegacy: true }],
  ],
}

export const externals = {
  faker,
  lodash: require('lodash'),
  react: React,
  'prop-types': PropTypes,
  'semantic-ui-react': SUIR,
}
