import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class FormStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Error'
          description='If a form is in an error state, it will automatically show any error message blocks.'
          examplePath='collections/Form/States/FormFieldErrorExample'
        />
      </ExampleSection>
    );
  }
}
