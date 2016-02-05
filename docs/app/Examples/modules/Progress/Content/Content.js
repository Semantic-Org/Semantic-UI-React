import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ProgressContentExamples extends Component {
  render() {
    return (
      <ExampleSection title='Content'>
        <ComponentExample
          title='Bar'
          description='A progress element can contain a bar visually indicating progress.'
          examplePath='modules/Progress/Content/Bar'
        />
        <ComponentExample
          title='Progress'
          description='A progress bar can contain a text value indicating current progress.'
          examplePath='modules/Progress/Content/Progress'
        />
        <ComponentExample
          title='Label'
          description='A progress element can contain a label.'
          examplePath='modules/Progress/Content/Label'
        />
      </ExampleSection>
    );
  }
}
