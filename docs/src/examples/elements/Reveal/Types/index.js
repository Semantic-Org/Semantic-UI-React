import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RevealTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Fade'
      description='An element can disappear to reveal content below.'
      examplePath='elements/Reveal/Types/RevealExampleFade'
    />
    <ComponentExample examplePath='elements/Reveal/Types/RevealExampleFadeSmall' />

    <ComponentExample
      title='Move'
      description='An element can move in a direction to reveal content.'
      examplePath='elements/Reveal/Types/RevealExampleMove'
    />
    <ComponentExample examplePath='elements/Reveal/Types/RevealExampleMoveRight' />
    <ComponentExample examplePath='elements/Reveal/Types/RevealExampleMoveUp' />
    <ComponentExample examplePath='elements/Reveal/Types/RevealExampleMoveDown' />

    <ComponentExample
      title='Rotate'
      description='An element can rotate to reveal content below.'
      examplePath='elements/Reveal/Types/RevealExampleRotate'
    />
    <ComponentExample examplePath='elements/Reveal/Types/RevealExampleRotateLeft' />
  </ExampleSection>
)

export default RevealTypesExamples
