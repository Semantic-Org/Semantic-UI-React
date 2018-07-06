import PropTypes from 'prop-types'
import React from 'react'
import { withSiteData } from 'react-static'
import universal from 'react-universal-component'
import { Loader } from 'semantic-ui-react'

import { docTypes } from 'docs/src/utils'

// Heads up!
// Brace doesn't support SSR, so we don't include it during SSR build. The usage of the universal
// component also allows us to load Editor lazy.
const AceEditor =
  typeof window === 'undefined'
    ? () => null
    : universal(import('./EditorAce'), {
      loading: () => <Loader active inline='centered' />,
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
  completions: docTypes.completions.isRequired,
  id: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['html', 'jsx']),
  value: PropTypes.string.isRequired,
}

Editor.defaultProps = {
  mode: 'jsx',
}

export default withSiteData(Editor)
