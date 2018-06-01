import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const IconStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Disabled'
      description='An icon can show that it is disabled.'
      examplePath='elements/Icon/States/IconExampleDisabled'
    />
    <ComponentExample
      title='Loading'
      description='An icon can be used as a simple loader.'
      examplePath='elements/Icon/States/IconExampleLoading'
    />
  </ExampleSection>
)

export default IconStatesExamples
