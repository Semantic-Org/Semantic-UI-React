import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class DropdownContentExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Async Options'
          description="A dropdown's options can change over time"
          examplePath='modules/Dropdown/Content/AsyncOptions'
        />
      </ExampleSection>
    )
  }
}
