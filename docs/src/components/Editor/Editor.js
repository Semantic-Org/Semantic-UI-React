import PropTypes from 'prop-types'
import React from 'react'
import universal from 'react-universal-component'
import { Loader } from 'semantic-ui-react'

const AceEditor =
  typeof window === 'undefined'
    ? () => null
    : universal(import('./EditorAce'), {
      loading: () => <Loader />,
    })

function Editor(props) {
  const { id, mode, value, ...rest } = props

  return (
    <AceEditor
      name={id}
      mode={mode}
      theme='tomorrow'
      width='100%'
      height='100px'
      value={value}
      enableBasicAutocompletion
      enableLiveAutocompletion
      editorProps={{ $blockScrolling: Infinity }}
      highlightActiveLine={false}
      maxLines={Infinity}
      showGutter={false}
      showPrintMargin={false}
      tabSize={2}
      {...rest}
    />
  )
}

Editor.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['html', 'jsx']),
  value: PropTypes.string.isRequired,
}

Editor.defaultProps = {
  mode: 'jsx',
}

export default Editor
