import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const HeaderContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image'
      description='A header may contain an image'
      examplePath='elements/Header/Content/HeaderImageExample'
    />
    <ComponentExample
      title='Icon'
      description='A header may contain an icon'
      examplePath='elements/Header/Content/HeaderIconExample'
    />
    <ComponentExample
      title='Subheader'
      description='Headers may contain subheaders'
      examplePath='elements/Header/Content/HeaderSubheaderExample'
    />
  </ExampleSection>
)

export default HeaderContentExamples
