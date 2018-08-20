import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ListContent = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Item'
      description='A list item can contain a set of items'
      examplePath='elements/List/Content/ListExampleItem'
    />

    <ComponentExample
      title='Icon'
      description='A list item can contain an icon'
      examplePath='elements/List/Content/ListExampleIcon'
    />

    <ComponentExample
      title='Image'
      description='A list can contain an image'
      examplePath='elements/List/Content/ListExampleImage'
    />

    <ComponentExample
      title='Link'
      description='A list can contain links'
      examplePath='elements/List/Content/ListExampleLink'
    />
    <ComponentExample examplePath='elements/List/Content/ListExampleLinkComplex' />

    <ComponentExample
      title='Header'
      description='A list can contain a header'
      examplePath='elements/List/Content/ListExampleHeader'
    />

    <ComponentExample
      title='Description'
      description='A list can contain a description'
      examplePath='elements/List/Content/ListExampleDescription'
    />
  </ExampleSection>
)

export default ListContent
