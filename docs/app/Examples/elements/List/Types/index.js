import React from 'react'

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

      <ComponentExample
        title='Bulleted'
        description='A list can mark items with a bullet'
        examplePath='elements/List/Types/ListBulletedExample'
      />
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
