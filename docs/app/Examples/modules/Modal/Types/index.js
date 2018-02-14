import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

import { Message } from 'semantic-ui-react'

const ModalExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Modal'
      description='A standard modal.'
      examplePath='modules/Modal/Types/ModalExampleModal'
    />
    <ComponentExample
      title='Basic'
      description='A modal can reduce its complexity.'
      examplePath='modules/Modal/Types/ModalExampleBasic'
    />
    <ComponentExample
      title='Scrolling Modal'
      description={[
        'When your modal content exceeds the height of the browser the scrollable area will automatically',
        'expand to include just enough space for scrolling, without scrolling the page below.',
      ].join(' ')}
      examplePath='modules/Modal/Types/ModalExampleScrolling'
    >
      <Message warning>
        <code>&lt;Modal.Content image /&gt;</code> requires an image
        with wrapped markup: <code>&lt;Image wrapped /&gt; </code>
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Multiple Modals'
      description='Multiple modals can be displayed on top of one another.'
      examplePath='modules/Modal/Types/ModalExampleMultiple'
    />
    <ComponentExample
      title='Controlled'
      description='A modal can be a controlled component.'
      examplePath='modules/Modal/Types/ModalExampleControlled'
    />
    <ShorthandExample
      title='Shorthand'
      description='A modal can be created with shorthand props.'
      examplePath='modules/Modal/Types/ModalExampleShorthand'
    />
  </ExampleSection>
)

export default ModalExamples
