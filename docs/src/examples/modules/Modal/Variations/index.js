import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ModalVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Size'
      description='A modal can vary in size.'
      examplePath='modules/Modal/Variations/ModalExampleSize'
    />
    <ComponentExample
      title='Top Aligned'
      description='A modal can be top aligned.'
      examplePath='modules/Modal/Variations/ModalExampleTopAligned'
    />
    <ComponentExample
      title='Scrolling Content'
      description='A modal can use the entire size of the screen.'
      examplePath='modules/Modal/Variations/ModalExampleScrollingContent'
      suiVersion='2.2.11'
    />
    <ComponentExample
      title='Scrolling Modal'
      description={[
        'When your modal content exceeds the height of the browser the scrollable area will automatically',
        'expand to include just enough space for scrolling, without scrolling the page below.',
      ].join(' ')}
      examplePath='modules/Modal/Variations/ModalExampleScrolling'
    >
      <Message warning>
        <code>&lt;Modal.Content image /&gt;</code> requires an image with
        wrapped markup: <code>&lt;Image wrapped /&gt; </code>
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default ModalVariationsExamples
