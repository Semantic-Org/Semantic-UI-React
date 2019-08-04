import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const ImageTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Image'
      description='An image.'
      examplePath='elements/Image/Types/ImageExampleImage'
    >
      <Message>
        Unless a size is specified, images will use the original dimensions of
        the image up to the size of its container.
      </Message>
    </ComponentExample>
    <ComponentExample
      description='An image can render wrapped in a div.ui.image as alternative HTML markup.'
      examplePath='elements/Image/Types/ImageExampleWrapped'
    />
    <ComponentExample
      title='Image Link'
      description='An image can be formatted to link to other content.'
      examplePath='elements/Image/Types/ImageExampleLink'
    />
  </ExampleSection>
)

export default ImageTypesExamples
