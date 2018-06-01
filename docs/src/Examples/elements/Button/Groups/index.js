import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const ButtonGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Group'
      description='Buttons can exist together as a group.'
      examplePath='elements/Button/Groups/ButtonExampleGroup'
    />
    <ShorthandExample examplePath='elements/Button/Groups/ButtonExampleGroupShorthand' />

    <ComponentExample
      title='Icon Group'
      description='Button groups can show groups of icons.'
      examplePath='elements/Button/Groups/ButtonExampleGroupIcon'
    />
    <ShorthandExample examplePath='elements/Button/Groups/ButtonExampleGroupIconShorthand' />
  </ExampleSection>
)

export default ButtonGroupsExamples
