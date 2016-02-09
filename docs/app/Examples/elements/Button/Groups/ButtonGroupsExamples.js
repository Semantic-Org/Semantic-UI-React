import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ButtonGroupsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Groups'>
        <ComponentExample
          title='Buttons'
          description='Buttons can exist together as a group'
          examplePath='elements/Button/Groups/ButtonButtonsExample'
        />
        <ComponentExample
          title='Icon Buttons'
          description='Button groups can show groups of icons'
          examplePath='elements/Button/Groups/ButtonIconButtonsExample'
        />
      </ExampleSection>
    )
  }
}
