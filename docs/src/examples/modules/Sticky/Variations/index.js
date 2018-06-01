import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const StickyVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Active'
      description='Sticky can be active.'
      examplePath='modules/Sticky/Variations/StickyExampleActive'
    />
    <ComponentExample
      title='Oversized'
      description='Sticky content that is larger than the viewport.'
      examplePath='modules/Sticky/Variations/StickyExampleOversized'
    />
  </ExampleSection>
)

export default StickyVariationsExamples
