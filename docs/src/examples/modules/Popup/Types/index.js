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
      title='Titled'
      description='An element can specify popup content with a title.'
      examplePath='modules/Popup/Types/PopupExampleTitled'
    />
    <ComponentExample
      title='HTML'
      description='An element can specify HTML for a popup.'
      examplePath='modules/Popup/Types/PopupExampleHtml'
    />
  </ExampleSection>
)

export default PopupTypesExamples
