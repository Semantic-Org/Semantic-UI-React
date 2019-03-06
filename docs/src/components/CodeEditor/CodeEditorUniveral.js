import PropTypes from 'prop-types'
import React from 'react'
import { withSiteData } from 'react-static'
import universal from 'react-universal-component'
import { Loader } from 'semantic-ui-react'

import { isBrowser } from 'src/lib'

export const EDITOR_BACKGROUND_COLOR = '#1d1f21'
export const EDITOR_GUTTER_COLOR = '#25282d'

// Heads up!
// Brace doesn't support SSR, so we don't include it during SSR build. The usage of the universal
// component also allows us to load Editor lazy.
const CodeEditor = isBrowser()
  ? universal(import('./CodeEditor'), {
    loading: () => <Loader active inline='centered' />,
  })
  : () => null

function CodeEditorUniveral(props) {
  const { mode, readOnly, value, ...rest } = props

  return (
    <CodeEditor
      mode={mode}
      theme='tomorrow_night'
      width='100%'
      height='100px'
      value={value}
      enableBasicAutocompletion={!readOnly}
      enableLiveAutocompletion={!readOnly}
      editorProps={{ $blockScrolling: Infinity }}
      highlightActiveLine={!readOnly}
      highlightGutterLine={!readOnly}
      maxLines={Infinity}
      readOnly={readOnly}
      showCursor={!readOnly}
      showGutter={!readOnly}
      showPrintMargin={false}
      tabSize={2}
      {...rest}
    />
  )
}

CodeEditorUniveral.propTypes = {
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['html', 'jsx']),
  value: PropTypes.string.isRequired,
  readOnly: PropTypes.bool,
}

CodeEditorUniveral.defaultProps = {
  mode: 'jsx',
}

export default withSiteData(CodeEditorUniveral)
