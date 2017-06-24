import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const UniversalInputUsage = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Controlled'
      description='An input can be controlled.'
      examplePath='addons/UniversalInput/Usage/UniversalInputExampleControlled'
    />
    <ComponentExample
      title='onComposed'
      description='A component provides an onCompose event.'
      examplePath='addons/UniversalInput/Usage/UniversalInputExampleOnCompose'
    />
  </ExampleSection>
)

export default UniversalInputUsage
