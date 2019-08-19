import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ListVariations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Horizontal'
      description='A list can be formatted to have items appear horizontally'
      examplePath='elements/List/Variations/ListExampleHorizontal'
    />
    <ComponentExample examplePath='elements/List/Variations/ListExampleHorizontalOrdered' />
    <ComponentExample examplePath='elements/List/Variations/ListExampleHorizontalBulleted' />

    <ComponentExample
      title='Inverted'
      description='A list can be inverted to appear on a dark background'
      examplePath='elements/List/Variations/ListExampleInverted'
    />

    <ComponentExample
      title='Selection'
      description='A selection list formats list items as possible choices'
      examplePath='elements/List/Variations/ListExampleSelection'
    />

    <ComponentExample
      title='Animated'
      description='A list can animate to set the current item apart from the list'
      examplePath='elements/List/Variations/ListExampleAnimated'
    >
      <Message info>
        Be sure content can fit on one line, otherwise text content will reflow
        when hovered.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Relaxed'
      description='A list can relax its padding to provide more negative space'
      examplePath='elements/List/Variations/ListExampleRelaxed'
    />
    <ComponentExample examplePath='elements/List/Variations/ListExampleRelaxedHorizontal' />
    <ComponentExample examplePath='elements/List/Variations/ListExampleVeryRelaxed' />
    <ComponentExample examplePath='elements/List/Variations/ListExampleVeryRelaxedHorizontal' />

    <ComponentExample
      title='Divided'
      description='A list can show divisions between content'
      examplePath='elements/List/Variations/ListExampleDivided'
    />

    <ComponentExample
      title='Celled'
      description='A list can divide its items into cells'
      examplePath='elements/List/Variations/ListExampleCelled'
    />
    <ComponentExample examplePath='elements/List/Variations/ListExampleCelledOrdered' />
    <ComponentExample examplePath='elements/List/Variations/ListExampleCelledHorizontal' />

    <ComponentExample
      title='Size'
      description='A list can vary in size'
      examplePath='elements/List/Variations/ListExampleSizes'
    />
  </ExampleSection>
)

export default ListVariations
