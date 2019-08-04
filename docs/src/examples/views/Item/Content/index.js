import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Image'
      description='An item can contain an image.'
      examplePath='views/Item/Content/ItemExampleImages'
    />

    <ComponentExample
      title='Content'
      description='An item can contain content.'
      examplePath='views/Item/Content/ItemExampleContents'
    />

    <ComponentExample
      title='Header'
      description='An item can contain a header.'
      examplePath='views/Item/Content/ItemExampleHeaders'
    />

    <ComponentExample
      title='Metadata'
      description='An item can contain a header.'
      examplePath='views/Item/Content/ItemExampleMetadata'
    />

    <ComponentExample
      title='Link'
      description='An item can contain contain links as images, headers, or inside content.'
      examplePath='views/Item/Content/ItemExampleLink'
    />

    <ComponentExample
      title='Description'
      description='An item can contain contain links as images, headers, or inside content.'
      examplePath='views/Item/Content/ItemExampleDescriptions'
    />

    <ComponentExample
      title='Extra Content'
      description='An item can contain contain links as images, headers, or inside content.'
      examplePath='views/Item/Content/ItemExampleExtraContent'
    />

    <ComponentExample
      title='Rating'
      description='An item can contain icons signifying a "like" or "favorite" action.'
      examplePath='views/Item/Content/ItemExampleRatings'
    />
  </ExampleSection>
)

export default Content
