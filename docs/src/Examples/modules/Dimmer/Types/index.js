import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DimmerTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Dimmer'
      description='A simple dimmer displays no content.'
      examplePath='modules/Dimmer/Types/DimmerExampleDimmer'
    />
    <ComponentExample
      title='Content Dimmer'
      description='A dimmer can display content.'
      examplePath='modules/Dimmer/Types/DimmerExampleContent'
    />
    <ComponentExample
      title='Page Dimmer'
      description='A dimmer can be formatted to be fixed to the page.'
      examplePath='modules/Dimmer/Types/DimmerExamplePage'
    />
  </ExampleSection>
)

export default DimmerTypesExamples
