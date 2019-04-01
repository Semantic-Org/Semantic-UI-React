import React from 'react'
import { Button, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Offset'
      description='A popup position can be offset from its position.'
      examplePath='modules/Popup/Variations/PopupExampleOffset'
    >
      <Message info>
        <p>
          We are using Popper.js for positioning, so you can use the{' '}
          <code>offset</code> prop as it described in their docs. Accepts the
          following units:
        </p>
        <Message.List>
          <Message.Item>
            <code>px</code> or unit-less, interpreted as pixels
          </Message.Item>
          <Message.Item>
            <code>%</code>, percentage relative to the length of the trigger
            element
          </Message.Item>
          <Message.Item>
            <code>%p</code>, percentage relative to the length of the popup
            element
          </Message.Item>
          <Message.Item>
            <code>vw</code>, CSS viewport width unit
          </Message.Item>
          <Message.Item>
            <code>vh</code>, CSS viewport height unit
          </Message.Item>
        </Message.List>
      </Message>
      <Button
        content='Popper.JS: offset'
        href='https://popper.js.org/popper-documentation.html#modifiers..offset'
        icon='book'
        target='_blank'
      />
    </ComponentExample>
    <ComponentExample
      title='Actions'
      description='A popup can be triggered on hover, click, focus or multiple actions.'
      examplePath='modules/Popup/Usage/PopupExampleActions'
    />
    <ComponentExample
      title='Nesting'
      description='A popup can be nested inside another.'
      examplePath='modules/Popup/Usage/PopupExampleNested'
    />
    <ComponentExample
      title='Controlled'
      description='A popup can have its visibility controlled from outside.'
      examplePath='modules/Popup/Usage/PopupExampleControlled'
    />
    <ComponentExample
      title='Context'
      description='A popup can open over a DOM node when using a trigger.'
      examplePath='modules/Popup/Usage/PopupExampleContext'
    />
    <ComponentExample
      description='A popup can open over a DOM node when controlled.'
      examplePath='modules/Popup/Usage/PopupExampleContextControlled'
    />
    <ComponentExample
      title='Hide on scroll'
      description='A popup can be hidden on a scroll event.'
      examplePath='modules/Popup/Variations/PopupExampleHideOnScroll'
    />
    <ComponentExample
      title='Default Open'
      description='A popup can appear open by default.'
      examplePath='modules/Popup/Usage/PopupExampleDefaultOpen'
      renderHtml={false}
    />
  </ExampleSection>
)

export default PopupUsageExamples
