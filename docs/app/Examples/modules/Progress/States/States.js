import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ProgressContentExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Success'
          description='A progress bar can show a success state.'
          examplePath='modules/Progress/States/Success'
        />
        <ComponentExample
          title='Warning'
          description='A progress bar can show a warning state.'
          examplePath='modules/Progress/States/Warning'
        />
        <ComponentExample
          title='Error'
          description='A progress bar can show an error state.'
          examplePath='modules/Progress/States/Error'
        />
        <ComponentExample
          title='Disabled'
          description='A progress bar can be disabled.'
          examplePath='modules/Progress/States/Disabled'
        />
      </ExampleSection>
    );
  }
}
