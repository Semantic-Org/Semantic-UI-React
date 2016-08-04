/* eslint-disable max-len */

import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class ContainerVariationsExamples extends Component {
  render() {
    return (
      <ExampleSection title='Variations'>
        <ComponentExample
          title='Text Alignment'
          description='A container can specify its text alignment'
          examplePath='elements/Container/Variations/ContainerAlignmentExample'
        />
        <ComponentExample
          title='Fluid'
          description='A fluid container has no maximum width'
          examplePath='elements/Container/Variations/ContainerFluidExample'
        >
          <Message info>
            Fluid containers are useful for setting text alignment, or other variations on unstyled content
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
