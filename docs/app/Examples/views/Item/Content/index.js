import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image'
      description='An item can contain an image'
      examplePath='views/Item/Content/Images'
    />

    <ComponentExample
      title='Content'
      description='An item can contain content'
      examplePath='views/Item/Content/Content'
    />

    <ComponentExample
      title='Header'
      description='An item can contain a header'
      examplePath='views/Item/Content/Header'
    />

    <ComponentExample
      title='Metadata'
      description='An item can contain a header'
      examplePath='views/Item/Content/Metadata'
    />

    <ComponentExample
      title='Link'
      description='An item can contain contain links as images, headers, or inside content'
      examplePath='views/Item/Content/Link'
    />

    <ComponentExample
      title='Description'
      description='An item can contain contain links as images, headers, or inside content'
      examplePath='views/Item/Content/Description'
    />

    <ComponentExample
      title='Extra Content'
      description='An item can contain contain links as images, headers, or inside content'
      examplePath='views/Item/Content/ExtraContent'
    />

    <ComponentExample
      title='Rating'
      description='An item can contain icons signifying a "like" or "favorite" action'
      examplePath='views/Item/Content/Rating'
    />
  </ExampleSection>
)

export default Content
