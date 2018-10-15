import React from 'react'
import PropTypes from 'prop-types'

import CodeEditor, { EDITOR_BACKGROUND_COLOR } from 'docs/src/components/CodeEditor'
import { btoa } from 'docs/src/utils'

const containerStyle = {
  marginBottom: '2rem',
  padding: '1rem',
  position: 'relative',
  background: EDITOR_BACKGROUND_COLOR,
}

const labelStyle = {
  border: '1px solid #566',
  color: '#899',
  fontFamily: 'monospace',
  fontSize: '0.8rem',
  lineHeight: 1,
  padding: '0.2rem 0.35rem',
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  zIndex: 100,
}

const CodeSnippet = ({ label, mode, value, ...rest }) => (
  <div style={containerStyle}>
    <div style={labelStyle}>{label || mode}</div>

    <CodeEditor
      id={btoa(value)}
      highlightActiveLine={false}
      highlightGutterLine={false}
      mode={mode}
      readOnly
      showGutter={false}
      showCursor={false}
      value={value}
      {...rest}
    />
  </div>
)

CodeSnippet.propTypes = {
  label: PropTypes.string,
  mode: PropTypes.oneOf(['html', 'jsx', 'sh']).isRequired,
  value: PropTypes.string.isRequired,
}

export default CodeSnippet
