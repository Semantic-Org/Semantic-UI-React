import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const LoaderExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Inline'
      description='Loaders can appear inline with content'
      examplePath='elements/Loader/Variations/Inline'
    />

    <ComponentExample
      title='Inline Center'
      description='Loaders can appear inline centered with content'
      examplePath='elements/Loader/Variations/InlineCentered'
    >
      <Message>
        An active dimmer may not be clearly visible without using a "ui dimmer".
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Size'
      description='Loaders can have different sizes'
      examplePath='elements/Loader/Variations/Sizes'
    />

    <ComponentExample
      title='Inverted'
      description='Loaders can have their colors inverted.'
      examplePath='elements/Loader/Variations/Inverted'
    />

    <ComponentExample
      title='Inverted'
      description='Loaders can have their colors inverted.'
      examplePath='elements/Loader/Variations/SizesInverted'
    >
      <Message>
        Loaders will automatically be inverted inside "inverted dimmer".
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default LoaderExamples
