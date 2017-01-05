import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const IconGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Icons'
      description='Several icons can be used together as a group.'
      examplePath='elements/Icon/Groups/IconExampleIconGroup'
    />
    <ComponentExample
      examplePath='elements/Icon/Groups/IconExampleLoadingGroup'
    />
    <ComponentExample
      title='Corner Icon'
      description='A group of icons can display a smaller corner icon.'
      examplePath='elements/Icon/Groups/IconExampleCornerGroup'
    />
    <ComponentExample
      examplePath='elements/Icon/Groups/IconExampleTwitterGroup'
    />
  </ExampleSection>
)

export default IconGroupsExamples
