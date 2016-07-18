import React, { Component } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

export default class MessageVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Info'
          description='A message may be formatted to display information.'
          examplePath='collections/Message/Variations/MessageInfoExample'
        />
        <ComponentExample
          title='Warning'
          description='A message may be formatted to display warning message.'
          examplePath='collections/Message/Variations/MessageWarningExample'
        />
      </ExampleSection>
    )
  }
}
