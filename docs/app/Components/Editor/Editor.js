import React, { PropTypes } from 'react'
import AceEditor from 'react-ace'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'

function Editor(props) {
  const { id, mode, readOnly, value } = props

  return (
    <AceEditor
      name={id}
      mode={mode}
      theme='tomorrow'
      width='100%'
      height='100px'
      value={value}
      editorProps={{ $blockScrolling: Infinity, displayIndentGuides: false }}
      highlightActiveLine={false}
      readOnly={readOnly}
      maxLines={Infinity}
      showGutter={false}
      showPrintMargin={false}
      tabSize={2}
    />
  )
}

Editor.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['html', 'jsx']),
  readOnly: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

Editor.defaultProps = {
  mode: 'jsx',
}

export default Editor
