import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class HeaderVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Dividing'
          description='A header can be formatted to divide itself from the content below it'
          examplePath='elements/Header/Variations/HeaderDividingExample'
        />
        <ComponentExample
          title='Block'
          description='A header can be formatted to appear inside a content block'
          examplePath='elements/Header/Variations/HeaderBlockExample'
        />
        <ComponentExample
          title='Attached'
          description='A header can be attached to other content, like a segment'
          examplePath='elements/Header/Variations/HeaderAttachedExample'
        />
        <ComponentExample
          title='Floating'
          description='A header can sit to the left or right of other content'
          examplePath='elements/Header/Variations/HeaderFloatingExample'
        />
        <ComponentExample
          title='Text Alignment'
          description='A header can have its text aligned to a side'
          examplePath='elements/Header/Variations/HeaderTextAlignmentExample'
        />
        <ComponentExample
          title='Colored'
          description='A header can be formatted with different colors'
          examplePath='elements/Header/Variations/HeaderColoredExample'
        />
        <ComponentExample
          title='Inverted'
          description='A header can have its colors inverted for contrast'
          examplePath='elements/Header/Variations/HeaderInvertedExample'
        >
          <Message warning>
            Inverted headers use modified light versions of the site color scheme
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
