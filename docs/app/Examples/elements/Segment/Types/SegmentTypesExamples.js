import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class ListVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Segment'
          description='A segment of content'
          examplePath='elements/Segment/Types/SegmentSegmentExample'
        />
      </ExampleSection>
    );
  }
}
