import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PlaceholderContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Lines'
      description='A placeholder can contain have lines of text.'
      examplePath='elements/Placeholder/Content/PlaceholderExampleLine'
    >
      <Message info>
        By default, repeated lines will appear varied in width. However, it may
        be useful to specify an exact length to make it match up with content
        more effectively.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Headers'
      description='A placeholder can contain a header.'
      examplePath='elements/Placeholder/Content/PlaceholderExampleHeaderImage'
    >
      <Message info>
        Header content will have a slightly larger block size from paragraph.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Placeholder/Content/PlaceholderExampleHeader' />

    <ComponentExample
      title='Paragraph'
      description='A placeholder can contain a paragraph.'
      examplePath='elements/Placeholder/Content/PlaceholderExampleParagraph'
    >
      <Message info>Paragraphs are used to group lines together.</Message>
    </ComponentExample>

    <ComponentExample
      title='Image'
      description='A placeholder can contain an image.'
      examplePath='elements/Placeholder/Content/PlaceholderExampleImage'
    />
    <ComponentExample examplePath='elements/Placeholder/Content/PlaceholderExampleImageSquare'>
      <Message info>
        Using <code>square</code> (1:1) or <code>rectangular</code> (4:3) will
        embed an aspect ratio into the image loader so that they modify size
        correctly with responsive styles.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Placeholder/Content/PlaceholderExampleImageRectangular' />
  </ExampleSection>
)

export default PlaceholderContentExamples
