import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class CheckboxVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Fitted'
          description='A fitted checkbox does not leave padding for a label'
          examplePath='modules/Checkbox/Variations/Fitted'
        />
      </ExampleSection>
    );
  }
}
