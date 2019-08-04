import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const ContainerVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Text Alignment'
      description='A container can specify its text alignment.'
      examplePath='elements/Container/Variations/ContainerExampleAlignment'
    />
    <ComponentExample
      title='Fluid'
      description='A fluid container has no maximum width.'
      examplePath='elements/Container/Variations/ContainerExampleFluid'
    >
      <Message info>
        Fluid containers are useful for setting text alignment, or other
        variations on unstyled content.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default ContainerVariationsExamples
