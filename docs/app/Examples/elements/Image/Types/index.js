import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'stardust'

const ImageTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Image'
      description='A standard image'
      examplePath='elements/Image/Types/ImageImageExample'
    >
      <Message>
        Unless a size is specified,
        images will use the original dimensions of the image up to the size of its container.
      </Message>
    </ComponentExample>
    <ComponentExample
      description='An image can render wrapped in a div.ui.image as alternative HTML markup'
      examplePath='elements/Image/Types/ImageWrappedExample'
    />
    <ComponentExample
      title='Link'
      description='An image can be formatted to link to other content'
      examplePath='elements/Image/Types/ImageHrefExample'
    >
      <Message>
        An image renders as a <code>{'<a />'}</code> if it has an <code>href</code> or an <code>onClick</code> handler
      </Message>
    </ComponentExample>
    <ComponentExample
      description='Using an onClick handler'
      examplePath='elements/Image/Types/ImageOnClickExample'
    />
  </ExampleSection>
)

export default ImageTypesExamples
