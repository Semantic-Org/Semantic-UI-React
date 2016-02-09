import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ProgressTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Standard'
          description='A standard progress bar.'
          examplePath='modules/Progress/Types/Standard'
        />
        <ComponentExample
          title='Indicating'
          description='An indicating progress bar visually indicates the current level of progress of a task.'
          examplePath='modules/Progress/Types/Indicating'
        />
      </ExampleSection>
    )
  }
}
