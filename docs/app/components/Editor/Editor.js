import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import AceEditor from 'react-ace'
import ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'

import { parentComponents } from 'docs/app/utils'

// Set up custom completers by using a ace extension
// https://github.com/thlorenz/brace/issues/19
const languageTools = ace.acequire('ace/ext/language_tools')

const semanticUIReactCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    const completions = []

    _.each(parentComponents, (component) => {
      const { name } = component._meta
      // Component
      completions.push({ caption: name, value: name, meta: 'Component' })

      // Its props (propTypes do not exist in prod, use handledProps added by babel)
      _.each(component.handledProps, (propName) => {
        // don't add duplicate prop completions
        if (_.find(completions, { value: propName })) return

        completions.push({ caption: propName, value: propName, meta: 'Component Prop' })
      })
    })
    callback(null, completions)
  },
}

languageTools.addCompleter(semanticUIReactCompleter)

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
