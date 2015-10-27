import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class FormTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Field'
          description='A field is a form element containing a label and an input.'
          examplePath='collections/Form/Content/FormFieldExample'
        />
      </ExampleSection>
    );
  }
}
