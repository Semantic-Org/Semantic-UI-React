import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'stardust'

export default class ConfirmExamples extends Component {
  render() {
    return (
      <div>
        <Message className='info'>
          A Confirm is a pre-configured Modal.  You can use all the props of a regular Modal.
        </Message>
        <ExampleSection title='Types'>
          <ComponentExample
            title='Confirm'
            description='A default confirm'
            examplePath='addons/Confirm/Types/ConfirmConfirmExample'
          />
          <ComponentExample
            title='Callbacks'
            description='A confirm has callbacks for cancel and confirm actions'
            examplePath='addons/Confirm/Types/ConfirmCallbacksExample'
          />
        </ExampleSection>

        <ExampleSection title='Variations'>
          <ComponentExample
            title='Header'
            description='A confirm can define a header'
            examplePath='addons/Confirm/Variations/ConfirmHeaderExample'
          />
          <ComponentExample
            title='Content'
            description='A confirm can define content'
            examplePath='addons/Confirm/Variations/ConfirmContentExample'
          />
          <ComponentExample
            title='Button Text'
            description='A confirm can customize button text'
            examplePath='addons/Confirm/Variations/ConfirmButtonsExample'
          />
        </ExampleSection>
      </div>
    )
  }
}
