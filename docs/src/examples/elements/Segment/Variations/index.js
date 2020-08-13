import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const SegmentVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Inverted'
      description='A segment can have its colors inverted for contrast.'
      examplePath='elements/Segment/Variations/SegmentExampleInverted'
    />
    <ComponentExample
      title='Attached'
      description='A segment can be attached to other content on a page.'
      examplePath='elements/Segment/Variations/SegmentExampleAttached'
    >
      <Message info>
        Attached segments are designed to be used with other{' '}
        <code>attached</code> variations like the attached Header or attached
        Messages.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Attached Complex'
      description='A segment can be attached in complex ways.'
      examplePath='elements/Segment/Variations/SegmentExampleAttachedComplex'
    />
    <ComponentExample
      title='Padding'
      description='A segment can increase its padding.'
      examplePath='elements/Segment/Variations/SegmentExamplePadded'
    />
    <ComponentExample
      title='Very Padded'
      description='A segment can further increase its padding.'
      examplePath='elements/Segment/Variations/SegmentExampleVeryPadded'
    />
    <ComponentExample
      title='Compact'
      description='A segment may take up only as much space as is necessary.'
      examplePath='elements/Segment/Variations/SegmentExampleCompact'
    />
    <ComponentExample
      title='Compact Group'
      description='A segment group may take up only as much space as is necessary.'
      examplePath='elements/Segment/Variations/SegmentExampleCompactGroup'
    />
    <ComponentExample
      title='Colored'
      description='A segment can be colored.'
      examplePath='elements/Segment/Variations/SegmentExampleColored'
    />
    <ComponentExample
      description='These colors can be inverted.'
      examplePath='elements/Segment/Variations/SegmentExampleColoredInverted'
    />
    <ComponentExample
      title='Emphasis'
      description='A segment can be formatted to appear more or less noticeable.'
      examplePath='elements/Segment/Variations/SegmentExampleEmphasis'
    />
    <ComponentExample
      description='Inverted colors may be more or less noticeable.'
      examplePath='elements/Segment/Variations/SegmentExampleEmphasisInverted'
    />
    <ComponentExample examplePath='elements/Segment/Variations/SegmentExampleEmphasisColoredInverted' />
    <ComponentExample
      title='Circular'
      description='A segment can be circular.'
      examplePath='elements/Segment/Variations/SegmentExampleCircular'
    >
      <Message info>
        Perfectly circular Segments require content with equal width and height.
        Otherwise, they will flow to the size of the content.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Clearing'
      description='A segment can clear floated content.'
      examplePath='elements/Segment/Variations/SegmentExampleClearing'
    />
    <ComponentExample
      title='Floated'
      description='A segment can appear to the left or right of other content.'
      examplePath='elements/Segment/Variations/SegmentExampleFloated'
    />
    <ComponentExample
      title='Text Alignment'
      description='A segment can have its text aligned to a side.'
      examplePath='elements/Segment/Variations/SegmentExampleTextAlignment'
    />
    <ComponentExample
      title='Basic'
      description='A basic segment has no special formatting.'
      examplePath='elements/Segment/Variations/SegmentExampleBasic'
    />
    <ComponentExample
      title='Sizes'
      description='A segment can have different sizes.'
      examplePath='elements/Segment/Variations/SegmentExampleSizes'
    />
    <ComponentExample
      description='A group of segments can have different sizes.'
      examplePath='elements/Segment/Variations/SegmentExampleGroupSizes'
    />
  </ExampleSection>
)

export default SegmentVariationsExamples
