import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const ImageVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Avatar'
      description='An image may be formatted to appear inline with text as an avatar.'
      examplePath='elements/Image/Variations/ImageExampleAvatar'
    />
    <ComponentExample
      title='Bordered'
      description='An image may include a border to emphasize the edges of white or transparent content.'
      examplePath='elements/Image/Variations/ImageExampleBordered'
    />
    <ComponentExample
      title='Fluid'
      description='An image can take up the width of its container.'
      examplePath='elements/Image/Variations/ImageExampleFluid'
    />
    <ComponentExample
      title='Rounded'
      description='An image may appear rounded.'
      examplePath='elements/Image/Variations/ImageExampleRounded'
    />
    <ComponentExample
      title='Circular'
      description='An image may appear circular.'
      examplePath='elements/Image/Variations/ImageExampleCircular'
    >
      <Message warning>
        Perfectly circular images require a perfectly square image file.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Vertically Aligned'
      description='An image can specify its vertical alignment.'
      examplePath='elements/Image/Variations/ImageExampleVerticallyAligned'
    />
    <ComponentExample
      title='Centered'
      description='An image can appear centered in a content block.'
      examplePath='elements/Image/Variations/ImageExampleCentered'
    />
    <ComponentExample
      title='Spaced'
      description='An image can specify that it needs an additional spacing to separate it from nearby content.'
      examplePath='elements/Image/Variations/ImageExampleSpaced'
    />
    <ComponentExample
      title='Floated'
      description='An image can appear to the left or right of other content.'
      examplePath='elements/Image/Variations/ImageExampleFloated'
    />
    <ComponentExample
      title='Size'
      description='An image may appear at different sizes.'
      examplePath='elements/Image/Variations/ImageExampleSize'
    />
  </ExampleSection>
)

export default ImageVariationsExamples
