import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ThemedExamples = () => (
  <ExampleSection title='Themed'>
    <ComponentExample
      title='A funny div'
      description='This is a funny div'
      examplePath='externals/Div/Themed/DivExampleFunny'
    />
  </ExampleSection>
)

export default ThemedExamples
