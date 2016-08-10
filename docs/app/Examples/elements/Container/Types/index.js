/* eslint-disable max-len */

import React, { Component } from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import { Message } from 'stardust'

export default class ContainerTypesExamples extends Component {
  render() {
    return (
      <ExampleSection title='Types'>
        <ComponentExample
          title='Container'
          description='A standard container'
          examplePath='elements/Container/Types/ContainerContainerExample'
        />
        <ComponentExample
          title='Text Container'
          description='A container can reduce its maximum width to more naturally accomodate a single column of text'
          examplePath='elements/Container/Types/ContainerTextExample'
        >
          <Message info>
            <p>A text container is a simpler markup alternative to using a grid with a single column, and is designed to have a reasonable maximum width for displaying flowing text</p>
          </Message>
        </ComponentExample>
      </ExampleSection>
    )
  }
}
