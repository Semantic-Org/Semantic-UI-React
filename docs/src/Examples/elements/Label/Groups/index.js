import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const LabelGroups = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Group Size'
      description='Labels can share sizes together'
      examplePath='elements/Label/Groups/LabelExampleGroupSize'
    />
    <ComponentExample
      title='Colored Group'
      description='Labels can share colors together'
      examplePath='elements/Label/Groups/LabelExampleGroupColored'
    />
    <ComponentExample
      title='Tag Group'
      description='Labels can share tag formatting'
      examplePath='elements/Label/Groups/LabelExampleGroupTag'
    />
    <ComponentExample
      title='Circular Group'
      description='Labels can share shapes'
      examplePath='elements/Label/Groups/LabelExampleGroupCircular'
    />
  </ExampleSection>
)

export default LabelGroups
