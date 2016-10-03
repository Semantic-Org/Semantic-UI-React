import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const ImageVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Avatar'
      description='An image can appear as an Avatar'
      examplePath='elements/Image/Variations/ImageAvatarExample'
    />
    <ComponentExample
      title='Bordered'
      description='An image can be bordered'
      examplePath='elements/Image/Variations/ImageBorderedExample'
    />
    <ComponentExample
      title='Fluid'
      description='A fluid image has no maximum width'
      examplePath='elements/Image/Variations/ImageFluidExample'
    />
    <ComponentExample
      title='Shapes'
      description='An image can have different shapes'
      examplePath='elements/Image/Variations/ImageRoundedExample'
    />
    <ComponentExample examplePath='elements/Image/Variations/ImageCircularExample'>
      <Message warning>
        Perfectly circular images require a perfectly square image file.
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Vertically Aligned'
      description='An image can specify its vertical alignment'
      examplePath='elements/Image/Variations/ImageVerticallyAlignedExample'
    />
    <ComponentExample
      title='Centered'
      description='An image can be centrally aligned'
      examplePath='elements/Image/Variations/ImageCenteredExample'
    />
    <ComponentExample
      title='Spaced'
      description='An image can specify that it needs an additional spacing to separate it from nearby content'
      examplePath='elements/Image/Variations/ImageSpacedExample'
    />
    <ComponentExample
      title='Floated'
      description='An image can appear to the left or right of other content.'
      examplePath='elements/Image/Variations/ImageFloatedExample'
    />
    <ComponentExample
      title='Size'
      description='An image may appear at different sizes'
      examplePath='elements/Image/Variations/ImageSizeExample'
    />
  </ExampleSection>
)

export default ImageVariationsExamples
