import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const Content = () => {
  return (
    <ExampleSection title='Content'>
      <ComponentExample
        title='Header'
        description='A menu item may include a header or may itself be a header'
        examplePath='collections/Menu/Content/Header'
      />
      <ComponentExample examplePath='collections/Menu/Content/Vertical' />

      <ComponentExample
        title='Text'
        description='A vertical menu item can include any type of text content'
        examplePath='collections/Menu/Content/Text'
      />
    </ExampleSection>
  )
}

export default Content
