import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const PopupTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Popup'
      description='An element can specify popup content to appear'
      examplePath='modules/Popup/Types/PopupExample'
    />
    <ComponentExample
      title='Titled'
      description='An element can specify popup content with a title'
      examplePath='modules/Popup/Types/PopupTitledExample'
    />
    <ComponentExample
      title='HTML'
      description='An element can specify HTML for a popup'
      examplePath='modules/Popup/Types/PopupHtmlExample'
    />
  </ExampleSection>
)

export default PopupTypesExamples
