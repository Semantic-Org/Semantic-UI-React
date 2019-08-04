/* eslint-disable max-len */

import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const ContainerTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Container'
      description='A standard container.'
      examplePath='elements/Container/Types/ContainerExampleContainer'
    />
    <ComponentExample
      title='Text Container'
      description='A container can reduce its maximum width to more naturally accommodate a single column of text.'
      examplePath='elements/Container/Types/ContainerExampleText'
    >
      <Message info>
        <p>
          A text container is a simpler markup alternative to using a grid with
          a single column, and is designed to have a reasonable maximum width
          for displaying flowing text
        </p>
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default ContainerTypesExamples
