import React from 'react'
import { Button, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PopupUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Offset'
      description='A popup position can be offset from its position.'
      examplePath='modules/Popup/Usage/PopupExampleOffset'
    >
      <Message info>
        <p>
          We are using Popper.js for positioning, so you can use the{' '}
          <code>offset</code> prop as it described in{' '}
          <a
            href='https://popper.js.org/docs/v2/modifiers/offset/'
            rel='noreferrer'
            target='_blank'
          >
            their docs
          </a>
          . The basic offset accepts an array with two numbers in the form{' '}
          <code>[skidding, distance].</code>
        </p>
        <Message.List>
          <Message.Item>
            <code>skidding</code> displaces the <code>Popup</code> along the
            reference element
          </Message.Item>
          <Message.Item>
            <code>distance</code> displaces the <code>Popup</code> away from, or
            toward, the reference element in the direction of its placement. A
            positive number displaces it further away, while a negative number
            lets it overlap the reference
          </Message.Item>
        </Message.List>
      </Message>
      <Button
        content='Popper.JS: offset'
        href='https://popper.js.org/docs/v2/modifiers/offset/'
        icon='book'
        rel='noreferrer'
        target='_blank'
      />
    </ComponentExample>
    <ComponentExample
      title='Offset as a function'
      description='A popup position can accept computed offset via functions'
      examplePath='modules/Popup/Usage/PopupExampleOffsetFunction'
    >
      <Message>
        It's preferred to define <code>offset</code> as a tuple of values,
        however it's also possible to use functions for more complex scenarios.
        In this example, we are applying half the <code>Popup</code>'s height as
        margin between the two elements only when the popper is positioned below
        its reference element.
      </Message>
      <Button
        content='Popper.JS: offset'
        href='https://popper.js.org/docs/v2/modifiers/offset/'
        icon='book'
        rel='noreferrer'
        target='_blank'
      />
    </ComponentExample>
    <ComponentExample
      title={<code>eventsEnabled</code>}
      description={
        <span>
          Enables the <code>Popper.js</code> event listeners.
        </span>
      }
      examplePath='modules/Popup/Usage/PopupExampleEventsEnabled'
    />
    <ComponentExample
      title='Popper Dependencies'
      description={
        <span>
          A popup can have dependencies which update will schedule a position
          update. Should be used in cases when content is changing, behaves like{' '}
          <a
            href='https://reactjs.org/docs/hooks-reference.html#conditionally-firing-an-effect'
            rel='noopener noreferrer'
            target='_blank'
          >
            <code>dependencies</code>
          </a>{' '}
          in React Hooks.
        </span>
      }
      examplePath='modules/Popup/Usage/PopupExamplePopperDependencies'
      renderHtml={false}
    />
    <ComponentExample
      title={
        <>
          <code>popper</code> element
        </>
      }
      description={
        <>
          From <code>semantic-ui-react@2.0.0</code> we are using an additional
          wrapping element around <code>Popup</code> for positioning, see{' '}
          <a href='https://github.com/Semantic-Org/Semantic-UI-React/pull/3947'>
            Semantic-Org/Semantic-UI-React#3947
          </a>{' '}
          for more details. To pass props to this element <code>popper</code>{' '}
          shorthand can be used.
        </>
      }
      examplePath='modules/Popup/Usage/PopupExamplePopper'
    />
    <ComponentExample
      title={
        <>
          Positioning via <code>position: fixed</code>
        </>
      }
      description={
        <>
          If your reference element is in a <code>fixed</code> container, use{' '}
          <code>positionFixed</code>. This will prevent any jumpiness since no
          repositioning is needed.
        </>
      }
      examplePath='modules/Popup/Usage/PopupExamplePositionFixed'
    />
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
      title='Context Menu'
      description='A popup can open over a DOM node as used as a context menu.'
      examplePath='modules/Popup/Usage/PopupExampleContextMenu'
    />
    <ComponentExample
      title='Hide on scroll'
      description='A popup can be hidden on a scroll event.'
      examplePath='modules/Popup/Usage/PopupExampleHideOnScroll'
    />
    <ComponentExample
      title='Default Open'
      description='A popup can appear open by default.'
      examplePath='modules/Popup/Usage/PopupExampleDefaultOpen'
      renderHtml={false}
    />
    <ComponentExample
      title='Delay'
      description='A popup can have delay in showing and hiding. This avoids accidental popup visibility.'
      examplePath='modules/Popup/Usage/PopupExampleDelay'
    />
  </ExampleSection>
)

export default PopupUsageExamples
