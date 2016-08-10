import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class SegmentVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Inverted'
          description='A segment can have its colors inverted for contrast.'
          examplePath='elements/Segment/Variations/SegmentInvertedExample'
        />
        <ComponentExample
          title='Attached'
          description='A segment can be attached to other content on a page.'
          examplePath='elements/Segment/Variations/SegmentAttachedExample'
        >
          <Message info>
            Attached segments are designed to be used with other <code>attached</code> variations like
            the <a href='#Header-Variations-HeaderAttachedExample'>attached header</a> or <i>attached messages</i>.
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Attached Complex'
          description='A segment can be attached in complex ways.'
          examplePath='elements/Segment/Variations/SegmentAttachedComplexExample'
        />
        <ComponentExample
          title='Padding'
          description='A segment can increase its padding.'
          examplePath='elements/Segment/Variations/SegmentPaddedExample'
        />
        <ComponentExample
          title='Very Padded'
          description='A segment can further increase its padding.'
          examplePath='elements/Segment/Variations/SegmentVeryPaddedExample'
        />
        <ComponentExample
          title='Compact'
          description='A segment may take up only as much space as is necessary.'
          examplePath='elements/Segment/Variations/SegmentCompactExample'
        />
        <ComponentExample
          title='Compact Group'
          description='A segment group may take up only as much space as is necessary.'
          examplePath='elements/Segment/Variations/SegmentCompactGroupExample'
        />
        <ComponentExample
          title='Colored'
          description='A segment can be colored.'
          examplePath='elements/Segment/Variations/SegmentColoredExample'
        />
        <ComponentExample
          title='Colored'
          description='These colors can be inverted.'
          examplePath='elements/Segment/Variations/SegmentColoredInvertedExample'
        />
        <ComponentExample
          title='Emphasis'
          description='A segment can be formatted to appear more or less noticeable.'
          examplePath='elements/Segment/Variations/SegmentEmphasisExample'
        />
        <ComponentExample
          title='Circular'
          description='A segment can be circular.'
          examplePath='elements/Segment/Variations/SegmentCircularExample'
        >
          <Message info>
            A circular segment will most likely have to have its content manually sized to be equal width and height,
            otherwise it will flow to the size of your content.
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Clearing'
          description='A segment can clear floated content.'
          examplePath='elements/Segment/Variations/SegmentClearingExample'
        />
        <ComponentExample
          title='Floated'
          description='A segment can appear to the left or right of other content.'
          examplePath='elements/Segment/Variations/SegmentFloatedExample'
        />
        <ComponentExample
          title='Text Alignment'
          description='A segment can have its text aligned to a side.'
          examplePath='elements/Segment/Variations/SegmentTextAlignmentExample'
        />
        <ComponentExample
          title='Basic'
          description='A basic segment has no special formatting.'
          examplePath='elements/Segment/Variations/SegmentBasicExample'
        />
      </ExampleSection>
    )
  }
}
