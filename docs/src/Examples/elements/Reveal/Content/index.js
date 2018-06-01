import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RevealContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Visible Content'
      description='A reveal may contain content that is visible before interaction.'
      examplePath='elements/Reveal/Content/RevealExampleVisible'
    />
    <ComponentExample
      title='Hidden Content'
      description='A reveal may contain content that is hidden before user interaction.'
      examplePath='elements/Reveal/Content/RevealExampleHidden'
    />
  </ExampleSection>
)

export default RevealContentExamples
