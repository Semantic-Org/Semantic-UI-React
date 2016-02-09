import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ButtonStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Active'
          description='A button can show it is currently the active user selection'
          examplePath='elements/Button/States/ButtonActiveExample'
        />
        <ComponentExample
          title='Disabled'
          description='A button can show it is currently unable to be interacted with'
          examplePath='elements/Button/States/ButtonDisabledExample'
        />
        <ComponentExample
          title='Loading'
          description='A button can show a loading indicator'
          examplePath='elements/Button/States/ButtonLoadingExample'
        />
      </ExampleSection>
    )
  }
}
