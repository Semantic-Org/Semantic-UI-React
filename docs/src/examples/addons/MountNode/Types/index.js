import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const MountNodeTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='MountNode'
      description={<span>A component allows to set <code>className</code> to a DOM node.</span>}
      examplePath='addons/MountNode/Types/MountNodeExampleMountNode'
    />
  </ExampleSection>
)

export default MountNodeTypesExamples
