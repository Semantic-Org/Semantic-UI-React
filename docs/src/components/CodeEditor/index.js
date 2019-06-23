import React from 'react'
import { Loader } from 'semantic-ui-react'

import NoSSR from 'docs/src/components/NoSSR'

const CodeEditor = React.lazy(() => import('./CodeEditor'))

const CodeEditorSafe = (props) => (
  <NoSSR>
    <React.Suspense fallback={<Loader active inline='centered' />}>
      <CodeEditor {...props} />
    </React.Suspense>
  </NoSSR>
)

export default CodeEditorSafe
