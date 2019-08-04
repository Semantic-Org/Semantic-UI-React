import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const LoaderStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Indeterminate'
      description="A loader can show it's unsure of how long a task will take."
      examplePath='elements/Loader/States/LoaderExampleIndeterminate'
    />

    <ComponentExample
      title='Active'
      description='A loader can contain text.'
      examplePath='elements/Loader/States/LoaderExampleActive'
    >
      <Message info>
        An active loader may not be clearly visible without using a{' '}
        <code>Dimmer</code>.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Disabled'
      description='A loader can be disabled or hidden.'
      examplePath='elements/Loader/States/LoaderExampleDisabled'
    />
  </ExampleSection>
)

export default LoaderStatesExamples
