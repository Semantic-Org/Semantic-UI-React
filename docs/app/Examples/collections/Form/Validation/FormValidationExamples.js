import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class FormValidationExamples extends Component {
  render() {
    return (
      <ExampleSection title='Usage'>
        <ComponentExample
          title='Specifying Validation Rules'
          description='Pass in a validation object with the rules required to validate your form.'
          examplePath='collections/Form/Validation/FormSpecifyingValidationRulesExample'
        />
      </ExampleSection>
    );
  }
}
