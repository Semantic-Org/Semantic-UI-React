import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

import { Message } from 'semantic-ui-react'

const TabMenuVariationsExamples = () => (
  <ExampleSection title='Menu Variations'>
    <ComponentExample
      title='Attached'
      description='A tab menu can be attached on bottom.'
      examplePath='modules/Tab/MenuVariations/TabExampleAttachedBottom'
    />
    <ComponentExample
      description='A tab menu can remove its attached appearance.'
      examplePath='modules/Tab/MenuVariations/TabExampleAttachedFalse'
    />
    <ComponentExample
      title='Not Tabular'
      description='A tab menu can disable its tabular appearance.'
      examplePath='modules/Tab/MenuVariations/TabExampleTabularFalse'
    />
    <ComponentExample
      title='Borderless'
      description='A tab menu can remove its borders.'
      examplePath='modules/Tab/MenuVariations/TabExampleBorderless'
    />
    <ComponentExample
      title='Colored'
      description='A tab menu can be colored.'
      examplePath='modules/Tab/MenuVariations/TabExampleColored'
    >
      <Message
        info
        content='Color only applies to the menu, not the pane, so they look best not attached.'
      />
    </ComponentExample>
    <ComponentExample
      description='A tab menu can invert its colors.'
      examplePath='modules/Tab/MenuVariations/TabExampleColoredInverted'
    />
    <ComponentExample
      title='Vertical'
      description='A tab menu can be displayed in a vertical appearance.'
      examplePath='modules/Tab/MenuVariations/TabExampleVerticalTrue'
    />
  </ExampleSection>
)

export default TabMenuVariationsExamples
