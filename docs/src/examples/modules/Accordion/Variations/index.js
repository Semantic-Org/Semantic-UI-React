import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const AccordionTypesExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fluid'
      description='An accordion can take up the width of its container.'
      examplePath='modules/Accordion/Variations/AccordionExampleFluid'
    />
    <ComponentExample
      title='Inverted'
      description='An accordion can be formatted to appear on dark backgrounds.'
      examplePath='modules/Accordion/Variations/AccordionExampleInverted'
    />
  </ExampleSection>
)

export default AccordionTypesExamples
