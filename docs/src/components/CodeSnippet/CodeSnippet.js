import { CodeSnippet as StardustCodeSnippet } from '@stardust-ui/docs-components'
import React from 'react'

import NoSSR from '../NoSSR'

const CodeSnippet = (props) => (
  <NoSSR>
    <StardustCodeSnippet {...props} />
  </NoSSR>
)

export default CodeSnippet
