import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'src/collections'

const ModalExamples = () => (
  <div>
    <ExampleSection title='Types'>
      <ComponentExample
        title='Modal'
        description='A standard modal'
        examplePath='modules/Modal/Types/ModalModalExample'
      />
      <ComponentExample
        title='Basic'
        description='A modal can reduce its complexity'
        examplePath='modules/Modal/Types/ModalBasicExample'
      />
      <ComponentExample
        title='Scrolling'
        description={[
          'When your modal content exceeds the height of the browser the scrollable area will automatically',
          'expand to include just enough space for scrolling, without scrolling the page below.',
        ].join(' ')}
        examplePath='modules/Modal/Types/ModalScrollingExample'
      >
        <Message warning>
          <code>&lt;Modal.Content image /&gt;</code> requires an image
          with wrapped markup: <code>&lt;Image wrapped /&gt; </code>
        </Message>
      </ComponentExample>
    </ExampleSection>

    <ExampleSection title='Variations'>
      <ComponentExample
        title='Size'
        description='A modal can vary in size'
        examplePath='modules/Modal/Variations/ModalSizeExample'
      />
      <ComponentExample
        title='Dimmer Variations'
        description='A modal can specify dimmer variations'
        examplePath='modules/Modal/Variations/ModalDimmerExample'
      />
    </ExampleSection>
  </div>
)

export default ModalExamples
