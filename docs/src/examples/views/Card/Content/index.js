import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Content Block'
      description='A card contains blocks of content.'
      examplePath='views/Card/Content/CardExampleContentBlock'
    />
    <ComponentExample
      title='Extra Content'
      description='A card can contain extra content meant to be formatted separately from the main content.'
      examplePath='views/Card/Content/CardExampleExtraContent'
    />
    <ComponentExample
      title='Image'
      description='A card can contain an image.'
      examplePath='views/Card/Content/CardExampleImageCard'
    />
    <ComponentExample
      title='Header'
      description='A card can contain a header.'
      examplePath='views/Card/Content/CardExampleHeaderCard'
    />
    <ComponentExample
      title='Link'
      description='A card can be formatted to link to other content.'
      examplePath='views/Card/Content/CardExampleLinkCard'
    />
    <ComponentExample examplePath='views/Card/Content/CardExampleLinkCardProp' />
  </ExampleSection>
)

export default Content
