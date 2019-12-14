import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const StickyTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Sticking to Adjacent Context'
      description='Sticky content attaches itself to the viewport when it is passed.'
      examplePath='modules/Sticky/Types/StickyExampleAdjacentContext'
    />
    <ComponentExample
      title='Pushing'
      description='It will have the viewport "push" the sticky content depending on the scroll direction.'
      examplePath='modules/Sticky/Types/StickyExamplePushing'
    />
  </ExampleSection>
)

export default StickyTypesExamples
