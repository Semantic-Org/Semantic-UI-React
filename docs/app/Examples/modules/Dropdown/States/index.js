import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class DropdownStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Disabled'
          description='A disabled dropdown menu or item does not allow user interaction'
          examplePath='modules/Dropdown/States/Disabled'
        />
      </ExampleSection>
    )
  }
}
