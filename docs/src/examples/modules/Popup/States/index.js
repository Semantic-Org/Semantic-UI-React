import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Disabled'
      description='A disabled popup only renders its trigger.'
      examplePath='modules/Popup/States/PopupExampleDisabled'
    />
    <ComponentExample
      title='Pinned'
      description='Disables automatic repositioning of the component, it will always be placed according to the position value.'
      examplePath='modules/Popup/States/PopupExamplePinned'
    />
  </ExampleSection>
)

export default PopupStatesExamples
