import React from 'react'
import DefaultCodeSnippet from './CodeSnippet'

import NoSSR from '../NoSSR'

const CodeSnippet = (props) => (
  <NoSSR>
    <DefaultCodeSnippet {...props} />
  </NoSSR>
)

export default CodeSnippet
