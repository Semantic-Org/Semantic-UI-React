import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class CheckboxVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Fitted'
          description='A fitted checkbox does not leave padding for a label'
          examplePath='modules/Checkbox/Variations/Fitted'
        >
          <Message>
            The&nbsp;
            <a href='http://semantic-ui.com/modules/checkbox.html#fitted' target='_blank'>
              <code>fitted</code>
            </a>
            &nbsp;class is automatically applied if there is no <code>label</code> prop.
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
