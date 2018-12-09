import React from 'react'
import PropTypes from 'prop-types'

import CodeEditor, { EDITOR_BACKGROUND_COLOR } from 'docs/src/components/CodeEditor'
import formatCode from '../../utils/formatCode'

const containerStyle = {
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

const CodeSnippet = ({ fitted, label, mode, value, ...rest }) => (
  <div style={{ ...containerStyle, margin: fitted ? 0 : '1rem 0' }}>
    <div style={labelStyle}>{label || mode}</div>

    <CodeEditor
      highlightActiveLine={false}
      highlightGutterLine={false}
      mode={mode}
      readOnly
      showGutter={false}
      showCursor={false}
      value={(mode === 'sh'
        ? value.replace(/^/g, '$  ')
        : formatCode(value, mode === 'html' ? 'html' : 'babylon')
      ).trim()}
      {...rest}
    />
  </div>
)

CodeSnippet.propTypes = {
  fitted: PropTypes.bool,
  label: PropTypes.string,
  mode: PropTypes.oneOf(['html', 'jsx', 'sh']).isRequired,
  value: PropTypes.string.isRequired,
}

CodeSnippet.defaultProps = {
  mode: 'jsx',
}

export default CodeSnippet
