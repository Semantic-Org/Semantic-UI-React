import PropTypes from 'prop-types'
import React from 'react'
import SourceRender from 'react-source-render'

import { babelConfig, externals } from './renderConfig'

const resolver = (importPath, { displayName }) => {
  if (externals[importPath]) return externals[importPath]

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

export default React.memo(ComponentExampleRenderSource)
