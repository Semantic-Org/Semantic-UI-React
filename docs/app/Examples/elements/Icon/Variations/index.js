import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

export default class IconVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Fitted'
          description='An icon can be fitted, without any space to the left or right of it.'
          examplePath='elements/Icon/Variations/IconFittedExample'
        />
        <ComponentExample
          title='Size'
          description='An icon can vary in size'
          examplePath='elements/Icon/Variations/IconSizeExample'
        />
        <ComponentExample
          title='Link'
          description='An icon can be formatted as a link'
          examplePath='elements/Icon/Variations/IconLinkExample'
        />
        <ComponentExample
          title='Flipped'
          description='An icon can be flipped'
          examplePath='elements/Icon/Variations/IconFlippedExample'
        />
        <ComponentExample
          title='Rotated'
          description='An icon can be rotated'
          examplePath='elements/Icon/Variations/IconRotatedExample'
        />
        <ComponentExample
          title='Circular'
          description='An icon can be formatted to appear circular'
          examplePath='elements/Icon/Variations/IconCircularExample'
        />
        <ComponentExample
          title='Bordered'
          description='An icon can be formatted to appear bordered'
          examplePath='elements/Icon/Variations/IconBorderedExample'
        />
        <ComponentExample
          title='Colored'
          description='An icon can be formatted with different colors'
          examplePath='elements/Icon/Variations/IconColoredExample'
        />
        <ComponentExample
          title='Inverted'
          description='An icon can have its colors inverted for contrast'
          examplePath='elements/Icon/Variations/IconInvertedColoredExample'
        />
      </ExampleSection>
    )
  }
}
