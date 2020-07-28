import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import Ace from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/theme/tomorrow_night_eighties'

import { componentInfoContext } from 'docs/src/utils'

const semanticUIReactCompleter = {
  getCompletions(editor, session, pos, prefix, callback) {
    const completions = []
    const value = session.getValue()
    const currentRow = value.split('\n')[pos.row]

    const addComponentDisplayName = (displayName, score) => {
      completions.push({
        score,
        caption: displayName,
        value: displayName,
        meta: 'Component',
      })
    }

    const addPropsFromInfo = (info, score) => {
      info.props.forEach((prop) => {
        completions.push({
          score,
          caption: `${prop.name}`,
          value: prop.name,
          meta: `{${prop.type}} ${info.displayName}`,
        })
      })
    }

    const addPropsFromAPIPath = (apiPath, score) => {
      const info = componentInfoContext.byAPIPath[apiPath]
      if (!info) return
      addPropsFromInfo(info, score)
    }

    const addPropsFromDisplayName = (displayName, score) => {
      const info = componentInfoContext.byDisplayName[displayName]
      if (!info) return
      addPropsFromInfo(info, score)
    }

    //
    // if we're on a semantic-ui-react import line, return top level components
    //
    if (/'semantic-ui-react'/.test(currentRow)) {
      _.forEach(componentInfoContext.byDisplayName, (info, displayName) => {
        if (info.isParent) addComponentDisplayName(displayName, 100)
      })

      return callback(null, completions)
    }

    //
    // if we find a <Component on the same line, return props for it
    //
    const apiPath = currentRow.match(/<([A-Z][\w.]+)/)
    if (apiPath) {
      addPropsFromAPIPath(apiPath[1], 100)

      return callback(null, completions)
    }

    //
    // if we aren't sure where we are, return imported components, their props, and locals
    //
    const suirNamedImports = value.match(/import\s+\{([\s\S]+?)\}\s+from\s'semantic-ui-react'/)
    const importedDisplayNames = _.words(suirNamedImports[1])

    importedDisplayNames.forEach((displayName) => {
      addPropsFromDisplayName(displayName, 200)
      addComponentDisplayName(displayName, 100)
    })

    // local words
    _.uniq(_.words(value)).forEach((word) => {
      completions.push({
        score: 0,
        caption: word,
        value: word,
        meta: 'local',
      })
    })

    callback(null, completions)
  },
}

class CodeEditor extends React.Component {
  editorRef = React.createRef()
  name = `docs-editor-${_.uniqueId()}`

  componentDidMount() {
    this.setCursorVisibility(this.props.showCursor)
  }

  componentDidUpdate(prevProps) {
    if (prevProps.showCursor !== this.props.showCursor) {
      this.setCursorVisibility(this.props.showCursor)
    }

    // focus editor when editor it becomes active
    if (prevProps.active !== this.props.active && this.props.active) {
      this.editorRef.current.editor.focus()
    }
  }

  handleChange = _.debounce((value, e) => {
    _.invoke(this.props, 'onChange', value, e)
  }, 300)

  setCursorVisibility = (visible) => {
    const cursor = this.editorRef.current.editor.renderer.$cursorLayer.element

    cursor.style.display = visible ? '' : 'none'
  }

  render() {
    return (
      <Ace
        editorProps={{ $blockScrolling: Infinity }}
        enableBasicAutocompletion={[semanticUIReactCompleter]}
        enableLiveAutocompletion
        height='100px'
        highlightActiveLine
        highlightGutterLine
        name={this.name}
        maxLines={Infinity}
        mode='jsx'
        onChange={this.handleChange}
        readOnly={false}
        ref={this.editorRef}
        setOptions={{ fixedWidthGutter: true, showFoldWidgets: false }}
        showPrintMargin={false}
        tabSize={2}
        theme='tomorrow_night_eighties'
        width='100%'
        {...this.props}
      />
    )
  }
}

CodeEditor.propTypes = {
  active: PropTypes.bool,
  showCursor: PropTypes.bool,
  value: PropTypes.string.isRequired,
}

CodeEditor.defaultProps = {
  active: true,
  showCursor: true,
}

export default CodeEditor
