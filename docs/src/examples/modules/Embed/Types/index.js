import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const EmbedTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='YouTube'
      description='An embed can be used to display YouTube Content.'
      examplePath='modules/Embed/Types/EmbedExampleYoutube'
    />
    <ComponentExample
      title='Vimeo'
      description='An embed can be used to display Vimeo content.'
      examplePath='modules/Embed/Types/EmbedExampleVimeo'
    />
    <ComponentExample
      title='Custom Content'
      description='An embed can display any web content.'
      examplePath='modules/Embed/Types/EmbedExampleCustom'
    >
      <Message info>
        Embeds use an intrinsic aspect ratios to embed content responsively.
        Content will preserve their intrinsic aspect ratio for all browser sizes
        responsively
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default EmbedTypesExamples
