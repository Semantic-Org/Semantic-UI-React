import ace from 'brace'
import _ from 'lodash'
import React, { Component } from 'react'
import Ace from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'

import { docTypes } from 'docs/src/utils'
import getUnhandledProps from 'src/lib/getUnhandledProps'

// Set up custom completers by using a ace extension
// https://github.com/thlorenz/brace/issues/19
const languageTools = ace.acequire('ace/ext/language_tools')
let completionsAdded = false

const addCompletions = ({ components, props }) => {
  if (completionsAdded) return

  languageTools.addCompleter({
    getCompletions(editor, session, pos, prefix, callback) {
      callback(null, [
        ..._.map(components, component => ({
          caption: component,
          value: component,
          meta: 'Component',
        })),
        ..._.map(props, prop => ({ caption: prop, value: prop, meta: 'Component Prop' })),
      ])
    },
  })
  completionsAdded = true
}

export default class EditorAce extends Component {
  static propTypes = {
    completions: docTypes.completions.isRequired,
  }

  componentWillMount() {
    const { completions } = this.props

    addCompletions(completions)
  }

  render() {
    const rest = getUnhandledProps(EditorAce, this.props)

    return <Ace {...rest} />
  }
}
