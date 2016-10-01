import React from 'react'
import { Message } from 'stardust'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const LoaderTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Loader'
      description='A loader'
      examplePath='elements/Loader/Types/LoaderExampleBasic'
    >
      <Message info>
        Loaders are hidden unless has prop "active" or inside an "active dimmer".
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Text Loader'
      description='A loader can contain text'
      examplePath='elements/Loader/Types/LoaderExampleText'
    />
    <ComponentExample
      description='A loader can contain text with shorthand prop'
      examplePath='elements/Loader/Types/LoaderExampleTextProp'
    />
  </ExampleSection>
)

export default LoaderTypesExamples
