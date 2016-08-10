import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Description'
      description='A step can contain a description.'
      examplePath='elements/Step/Content/Descriptions'
    />

    <ComponentExample
      title='Icon'
      description='A step can contain an icon.'
      examplePath='elements/Step/Content/Icons'
    />

    <ComponentExample
      title='Link'
      description='A step can link.'
      examplePath='elements/Step/Content/Links'
    />
  </ExampleSection>
)

export default Content
