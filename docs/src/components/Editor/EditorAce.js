import React from 'react'
import Ace from 'react-ace'

import 'brace/ext/language_tools'
import 'brace/mode/jsx'
import 'brace/mode/html'
import 'brace/theme/tomorrow'
// import { parentComponents } from 'docs/src/utils'

// Set up custom completers by using a ace extension
// https://github.com/thlorenz/brace/issues/19
// const languageTools = ace.acequire('ace/ext/language_tools')
//
// const semanticUIReactCompleter = {
//   getCompletions(editor, session, pos, prefix, callback) {
//     const completions = []
//
//     _.each(parentComponents, (component) => {
//       const { name } = component._meta
//       // Component
//       completions.push({ caption: name, value: name, meta: 'Component' })
//
//       // Its props (propTypes do not exist in prod, use handledProps added by babel)
//       _.each(component.handledProps, (propName) => {
//         // don't add duplicate prop completions
//         if (_.find(completions, { value: propName })) return
//
//         completions.push({ caption: propName, value: propName, meta: 'Component Prop' })
//       })
//     })
//     callback(null, completions)
//   },
// }
//
// languageTools.addCompleter(semanticUIReactCompleter)

const EditorAce = props => <Ace {...props} />

export default EditorAce
