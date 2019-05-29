import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Popup'
      description='An element can specify popup content to appear.'
      examplePath='modules/Popup/Types/PopupExample'
    />
    <ComponentExample
      title='Header'
      description='An element can specify popup content with a header.'
      examplePath='modules/Popup/Types/PopupExampleHeader'
    />
    <ComponentExample
      title='Trigger'
      description='A trigger can be complex element.'
      examplePath='modules/Popup/Types/PopupExampleTrigger'
    />
  </ExampleSection>
)

export default PopupTypesExamples
