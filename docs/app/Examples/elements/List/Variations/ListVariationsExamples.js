import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class ListVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Horizontal'
          description='A list can be formatted to have items appear horizontally'
          examplePath='elements/List/Variations/ListHorizontalExample'
        />
        <ComponentExample
          title='Inverted'
          description='A list can be inverted to appear on a dark background'
          examplePath='elements/List/Variations/ListInvertedExample'
        />
        <ComponentExample
          title='Selection'
          description='A selection list formats list items as possible choices'
          examplePath='elements/List/Variations/ListSelectionExample'
        />
        <ComponentExample
          title='Animated'
          description='A list can animate to set the current item apart from the list'
          examplePath='elements/List/Variations/ListAnimatedExample'
        >
          <Message info>
            Be sure content can fit on one line, otherwise text content will reflow when hovered.
          </Message>
        </ComponentExample>
        <ComponentExample
          title='Relaxed'
          description='A list can relax its padding to provide more negative space'
          examplePath='elements/List/Variations/ListRelaxedExample'
        />
        <ComponentExample
          title='Very Relaxed'
          examplePath='elements/List/Variations/ListVeryRelaxedExample'
        />
        <ComponentExample
          title='Divided'
          description='A list can show divisions between content'
          examplePath='elements/List/Variations/ListDividedExample'
        />
        <ComponentExample
          title='Celled'
          description='A list can divide its items into cells'
          examplePath='elements/List/Variations/ListCelledExample'
        />
        <ComponentExample
          title='Size'
          description='A list can vary in size'
          examplePath='elements/List/Variations/ListSizeMiniExample'
        />
        <ComponentExample examplePath='elements/List/Variations/ListSizeTinyExample' />
        <ComponentExample examplePath='elements/List/Variations/ListSizeSmallExample' />
        <ComponentExample examplePath='elements/List/Variations/ListSizeLargeExample' />
        <ComponentExample examplePath='elements/List/Variations/ListSizeBigExample' />
        <ComponentExample examplePath='elements/List/Variations/ListSizeHugeExample' />
        <ComponentExample examplePath='elements/List/Variations/ListSizeMassiveExample' />
      </ExampleSection>
    )
  }
}
