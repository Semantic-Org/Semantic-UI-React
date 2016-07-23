import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class DropdownTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Dropdown'
          description='A dropdown menu'
          examplePath='modules/Dropdown/Types/Dropdown'
        />
      </ExampleSection>
    )
  }
}
