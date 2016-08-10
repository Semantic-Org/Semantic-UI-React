import React, { Component } from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import { Message } from 'stardust'

export default class FormValidationExamples extends Component {
  render() {
    return (
      <ExampleSection title='Validation'>
        <ComponentExample
          title='Specifying Validation Rules'
          description='Pass in a validation object with the rules required to validate your form.'
          examplePath='collections/Form/Validation/FormSpecifyingValidationRulesExample'
        />
        <ComponentExample
          title='Validating on Blur and other Events'
          description={`
            Validation messages can also appear inline.
            UI Forms automatically format labels with the class name "prompt".
            These validation prompts are also set to appear on input change instead of form submission.
          `}
          examplePath='collections/Form/Validation/FormValidatingOnBlurAndOtherEventsExample'
        >
          <Message warning>
            This example also uses a different validation event.
            Each element will be validated on input blur instead of the default form submit.
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
