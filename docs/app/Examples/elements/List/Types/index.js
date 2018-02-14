import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

const ListTypes = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='List'
      description='A list groups related content'
      examplePath='elements/List/Types/ListExampleBasic'
    />
    <ShorthandExample examplePath='elements/List/Types/ListExampleBasicShorthand' />

    <ComponentExample
      description='A list item can contain an icon'
      examplePath='elements/List/Types/ListExampleIcon'
    />
    <ShorthandExample examplePath='elements/List/Types/ListExampleIconShorthand' />

    <ComponentExample examplePath='elements/List/Types/ListExampleDivided' />
    <ComponentExample examplePath='elements/List/Types/ListExampleTree' />

    <ComponentExample
      title='Bulleted'
      description='A list can mark items with a bullet'
      examplePath='elements/List/Types/ListExampleBulleted'
    />
    <ComponentExample
      description='You can also use an `ul` and `li` to render a bulleted list'
      examplePath='elements/List/Types/ListExampleBulletedSimple'
    />
    <ComponentExample examplePath='elements/List/Types/ListExampleBulletedHorizontal' />

    <ComponentExample
      title='Ordered'
      description='A list can be ordered numerically'
      examplePath='elements/List/Types/ListExampleOrdered'
    />
    <ComponentExample
      description='You can also use an `ol` and `li` to render an ordered list'
      examplePath='elements/List/Types/ListExampleOrderedSimple'
    />
    <ComponentExample examplePath='elements/List/Types/ListExampleOrderedValue'>
      <Message info>
        You can also manually specify a value for an ordered list using <code>value</code>.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Link'
      description='A list can be specially formatted for navigation links'
      examplePath='elements/List/Types/ListExampleLink'
    />
  </ExampleSection>
)

export default ListTypes
