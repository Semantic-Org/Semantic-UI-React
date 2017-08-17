import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TabTypesExamples = () => (
  <ExampleSection title='Types'>
    <Message info>
      <Message.Header>
        <code>Tab</code> component implements two different behaviours
      </Message.Header>
      <Message.List>
        <Message.Item>
          <code>renderActiveOnly={'{true}'}</code> - default behaviour, in this case only active pane will be rendered.
          Can cause problems with <code>state</code> of inactive panes.
        </Message.Item>
        <Message.Item>
          <code>renderActiveOnly={'{false}'}</code> - all panes will be rendered with all their children.
        </Message.Item>
      </Message.List>
    </Message>

    <ComponentExample
      title='Basic'
      description='A basic tab.'
      examplePath='modules/Tab/Types/TabExampleBasic'
    />
    <ComponentExample
      description={<span>A basic tab using <code>renderActiveOnly={'{false}'}</code>.</span>}
      examplePath='modules/Tab/Types/TabExampleBasicAll'
    />
    <ComponentExample
      title='Pointing Menu'
      description='A tab menu can point to its tab panes.'
      examplePath='modules/Tab/Types/TabExamplePointing'
    />
    <ComponentExample
      examplePath='modules/Tab/Types/TabExampleSecondaryPointing'
    />
    <ComponentExample
      title='Secondary Menu'
      description='A tab menu can adjust its appearance to de-emphasize its contents.'
      examplePath='modules/Tab/Types/TabExampleSecondary'
    />
    <ComponentExample
      title='Text Menu'
      description='A tab menu can be formatted for text content.'
      examplePath='modules/Tab/Types/TabExampleText'
    />
  </ExampleSection>
)

export default TabTypesExamples
