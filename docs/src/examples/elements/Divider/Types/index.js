import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DividerTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Divider'
      description='A standard divider.'
      examplePath='elements/Divider/Types/DividerExampleDivider'
    />
    <ComponentExample
      title='Vertical Divider'
      description='A divider can segment content vertically.'
      examplePath='elements/Divider/Types/DividerExampleVertical'
    />
    <ComponentExample
      title='Horizontal Divider'
      description='A divider can segement content horizontally.'
      examplePath='elements/Divider/Types/DividerExampleHorizontal'
    />
  </ExampleSection>
)

export default DividerTypesExamples
