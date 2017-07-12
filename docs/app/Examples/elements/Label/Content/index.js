import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

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
    <ComponentExample
      description='You can also configure an label icon via props'
      examplePath='elements/Label/Content/LabelExampleIconShorthand'
    />

    <ComponentExample
      title='Image'
      description='A label can include an image'
      examplePath='elements/Label/Content/LabelExampleImage'
    />
    <ComponentExample
      description='You can also configure an label image via props'
      examplePath='elements/Label/Content/LabelExampleImageShorthand'
    />

    <ComponentExample
      title='Link'
      description='A label can be a link or contain an item that links'
      examplePath='elements/Label/Content/LabelExampleLink'
    />
    <ComponentExample examplePath='elements/Label/Content/LabelExampleLinkDetail' />
  </ExampleSection>
)

export default LabelContent
