import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const RadioStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Checked'
      description='A radio can come pre-checked.'
      examplePath='addons/Radio/States/RadioExampleChecked'
    >
      <Message>
        Use{' '}
        <a
          href='https://facebook.github.io/react/docs/forms.html#default-value'
          rel='noopener noreferrer'
          target='_blank'
        >
          <code>defaultChecked</code>
        </a>
        {' '}as you normally would to set default form values.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Disabled'
      description='Radios can be disabled.'
      examplePath='addons/Radio/States/RadioExampleDisabled'
    />
    <ComponentExample
      title='Read Only'
      description='Make the radio unable to be edited by the user.'
      examplePath='addons/Radio/States/RadioExampleReadOnly'
    />
    <ComponentExample
      title='Remote Control'
      description='You can trigger events remotely.'
      examplePath='addons/Radio/States/RadioExampleRemoteControl'
    />
  </ExampleSection>
)

export default RadioStatesExamples
