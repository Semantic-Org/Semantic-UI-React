import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SegmentStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Disabled'
      description='A segment may show its content is disabled.'
      examplePath='elements/Segment/States/SegmentExampleDisabled'
    />
    <ComponentExample
      title='Loading'
      description='A segment may show its content is being loaded.'
      examplePath='elements/Segment/States/SegmentExampleLoading'
    />
  </ExampleSection>
)

export default SegmentStatesExamples
