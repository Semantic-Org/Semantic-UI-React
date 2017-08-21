import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const RadioVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fitted'
      description='A fitted radio does not leave padding for a label.'
      examplePath='addons/Radio/Variations/RadioExampleFitted'
    >
      <Message>
        The{' '}
        <a href='https://semantic-ui.com/modules/checkbox.html#fitted' rel='noopener noreferrer' target='_blank'>
          <code>fitted</code>
        </a>
        {' '}class is automatically applied if there is no <code>label</code> prop.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default RadioVariationsExamples
