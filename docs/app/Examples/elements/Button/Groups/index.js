import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Group'
      description='Buttons can exist together as a group.'
      examplePath='elements/Button/Groups/ButtonExampleGroup'
    />
    <ComponentExample
      title='Icon Group'
      description='Button groups can show groups of icons.'
      examplePath='elements/Button/Groups/ButtonExampleGroupIcon'
    />
  </ExampleSection>
)

export default ButtonGroupsExamples
