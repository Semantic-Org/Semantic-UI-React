import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';
import {Message} from 'stardust';

export default class CheckboxStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Checked'
          description='A checkbox can come pre-checked'
          examplePath='modules/Checkbox/States/Checked'
        >
          <Message>
            Use
            &nbsp;
            <a href='https://facebook.github.io/react/docs/forms.html#default-value' target='_blank'>
              <code>defaultChecked</code>
            </a>
            &nbsp;
            as you normally would to set default form values.
          </Message>
        </ComponentExample>
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
        <ComponentExample
          title='Remote Control'
          description='You can trigger events remotely.'
          examplePath='modules/Checkbox/States/CheckboxRemoteControlExample'
        />
      </ExampleSection>
    );
  }
}
