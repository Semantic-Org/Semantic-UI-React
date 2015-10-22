import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class MessageStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Visible'
          description='A message can be set to visible to force itself to be shown.'
          examplePath='collections/Message/States/MessageVisibleExample'
        />
      </ExampleSection>
    );
  }
}
