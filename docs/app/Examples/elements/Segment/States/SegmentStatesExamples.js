import React, {Component} from 'react';
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample';
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection';

export default class SegmentStatesExamples extends Component {
  render() {
    return (
      <ExampleSection title='States'>
        <ComponentExample
          title='Disabled'
          description='A segment may show its content is disabled.'
          examplePath='elements/Segment/States/SegmentDisabledExample'
        />
        <ComponentExample
          title='Loading'
          description='A segment may show its content is being loaded.'
          examplePath='elements/Segment/States/SegmentLoadingExample'
        />
      </ExampleSection>
    );
  }
}
