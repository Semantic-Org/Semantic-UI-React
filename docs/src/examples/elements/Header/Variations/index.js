import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import { Message } from 'semantic-ui-react'

const HeaderVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Dividing'
      description='A header can be formatted to divide itself from the content below it.'
      examplePath='elements/Header/Variations/HeaderExampleDividing'
    />
    <ComponentExample
      title='Block'
      description='A header can be formatted to appear inside a content block.'
      examplePath='elements/Header/Variations/HeaderExampleBlock'
    />
    <ComponentExample
      title='Attached'
      description='A header can be attached to other content, like a segment.'
      examplePath='elements/Header/Variations/HeaderExampleAttached'
    />
    <ComponentExample
      title='Floating'
      description='A header can sit to the left or right of other content.'
      examplePath='elements/Header/Variations/HeaderExampleFloating'
    />
    <ComponentExample
      title='Text Alignment'
      description='A header can have its text aligned to a side.'
      examplePath='elements/Header/Variations/HeaderExampleTextAlignment'
    />
    <ComponentExample
      title='Colored'
      description='A header can be formatted with different colors.'
      examplePath='elements/Header/Variations/HeaderExampleColored'
    />
    <ComponentExample
      title='Inverted'
      description='A header can have its colors inverted for contrast.'
      examplePath='elements/Header/Variations/HeaderExampleInverted'
    >
      <Message warning>
        Inverted headers use modified light versions of the site color scheme.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default HeaderVariationsExamples
