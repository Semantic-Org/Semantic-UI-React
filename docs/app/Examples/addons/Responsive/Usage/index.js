import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ResponsiveUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Predefined breakpoints'
      description='Responsive has predefined breakpoints that mimics SUI default variables.'
      examplePath='addons/Responsive/Usage/ResponsiveExampleBreakpoints'
    />
    <ComponentExample
      title='OnUpdate'
      description='Responsive listens for window resize events and calls event handler.'
      examplePath='addons/Responsive/Usage/ResponsiveExampleOnUpdate'
    />
  </ExampleSection>
)

export default ResponsiveUsageExamples
