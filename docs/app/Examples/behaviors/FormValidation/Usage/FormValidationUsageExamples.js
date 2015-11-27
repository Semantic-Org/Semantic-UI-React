import React, {Component} from 'react';
import {Message} from 'stardust';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class FormValidationUsageExamples extends Component {
  render() {
    return (
      <ExampleSection title='Usage'>
        <Message className='info'>
          A validation object includes a list of form elements, and rules to validate each field against. Fields are
          matched by either the <code>id</code>, <code>name</code>, or <code>data-validate</code> property matching
          the identifier specified in the settings object.
        </Message>
        <ComponentExample
          title='Specifying Validation Rules'
          description='Form validation requires passing in a validation object with the rules required to validate your\
              form.'
          examplePath='behaviors/FormValidation/Usage/FormValidationSpecifyingRulesExample'
        />
        <ComponentExample
          title='Customizing Prompts'
          description='Form validation includes default error prompts for most cases, however these can be quite\
              generic. To specify custom personalized values for a validation prompt use the prompt property with a\
              rule.'
          examplePath='behaviors/FormValidation/Usage/FormValidationSpecifyingRulesExample'
        >
          <Message className='info'>
            TODO You can set default messages for each validation rule type by ...
          </Message>
        </ComponentExample>
      </ExampleSection>
    );
  }
}
