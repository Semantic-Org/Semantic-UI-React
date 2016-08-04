import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class ButtonContentExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Conditionals'
          description='Button groups can contain conditionals'
          examplePath='elements/Button/Content/ButtonConditionalsExample'
        >
          <Message warning>
            Or buttons can have their text localized, or adjusted by using the data-text attribute.
            If the size of the conditional changes you will need to adjust @orCircleSize.
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
