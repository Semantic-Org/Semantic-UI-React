import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ButtonStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Conditionals'
          description='Button groups can contain conditionals'
          examplePath='elements/Button/Content/ButtonConditionalsExample'
        />
      </ExampleSection>
    );
  }
}
