import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const StickyUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Sticky offset'
      description='Define the offset from the top/bottom of the screen when fixing element to viewport.'
      examplePath='modules/Sticky/Usage/StickyExampleOffset'
    />
  </ExampleSection>
)

export default StickyUsageExamples
