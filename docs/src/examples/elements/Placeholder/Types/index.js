import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PlaceholderTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Placeholder'
      description='A placeholder is used to reserve space for content that soon will appear in a layout.'
      examplePath='elements/Placeholder/Types/PlaceholderExamplePlaceholder'
      suiVersion='2.4.0'
    >
      <Message info>
        Placeholders can include <code>PlaceholderParagraph</code>,{' '}
        <code>PlaceholderHeader</code>, and <code>PlaceholderImage</code> to let
        you format the loaders to emulate the content being loaded.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='elements/Placeholder/Types/PlaceholderExampleGrid' />
    <ComponentExample examplePath='elements/Placeholder/Types/PlaceholderExampleCard' />
  </ExampleSection>
)

export default PlaceholderTypesExamples
