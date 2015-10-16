import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class CheckboxStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Checked'
          description='A checkbox can come pre-checked'
          examplePath='modules/Checkbox/States/Checked'
        />
        <ComponentExample
          title='Disabled'
          description='Checkboxes can be disabled'
          examplePath='modules/Checkbox/States/Disabled'
        />
        <ComponentExample
          title='ReadOnly'
          description='Make the checkbox unable to be edited by the user'
          examplePath='modules/Checkbox/States/ReadOnly'
        />
      </ExampleSection>
    );
  }
}
