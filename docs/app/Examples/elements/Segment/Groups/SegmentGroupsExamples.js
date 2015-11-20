import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class SegmentGroupsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Groups'>
        <ComponentExample
          title='Segments'
          description='A group of segments can be formatted to appear together.'
          examplePath='elements/Segment/Groups/SegmentSegmentsExample'
        />
      </ExampleSection>
    );
  }
}
