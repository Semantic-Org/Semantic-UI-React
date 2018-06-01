import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const LabelContent = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Detail'
      description='A label can contain a detail'
      examplePath='elements/Label/Content/LabelExampleDetail'
    />

    <ComponentExample
      title='Icon'
      description='A label can include an icon'
      examplePath='elements/Label/Content/LabelExampleIcon'
    />
    <ShorthandExample examplePath='elements/Label/Content/LabelExampleIconShorthand' />

    <ComponentExample
      title='Image'
      description='A label can include an image'
      examplePath='elements/Label/Content/LabelExampleImage'
    />
    <ShorthandExample examplePath='elements/Label/Content/LabelExampleImageShorthand' />

    <ComponentExample
      title='Link'
      description='A label can be a link or contain an item that links'
      examplePath='elements/Label/Content/LabelExampleLink'
    />
    <ComponentExample examplePath='elements/Label/Content/LabelExampleLinkDetail' />
  </ExampleSection>
)

export default LabelContent
