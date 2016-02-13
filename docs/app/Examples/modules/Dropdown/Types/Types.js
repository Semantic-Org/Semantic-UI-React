import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class DropdownTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Dropdown'
          description='A dropdown'
          examplePath='modules/Dropdown/Types/Dropdown'
        >
          <Message>
            Dropdown <code>children</code> are automatically wrapped in a
            {' '}<code>{`<Dropdown.Menu />`}</code> for convenience.
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
