import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SegmentStatesExamples = () => (
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
)

export default SegmentStatesExamples
