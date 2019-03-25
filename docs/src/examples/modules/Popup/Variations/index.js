import React from 'react'
import { Button, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Basic'
      description='A popup can provide more basic formatting.'
      examplePath='modules/Popup/Variations/PopupExampleBasic'
    />
    <ComponentExample
      title='Wide'
      description='A popup can be extra wide to allow for longer content.'
      examplePath='modules/Popup/Variations/PopupExampleWide'
    />
    <ComponentExample
      title='Size'
      description='A popup can vary in size.'
      examplePath='modules/Popup/Variations/PopupExampleSize'
    />
    <ComponentExample
      title='Flowing'
      description='A popup can have no maximum width and continue to flow to fit its content.'
      examplePath='modules/Popup/Variations/PopupExampleFlowing'
    />
    <ComponentExample
      title='Inverted'
      description='A popup can have its colors inverted.'
      examplePath='modules/Popup/Variations/PopupExampleInverted'
    />
    <ComponentExample
      title='Position'
      description='A popup can be position around its trigger.'
      examplePath='modules/Popup/Variations/PopupExamplePosition'
    />
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
      title='Style'
      description='A popup accepts custom styles.'
      examplePath='modules/Popup/Variations/PopupExampleStyle'
    />
    <ComponentExample
      title='Hide on scroll'
      description='A popup can be hidden on a scroll event.'
      examplePath='modules/Popup/Variations/PopupExampleHideOnScroll'
    />
  </ExampleSection>
)

export default PopupVariationsExamples
