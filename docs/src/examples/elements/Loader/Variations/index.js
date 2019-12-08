import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const LoaderVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Inline'
      description='Loaders can appear inline with content.'
      examplePath='elements/Loader/Variations/LoaderExampleInline'
    />

    <ComponentExample
      title='Inline Center'
      description='Loaders can appear inline centered with content.'
      examplePath='elements/Loader/Variations/LoaderExampleInlineCentered'
    />

    <ComponentExample
      title='Size'
      description='Loaders can have different sizes.'
      examplePath='elements/Loader/Variations/LoaderExampleSizes'
    />

    <ComponentExample
      title='Inverted'
      description='Loaders can have their colors inverted.'
      examplePath='elements/Loader/Variations/LoaderExampleInverted'
    />

    <ComponentExample
      title='Inverted'
      description='Loaders can have their colors inverted.'
      examplePath='elements/Loader/Variations/LoaderExampleSizesInverted'
    >
      <Message info>
        Loaders will automatically be inverted inside{' '}
        <code>inverted Dimmer</code>.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default LoaderVariationsExamples
