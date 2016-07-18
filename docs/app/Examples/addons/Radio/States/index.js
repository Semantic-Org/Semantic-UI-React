import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class RadioStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Checked'
          description='A radio can come pre-checked'
          examplePath='addons/Radio/States/Checked'
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
          description='Radioes can be disabled'
          examplePath='addons/Radio/States/Disabled'
        />
        <ComponentExample
          title='Read Only'
          description='Make the radio unable to be edited by the user'
          examplePath='addons/Radio/States/ReadOnly'
        />
        <ComponentExample
          title='Remote Control'
          description='You can trigger events remotely.'
          examplePath='addons/Radio/States/RadioRemoteControlExample'
        />
      </ExampleSection>
    )
  }
}
