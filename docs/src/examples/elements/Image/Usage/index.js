import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ImageUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Children'
      description='An image can render children.'
      examplePath='elements/Image/Usage/ImageExampleChildren'
    />
    <ComponentExample
      title='Image props'
      description={
        <span>
          An image correctly handles props of an HTML <code>img</code>.
        </span>
      }
      examplePath='elements/Image/Usage/ImageExampleImageProps'
    />
    <ComponentExample
      description='Also when it is wrapped in an another element.'
      examplePath='elements/Image/Usage/ImageExampleWrappedImageProps'
    />
  </ExampleSection>
)

export default ImageUsageExamples
