import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const CheckboxStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Checked'
      description='A checkbox can come pre-checked.'
      examplePath='modules/Checkbox/States/CheckboxExampleChecked'
    >
      <Message>
        Use{' '}
        <a href='https://facebook.github.io/react/docs/forms.html#default-value' target='_blank'>
          <code>defaultChecked</code>
        </a>
        {' '}as you normally would to set default form values.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Disabled'
      description='Checkboxes can be disabled.'
      examplePath='modules/Checkbox/States/CheckboxExampleDisabled'
    />
    <ComponentExample
      title='Read Only'
      description='Make the checkbox unable to be edited by the user.'
      examplePath='modules/Checkbox/States/CheckboxExampleReadOnly'
    />
    <ComponentExample
      title='Remote Control'
      description='You can trigger events remotely.'
      examplePath='modules/Checkbox/States/CheckboxExampleRemoteControl'
    />
  </ExampleSection>
)

export default CheckboxStatesExamples
