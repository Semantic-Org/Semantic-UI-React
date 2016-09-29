import React from 'react'
import { Message } from 'stardust'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => {
  return (
    <ExampleSection title='Types'>
      <ComponentExample
        title='List'
        description='A list groups related content'
        examplePath='elements/List/Types/ListBasic'
      />
      <ComponentExample examplePath='elements/List/Types/ListIcons' />
      <ComponentExample examplePath='elements/List/Types/ListDivided' />
      <ComponentExample examplePath='elements/List/Types/ListTree' />

      <ComponentExample
        title='Bulleted'
        description='A list can mark items with a bullet'
        examplePath='elements/List/Types/ListBulleted'
      />
      <ComponentExample examplePath='elements/List/Types/ListBulletedUl'>
        <Message info>
          For convenience, a simple bulleted list can also use <code>ul</code> tag.
        </Message>
      </ComponentExample>
      <ComponentExample examplePath='elements/List/Types/ListBulletedHorizontal' />

      <ComponentExample
        title='Ordered'
        description='A list can be ordered numerically'
        examplePath='elements/List/Types/ListOrderedExample'
      />
      <ComponentExample
        title='Link'
        description='A list can be specially formatted for navigation links'
        examplePath='elements/List/Types/ListLinkExample'
      />
    </ExampleSection>
  )
}

export default Types
