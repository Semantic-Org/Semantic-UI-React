import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Accordion containing lists as children (non exclusive)"
      description="An accordion can have different children."
      examplePath="components/Accordion/Variations/AccordionExampleList"
    />
  </ExampleSection>
)

export default Variations
