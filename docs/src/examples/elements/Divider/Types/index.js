import React from 'react'
import { Link } from 'react-static'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DividerTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Divider'
      description='A standard divider.'
      examplePath='elements/Divider/Types/DividerExampleDivider'
    >
      <Message info>
        To add a divider between parts of a grid use a{' '}
        <Link to='/collections/grid/#types-divided-number'>
          divided <code>Grid</code>
        </Link>{' '}
        variation.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Vertical Divider'
      description='A divider can segment content vertically.'
      examplePath='elements/Divider/Types/DividerExampleVertical'
    >
      <Message>
        Vertical dividers requires <code>position: relative</code> on the element that you would
        like to contain the divider.
      </Message>
      <Message warning>
        Due to a change in W3C implementation of{' '}
        <a
          href='https://github.com/w3c/csswg-drafts/issues/401'
          rel='noopener noreferrer'
          target='_blank'
        >
          absolutely positioned elements in flex containers
        </a>{' '}
        vertical dividers now currently only support 50/50 splits automatically, and only if not
        positioned <b>as direct children of flex containers</b> (like grid).
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Divider/Types/DividerExampleVerticalForm'>
      <Message info>
        A vertical divider will automatically swap to a horizontal divider at mobile resolutions
        when used inside a <code>stackable Grid</code>.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Horizontal Divider'
      description='A divider can segement content horizontally.'
      examplePath='elements/Divider/Types/DividerExampleHorizontal'
    >
      <Message>
        Horizontal dividers can also be used in combination with headers and icons to create
        different styles of dividers.
      </Message>
      <Message info>
        Dividers will automatically vary the size of their dividing rules to match the length of
        your text.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Divider/Types/DividerExampleHorizontalTable' />
  </ExampleSection>
)

export default DividerTypesExamples
