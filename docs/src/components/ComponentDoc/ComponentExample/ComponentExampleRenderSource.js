import faker from 'faker'
import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'
import * as SUIR from 'semantic-ui-react'

import { updateForKeys } from 'docs/src/hoc'
import * as selectCommon from 'docs/src/examples/addons/Select/common'
import Wireframe from 'docs/src/examples/behaviors/Visibility/Wireframe'
import * as dropdownCommon from 'docs/src/examples/modules/Dropdown/common'
import SearchExampleStandard from 'docs/src/examples/modules/Search/Types/SearchExampleStandard'
import SearchExampleCategory from 'docs/src/examples/modules/Search/Types/SearchExampleCategory'

const babelConfig = {
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

const externals = {
  faker,
  lodash: require('lodash'),
  react: React,
  'prop-types': PropTypes,
  'semantic-ui-react': SUIR,
}
const commons = {
  Dropdown: dropdownCommon,
  Select: selectCommon,
}

const resolver = (importPath, { displayName }) => {
  if (externals[importPath]) return externals[importPath]
  if (commons[displayName] && _.endsWith(importPath, '/common')) return commons[displayName]

  if (_.endsWith(importPath, '/Wireframe')) return Wireframe
  if (_.endsWith(importPath, '/SearchExampleCategory')) return SearchExampleCategory
  if (_.endsWith(importPath, '/SearchExampleStandard')) return SearchExampleStandard

  throw new Error(
    [
      'An error in resolver(), please check that import is defined, details:',
      JSON.stringify({ displayName, importPath }),
    ].join('\n'),
  )
}

const ComponentExampleRenderSource = ({ displayName, onError, onSuccess, sourceCode }) => (
  <SourceRender
    babelConfig={babelConfig}
    displayName={displayName}
    onError={onError}
    onSuccess={onSuccess}
    resolver={resolver}
    source={sourceCode}
  />
)

ComponentExampleRenderSource.propTypes = {
  displayName: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  sourceCode: PropTypes.string.isRequired,
}

export default updateForKeys(['sourceCode'])(ComponentExampleRenderSource)
