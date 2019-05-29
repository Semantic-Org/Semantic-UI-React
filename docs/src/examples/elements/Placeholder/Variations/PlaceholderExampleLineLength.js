import React from 'react'
import { Placeholder } from 'semantic-ui-react'

const PlaceholderExampleLineLength = () => (
  <Placeholder>
    <Placeholder.Line length='full' />
    <Placeholder.Line length='very long' />
    <Placeholder.Line length='long' />
    <Placeholder.Line length='medium' />
    <Placeholder.Line length='short' />
    <Placeholder.Line length='very short' />
  </Placeholder>
)

export default PlaceholderExampleLineLength
