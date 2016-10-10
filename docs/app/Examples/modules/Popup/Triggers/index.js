import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const PopupTriggersExamples = () => (
  <ExampleSection title='Triggers'>
    <ComponentExample
      title='Hover'
      description='A popup can be triggered on hover'
      examplePath='modules/Popup/Triggers/PopupHoverExample'
    />
    <ComponentExample
      title='Click'
      description='A popup can be triggered on click'
      examplePath='modules/Popup/Triggers/PopupClickExample'
    />
    <ComponentExample
      title='Focus'
      description='A popup can be triggered on focus'
      examplePath='modules/Popup/Triggers/PopupFocusExample'
    />
  </ExampleSection>
)

export default PopupTriggersExamples
