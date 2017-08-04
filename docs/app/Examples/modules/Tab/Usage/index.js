import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TabUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Active Index'
      description='A tab can be a controlled component.'
      examplePath='modules/Tab/Usage/TabExampleActiveIndex'
    />
    <ComponentExample
      title='Default Active Index'
      description='A tab can define which pane is active by default.'
      examplePath='modules/Tab/Usage/TabExampleDefaultActiveIndex'
    />
    <ComponentExample
      title='On Tab Change'
      description='You can capture the tab change event.'
      examplePath='modules/Tab/Usage/TabExampleOnTabChange'
    />
    <ComponentExample
      title='Custom Menu Items'
      description='You can pass any shorthand value as a menu item.'
      examplePath='modules/Tab/Usage/TabExampleCustomMenuItem'
    />
  </ExampleSection>
)

export default TabUsageExamples
