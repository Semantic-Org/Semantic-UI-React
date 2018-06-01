import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SegmentGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Segments'
      description='A group of segments can be formatted to appear together.'
      examplePath='elements/Segment/Groups/SegmentExampleSegments'
    />
    <ComponentExample
      title='Nested Segments'
      description='A group of segments can be nested in another group of segments.'
      examplePath='elements/Segment/Groups/SegmentExampleNestedSegments'
    />
    <ComponentExample
      title='Horizontal Segments'
      description='A segment group can appear horizontally.'
      examplePath='elements/Segment/Groups/SegmentExampleHorizontalSegments'
    />
    <ComponentExample
      title='Raised Segments'
      description='A segment group can be raised.'
      examplePath='elements/Segment/Groups/SegmentExampleRaisedSegments'
    />
    <ComponentExample
      title='Stacked Segments'
      description='A segment group can be stacked.'
      examplePath='elements/Segment/Groups/SegmentExampleStackedSegments'
    />
    <ComponentExample
      title='Piled Segments'
      description='A segment group can be piled.'
      examplePath='elements/Segment/Groups/SegmentExamplePiledSegments'
    />
  </ExampleSection>
)

export default SegmentGroupsExamples
