import React from 'react'
import { Message } from 'stardust'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ListTypes = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='List'
      description='A list groups related content'
      examplePath='elements/List/Types/ListExampleBasic'
    />
    <ComponentExample examplePath='elements/List/Types/ListExampleIcon' />
    <ComponentExample examplePath='elements/List/Types/ListExampleDivided' />
    <ComponentExample examplePath='elements/List/Types/ListExampleTree' />

    <ComponentExample
      title='Bulleted'
      description='A list can mark items with a bullet'
      examplePath='elements/List/Types/ListExampleBulleted'
    />
    <ComponentExample examplePath='elements/List/Types/ListExampleBulletedSimple'>
      <Message info>
        For convenience, a simple bulleted list can also use <code>ul</code> tag.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/List/Types/ListExampleBulletedHorizontal' />

    <ComponentExample
      title='Ordered'
      description='A list can be ordered numerically'
      examplePath='elements/List/Types/ListExampleOrdered'
    />
    <ComponentExample examplePath='elements/List/Types/ListExampleOrderedSimple'>
      <Message info>
        You can also manually specify a value for an ordered list using <code>value</code>.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/List/Types/ListExampleOrderedValue' />

    <ComponentExample
      title='Link'
      description='A list can be specially formatted for navigation links'
      examplePath='elements/List/Types/ListExampleLink'
    />
  </ExampleSection>
)

export default ListTypes
