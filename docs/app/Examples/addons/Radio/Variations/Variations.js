import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

const RadioVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Fitted'
      description='A fitted radio does not leave padding for a label'
      examplePath='addons/Radio/Variations/Fitted'
    >
      <Message>
        The{' '}
        <a href='http://semantic-ui.com/modules/checkbox.html#fitted' target='_blank'>
          <code>fitted</code>
        </a>
        {' '}class is automatically applied if there is no <code>label</code> prop.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default RadioVariationsExamples
