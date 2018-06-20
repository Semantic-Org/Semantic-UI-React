import React from 'react'
import universal from 'react-universal-component'

import { updateForKeys } from 'docs/src/hoc'
// import ComponentExamplesError from './ComponentExamplesError'
// import ComponentExamplesLoader from './ComponentExamplesLoader'

const ComponentExamples = universal(
  import('docs/src/examples/elements/Container/index.js'),
  // ({ displayName, type }) => import(`../../../examples/${type}s/${displayName}/index.js`),
  // {
  //   loading: ComponentExamplesLoader,
  //   error: ComponentExamplesError,
  // },
)

export default props => <div>111</div>

// export default updateForKeys(['displayName', 'type'])(ComponentExamples)
