import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const LoaderTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Loader'
      description='A loader.'
      examplePath='elements/Loader/Types/LoaderExampleLoader'
    >
      <Message info>
        Loaders are hidden unless has prop <code>active</code> or inside an <code>Dimmer active</code>.
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Text Loader'
      description='A loader can contain text.'
      examplePath='elements/Loader/Types/LoaderExampleText'
    />
    <ComponentExample
      description='A loader can contain text with shorthand prop.'
      examplePath='elements/Loader/Types/LoaderExampleTextShorthand'
    />
  </ExampleSection>
)

export default LoaderTypesExamples
