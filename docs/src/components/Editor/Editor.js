import PropTypes from 'prop-types'
import React from 'react'
import { withSiteData } from 'react-static'
import universal from 'react-universal-component'
import { Loader } from 'semantic-ui-react'
// import AceEditor from 'react-ace'
// import 'brace'
// import 'brace/mode/jsx'
// import 'brace/mode/html'
// import 'brace/theme/tomorrow_night'
//
// import { componentInfoContext } from 'docs/src/utils'
//
// export const EDITOR_BACKGROUND_COLOR = '#1d1f21'
// export const EDITOR_GUTTER_COLOR = '#25282d'
//
// const semanticUIReactCompleter = {
//   getCompletions(editor, session, pos, prefix, callback) {
//     const completions = []
//     const value = session.getValue()
//     const currentRow = value.split('\n')[pos.row]
//
//     const addComponentDisplayName = (displayName, score) => {
//       completions.push({
//         score,
//         caption: displayName,
//         value: displayName,
//         meta: 'Component',
//       })
//     }
//
//     const addPropsFromInfo = (info, score) => {
//       info.props.forEach((prop) => {
//         completions.push({
//           score,
//           caption: `${prop.name}`,
//           value: prop.name,
//           meta: `{${prop.type}} ${info.displayName}`,
//         })
//       })
//     }
//
//     const addPropsFromAPIPath = (apiPath, score) => {
//       const info = componentInfoContext.byAPIPath[apiPath]
//       addPropsFromInfo(info, score)
//     }
//
//     const addPropsFromDisplayName = (displayName, score) => {
//       const info = componentInfoContext.byDisplayName[displayName]
//       addPropsFromInfo(info, score)
//     }
//
//     //
//     // if we're on a semantic-ui-react import line, return top level components
//     //
//     if (/'semantic-ui-react'/.test(currentRow)) {
//       _.forEach(componentInfoContext.byDisplayName, (info, displayName) => {
//         if (info.isParent) addComponentDisplayName(displayName, 100)
//       })
//
//       return callback(null, completions)
//     }
//
//     //
//     // if we find a <Component on the same line, return props for it
//     //
//     const apiPath = currentRow.match(/<([A-Z][\w.]+)/)
//     if (apiPath) {
//       addPropsFromAPIPath(apiPath[1], 100)
//
//       return callback(null, completions)
//     }
//
//     //
//     // if we aren't sure where we are, return imported components, their props, and locals
//     //
//     const suirNamedImports = value.match(/import\s+\{([\s\S]+?)\}\s+from\s'semantic-ui-react'/)
//     const importedDisplayNames = _.words(suirNamedImports[1])
//
//     importedDisplayNames.forEach((displayName) => {
//       addPropsFromDisplayName(displayName, 200)
//       addComponentDisplayName(displayName, 100)
//     })
//
//     // local words
//     _.uniq(_.words(value)).forEach((word) => {
//       completions.push({
//         score: 0,
//         caption: word,
//         value: word,
//         meta: 'local',
//       })
//     })
//
//     callback(null, completions)
//   },
// }
import { docTypes } from 'docs/src/utils'

// Heads up!
// Brace doesn't support SSR, so we don't include it during SSR build. The usage of the universal
// component also allows us to load Editor lazy.
// TODO use isBrowser()?
const AceEditor =
  typeof window === 'undefined'
    ? () => null
    : universal(import('./EditorAce'), {
      loading: () => <Loader active inline='centered' />,
    })

function Editor(props) {
  const { id, mode, readOnly, value, ...rest } = props

  return (
    <AceEditor
      name={id}
      mode={mode}
      theme='tomorrow_night'
      width='100%'
      height='100px'
      value={value}
      enableBasicAutocompletion
      // enableBasicAutocompletion={[semanticUIReactCompleter]}
      enableLiveAutocompletion
      editorProps={{ $blockScrolling: Infinity }}
      highlightActiveLine={false}
      maxLines={Infinity}
      readOnly={readOnly}
      showGutter={!readOnly}
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
  readOnly: PropTypes.bool,
}

Editor.defaultProps = {
  mode: 'jsx',
}

export default withSiteData(Editor)
