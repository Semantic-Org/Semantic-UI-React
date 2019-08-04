import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SegmentTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Segment'
      description='A segment of content.'
      examplePath='elements/Segment/Types/SegmentExampleSegment'
    />

    <ComponentExample
      title='Placeholder Segment'
      description='A segment can be used to reserve space for conditionally displayed content.'
      examplePath='elements/Segment/Types/SegmentExamplePlaceholder'
      suiVersion='2.4.0'
    />
    <ComponentExample examplePath='elements/Segment/Types/SegmentExamplePlaceholderInline'>
      <Message info>
        To use inline-block content inside a placeholder, wrap the content in{' '}
        <code>inline</code>.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Segment/Types/SegmentExamplePlaceholderGrid' />

    <ComponentExample
      title='Raised'
      description='A segment may be formatted to raise above the page.'
      examplePath='elements/Segment/Types/SegmentExampleRaised'
    />
    <ComponentExample
      title='Stacked'
      description='A segment can be formatted to show it contains multiple pages.'
      examplePath='elements/Segment/Types/SegmentExampleStacked'
    />
    <ComponentExample
      title='Piled'
      description='A segment can be formatted to look like a pile of pages.'
      examplePath='elements/Segment/Types/SegmentExamplePiled'
    />
    <ComponentExample
      title='Vertical Segment'
      description='A vertical segment formats content to be aligned as part of a vertical group.'
      examplePath='elements/Segment/Types/SegmentExampleVerticalSegment'
    />
  </ExampleSection>
)

export default SegmentTypesExamples
