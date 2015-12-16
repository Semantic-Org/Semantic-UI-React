import React, {Component} from 'react';
import ExampleSection from '../../../../Components/ComponentDoc/ExampleSection';
import ComponentExample from '../../../../Components/ComponentDoc/ComponentExample';

export default class FormUsageExamples extends Component {
  render() {
    return (
      <ExampleSection title='Usage'>
        <ComponentExample
          title='Specifying Validation Rules'
          description='Form validation requires passing in a validation object with the rules required to validate your form.'
          examplePath='behaviors/Form Validation/Usage/FormSpecifyingValidationRulesExample'
        />
      </ExampleSection>
    );
  }
}
