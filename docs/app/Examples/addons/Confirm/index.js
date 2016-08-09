import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class ModalExamples extends Component {
  render() {
    return (
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
          />
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
  }
}
