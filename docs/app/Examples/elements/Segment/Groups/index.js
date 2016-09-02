import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SegmentGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Segments'
      description='A group of segments can be formatted to appear together.'
      examplePath='elements/Segment/Groups/SegmentSegmentsExample'
    />
    <ComponentExample
      title='Nested Segments'
      description='A group of segments can be nested in another group of segments.'
      examplePath='elements/Segment/Groups/SegmentNestedSegmentsExample'
    />
    <ComponentExample
      title='Horizontal Segments'
      description='A segment group can appear horizontally.'
      examplePath='elements/Segment/Groups/SegmentHorizontalSegmentsExample'
    />
    <ComponentExample
      title='Raised Segments'
      description='A segment group can be raised.'
      examplePath='elements/Segment/Groups/SegmentRaisedSegmentsExample'
    />
    <ComponentExample
      title='Stacked Segments'
      description='A segment group can be stacked.'
      examplePath='elements/Segment/Groups/SegmentStackedSegmentsExample'
    />
    <ComponentExample
      title='Piled Segments'
      description='A segment group can be piled.'
      examplePath='elements/Segment/Groups/SegmentPiledSegmentsExample'
    />
  </ExampleSection>
)

export default SegmentGroupsExamples
