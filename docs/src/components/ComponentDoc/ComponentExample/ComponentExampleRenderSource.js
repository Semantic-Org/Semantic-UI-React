import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'

import { updateForKeys } from 'docs/src/hoc'
import * as selectCommon from 'docs/src/examples/addons/Select/common'
import Wireframe from 'docs/src/examples/behaviors/Visibility/Wireframe'
import * as dropdownCommon from 'docs/src/examples/modules/Dropdown/common'
import SearchExampleStandard from 'docs/src/examples/modules/Search/Types/SearchExampleStandard'
import SearchExampleCategory from 'docs/src/examples/modules/Search/Types/SearchExampleCategory'
import { babelConfig, externals } from './renderConfig'

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

const ComponentExampleRenderSource = ({
  displayName,
  onError,
  onSuccess,
  renderHtml,
  sourceCode,
}) => (
  <SourceRender
    babelConfig={babelConfig}
    displayName={displayName}
    onError={onError}
    onSuccess={onSuccess}
    renderHtml={renderHtml}
    resolver={resolver}
    source={sourceCode}
  />
)

ComponentExampleRenderSource.propTypes = {
  displayName: PropTypes.string.isRequired,
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  renderHtml: PropTypes.bool.isRequired,
  sourceCode: PropTypes.string.isRequired,
}

export default updateForKeys(['sourceCode'])(ComponentExampleRenderSource)
