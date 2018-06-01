import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const AccordionTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Accordion'
      description='A standard Accordion.'
      examplePath='modules/Accordion/Types/AccordionExampleStandard'
    />
    <ComponentExample
      description='Accordion can be rendered via shorthand prop. It will automatically manage the component state.'
      examplePath='modules/Accordion/Types/AccordionExampleStandardShorthand'
    />
    <ComponentExample
      title='Styled'
      description='A styled accordion adds basic formatting.'
      examplePath='modules/Accordion/Types/AccordionExampleStyled'
    />
  </ExampleSection>
)

export default AccordionTypesExamples
