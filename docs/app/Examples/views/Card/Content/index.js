import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Content Block'
      description='A card contains blocks of content'
      examplePath='views/Card/Content/ContentBlock'
    />
    <ComponentExample
      title='Extra Content'
      description='A card can contain extra content meant to be formatted separately from the main content'
      examplePath='views/Card/Content/ExtraContent'
    />
    <ComponentExample
      title='Image'
      description='A card can contain an image'
      examplePath='views/Card/Content/ImageCard'
    />
    <ComponentExample
      title='Header'
      description='A card can contain a header'
      examplePath='views/Card/Content/HeaderCard'
    />
    <ComponentExample
      title='Link'
      description='A card can be formatted to link to other contnet'
      examplePath='views/Card/Content/LinkCard'
    />
  </ExampleSection>
)

export default Content
