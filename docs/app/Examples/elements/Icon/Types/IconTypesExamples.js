import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class HeaderTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Page Headers'
          description='Headers may be oriented to give the hierarchy of a section in the context of the page'
          examplePath='elements/Header/Types/HeaderPageHeadersExample'
        >
          <Message>
            Page headings are sized using rem and are not affected by surrounding content size.
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
