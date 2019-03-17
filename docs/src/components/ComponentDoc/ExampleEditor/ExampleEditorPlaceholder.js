import React from 'react'
import { Placeholder } from 'semantic-ui-react'

const ExampleEditorPlaceholder = () => (
  <Placeholder>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
    <Placeholder.Paragraph>
      <Placeholder.Line />
      <Placeholder.Line />
      <Placeholder.Line />
    </Placeholder.Paragraph>
  </Placeholder>
)

const areEqual = () => true

export default React.memo(ExampleEditorPlaceholder, areEqual)
