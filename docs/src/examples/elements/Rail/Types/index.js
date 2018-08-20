import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RailTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Rail'
      description='A rail can be presented on the left or right side of a container.'
      examplePath='elements/Rail/Types/RailExampleRail'
    />

    <ComponentExample
      title='Internal'
      description='A rail can attach itself to the inside of a container.'
      examplePath='elements/Rail/Types/RailExampleInternal'
    />

    <ComponentExample
      title='Dividing'
      description='A rail can create a division between itself and a container.'
      examplePath='elements/Rail/Types/RailExampleDividing'
    />
  </ExampleSection>
)
export default RailTypesExamples
