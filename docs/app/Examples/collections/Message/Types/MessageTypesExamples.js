import React, {Component} from 'react';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';

export default class MessageTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Dismissable Block'
          description='A message that the can choose to hide.'
          examplePath='collections/Message/Types/MessageDismissableBlockExample'
        />
        <ComponentExample
          title='Icon Message'
          description='A message can contain an icon.'
          examplePath='collections/Message/Types/MessageIconExample'
        />
      </ExampleSection>
    );
  }
}
