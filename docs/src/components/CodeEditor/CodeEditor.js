import _ from 'lodash'
import React from 'react'
import Ace from 'react-ace'

import 'brace'
import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/mode/sh'
import 'brace/theme/tomorrow_night'

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

const CodeEditor = props => (
  <Ace
    {...props}
    name={`docs-editor-${_.uniqueId()}`}
    enableBasicAutocompletion={[semanticUIReactCompleter]}
  />
)

export default CodeEditor
