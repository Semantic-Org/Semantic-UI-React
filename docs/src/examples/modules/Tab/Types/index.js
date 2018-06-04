import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TabTypesExamples = () => (
  <ExampleSection title='Types'>
    <Message info>
      <Message.Header>
        Controlling <code>Tab</code> pane re-renders
      </Message.Header>
      <Message.List>
        <Message.Item>
          <code>renderActiveOnly</code> (default) Only the active pane is rendered.
          Switching tabs unmounts the current pane and mounts the new pane.
        </Message.Item>
        <Message.Item>
          <code>renderActiveOnly={'{false}'}</code> All panes are rendered on Tab mount.
          Switching tabs hides the current pane and shows the new pane, without unmounting panes.
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
