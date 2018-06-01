import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const EmbedUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Source settings'
      description='Settings to configure video behavior.'
      examplePath='modules/Embed/Usage/EmbedExampleSettings'
    />
    <ComponentExample
      title='Iframe'
      description='You can pass props to a shorthand.'
      examplePath='modules/Embed/Usage/EmbedExampleIframe'
    />
  </ExampleSection>
)

export default EmbedUsageExamples
